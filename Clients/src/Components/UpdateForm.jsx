import axios from "axios";
import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import './Update.css'

function UpdateForm() {
    // Fix: Add parentheses to call useNavigate function
    const navigate = useNavigate();

    const [icecream, setIcecream] = useState({
        name: "",
        categories: "",
        description: "",
        img: ""
    });

    const { id } = useParams();
    console.log(id);

    const handleUpdate = () => {
        console.log(icecream);
        try {
            axios.put(`https://s56-weird-ice-cream-2.onrender.com/update/${id}`, icecream)
                .then((res) => {
                    console.log(res);
                });
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setIcecream((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <>
            <div className="update">
                <h1>Update the ice cream</h1>

                <label>Ice Cream name :</label>
                <input className='inp' type='text' name='name' value={icecream.name} onChange={handleChange} />

                <label>Categories:</label>
                <input className='inp' type='text' name='categories' value={icecream.categories} onChange={handleChange} />

                <label>Description:</label>
                <textarea className='inp' name='description' value={icecream.description} onChange={handleChange} />

                <label>Image</label>
                <input className='image' type='text' name='image' value={icecream.img} onChange={handleChange}></input>

                <button onClick={handleUpdate}>Save</button>
            </div>
        </>
    )
}

export default UpdateForm;
