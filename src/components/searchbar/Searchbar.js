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
        <div className="searchbar">
            <input
                type="text"
                name="search"
                value={query}
                onKeyDown={keyPressCheck}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Zoek op achternaam lid."
             />
        <button
            className="searchbutton"
            type="button"
            onClick={handleClick}
        >
            Zoek
        </button>
        </div>
    );
}

export default Searchbar;
