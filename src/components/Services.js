import React from 'react'
import Titel from './Titel'
import Service from './Service'
import {contentServices} from '../data'

const Services = () => {
  return (
   
    <section className="section services" id="services">
      <Titel title="our" subTitel='services' />

      <div className="section-center services-center">

      {contentServices.map((Servic)=> {
             return(
             <Service key={Servic.id} {...Servic}/>
            )
           })
          }
      </div>
    </section>
  )
}

export default Services