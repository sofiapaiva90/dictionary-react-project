import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return (
    <div className="Meaning">
        <h4>{props.meaning.partOfSpeech}</h4>
        {props.meaning.definitions.map(function (definition, index) {
            return (
                <div key={index}>
                    <strong>Definition</strong>
                    <div>
                        {definition.definition}
                        <br />
                        <strong>Example</strong> <br />
                        <em>{definition.example}</em>
                        <Synonyms synonyms={definition.synonyms} />
                    </div> 
                    </div>
            );
        })}
        </div>
        );
}