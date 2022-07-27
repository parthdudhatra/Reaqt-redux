/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import image2 from "./shopping-cart-3d-render-icon_460848-6902.webp"

function Header(props)
{
    console.warn("Header",props.data.length)
    return(
        <div>
             <div className="add-to-cart">
                <span className="cart-count">{props.data.length}</span>
                    <img src={image2}></img>
            </div>
        </div>
    )
}

export default Header