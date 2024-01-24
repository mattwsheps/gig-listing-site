import React, { useState } from "react";
import "./Gig.css";

const Gig = (props) => {
    const [isLiked, setLiked] = useState(false);

    const handleButtonClick = () => {
        setLiked(!isLiked);
    };

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
            <button className="like-button" onClick={handleButtonClick}>
                {isLiked ? (
                    <img
                        src="src/assets/Liked.jpg"
                        width="40"
                        height="40"
                        alt="Full Heart"
                    />
                ) : (
                    <img
                        src="src/assets/Unliked.jpg"
                        width="40"
                        height="40"
                        alt="Empty Heart"
                    />
                )}
            </button>
        </div>
    );
};

export default Gig;
