import React, {useState} from "react";

import "./Search.css";

export default function Search() {
let[word, setWord] = useState("");

function search (event) {
    event.preventDefault();
    alert(`Searching for ${word}`);
}

function handleWordChange(event) {
    setWord(event.target.value);
}

    return (
        <div className="Search">
            <form onSubmit={search}>
                <input type="search" onChange={handleWordChange} placeholder="Type a word..." className="form-control"/>
                <i className="fas fa-search"></i> 
            </form>
        </div>
    )
}