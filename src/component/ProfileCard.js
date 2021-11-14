import "./ProfileCard.css";
import React from 'react';

export default function ProfileCard({ name, nim, img, github, ig }) {
    return(
        <div className="card">
            <img className="photo" alt="" src={img} />
            <div className="data">
                <p id="name">{name}</p>
                <p id="nim">{nim}</p>
                <button type="button" id="btn"
                onClick={(e) => {
                    e.preventDefault();
                    window.open(github, "_blank");
                    }}
                    >GitHub</button>
                <button type="button" id="btn"
                onClick={(e) => {
                    e.preventDefault();
                    window.open(ig, "_blank");
                    }}
                    >Instagram</button>
            </div>
        </div>
    );
}