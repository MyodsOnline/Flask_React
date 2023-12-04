import React from "react";
import SpeakersCard from "../../components/SpeakersCard/SpeakersCard";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import speakerList from "../../data/SpeakerList";

const SpeakersPage = () => {
    return (
        <>
            <Header />
            <Breadcrumb title={"Speakers"} />
            <div className="speakers-container">
                <div className="section-heading">
                    <h1>Meet our speakers</h1>
                </div>
                <div className="card">
                    {speakerList.map(speaker => (
                        <SpeakersCard
                            key={speaker.id}
                            name={speaker.name}
                            jobTitle={speaker.jobTitle}
                            company={speaker.company}
                            profileImg={speaker.profileImg}
                            />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SpeakersPage;