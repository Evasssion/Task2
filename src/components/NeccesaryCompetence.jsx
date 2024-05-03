import React from "react";
import './nessCompetenceStyle.css'

export const NeccesaryCompetence = (props) =>{
    return(
        <div className="block">
            <p className="name">{props.neccCompetence}</p>
        </div>
    );
};