import React, {useEffect, useState} from "react";

const UseEffectExample1 = () => {
    const [data, setData] = useState(10);

        useEffect(() => {
            if (data > 0) {
                setTimeout(() => {
                    setData((data) => data - 1);
                }, 1000);
            }
        });

        return <h3>You have {data} sec!</h3>

}

export default UseEffectExample1;