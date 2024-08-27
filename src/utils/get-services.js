// Simulated services list
const services = [
	{ id: 1, name: 'Product Photography', price: 199.99, category: 'Marketing', description: 'Professional product photography for your e-commerce store' },
	{ id: 2, name: 'SEO Optimization', price: 299.99, category: 'Marketing', description: 'Improve your website\'s search engine rankings' },
	{ id: 3, name: 'Social Media Management', price: 249.99, category: 'Marketing', description: 'Manage and grow your social media presence' },
	{ id: 4, name: 'Web Design', price: 999.99, category: 'Development', description: 'Custom website design tailored to your brand' },
	{ id: 5, name: 'E-commerce Setup', price: 799.99, category: 'Development', description: 'Set up your online store with payment integration' },
	{ id: 6, name: 'Content Writing', price: 149.99, category: 'Content', description: 'Engaging product descriptions and blog posts' },
	{ id: 7, name: 'Logo Design', price: 399.99, category: 'Design', description: 'Professional logo design for your brand' },
	{ id: 8, name: 'Email Marketing', price: 199.99, category: 'Marketing', description: 'Create and manage email campaigns for your products' },
	{ id: 9, name: 'Inventory Management', price: 299.99, category: 'Operations', description: 'Efficient inventory tracking and management system' },
	{ id: 10, name: 'Customer Support', price: 499.99, category: 'Operations', description: '24/7 customer support for your online store' },
];

// Function to get all services
export async function getAllServices() {
	await new Promise(resolve => setTimeout(resolve, 2000));
	return services;
}

// Function to get a service by id
export async function getServiceById(id) {
	await new Promise(resolve => setTimeout(resolve, 2000));
	const service = services.find(s => s.id === id);
	if (!service) {
		throw new Error('Service not found');
	}
	return service;
}
