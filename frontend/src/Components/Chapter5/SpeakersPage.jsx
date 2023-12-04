import React from "react";
import SpeakerCard from "./SpeakersCard";
import speakerList from "./data/speakerList";
import "./speakers.css"

const SpeakersPage = () => {
    return (
        <>
            <div className="repr">
                {speakerList.map((speaker) => (
                    <SpeakerCard 
                        key={speaker.id}
                        name={speaker.name}
                        jobTitle={speaker.jobTitle}
                        company={speaker.company}
                        profileImg={speaker.profileImg}
                    />
                ))}
            </div>
        </>
    );
};

export default SpeakersPage;