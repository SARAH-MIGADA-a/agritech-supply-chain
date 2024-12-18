// src/backend/transaction.mo

import Array "mo:base/Array";
import Hash "mo:base/Hash";
import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Option "mo:base/Option";
import Principal "mo:base/Principal";
import Time "mo:base/Time";
import Types "types";

actor class TransactionManager() {
    private stable var nextTransactionId: Nat = 0;
    private var transactions = HashMap.HashMap<Types.TransactionId, Types.Transaction>(0, Nat.equal, Hash.hash);

    // Create new transaction
    public shared(msg) func createTransaction(
        productId: Types.ProductId,
        farmerId: Types.FarmerId,
        quantity: Nat,
        price: Nat,
        paymentInfo: Types.PaymentInfo
    ): async Types.TransactionId {
        let transaction: Types.Transaction = {
            id = nextTransactionId;
            productId = productId;
            farmerId = farmerId;
            buyerId = msg.caller;
            quantity = quantity;
            price = price;
            date = Time.now();
            status = #Pending;
            logisticsInfo = null;
            paymentInfo = paymentInfo;
            qualityCheck = null;
        };

        transactions.put(nextTransactionId, transaction);
        nextTransactionId += 1;
        nextTransactionId - 1
    };

    // Get transaction by ID
    public query func getTransaction(transactionId: Types.TransactionId): async ?Types.Transaction {
        transactions.get(transactionId)
    };

    // Update transaction status
    public shared(msg) func updateTransactionStatus(
        transactionId: Types.TransactionId,
        newStatus: Types.TransactionStatus
    ): async Bool {
        switch (transactions.get(transactionId)) {
            case null { false };
            case (?transaction) {
                if (transaction.buyerId != msg.caller and transaction.farmerId != msg.caller) {
                    return false;
                };

                let updatedTransaction: Types.Transaction = {
                    transaction with status = newStatus;
                };
                transactions.put(transactionId, updatedTransaction);
                true
            };
        }
    };

    // Add logistics info to transaction
    public func addLogisticsInfo(
        transactionId: Types.TransactionId,
        logisticsInfo: Types.LogisticsInfo
    ): async Bool {
        switch (transactions.get(transactionId)) {
            case null { false };
            case (?transaction) {
                let updatedTransaction: Types.Transaction = {
                    transaction with logisticsInfo = ?logisticsInfo;
                };
                transactions.put(transactionId, updatedTransaction);
                true
            };
        }
    };

    // Add quality check results
    public func addQualityCheck(
        transactionId: Types.TransactionId,
        qualityCheck: Types.QualityCheckResult
    ): async Bool {
        switch (transactions.get(transactionId)) {
            case null { false };
            case (?transaction) {
                let updatedTransaction: Types.Transaction = {
                    transaction with qualityCheck = ?qualityCheck;
                };
                transactions.put(transactionId, updatedTransaction);
                true
            };
        }
    };

    // Get all transactions for a buyer
    public query func getBuyerTransactions(buyerId: Types.BuyerId): async [Types.Transaction] {
        var buyerTransactions: [Types.Transaction] = [];
        for ((id, transaction) in transactions.entries()) {
            if (transaction.buyerId == buyerId) {
                buyerTransactions := Array.append(buyerTransactions, [transaction]);
            };
        };
        buyerTransactions
    };

    // Get all transactions for a farmer
    public query func getFarmerTransactions(farmerId: Types.FarmerId): async [Types.Transaction] {
        var farmerTransactions: [Types.Transaction] = [];
        for ((id, transaction) in transactions.entries()) {
            if (transaction.farmerId == farmerId) {
                farmerTransactions := Array.append(farmerTransactions, [transaction]);
            };
        };
        farmerTransactions
    };

    // Update payment information
    public func updatePaymentInfo(
        transactionId: Types.TransactionId,
        paymentInfo: Types.PaymentInfo
    ): async Bool {
        switch (transactions.get(transactionId)) {
            case null { false };
            case (?transaction) {
                let updatedTransaction: Types.Transaction = {
                    transaction with paymentInfo = paymentInfo;
                };
                transactions.put(transactionId, updatedTransaction);
                true
            };
        }
    };
};