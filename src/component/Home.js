import React from "react";

function Home(){
    return(
        <div>Home Component
        <div className="cart-wrapper">
                <div className="img-wrapper item">
                <a href="https://www.freeiconspng.com/img/45223">iPhone X and iPhone 8 png</a>
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add To Cart</button>
                </div>
            </div>
    </div>
    )
}

export default Home;