import React from "react";
import "./Gig.css";

const Gig = (props) => {
    return (
        <div className="gig">
            <h3 className="band-name">{props.name}</h3>
            <img className="band-image" src={props.image} />
            <p className="description">{props.description}</p>
            <p className="date-time">{props.datetime}</p>
            <p className="location">{props.location}</p>
        </div>
    );
};

export default Gig;
