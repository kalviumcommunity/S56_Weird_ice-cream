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
                <div className="para"><img src="img1.jpg"></img>
                <h2>Wasabi Ice Cream</h2>
                <p>This flavor combines the coolness of ice cream with the fiery kick of wasabi, a Japanese horseradish. It's a unique blend of sweet and spicy.</p>
                </div>

                <div className="para"><img src="img2.jpeg"></img>
                <h2>Balsamic Strawberry Ice Cream</h2>
                <p> Mixing the tangy flavor of balsamic vinegar with sweet strawberries creates a surprising and sophisticated taste sensation.</p>
                </div>

                <div className="para"><img src="img3.jpeg"></img>
                <h2>Lavender Honey Ice Crea</h2>
                <p> Infused with the delicate floral notes of lavender and the sweetness of honey, this ice cream offers a refreshing and aromatic experience.</p>
                </div>

                <div className="para"><img src="img4.jpg"></img>
                <h2>Corn Ice Cream</h2>
                <p> Made with fresh corn kernels, this ice cream has a slightly savory taste with hints of sweetness, reminiscent of a creamy corn pudding.</p>
                </div>

                <div className="para"><img src="img5.jpg"></img>
                <h2>Blue Cheese Ice Cream</h2>
                <p> Combining the creamy texture of ice cream with the sharp and salty flavor of blue cheese results in a bold and unexpected dessert option.</p>
                </div>

                <div className="para"><img src="img6.jpg"></img>
                <h2>Charcoal Ice Cream</h2>
                <p> Activated charcoal gives this ice cream a striking black color and a slightly gritty texture, offering a trendy and detoxifying twist to the classic treat.</p>
                </div>


                
                
            </div>
        </div>

    )
}
export default Navbar