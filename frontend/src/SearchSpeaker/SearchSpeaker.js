import React, {useState} from "react"

const SearchSpeaker = () => {
    const [searchText, setSearchText] = useState('');
    return(
        <div>
            <label htmlFor="search">SearchSpeaker:</label>
            <input id="search" type="text" placeholder="Enter search query" onChange={
                e => setSearchText(e.target.value)
            } />
            <p>Searching for: <b>{searchText}</b></p>
        </div>
    );
}

export default SearchSpeaker