import React from 'react';

const Menu = () => {
    const menuItems = {
        appetizers: [
            { name: 'Bruschetta', description: 'Toasted bread topped with fresh tomatoes, garlic, and basil', price: 8.99 },
            { name: 'Calamari', description: 'Crispy fried squid served with marinara sauce', price: 12.99 },
            { name: 'Caesar Salad', description: 'Crisp romaine, croutons, parmesan, classic Caesar dressing', price: 10.99 },
            { name: 'Spring Rolls', description: 'Fresh vegetables and herbs wrapped in rice paper, served with peanut sauce', price: 9.99 },
        ],
        mainCourses: [
            { name: 'Grilled Salmon', description: 'Fresh Atlantic salmon with seasonal vegetables', price: 24.99 },
            { name: 'Beef Tenderloin', description: '8oz tenderloin with garlic mashed potatoes', price: 29.99 },
            { name: 'Vegetarian Pasta', description: 'Homemade pasta with fresh vegetables in white wine sauce', price: 18.99 },
        ],
        desserts: [
            { name: 'Tiramisu', description: 'Classic Italian coffee-flavored dessert', price: 8.99 },
            { name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with vanilla ice cream', price: 9.99 },
        ],
    };

    const addToCart = (item) => {
        // Functionality to add item to cart
        console.log(`${item.name} added to cart!`);
    };

    return (
        <div className="menu-section">
            <h2 className="menu-title">Our Menu</h2>

            {Object.entries(menuItems).map(([category, items]) => (
                <div className="menu-category" key={category}>
                    <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                    <div className="menu-grid">
                        {items.map(item => (
                            <div className="menu-item" key={item.name}>
                                <h4>{item.name}</h4>
                                <p className="description">{item.description}</p>
                                <div className="menu-item-footer">
                                    <p className="price">${item.price.toFixed(2)}</p>
                                    <button onClick={() => addToCart(item)} className="add-to-cart">Add to Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Menu;