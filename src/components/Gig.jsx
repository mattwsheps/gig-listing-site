import React from "react";
import "./Gig.css";

const Gig = (props) => {
    return (
        <div className="gig">
            <h3 className="band-name" data-testid="band-name">
                {props.name}
            </h3>
            <img
                className="band-image"
                data-testid="band-image"
                src={props.image}
            />
            <p className="description" data-testid="description">
                {props.description}
            </p>
            <p className="date-time" data-testid="date-time">
                {props.datetime}
            </p>
            <p className="location" data-testid="location">
                {props.location}
            </p>
        </div>
    );
};

export default Gig;
