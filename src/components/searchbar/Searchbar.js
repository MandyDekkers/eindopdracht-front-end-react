import React from 'react'
import { useState } from 'react';

function Searchbar({ setLastNameHandler }) {
    const [query, setQuery] = useState('');

    function handleClick (){
        setLastNameHandler(query);
    }

    function keyPressCheck(e){
        if (e.keyCode === 13 ){
            setLastNameHandler(query);
        }
    }

    return (
        <span className="searchbar">
            <input
                type="text"
                name="search"
                value={query}
                onKeyDown={keyPressCheck}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Zoek op achternaam lid."
             />
        <button
            type="button"
            onClick={handleClick}
        >
            Zoek
        </button>
        </span>
    );
}

export default Searchbar;
