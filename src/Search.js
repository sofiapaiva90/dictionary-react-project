import React, {useState} from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
let[word, setWord] = useState("");

function handleResponse(response) {
console.log(response.data);
}

function search (event) {
event.preventDefault();
  
// API dictionary documentation: https://dictionaryapi.dev/

let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
axios.get(apiUrl).then(handleResponse);
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