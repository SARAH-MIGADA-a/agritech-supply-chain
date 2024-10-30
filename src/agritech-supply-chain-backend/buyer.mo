// src/backend/buyer.mo

import Array "mo:base/Array";
import Hash "mo:base/Hash";
import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Option "mo:base/Option";
import Principal "mo:base/Principal";
import Time "mo:base/Time";
import Types "types";

actor class BuyerManager() {
    private var buyers = HashMap.HashMap<Types.BuyerId, Types.Buyer>(0, Principal.equal, Principal.hash);

    // Register new buyer
    public shared(msg) func registerBuyer(
        name: Text,
        location: Text,
        contactInfo: Types.ContactInfo,
        preferences: Types.BuyerPreferences
    ): async Bool {
        let buyer: Types.Buyer = {
            id = msg.caller;
            name = name;
            location = location;
            contactInfo = contactInfo;
            purchaseHistory = [];
            rating = 0;
            preferences = preferences;
            paymentHistory = [];
        };

        buyers.put(msg.caller, buyer);
        true
    };

    // Get buyer profile
    public query func getBuyer(id: Types.BuyerId): async ?Types.Buyer {
        buyers.get(id)
    };

    // Update buyer profile
    public shared(msg) func updateBuyerProfile(
        name: ?Text,
        location: ?Text,
        contactInfo: ?Types.ContactInfo,
        preferences: ?Types.BuyerPreferences
    ): async Bool {
        switch (buyers.get(msg.caller)) {
            case null { false };
            case (?buyer) {
                let updatedBuyer: Types.Buyer = {
                    id = buyer.id;
                    name = Option.get(name, buyer.name);
                    location = Option.get(location, buyer.location);
                    contactInfo = Option.get(contactInfo, buyer.contactInfo);
                    purchaseHistory = buyer.purchaseHistory;
                    rating = buyer.rating;
                    preferences = Option.get(preferences, buyer.preferences);
                    paymentHistory = buyer.paymentHistory;
                };

                buyers.put(msg.caller, updatedBuyer);
                true
            };
        }
    };

    // Add transaction to purchase history
    public func addToPurchaseHistory(
        buyerId: Types.BuyerId,
        transactionId: Types.TransactionId
    ): async Bool {
        switch (buyers.get(buyerId)) {
            case null { false };
            case (?buyer) {
                let updatedHistory = Array.append(buyer.purchaseHistory, [transactionId]);
                let updatedBuyer: Types.Buyer = {
                    buyer with purchaseHistory = updatedHistory;
                };
                buyers.put(buyerId, updatedBuyer);
                true
            };
        }
    };

    // Add payment record
    public func addPaymentRecord(
        buyerId: Types.BuyerId,
        paymentRecord: Types.PaymentRecord
    ): async Bool {
        switch (buyers.get(buyerId)) {
            case null { false };
            case (?buyer) {
                let updatedPaymentHistory = Array.append(buyer.paymentHistory, [paymentRecord]);
                let updatedBuyer: Types.Buyer = {
                    buyer with paymentHistory = updatedPaymentHistory;
                };
                buyers.put(buyerId, updatedBuyer);
                true
            };
        }
    };

    // Update buyer rating
    public func updateBuyerRating(buyerId: Types.BuyerId, newRating: Nat): async Bool {
        switch (buyers.get(buyerId)) {
            case null { false };
            case (?buyer) {
                let updatedBuyer: Types.Buyer = {
                    buyer with rating = newRating;
                };
                buyers.put(buyerId, updatedBuyer);
                true
            };
        }
    };

    // Get buyers by location
    public query func getBuyersByLocation(location: Text): async [Types.Buyer] {
        var locationBuyers: [Types.Buyer] = [];
        for ((id, buyer) in buyers.entries()) {
            if (buyer.location == location) {
                locationBuyers := Array.append(locationBuyers, [buyer]);
            };
        };
        locationBuyers
    };
};