// src/backend/farmer.mo

import Array "mo:base/Array";
import Hash "mo:base/Hash";
import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Option "mo:base/Option";
import Principal "mo:base/Principal";
import Time "mo:base/Time";
import Types "types";

actor class FarmerManager() {
    private var farmers = HashMap.HashMap<Types.FarmerId, Types.Farmer>(0, Principal.equal, Principal.hash);

    // Register new farmer
    public shared(msg) func registerFarmer(
        name: Text,
        location: Text,
        contactInfo: Types.ContactInfo,
        certifications: [Text],
        bankDetails: Types.BankDetails
    ): async Bool {
        let farmer: Types.Farmer = {
            id = msg.caller;
            name = name;
            location = location;
            contactInfo = contactInfo;
            products = [];
            rating = 0;
            certifications = certifications;
            registrationDate = Time.now();
            bankDetails = bankDetails;
            activeOrders = [];
            completedOrders = [];
        };

        farmers.put(msg.caller, farmer);
        true
    };

    // Get farmer profile
    public query func getFarmer(id: Types.FarmerId): async ?Types.Farmer {
        farmers.get(id)
    };

    // Update farmer profile
    public shared(msg) func updateFarmerProfile(
        name: ?Text,
        location: ?Text,
        contactInfo: ?Types.ContactInfo,
        certifications: ?[Text],
        bankDetails: ?Types.BankDetails
    ): async Bool {
        switch (farmers.get(msg.caller)) {
            case null { false };
            case (?farmer) {
                let updatedFarmer: Types.Farmer = {
                    id = farmer.id;
                    name = Option.get(name, farmer.name);
                    location = Option.get(location, farmer.location);
                    contactInfo = Option.get(contactInfo, farmer.contactInfo);
                    products = farmer.products;
                    rating = farmer.rating;
                    certifications = Option.get(certifications, farmer.certifications);
                    registrationDate = farmer.registrationDate;
                    bankDetails = Option.get(bankDetails, farmer.bankDetails);
                    activeOrders = farmer.activeOrders;
                    completedOrders = farmer.completedOrders;
                };

                farmers.put(msg.caller, updatedFarmer);
                true
            };
        }
    };

    // List all farmers
    public query func getAllFarmers(): async [Types.Farmer] {
        var farmerList: [Types.Farmer] = [];
        for ((id, farmer) in farmers.entries()) {
            farmerList := Array.append(farmerList, [farmer]);
        };
        farmerList
    };

    // Add product to farmer's list
    public shared(msg) func addProductToFarmer(productId: Types.ProductId): async Bool {
        switch (farmers.get(msg.caller)) {
            case null { false };
            case (?farmer) {
                let updatedProducts = Array.append(farmer.products, [productId]);
                let updatedFarmer: Types.Farmer = {
                    farmer with products = updatedProducts;
                };
                farmers.put(msg.caller, updatedFarmer);
                true
            };
        }
    };

    // Update farmer rating
    public func updateFarmerRating(farmerId: Types.FarmerId, newRating: Nat): async Bool {
        switch (farmers.get(farmerId)) {
            case null { false };
            case (?farmer) {
                let updatedFarmer: Types.Farmer = {
                    farmer with rating = newRating;
                };
                farmers.put(farmerId, updatedFarmer);
                true
            };
        }
    };

    // Add order to farmer's active orders
    public shared(msg) func addActiveOrder(orderId: Types.OrderId): async Bool {
        switch (farmers.get(msg.caller)) {
            case null { false };
            case (?farmer) {
                let updatedActiveOrders = Array.append(farmer.activeOrders, [orderId]);
                let updatedFarmer: Types.Farmer = {
                    farmer with activeOrders = updatedActiveOrders;
                };
                farmers.put(msg.caller, updatedFarmer);
                true
            };
        }
    };

    // Move order from active to completed
    public shared(msg) func completeOrder(orderId: Types.OrderId): async Bool {
        switch (farmers.get(msg.caller)) {
            case null { false };
            case (?farmer) {
                let updatedActiveOrders = Array.filter(farmer.activeOrders, func(id: Types.OrderId): Bool { id != orderId });
                let updatedCompletedOrders = Array.append(farmer.completedOrders, [orderId]);
                let updatedFarmer: Types.Farmer = {
                    farmer with
                    activeOrders = updatedActiveOrders;
                    completedOrders = updatedCompletedOrders;
                };
                farmers.put(msg.caller, updatedFarmer);
                true
            };
        }
    };
};