// src/backend/logistics.mo

import Array "mo:base/Array";
import Hash "mo:base/Hash";
import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Option "mo:base/Option";
import Principal "mo:base/Principal";
import Time "mo:base/Time";
import Types "types";

actor class LogisticsManager() {
    private stable var nextLogisticsId: Nat = 0;
    private var logisticsRecords = HashMap.HashMap<Types.LogisticsId, Types.LogisticsInfo>(0, Nat.equal, Hash.hash);

    // Create new logistics record
    public func createLogisticsRecord(
        carrier: Text,
        origin: Text,
        destination: Text,
        expectedDelivery: Time.Time,
        transportType: Text,
        cost: Nat
    ): async Types.LogisticsId {
        let logisticsInfo: Types.LogisticsInfo = {
            id = nextLogisticsId;
            carrier = carrier;
            trackingNumber = generateTrackingNumber(nextLogisticsId);
            origin = origin;
            destination = destination;
            expectedDelivery = expectedDelivery;
            status = #Preparing;
            trackingHistory = [];
            temperature = [];
            transportType = transportType;
            cost = cost;
        };

        logisticsRecords.put(nextLogisticsId, logisticsInfo);
        nextLogisticsId += 1;
        nextLogisticsId - 1
    };

    // Generate tracking number
    private func generateTrackingNumber(id: Nat): Text {
        "AGT" # Nat.toText(id) # "LC" # Nat.toText(Time.now())
    };

    // Get logistics record
    public query func getLogisticsRecord(id: Types.LogisticsId): async ?Types.LogisticsInfo {
        logisticsRecords.get(id)
    };

    // Update logistics status
    public func updateLogisticsStatus(
        id: Types.LogisticsId,
        newStatus: Types.LogisticsStatus
    ): async Bool {
        switch (logisticsRecords.get(id)) {
            case null { false };
            case (?record) {
                let updatedRecord: Types.LogisticsInfo = {
                    record with status = newStatus;
                };
                logisticsRecords.put(id, updatedRecord);
                true
            };
        }
    };

    // Add tracking event
    public func addTrackingEvent(
        id: Types.LogisticsId,
        location: Text,
        status: Text,
        temperature: ?Float,
        humidity: ?Float,
        notes: Text
    ): async Bool {
        switch (logisticsRecords.get(id)) {
            case null { false };
            case (?record) {
                let newEvent: Types.TrackingEvent = {
                    timestamp = Time.now();
                    location = location;
                    status = status;
                    temperature = temperature;
                    humidity = humidity;
                    notes = notes;
                };

                let updatedHistory = Array.append(record.trackingHistory, [newEvent]);
                let updatedRecord: Types.LogisticsInfo = {
                    record with trackingHistory = updatedHistory;
                };
                logisticsRecords.put(id, updatedRecord);
                true
            };
        }
    };

    // Add temperature log
    public func addTemperatureLog(
        id: Types.LogisticsId,
        temperature: Float,
        location: Text
    ): async Bool {
        switch (logisticsRecords.get(id)) {
            case null { false };
            case (?record) {
                let tempLog: Types.TemperatureLog = {
                    timestamp = Time.now();
                    temperature = temperature;
                    location = location;
                };

                let updatedTemps = Array.append(record.temperature, [tempLog]);
                let updatedRecord: Types.LogisticsInfo = {
                    record with temperature = updatedTemps;
                };
                logisticsRecords.put(id, updatedRecord);
                true
            };
        }
    };

    // Get all active shipments
    public query func getActiveShipments(): async [Types.LogisticsInfo] {
        var activeShipments: [Types.LogisticsInfo] = [];
        for ((id, record) in logisticsRecords.entries()) {
            switch (record.status) {
                case (#InTransit) {
                    activeShipments := Array.append(activeShipments, [record]);
                };
                case (_) {};
            };
        };
        activeShipments
    };
};