import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="container header-container">
                <div className="logo-container">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
                        alt="Delicious Eats Logo"
                        className="logo-img"
                    />
                    <h1 className="logo">Delicious Eats</h1>
                </div>
                <nav>
                    <input type="checkbox" id="nav-toggle" className="nav-toggle" />
                    <label htmlFor="nav-toggle" className="hamburger">☰</label>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;