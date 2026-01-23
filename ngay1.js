// --- CÂU 1: Khai báo Constructor Function Product ---
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// --- CÂU 2: Khởi tạo mảng products (ít nhất 6 sp, 2 danh mục) ---
const products = [
    new Product(1, "iPhone 15", 30000000, 10, "Phone", true),
    new Product(2, "Samsung S24", 25000000, 5, "Phone", true),
    new Product(3, "Mouse Logitech", 500000, 0, "Accessories", false), // Hết hàng
    new Product(4, "Keyboard Keychron", 2000000, 3, "Accessories", true),
    new Product(5, "AirPods Pro", 5000000, 15, "Accessories", true),
    new Product(6, "Xiaomi Note", 8000000, 20, "Phone", true),
    new Product(7, "MacBook Pro", 45000000, 2, "Laptop", true)
];

console.log("--- Danh sách sản phẩm ban đầu ---");
console.log(products);

// --- CÂU 3: Tạo mảng mới chỉ chứa name và price ---
// Dùng .map() để biến đổi mảng
const nameAndPrice = products.map(p => {
    return { name: p.name, price: p.price };
});
console.log("\n--- Câu 3: Mảng name và price ---");
console.log(nameAndPrice);

// --- CÂU 4: Lọc sản phẩm còn hàng (quantity > 0) ---
// Dùng .filter()
const availableProducts = products.filter(p => p.quantity > 0);
console.log("\n--- Câu 4: Sản phẩm còn hàng ---");
console.log(availableProducts);

// --- CÂU 5: Kiểm tra có ít nhất 1 sp giá trên 30.000.000 ---
// Dùng .some() (trả về true/false)
const hasExpensiveProduct = products.some(p => p.price > 30000000);
console.log("\n--- Câu 5: Có sp trên 30tr không? ---");
console.log(hasExpensiveProduct); 

// --- CÂU 6: Kiểm tra TẤT CẢ sp danh mục "Accessories" có đang bán không ---
// Bước 1: Lọc ra Accessories trước
// Bước 2: Dùng .every() để kiểm tra
const accessories = products.filter(p => p.category === "Accessories");
const allAccessoriesAvailable = accessories.every(p => p.isAvailable === true);

console.log("\n--- Câu 6: Tất cả phụ kiện đều đang bán? ---");
console.log(allAccessoriesAvailable);

// --- CÂU 7: Tính tổng giá trị kho hàng (price * quantity) ---
// Dùng .reduce()
const totalInventoryValue = products.reduce((total, p) => {
    return total + (p.price * p.quantity);
}, 0); // 0 là giá trị khởi tạo ban đầu

console.log("\n--- Câu 7: Tổng giá trị kho hàng ---");
console.log(totalInventoryValue.toLocaleString('vi-VN') + " VNĐ");

// --- CÂU 8: Dùng for...of in ra Tên - Danh mục - Trạng thái ---
console.log("\n--- Câu 8: Duyệt mảng bằng for...of ---");
for (const p of products) {
    console.log(`${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`);
}

// --- CÂU 9: Dùng for...in ---
// for...in dùng để duyệt qua các KEY (thuộc tính) của một ĐỐI TƯỢNG.
// Ví dụ duyệt qua sản phẩm đầu tiên trong mảng
console.log("\n--- Câu 9: Duyệt thuộc tính sản phẩm đầu tiên bằng for...in ---");
const firstProduct = products[0];
for (const key in firstProduct) {
    console.log(`${key}: ${firstProduct[key]}`);
}

// --- CÂU 10: Lấy danh sách TÊN các sp đang bán VÀ còn hàng ---
// Kết hợp filter (lọc) và map (lấy tên)
const activeProductNames = products
    .filter(p => p.isAvailable === true && p.quantity > 0)
    .map(p => p.name);

console.log("\n--- Câu 10: Tên sp đang bán và còn hàng ---");
console.log(activeProductNames);