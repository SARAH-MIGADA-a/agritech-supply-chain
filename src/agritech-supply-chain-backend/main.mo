// src/backend/main.mo

import Array "mo:base/Array";
import Hash "mo:base/Hash";
import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Principal "mo:base/Principal";
import Time "mo:base/Time";

actor {
    // Types
    type ProductId = Nat;
    type FarmerId = Principal;
    type BuyerId = Principal;
    
    type Product = {
        id: ProductId;
        name: Text;
        farmerId: FarmerId;
        quantity: Nat;
        price: Nat;
        productionDate: Time.Time;
        location: Text;
        fertilizers: [Text];
        certifications: [Text];
        status: Text;
    };

    type Farmer = {
        id: FarmerId;
        name: Text;
        location: Text;
        products: [ProductId];
        rating: Nat;
    };

    type Transaction = {
        productId: ProductId;
        farmerId: FarmerId;
        buyerId: BuyerId;
        quantity: Nat;
        price: Nat;
        date: Time.Time;
        status: Text;
    };

    // State variables
    private stable var nextProductId: Nat = 0;
    private var products = HashMap.HashMap<ProductId, Product>(0, Nat.equal, Hash.hash);
    private var farmers = HashMap.HashMap<FarmerId, Farmer>(0, Principal.equal, Principal.hash);
    private var transactions = HashMap.HashMap<Nat, Transaction>(0, Nat.equal, Hash.hash);

    // Product Management
    public shared(msg) func listProduct(
        name: Text,
        quantity: Nat,
        price: Nat,
        location: Text,
        fertilizers: [Text],
        certifications: [Text]
    ): async ProductId {
        let farmerId = msg.caller;
        let product: Product = {
            id = nextProductId;
            name = name;
            farmerId = farmerId;
            quantity = quantity;
            price = price;
            productionDate = Time.now();
            location = location;
            fertilizers = fertilizers;
            certifications = certifications;
            status = "LISTED";
        };
        
        products.put(nextProductId, product);
        nextProductId += 1;
        nextProductId - 1
    };

    public query func getProduct(productId: ProductId): async ?Product {
        products.get(productId)
    };

    // Farmer Management
    public shared(msg) func registerFarmer(name: Text, location: Text): async () {
        let farmer: Farmer = {
            id = msg.caller;
            name = name;
            location = location;
            products = [];
            rating = 0;
        };
        farmers.put(msg.caller, farmer);
    };

    public query func getFarmer(id: FarmerId): async ?Farmer {
        farmers.get(id)
    };

    // Transaction Management
    public shared(msg) func createTransaction(
        productId: ProductId,
        farmerId: FarmerId,
        quantity: Nat
    ): async Bool {
        switch (products.get(productId)) {
            case null { false };
            case (?product) {
                if (product.quantity < quantity) {
                    return false;
                };
                
                let transaction: Transaction = {
                    productId = productId;
                    farmerId = farmerId;
                    buyerId = msg.caller;
                    quantity = quantity;
                    price = product.price * quantity;
                    date = Time.now();
                    status = "PENDING";
                };
                
                transactions.put(nextProductId, transaction);
                true
            };
        }
    };
};