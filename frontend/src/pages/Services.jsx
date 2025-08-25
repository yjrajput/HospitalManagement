import React from 'react'
import {services} from '../assets/data/services';
import ServiceCart from '../components/services/ServiceCart';

const Services = () => {
  return (
    <section>
      <div className='container'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] '>
              {services.map((items, index) => (
                <ServiceCart items = {items} index = {index} key={index}/>
              ))}
          </div>
      </div>
    </section>
  )
}

export default Services
