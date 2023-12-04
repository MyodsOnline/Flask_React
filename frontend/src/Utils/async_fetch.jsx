import React, {useEffect, useState} from "react";

const UseAsyncFetch = () => {
    const [data, setData] = useState([]);
    const API_URL = "https://dummyjson.com/users";

    const APIFetchSpeakers = async () => {
        try {
            const responce = await fetch(API_URL);
            const data = await responce.json()
            setData(data.users)
        }
        catch (error) {
            console.log('error: ', error)
        }
    };

    useEffect(() => {
        APIFetchSpeakers();
    })
};

export default UseAsyncFetch;