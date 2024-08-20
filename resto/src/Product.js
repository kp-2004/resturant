import React from 'react'
import latte from './latte.png'
import icecream from './icecream.png'
import cocktail from './cocktail.png'

export default function () {
    const product = [
        {
            img: latte,
        },
        {
            img: icecream,
        },
        {
            img: cocktail,
        },
    ];
    return (
        <div>
            <section className="products" id="products">
                <div className="heading">
                    <h1>our <span>products</span></h1>
                    <div className="box-container">
                        {
                            product.map((item, index) => (
                                <div className="box" key={index}>
                                    <div className="icons">
                                        <a href="#" className="fa fa-shopping-cart"></a>
                                        <a href="#" className="fa fa-heart"></a>
                                        <a href="#" className="fa fa-eye"></a>
                                    </div>
                                    <div className="image">
                                        <img src={item.img}/>
                                    </div>
                                    <div className="content">
                                        <h3>fresh coffee</h3>
                                        <div className="start">
                                            <i className="fa fa-star"/>
                                            <i className="fa fa-star"/>
                                            <i className="fa fa-star"/>
                                        </div>
                                        <div className="price">
                                            $15.99 <span> 20.99</span>
                                            </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
