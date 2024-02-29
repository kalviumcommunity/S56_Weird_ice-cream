import "./Nav.css"
import React from "react"

function Navbar(){
    return(
        <div className="Main">
            <div className="navbar">
            <input className="input" type="text" placeholder="Choice your Favourties"/>

                <ul className="div1">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="image">
                <img src="880.jpg"/>
            </div>
            <div className="text">

                <h1>Ready for a wild ride? <br/> Dive into a world of unexpected <br/> flavours with our eccentric ice cream selection !!!</h1>
            </div>
            <div className="text1">
                <h1>Chalo let's drive into some werid flavours....</h1>
            </div>
            <div className="picture">
                <img src=""></img>
            </div>
        </div>

    )
}
export default Navbar