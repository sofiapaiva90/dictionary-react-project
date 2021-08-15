import React, {useState} from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./Search.css";

export default function Search() {
let[word, setWord] = useState("");
let[results, setResults] = useState(null);
let [photos, setPhotos] = useState(null);

function handleResponse(response) {
setResults(response.data[0]);
}

function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
}

function search (event) {
event.preventDefault();
  
// API dictionary documentation: https://dictionaryapi.dev/

let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
axios.get(apiUrl).then(handleResponse);

let pexelsApiKey="563492ad6f91700001000001db6402572c37490d988c3a4d5931209d";
let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
let headers = {Authorization:`Bearer ${pexelsApiKey}`};
axios.get(pexelsApiUrl, {headers:headers}).then(handlePexelsResponse);
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
            <Photos photos={photos} />
            <Results results={results}/>
        </div>
    )
}