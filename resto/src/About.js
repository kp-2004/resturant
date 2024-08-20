import React from 'react'
import aboutimg from './aboutimg.jpg'

export default function () {
  return (
    <div>
      <section className="about" id="about">
        <h1 className="heading">
            <span>about</span>us
        </h1>
        <div className="row">
            <div className="image">
                <img src={aboutimg} height={500} width={500}/>
            </div>
            <div className="content">
                <h3>what makes food special</h3>
                <p>Lorem Ipsum is simply dummy text of the printing<br/> and typesetting industry. Lorem Ipsum has been<br/>
                 the industry's standard dummy text ever <br/><br/>
                 since the 1500s, when an unknown printer took a galley<br/>
                  of type and scrambled it to make a type specimen book. It has<br/>
                   survived not only five centuries, but also the leap into<br/>
                    electronic typesetting, remaining essentially unchanged. </p>
                    <a href="#" className="btn btn-warning">Learn More</a>
            </div>
        </div>
      </section>
    </div>
  )
}
