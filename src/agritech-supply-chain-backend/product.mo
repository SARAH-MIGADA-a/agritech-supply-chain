// src/backend/product.mo

import Array "mo:base/Array";
import Hash "mo:base/Hash";
import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Option "mo:base/Option";
import Principal "mo:base/Principal";
import Time "mo:base/Time";
import Types "types";

actor class ProductManager() {
    private stable var nextProductId: Nat = 0;
    private var products = HashMap.HashMap<Types.ProductId, Types.Product>(0, Nat.equal, Hash.hash);

    // Create a new product
    public shared(msg) func createProduct(
        name: Text,
        quantity: Nat,
        price: Nat,
        location: Text,
        description: Text,
        category: Text,
        fertilizers: [Text],
        certifications: [Text],
        qualityMetrics: Types.QualityMetrics
    ): async Types.ProductId {
        let product: Types.Product = {
            id = nextProductId;
            name = name;
            farmerId = msg.caller;
            quantity = quantity;
            price = price;
            productionDate = Time.now();
            location = location;
            description = description;
            category = category;
            fertilizers = fertilizers;
            certifications = certifications;
            status = #Listed;
            qualityMetrics = qualityMetrics;
        };

        products.put(nextProductId, product);
        nextProductId += 1;
        nextProductId - 1
    };

    // Get product by ID
    public query func getProduct(productId: Types.ProductId): async ?Types.Product {
        products.get(productId)
    };

    // Update product details
    public shared(msg) func updateProduct(
        productId: Types.ProductId,
        quantity: ?Nat,
        price: ?Nat,
        description: ?Text,
        certifications: ?[Text]
    ): async Bool {
        switch (products.get(productId)) {
            case null { false };
            case (?product) {
                if (product.farmerId != msg.caller) {
                    return false;
                };

                let updatedProduct: Types.Product = {
                    id = product.id;
                    name = product.name;
                    farmerId = product.farmerId;
                    quantity = Option.get(quantity, product.quantity);
                    price = Option.get(price, product.price);
                    productionDate = product.productionDate;
                    location = product.location;
                    description = Option.get(description, product.description);
                    category = product.category;
                    fertilizers = product.fertilizers;
                    certifications = Option.get(certifications, product.certifications);
                    status = product.status;
                    qualityMetrics = product.qualityMetrics;
                };

                products.put(productId, updatedProduct);
                true
            };
        }
    };

    // List all products
    public query func getAllProducts(): async [Types.Product] {
        var productList: [Types.Product] = [];
        for ((id, product) in products.entries()) {
            productList := Array.append(productList, [product]);
        };
        productList
    };

    // Search products by category
    public query func searchProductsByCategory(category: Text): async [Types.Product] {
        var results: [Types.Product] = [];
        for ((id, product) in products.entries()) {
            if (product.category == category) {
                results := Array.append(results, [product]);
            };
        };
        results
    };

    // Update product status
    public shared(msg) func updateProductStatus(
        productId: Types.ProductId,
        newStatus: Types.ProductStatus
    ): async Bool {
        switch (products.get(productId)) {
            case null { false };
            case (?product) {
                if (product.farmerId != msg.caller) {
                    return false;
                };

                let updatedProduct: Types.Product = {
                    product with status = newStatus;
                };

                products.put(productId, updatedProduct);
                true
            };
        }
    };
};