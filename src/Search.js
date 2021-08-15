import React, {useState} from "react";
import Results from "./Results";
import axios from "axios";
import "./Search.css";

export default function Search() {
let[word, setWord] = useState("");
let[results, setResults] = useState(null);

function handleResponse(response) {
setResults(response.data[0]);
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
            <section>
            <form onSubmit={search}>
                <input type="search" onChange={handleWordChange} placeholder="Enter the word to search for..." className="form-control"/>
                <i className="fas fa-search"></i> 
            </form>
            <p><strong>Example:</strong> sunset, sunrise, ocean, sun...</p>
            </section>
            <Results results={results}/>
        </div>
    )
}