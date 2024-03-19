import React from "react";
import "./Card.css"
import {Link} from "react-router-dom"
import axios from "axios";


const Card = (props)=>{
    const handleDel = () => {
        axios.delete(`https://s56-weird-ice-cream-2.onrender.com/deleteuser/${props._id}`)
        .then((res)=>{
            console.log(res)
            props.fetchData()
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    

    return(
        <div className="box">
        <img className="img" src={props.img} alt="" />
        <h1 className="text1">{props.name}</h1>
        <p className="text2">{props.categories}</p>
        <p className="text3">{props.description}</p>
        <div className="btns">
        <Link to={`/update/${props._id}`}>
            <button className="update1">Update</button>
            </Link>
            
             <button onClick={handleDel} className="delete">Delete</button>
        </div>
        <br /><br /><br />
        </div>
    )
}

export default Card