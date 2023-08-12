import React from 'react'
import Titel from './Titel'
import {contentServices} from '../data'
const Services = () => {
  return (
   
    <section className="section services" id="services">
      <Titel title="our" subTitel='services' />

      <div className="section-center services-center">

      {contentServices.map((Service)=> {
            const {id,title,icon,text} = Service
             return(
                  <article className="service" key={id}>
                  <span className="service-icon"><i className={icon}></i></span>
                  <div className="service-info">
                    <h4 className="service-title">{title}</h4>
                    <p className="service-text">
                      {text}
                    </p>
                  </div>
                  </article>
            )
           })
          }
      </div>
    </section>
  )
}

export default Services