import React, {useContext, createContext, useState} from "react";

const context = createContext(null)

const useContextExampleOne = () => {
    const [speakerName] = useState("Fillip Morris");

    return (
        <context.Provider value={{speakerName}}>
            <h1>This is Parent Component</h1>
            <ImmediateChildComponent speakerName={speakerName} />
        </context.Provider>
    );
};

function ImmediateChildComponent({speakerName}) {
    return (
        <div>
            <h2>This is an immediate Child Component</h2><hr/>
            <GrandChildComponent speakerName={speakerName} />
        </div>
    )
}

function GrandChildComponent({speakerName}) {
    return (
        <div>
            <h2>This is a Grand Child Component</h2><hr/>
            <h4>Speakers Name: {speakerName}</h4>
        </div>
    )
}

export default useContextExampleOne;