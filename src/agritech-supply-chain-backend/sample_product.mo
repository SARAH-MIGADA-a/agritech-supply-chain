import Nat "mo:base/Nat";
import Time "mo:base/Time";
import Principal "mo:base/Principal";

module SampleProduct {
    // Type aliases
    public type ProductId = Text;
    public type FarmerId = Principal;

    // QualityMetrics type definition
    public type QualityMetrics = {
        freshness: Nat;
        appearance: Nat;
        taste: Nat;
    };

    // ProductStatus type as an enum
    public type ProductStatus = {
        #available;
        #unavailable;
        #outOfSeason;
    };

    // Product type definition
    public type Product = {
        id: ProductId;
        name: Text;
        description: Text;
        category: Text;
        quantity: Nat;
        price: Nat;
        farmerId: FarmerId;
        location: Text;
        qualityMetrics: QualityMetrics;
        certifications: [Text];
        timestamp: Int;
        status: ProductStatus;
    };

    // Sample product data
    public let sampleProduct: Product = {
        id = "prod123";
        name = "Organic Tomatoes";
        description = "Fresh organic tomatoes";
        category = "Vegetables";
        quantity = 100;
        price = 50;
        farmerId = Principal.fromText("aaaa-bbbb-cccc-dddd"); // Ensure valid Principal format
        location = "Farm X";
        qualityMetrics = {
            freshness = 90;
            appearance = 85;
            taste = 88;
        };
        certifications = ["Organic Certification", "Fair Trade"];
        timestamp = Time.now();
        status = #available;
    };
}