import React from "react";
import "./Gig.css"

const Gig = () => {
    return (
        <div className="gig">
            <h3 className="band-name">Parcels</h3>
            <img className="band-image" src="src/assets/parcels.jpg" />
            <p className="description">
                Welcome to an unforgettable night of music with Parcels, the
                sensational band that combines groovy rhythms with soulful
                melodies! Join us for a mesmerizing live concert experience that
                will leave you dancing and singing along.
            </p>
            <p className="date-time">7pm 21/02/2024</p>
            <p className="location">Berlin</p>
        </div>
    );
};

export default Gig;