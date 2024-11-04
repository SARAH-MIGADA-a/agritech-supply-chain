import Array "mo:base/Array";
import Float "mo:base/Float";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";
import List "mo:base/List";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Time "mo:base/Time";
import Types "./types";
import Int "mo:base/Int";
import Buffer "mo:base/Buffer";

module {
    type Product = Types.Product;
    type Transaction = Types.Transaction;
    type Logistics = Types.Logistics;
    type QualityMetrics = Types.QualityMetrics;
    type LogisticsStatus = Types.LogisticsStatus;

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

    // Helper function to convert LogisticsStatus to Text
    private func logisticsStatusToText(status : LogisticsStatus) : Text {
        switch(status) {
            case (#pending) "pending";
            case (#inTransit) "inTransit";
            case (#delivered) "delivered";
            case (#cancelled) "cancelled";
        };
    };

    // Rest of your functions remain the same until analyzeLogistics

    public func analyzeLogistics(logistics : [Logistics]) : [(Text, Nat)] {
        let statusMap = HashMap.HashMap<Text, Nat>(10, Text.equal, Text.hash);

        for (log in logistics.vals()) {
            let statusText = logisticsStatusToText(log.status);
            let currentCount = switch (statusMap.get(statusText)) {
                case null 0;
                case (?count) count;
            };
            statusMap.put(statusText, currentCount + 1);
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