import React from "react";

import "./Photos.css";

export default function Photos(props) {
    if (props.photos) {
return (
    <section className="Photos">
        <div className="row">
{props.photos.map(function(photos,index) {
    return (
    <div className="col-sm-4"key={index}>
    <a href={photos.src.original} target="_blank" rel="noreferrer">
    <img src={photos.src.landscape} alt="imgWord"
    className="img-fluid"/>
    </a>
    </div>
    )
})}
</div>
    </section>
)
    }
    else {
        return null;
    }
}