// Simulated product list
const products = [
	{ id: 1, name: 'Laptop', price: 999.99, category: 'Electronics', image: 'https://example.com/laptop.jpg' },
	{ id: 2, name: 'Smartphone', price: 599.99, category: 'Electronics', image: 'https://example.com/smartphone.jpg' },
	{ id: 3, name: 'Headphones', price: 149.99, category: 'Electronics', image: 'https://example.com/headphones.jpg' },
	{ id: 4, name: 'T-shirt', price: 19.99, category: 'Clothing', image: 'https://example.com/tshirt.jpg' },
	{ id: 5, name: 'Jeans', price: 49.99, category: 'Clothing', image: 'https://example.com/jeans.jpg' },
	{ id: 6, name: 'Sneakers', price: 79.99, category: 'Footwear', image: 'https://example.com/sneakers.jpg' },
	{ id: 7, name: 'Watch', price: 199.99, category: 'Accessories', image: 'https://example.com/watch.jpg' },
	{ id: 8, name: 'Backpack', price: 39.99, category: 'Accessories', image: 'https://example.com/backpack.jpg' },
	{ id: 9, name: 'Coffee Maker', price: 89.99, category: 'Home Appliances', image: 'https://example.com/coffeemaker.jpg' },
	{ id: 10, name: 'Blender', price: 69.99, category: 'Home Appliances', image: 'https://example.com/blender.jpg' },
];

// Function to get all products
export async function getAllProducts() {
	await new Promise(resolve => setTimeout(resolve, 2000));
	return products;
}

// Function to get a product by id
export async function getProductById(id) {
	await new Promise(resolve => setTimeout(resolve, 2000));
	const product = products.find(p => p.id === id);
	if (!product) {
		throw new Error('Product not found');
	}
	return product;
}
