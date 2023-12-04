import React from "react";

const SpeakerCard = ({name, jobTitle, company, profileImg}) => {
    return (
        <>
        <div className="card">
            <div className="speakerCard">
                <div className="speakerInfo">
                    <image src={`${profileImg}`} alt="speaker {name} image" />
                    <h3>{name}</h3>
                    <p>{jobTitle}</p>
                    <p>{company}</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default SpeakerCard;