import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

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
                        <Example example={definition.example} /> 
                        <Synonyms synonyms={definition.synonyms} />
                        <hr />
                    </div> 
                    </div>
                    
            );
        })}
         </section>
        </div>
        );
}