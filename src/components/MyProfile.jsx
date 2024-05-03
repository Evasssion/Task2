import React from "react";
import './ProfileStyle.css'
export const MyProfile = (props) =>{
    return(
        <div className="block">
            <img className="image" src={props.photo} alt="Photo"></img>
            <p>{props.FIO}</p>          
        </div>
    );
};