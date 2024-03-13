import axios from "axios"
import "./Nav.css"
import React, { useEffect,useState} from "react"
import { Link } from "react-router-dom"
import Card from "../Card"

function Navbar(){

    const[data, setData] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

        const fetchData = async()=>{
            try{
                const response = await axios.get('https://s56-weird-ice-cream-1.onrender.com/data');
                setData(response.data);
            }catch(error){
                console.log(error);

            }
        }
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

            <div className="Register">
            <Link to="/form"> <button className="button">Register</button></Link>
            </div>
            <div className="image">
                <img src="880.jpg"/>
            </div>
            <div className="text">

                <h1>Ready for a wild ride? <br/> Dive into a world of unexpected <br/> flavours with our eccentric ice cream selection !!!</h1>
            </div>
            <div className="text1">
                <h1 className="pg">Chalo let's drive into some werid flavours....</h1>
            </div>
            
            <div className="display">
           {data.map((ele,i)=>(
            <Card key={i} {...ele} fetchData={fetchData} />
           ))}
            </div>



                
                
            </div>
       

    )
}
export default Navbar