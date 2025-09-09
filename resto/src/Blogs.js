import React from 'react'
import image1 from './image1.png'
import image2 from './image2.jpg'
import image3 from './image3.jpg'

export default function () {
    const blog = [
        {
            img: image1,
        },
        {
            img: image2,
        },
        {
            img: image3,
        },
    ];
  return (
    <div>
      <section className="blogs" id="blogs">
        <h1 className="heading">
            our <span> blog </span>
        </h1>
        <div className="box-container">
            {
                blog.map((item,index) =>(
                    <div className="box" key={index}>
                        <div className="image">
                            <img src={item.img} />
                            </div>
                            <div className="content">
                                <a className="title">tasty and refreshing spices</a>
                                <span>by admin / 21st may, 2o22</span>
                                </div>
                                <button className="btn btn-warning btn-lg">read more</button>
                        </div>
                ))
            }
        </div>
      </section>
    </div>
  )
}
