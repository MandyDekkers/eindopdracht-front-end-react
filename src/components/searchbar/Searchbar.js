import React from 'react'
import { useState } from 'react';
import './Searchbar.css';

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
            <h4 className="inputlastname">Zoek op achternaam:</h4>
            <input
                type="text"
                name="search"
                value={query}
                onKeyDown={keyPressCheck}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Vul een achternaam in"
             />
            <button
                className="lastname-button"
                type="button"
                onClick={handleClick}
            >
            Zoek
            </button>
        </div>
    );
}

export default Searchbar;
