import React from 'react'

export default function () {
  return (
    <div>
      <section className="contact" id="contact">
        <h1 className="heading">
            contact <span> us </span>
        </h1>
        <div className="row">
        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28005.338472223455!2d77.04404132927083!3d28.669678595695192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0438728d3fc9%3A0x64e1eebb4ec4e142!2sNangloi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1706099700867!5m2!1sen!2sin" width={600} height={450} style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <form>
            <h3>get in touch</h3>
            <div className="inputBox">
                <span className="fa fa-user"></span>
                <input type="text" placeholder="name"/>
            </div>
            <div className="inputBox">
                <span className="fa fa-envelope"></span>
                <input type="email" placeholder="email"/>
            </div>
            <div className="inputBox">
                <span className="fa fa-phone"></span>
                <input type="number" placeholder="number"/>
            </div>
            <button className="btn btn-warning btn-lg">contact now</button>
        </form>
        </div>
      </section>
    </div>
  )
}
