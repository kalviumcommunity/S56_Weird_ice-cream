import React from "react";
import "./Card.css"


const Card = (props)=>{
    return(
        <div className="box">
        <img className="img" src={props.img} alt="" />
        <h1 className="text1">{props.name}</h1>
        <p className="text2">{props.categories}</p>
        <p className="text3">{props.description}</p>
        <div className="btns">
            <button className="update">Update</button>
            <button className="delete">Delete</button>
        </div>
        <br /><br /><br />
        </div>
    )
}

export default Card