import Text "mo:base/Text";
import Int "mo:base/Int";
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
    private var logisticsRecords = HashMap.HashMap<Types.LogisticsId, Types.Logistics>(0, Text.equal, Text.hash);

    // Create new logistics record
    public func createLogisticsRecord(
        provider: Principal,
        startLocation: Text,
        endLocation: Text,
        estimatedDelivery: Int,
        providerName: Text,
        vehicleType: Text,
        vehicleId: Text,
        capacity: Nat,
        transactionId: Types.TransactionId
    ): async Types.LogisticsId {
        let logisticsId = nextLogisticsId;
        nextLogisticsId += 1;
        
        let logistics: Types.Logistics = {
            id = Int.toText(logisticsId);
            provider = provider;
            startLocation = startLocation;
            endLocation = endLocation;
            estimatedDelivery = estimatedDelivery;
            actualDelivery = null;
            status = #pending;
            trackingDetails = [];
            transactionId = transactionId;
            logisticsInfo = {
                providerName = providerName;
                vehicleType = vehicleType;
                vehicleId = vehicleId;
                capacity = capacity;
                availabilityStatus = "available";
            };
        };

        logisticsRecords.put(Int.toText(logisticsId), logistics);
        Int.toText(logisticsId)
    };

    // Get logistics record
    public query func getLogisticsRecord(id: Types.LogisticsId): async ?Types.Logistics {
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
                let updatedRecord: Types.Logistics = {
                    record with status = newStatus;
                };
                logisticsRecords.put(id, updatedRecord);
                true
            };
        }
    };

    // Add tracking detail
    public func addTrackingDetail(
        id: Types.LogisticsId,
        detail: Text
    ): async Bool {
        switch (logisticsRecords.get(id)) {
            case null { false };
            case (?record) {
                let updatedDetails = Array.append(record.trackingDetails, [detail]);
                let updatedRecord: Types.Logistics = {
                    record with trackingDetails = updatedDetails;
                };
                logisticsRecords.put(id, updatedRecord);
                true
            };
        }
    };

    // Complete delivery
    public func completeDelivery(
        id: Types.LogisticsId
    ): async Bool {
        switch (logisticsRecords.get(id)) {
            case null { false };
            case (?record) {
                let updatedRecord: Types.Logistics = {
                    record with
                    status = #delivered;
                    actualDelivery = ?Time.now();
                };
                logisticsRecords.put(id, updatedRecord);
                true
            };
        }
    };

    // Get all active shipments
    public query func getActiveShipments(): async [Types.Logistics] {
        var activeShipments: [Types.Logistics] = [];
        for ((_, record) in logisticsRecords.entries()) {
            switch (record.status) {
                case (#inTransit) {
                    activeShipments := Array.append(activeShipments, [record]);
                };
                case (_) {};
            };
        };
        activeShipments
    };

    // Get logistics by transaction
    public query func getLogisticsByTransaction(transactionId: Types.TransactionId): async ?Types.Logistics {
        for ((_, logistics) in logisticsRecords.entries()) {
            if (logistics.transactionId == transactionId) {
                return ?logistics;
            };
        };
        null
    };
};