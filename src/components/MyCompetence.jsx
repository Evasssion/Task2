import React from "react";
import './CompetenceStyle.css'

export const MyCompetence = (props) =>{
    return(
        <div className="block">
            <p className="name">{props.nameCompetence}</p>
            <p className="description">{props.description}</p>
        </div>
    );
};