import React from 'react';
import Gallery from '../components/Gallery';
import Menu from '../components/Menu';
import About from '../components/About';

const Home = () => {
    return (
        <div>
            <section className="hero">
                <h2>Welcome to Delicious Eats</h2>
                <p>Where flavor meets comfort</p>
            </section>
            <Gallery />
        </div>
    );
};

export default Home;