import Array "mo:base/Array";
import Float "mo:base/Float";
import HashMap "mo:base/HashMap";
import Int "mo:base/Int";
import Iter "mo:base/Iter";
import List "mo:base/List";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Time "mo:base/Time";
import Types "./types";

module {
    type Product = Types.Product;
    type Transaction = Types.Transaction;
    type Logistics = Types.Logistics;
    type QualityMetrics = Types.QualityMetrics;

    public type TransactionAnalytics = {
        totalTransactions : Nat;
        totalVolume : Nat;
        averageTransactionValue : Float;
        transactionsByStatus : HashMap.HashMap<Text, Nat>;
    };

    public type ProductAnalytics = {
        totalProducts : Nat;
        averagePrice : Float;
        categoryCounts : HashMap.HashMap<Text, Nat>;
        topCategories : [Text];
    };

    public func analyzeTransactions(transactions : [Transaction]) : TransactionAnalytics {
        var totalTransactions = transactions.size();
        var totalVolume = 0;
        var totalValue = 0;
        
        let statusMap = HashMap.HashMap<Text, Nat>(10, Text.equal, Text.hash);

        for (tx in transactions.vals()) {
            totalVolume += tx.quantity;
            totalValue += tx.payment.amount;

            let currentCount = switch (statusMap.get(tx.status)) {
                case null 0;
                case (?count) count;
            };
            statusMap.put(tx.status, currentCount + 1);
        };

        let avgValue = if (totalTransactions > 0) {
            Float.fromInt(totalValue) / Float.fromInt(totalTransactions);
        } else {
            0.0;
        };

        {
            totalTransactions;
            totalVolume;
            averageTransactionValue = avgValue;
            transactionsByStatus = statusMap;
        };
    };

    public func analyzeProducts(products : [Product]) : ProductAnalytics {
        var totalProducts = products.size();
        var totalPrice = 0;
        
        let categoryMap = HashMap.HashMap<Text, Nat>(10, Text.equal, Text.hash);

        for (product in products.vals()) {
            totalPrice += product.price;

            let currentCount = switch (categoryMap.get(product.category)) {
                case null 0;
                case (?count) count;
            };
            categoryMap.put(product.category, currentCount + 1);
        };

        let avgPrice = if (totalProducts > 0) {
            Float.fromInt(totalPrice) / Float.fromInt(totalProducts);
        } else {
            0.0;
        };

        // Convert category map to sorted array of categories
        let categories = Array.tabulate<Text>(
            categoryMap.size(),
            func(i) : Text {
                var maxCount = 0;
                var maxCategory = "";
                for ((category, count) in categoryMap.entries()) {
                    if (count > maxCount) {
                        maxCount := count;
                        maxCategory := category;
                    };
                };
                maxCategory;
            }
        );

        {
            totalProducts;
            averagePrice = avgPrice;
            categoryCounts = categoryMap;
            topCategories = categories;
        };
    };

    public func calculateQualityScore(metrics : QualityMetrics) : Float {
        let totalScore = metrics.freshness + metrics.appearance + metrics.taste;
        Float.fromInt(totalScore) / 3.0;
    };

    public func analyzeLogistics(logistics : [Logistics]) : [(Text, Nat)] {
        let statusMap = HashMap.HashMap<Text, Nat>(10, Text.equal, Text.hash);

        for (log in logistics.vals()) {
            let currentCount = switch (statusMap.get(log.status)) {
                case null 0;
                case (?count) count;
            };
            statusMap.put(log.status, currentCount + 1);
        };

        let statuses = Array.tabulate<(Text, Nat)>(
            statusMap.size(),
            func(i) : (Text, Nat) {
                var maxCount = 0;
                var maxStatus = "";
                for ((status, count) in statusMap.entries()) {
                    if (count > maxCount) {
                        maxCount := count;
                        maxStatus := status;
                    };
                };
                (maxStatus, maxCount);
            }
        );

        statuses;
    };
};