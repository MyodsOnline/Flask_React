import React, {useEffect, useState} from "react";

const UseEffectExampleTwo = () => {
    
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => count*2);
    }, [count]);

    return(
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <button onClick={() => setCount(0)}>Clear</button>
            <p>Calculation: {calculation}</p>
            
        </>
    );
};

export default UseEffectExampleTwo;