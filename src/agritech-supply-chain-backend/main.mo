import Text "mo:base/Text";
import HashMap "mo:base/HashMap";
import Hash "mo:base/Hash";
import Nat "mo:base/Nat";
import Result "mo:base/Result";
import Buffer "mo:base/Buffer";
import Array "mo:base/Array";
import Iter "mo:base/Iter";
import Option "mo:base/Option";
import Time "mo:base/Time";
import Int "mo:base/Int";
import Principal "mo:base/Principal";

actor {
    // Type definitions
    public type Error = {
        #NotFound;
        #AlreadyExists;
        #NotAuthorized;
    };

    public type Buyer = {
        id: Text;
        name: Text;
        email: Text;
        phone: Text;
        address: Text;
        profilePic: Text;
        registrationDate: Text;
    };

    // Storage
    private let buyerStorage = HashMap.HashMap<Text, Buyer>(0, Text.equal, Text.hash);

    // Create buyer
    public shared func createBuyer(
        name: Text,
        email: Text,
        phone: Text,
        address: Text,
        profilePic: Text
    ) : async Result.Result<Buyer, Error> {
        let id = generateBuyerId();
        let registrationDate = generateTimestamp();
        
        let buyer : Buyer = {
            id;
            name;
            email;
            phone;
            address;
            profilePic;
            registrationDate;
        };

        switch (buyerStorage.get(id)) {
            case (?_) {
                #err(#AlreadyExists)
            };
            case null {
                buyerStorage.put(id, buyer);
                #ok(buyer)
            };
        }
    };

    // Update buyer
    public shared func updateBuyer(
        id: Text,
        name: ?Text,
        email: ?Text,
        phone: ?Text,
        address: ?Text,
        profilePic: ?Text
    ) : async Result.Result<Buyer, Error> {
        switch (buyerStorage.get(id)) {
            case (?existing) {
                let updatedBuyer : Buyer = {
                    id = existing.id;
                    name = Option.get(name, existing.name);
                    email = Option.get(email, existing.email);
                    phone = Option.get(phone, existing.phone);
                    address = Option.get(address, existing.address);
                    profilePic = Option.get(profilePic, existing.profilePic);
                    registrationDate = existing.registrationDate;
                };
                buyerStorage.put(id, updatedBuyer);
                #ok(updatedBuyer)
            };
            case null {
                #err(#NotFound)
            };
        }
    };

    // Get buyer
    public query func getBuyer(id: Text) : async Result.Result<Buyer, Error> {
        switch (buyerStorage.get(id)) {
            case (?buyer) {
                #ok(buyer)
            };
            case null {
                #err(#NotFound)
            };
        }
    };

    // Get all buyers
    public query func getAllBuyers() : async [Buyer] {
        let buyers = Buffer.Buffer<Buyer>(0);
        for ((_, buyer) in buyerStorage.entries()) {
            buyers.add(buyer);
        };
        Buffer.toArray(buyers)
    };

    // Delete buyer
    public shared func deleteBuyer(id: Text) : async Result.Result<(), Error> {
        switch (buyerStorage.get(id)) {
            case (?_) {
                buyerStorage.delete(id);
                #ok(())
            };
            case null {
                #err(#NotFound)
            };
        }
    };

    // Helper functions
    private func generateBuyerId() : Text {
        let timestamp = Int.toText(Time.now());
        "BUYER-" # timestamp
    };

    private func generateTimestamp() : Text {
        Int.toText(Time.now())
    };
}