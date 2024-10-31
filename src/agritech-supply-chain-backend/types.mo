module {
    // Basic Types
    public type FarmerId = Text;
    public type ProductId = Text;
    public type BuyerId = Text;
    public type TransactionId = Text;
    public type LogisticsId = Text;

    // Quality Metrics
    public type QualityMetrics = {
        freshness : Nat;
        appearance : Nat;
        taste : Nat;
    };

    // Payment Details
    public type PaymentDetails = {
        method : Text;
        amount : Nat;
        status : Text;
    };

    // Farmer Type
    public type Farmer = {
        name : Text;
        location : Text;
        products : [ProductId];
        certifications : [Text];
        rating : Nat;
    };

    // Product Type
    public type Product = {
        id : ProductId;
        name : Text;
        description : Text;
        category : Text;
        quantity : Nat;
        price : Nat;
        farmerId : FarmerId;
        location : Text;
        qualityMetrics : QualityMetrics;
        certifications : [Text];
        timestamp : Int;
    };

    // Buyer Type
    public type Buyer = {
        id : BuyerId;
        name : Text;
        location : Text;
        purchaseHistory : [TransactionId];
    };

    // Transaction Type
    public type Transaction = {
        id : TransactionId;
        productId : ProductId;
        buyerId : BuyerId;
        quantity : Nat;
        payment : PaymentDetails;
        timestamp : Int;
        status : Text;
    };

    // Logistics Type
    public type Logistics = {
        id : LogisticsId;
        transactionId : TransactionId;
        status : Text;
        startLocation : Text;
        endLocation : Text;
        estimatedDelivery : Int;
        actualDelivery : ?Int;
        trackingDetails : [Text];
    };

    // Market Report Type
    public type MarketReport = {
        totalTransactions : Nat;
        totalVolume : Nat;
        averagePrice : Nat;
        topProducts : [(ProductId, Nat)];
        topFarmers : [(FarmerId, Nat)];
    };

    // System Status Type
    public type SystemStatus = {
        activeFarmers : Nat;
        activeProducts : Nat;
        pendingTransactions : Nat;
        activeLogistics : Nat;
        lastUpdate : Int;
    };
};