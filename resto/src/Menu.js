import React from 'react'
import coffee from './coffee.png'
import bread from './bread.png'
import rice from './rice.png'
import momos1 from './momos.png'
import pizza from './pizza.png'
import noodles from './burger.png'

export default function () {
  const menu = [
    {
      img: coffee,
    },
    {
      img: bread,
    },
    {
      img: rice,
    },
    {
      img: momos1,
    },
    {
      img: pizza,
    },
    {
      img: noodles,
    },
  ];
  return (
    <div>
      <section className="menu" id="menu">
        <h1 className="heading">our <span>menu</span></h1>
        <div className="box-container">
          {
            menu.map((item, index) => (
              <div className="box" key={index}>
                <img src={item.img} />
                <h3>tasty and healthy</h3>
                <div className="price">
                  $15.99<span>20.99</span>
                  </div>
                  <a href="#" className="btn btn-warning">add to cart</a>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  )
}
