module {
    // Basic Types
    public type FarmerId = Principal;
    public type ProductId = Text;
    public type BuyerId = Text;
    public type TransactionId = Text;
    public type LogisticsId = Text;
    public type OrderId = Text;

    // Contact Information
    public type ContactInfo = {
        phone : Text;
        email : Text;
        address : Text;
    };

    // Bank Details
    public type BankDetails = {
        bankName : Text;
        accountNumber : Text;
        accountHolder : Text;
    };

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

    // Logistics Types
    public type LogisticsStatus = {
        #pending;
        #inTransit;
        #delivered;
        #cancelled;
    };

    public type LogisticsInfo = {
        providerName : Text;
        vehicleType : Text;
        vehicleId : Text;
        capacity : Nat;
        availabilityStatus : Text;
    };

    public type Logistics = {
        id : LogisticsId;
        provider : Principal;
        startLocation : Text;
        endLocation : Text;
        estimatedDelivery : Int;
        actualDelivery : ?Int;
        status : LogisticsStatus;
        trackingDetails : [Text];
        transactionId : TransactionId;
        logisticsInfo : LogisticsInfo;
    };

    // Farmer Type
    public type Farmer = {
        id : FarmerId;
        name : Text;
        location : Text;
        contactInfo : ContactInfo;
        products : [ProductId];
        rating : Nat;
        certifications : [Text];
        registrationDate : Int;
        bankDetails : BankDetails;
        activeOrders : [OrderId];
        completedOrders : [OrderId];
    };

    // Product Status Type
    public type ProductStatus = {
        #Listed;
        #Sold;
        #Pending;
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
        status : ProductStatus;  // Add this line
    };

    // Buyer Type
    public type Buyer = {
        id : BuyerId;
        name : Text;
        location : Text;
        purchaseHistory : [TransactionId];
        contactInfo : ContactInfo;
    };

    // Transaction Type
    public type Transaction = {
        id : TransactionId;
        productId : ProductId;
        buyerId : BuyerId;
        farmerId : FarmerId;
        quantity : Nat;
        payment : PaymentDetails;
        timestamp : Int;
        status : Text;
        logisticsId : ?LogisticsId;
    };

    // Market Report Type
    public type MarketReport = {
        totalTransactions : Nat;
        totalVolume : Nat;
        averagePrice : Nat;
        topProducts : [(ProductId, Nat)];
        topFarmers : [(FarmerId, Nat)];
        reportDate : Int;
    };

    // System Status Type
    public type SystemStatus = {
        activeFarmers : Nat;
        activeProducts : Nat;
        pendingTransactions : Nat;
        activeLogistics : Nat;
        lastUpdate : Int;
        systemHealth : Text;
    };

    // Order Status Type
    public type OrderStatus = {
        #pending;
        #processing;
        #shipped;
        #delivered;
        #cancelled;
    };

    // Order Type
    public type Order = {
        id : OrderId;
        buyerId : BuyerId;
        farmerId : FarmerId;
        products : [(ProductId, Nat)];
        totalAmount : Nat;
        status : OrderStatus;
        createdAt : Int;
        updatedAt : Int;
        deliveryAddress : Text;
        paymentDetails : PaymentDetails;
    };
};
