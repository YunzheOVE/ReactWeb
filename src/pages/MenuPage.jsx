import React, { useState } from 'react';
import Cart from '../components/Cart';

const menuData = [
	{
		category: 'Appetizers',
		items: [
			{
				name: 'Bruschetta',
				price: 8.99,
				img: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
				desc: 'Toasted bread topped with fresh tomatoes, garlic, and basil',
			},
			{
				name: 'Calamari',
				price: 12.99,
				img: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
				desc: 'Crispy fried squid served with marinara sauce',
			},
			{
				name: 'Caesar Salad',
				price: 10.99,
				img: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
				desc: 'Crisp romaine, croutons, parmesan, classic Caesar dressing',
			},
			{
				name: 'Spring Rolls',
				price: 9.99,
				img: 'https://www.thecookingcollective.com.au/wp-content/uploads/2022/08/Vegetable-Spring-Rolls-2-1.jpg',
				desc: 'Fresh vegetables and herbs wrapped in rice paper, served with peanut sauce',
			},
		],
	},
	{
		category: 'Main Courses',
		items: [
			{
				name: 'Grilled Salmon',
				price: 24.99,
				img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
				desc: 'Fresh Atlantic salmon with seasonal vegetables',
			},
			{
				name: 'Beef Tenderloin',
				price: 29.99,
				img: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
				desc: '8oz tenderloin with garlic mashed potatoes',
			},
			{
				name: 'Vegetarian Pasta',
				price: 18.99,
				img: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
				desc: 'Homemade pasta with fresh vegetables in white wine sauce',
			},
		],
	},
	{
		category: 'Desserts',
		items: [
			{
				name: 'Tiramisu',
				price: 8.99,
				img: 'https://img2.rtve.es/imagenes/asi-se-hace-tiramisu-receta-mas-facil-rapida-jugosa/1684846876915.jpg',
				desc: 'Classic Italian coffee-flavored dessert',
			},
			{
				name: 'Chocolate Lava Cake',
				price: 9.99,
				img: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
				desc: 'Warm chocolate cake with vanilla ice cream',
			},
		],
	},
];

const MenuPage = () => {
	const [cartItems, setCartItems] = useState([]);
	const [cartOpen, setCartOpen] = useState(false);

	const addToCart = item => {
		setCartItems(prev => {
			const found = prev.find(i => i.name === item.name);
			if (found) {
				return prev.map(i =>
					i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
				);
			}
			return [...prev, { ...item, quantity: 1 }];
		});
	};

	const updateCart = (name, quantity) => {
		setCartItems(prev =>
			quantity > 0
				? prev.map(i => (i.name === name ? { ...i, quantity } : i))
				: prev.filter(i => i.name !== name)
		);
	};

	const clearCart = () => setCartItems([]);

	return (
		<main>
			<div className="cartFont">
				<button className="cart-icon" onClick={() => setCartOpen(true)}>
					Cart 🛒{' '}
					<span className="cart-count">
						{cartItems.reduce((sum, i) => sum + i.quantity, 0)}
					</span>
				</button>
				{cartOpen && (
					<div
						className="cart-modal-bg"
						onClick={() => setCartOpen(false)}
					>
						<div
							className="cart-modal-content"
							onClick={e => e.stopPropagation()}
						>
							<Cart
								cartItems={cartItems}
								updateCart={updateCart}
								clearCart={clearCart}
							/>
							<button
								className="close-modal"
								onClick={() => setCartOpen(false)}
							>
								Close
							</button>
						</div>
					</div>
				)}
			</div>
			<section className="menu-section">
				<div className="container">
					<h2 className="menu-title">Our Menu</h2>
					{menuData.map(cat => (
						<div className="menu-category" key={cat.category}>
							<h3>{cat.category}</h3>
							<div className="menu-grid">
								{cat.items.map(item => (
									<div className="menu-item" key={item.name}>
										<img
											src={item.img}
											alt={item.name}
											className="menu-item-img"
										/>
										<h4>{item.name}</h4>
										<p className="description">{item.desc}</p>
										<div className="menu-item-footer">
											<p className="price">
												${item.price.toFixed(2)}
											</p>
											<button
												className="add-to-cart"
												onClick={() => addToCart(item)}
											>
												Add to Cart
											</button>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</section>
		</main>
	);
};

export default MenuPage;