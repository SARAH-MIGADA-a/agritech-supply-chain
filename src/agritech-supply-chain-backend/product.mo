import Text "mo:base/Text";
import Array "mo:base/Array";
import Buffer "mo:base/Buffer";
import Iter "mo:base/Iter";

actor Product {
    // Product types
    type ProductStatus = {
        #available;
        #inTransit;
        #delivered;
        #outOfStock;
    };

    type Product = {
        id: Text;
        name: Text;
        description: Text;
        price: Text;
        quantity: Text;
        status: ProductStatus;
        farmerId: Text;
        origin: Text;
    };

    // Store products
    private var products = Buffer.Buffer<Product>(0);

    // Create a new product
    public shared(msg) func createProduct(
        id: Text,
        name: Text,
        description: Text,
        price: Text,
        quantity: Text,
        status: ProductStatus,
        farmerId: Text,
        origin: Text
    ) : async Product {
        let newProduct : Product = {
            id;
            name;
            description;
            price;
            quantity;
            status;
            farmerId;
            origin;
        };
        
        products.add(newProduct);
        return newProduct;
    };

    // Get all products
    public query func getAllProducts() : async [Product] {
        return Buffer.toArray(products);
    };

    // Update product status
    public shared(msg) func updateProductStatus(id: Text, newStatus: ProductStatus) : async Bool {
        var found = false;
        let size = products.size();
        
        for (i in Iter.range(0, size - 1)) {
            let product = products.get(i);
            if (product.id == id) {
                let updatedProduct : Product = {
                    id = product.id;
                    name = product.name;
                    description = product.description;
                    price = product.price;
                    quantity = product.quantity;
                    status = newStatus;
                    farmerId = product.farmerId;
                    origin = product.origin;
                };
                products.put(i, updatedProduct);
                found := true;
                break;
            };
        };
        
        return found;
    };

    // Get product by ID
    public query func getProduct(id: Text) : async ?Product {
        let productArray = Buffer.toArray(products);
        for (product in productArray.vals()) {
            if (product.id == id) {
                return ?product;
            };
        };
        return null;
    };
}