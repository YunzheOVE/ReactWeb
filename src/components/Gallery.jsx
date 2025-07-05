import React from 'react';
import '../App.css';

const Gallery = () => {
    return (
        <section className="gallery">
            <div classname="container">
                <h2 className="logo">Our Gallery</h2>
                <div className="gallery-container">
                    <input type="radio" name="slider" id="item-1" defaultChecked />
                    <input type="radio" name="slider" id="item-2" />
                    <input type="radio" name="slider" id="item-3" />
                    <input type="radio" name="slider" id="item-4" />
                    <input type="radio" name="slider" id="item-5" />
                    <input type="radio" name="slider" id="item-6" />

                    <div className="cards">
                        <img src="https://4.bp.blogspot.com/-ymuskvk5SbU/U6GcDQlYmRI/AAAAAAAAA4Y/Vx9s0gyDAHI/s1600/restaurant+interior+design.jpg" alt="Gallery Image 1" />
                        <img src="https://static.vecteezy.com/system/resources/previews/026/612/779/non_2x/a-delicious-crispy-pork-belly-fancy-on-plate-restaurant-food-and-asian-cuisine-concept-by-ai-generated-free-photo.jpg" alt="Gallery Image 2" />
                        <img src="https://housing.com/news/wp-content/uploads/2022/11/image10-7.jpg" alt="Gallery Image 3" />
                        <img src="https://th.bing.com/th/id/R.38b38667d672a4d545b10d47ce683e89?rik=LOXTUqzH6jjKCQ&riu=http%3a%2f%2fstudio3.com%2fblog%2fwp-content%2fuploads%2f2015%2f05%2fsteak-potato-restaurant-dinner-food-photography-studio-3.jpg&ehk=blW6ACwhDpa9%2b6aVobLC8FM6MmG0qqpx%2bPsyahCTjO4%3d&risl=&pid=ImgRaw&r=0" alt="Gallery Image 4" />
                        <img src="https://th.bing.com/th/id/R.31bbe96921ff1d774313a35f1505c98f?rik=5rUKCu59u99qcQ&pid=ImgRaw&r=0" alt="Gallery Image 5" />
                        <img src="https://www.tastingtable.com/img/gallery/a-culinary-director-explains-what-happens-when-you-send-food-back-at-a-restaurant/intro-1712083006.jpg" alt="Gallery Image 6" />
                    </div>

                    <div className="dots">
                        <label htmlFor="item-1"></label>
                        <label htmlFor="item-2"></label>
                        <label htmlFor="item-3"></label>
                        <label htmlFor="item-4"></label>
                        <label htmlFor="item-5"></label>
                        <label htmlFor="item-6"></label>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;