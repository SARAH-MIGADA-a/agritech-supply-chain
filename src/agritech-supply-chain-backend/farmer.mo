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
        certifications: [Text],
        contactInfo: Types.ContactInfo,  // Add contactInfo parameter
        bankDetails: Types.BankDetails
    ): async Bool {
        let farmer: Types.Farmer = {
            id = msg.caller;
            name = name;
            location = location;
            contactInfo = contactInfo;  // Use the parameter
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

    // Rest of the code remains the same...
};