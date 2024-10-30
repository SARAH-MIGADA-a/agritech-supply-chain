// src/backend/types.mo

import Time "mo:base/Time";
import Principal "mo:base/Principal";

module {
    // IDs
    public type ProductId = Nat;
    public type FarmerId = Principal;
    public type BuyerId = Principal;
    public type TransactionId = Nat;
    public type LogisticsId = Nat;
    public type OrderId = Nat;

    // Product Types
    public type Product = {
        id: ProductId;
        name: Text;
        farmerId: FarmerId;
        quantity: Nat;
        price: Nat;
        productionDate: Time.Time;
        location: Text;
        description: Text;
        category: Text;
        fertilizers: [Text];
        certifications: [Text];
        status: ProductStatus;
        qualityMetrics: QualityMetrics;
        images: [Text];
        batchNumber: Text;
    };

    public type ProductStatus = {
        #Listed;
        #InTransaction;
        #Sold;
        #Delivered;
        #Cancelled;
    };

    // User Types
    public type Farmer = {
        id: FarmerId;
        name: Text;
        location: Text;
        contactInfo: ContactInfo;
        products: [ProductId];
        rating: Nat;
        certifications: [Text];
        registrationDate: Time.Time;
        bankDetails: BankDetails;
        activeOrders: [OrderId];
        completedOrders: [OrderId];
    };

    public type Buyer = {
        id: BuyerId;
        name: Text;
        location: Text;
        contactInfo: ContactInfo;
        purchaseHistory: [TransactionId];
        rating: Nat;
        preferences: BuyerPreferences;
        paymentHistory: [PaymentRecord];
    };

    // Transaction Types
    public type Transaction = {
        id: TransactionId;
        productId: ProductId;
        farmerId: FarmerId;
        buyerId: BuyerId;
        quantity: Nat;
        price: Nat;
        date: Time.Time;
        status: TransactionStatus;
        logisticsInfo: ?LogisticsInfo;
        paymentInfo: PaymentInfo;
        qualityCheck: ?QualityCheckResult;
    };

    public type TransactionStatus = {
        #Pending;
        #Confirmed;
        #InTransit;
        #Delivered;
        #Cancelled;
    };

    // Logistics Types
    public type LogisticsInfo = {
        id: LogisticsId;
        carrier: Text;
        trackingNumber: Text;
        origin: Text;
        destination: Text;
        expectedDelivery: Time.Time;
        status: LogisticsStatus;
        trackingHistory: [TrackingEvent];
        temperature: [TemperatureLog];
        transportType: Text;
        cost: Nat;
    };

    public type LogisticsStatus = {
        #Preparing;
        #InTransit;
        #Delivered;
        #Failed;
    };

    public type TrackingEvent = {
        timestamp: Time.Time;
        location: Text;
        status: Text;
        temperature: ?Float;
        humidity: ?Float;
        notes: Text;
    };

    // Quality Control Types
    public type QualityMetrics = {
        grade: Text;
        inspectionDate: Time.Time;
        inspector: Text;
        temperatureRequirements: Text;
        shelfLife: Text;
        certifications: [Text];
        nutrientContent: ?N