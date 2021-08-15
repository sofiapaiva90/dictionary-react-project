import React from "react";
import Synonyms from "./Synonyms";

import "./Meanings.css";

export default function Meaning(props) {
    return (
    <div className="Meaning">
        <section>
        <h4>{props.meaning.partOfSpeech}</h4>
        {props.meaning.definitions.map(function (definition, index) {
            return (
                <div key={index}>
                    
                    <strong>Definition</strong>
                    <div>
                        {definition.definition}
                        <br />
                        <strong>Example</strong> <br />
                        {definition.example}
                        <Synonyms synonyms={definition.synonyms} />
                    </div> 
                    </div>
                    
            );
        })}
         </section>
        </div>
        );
}