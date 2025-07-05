import React from 'react';

const Map = () => {
    return (
        <div className="map-container">
            <h2 className="section-title">Find Us On Google Map!</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.7659006362434!2d-73.96411068459586!3d40.62502677934051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c244c844866933%3A0xbde74981ea7251bf!2sDi%20Fara%20Pizza!5e0!3m2!1sen!2sus!4v1623264524549!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default Map;