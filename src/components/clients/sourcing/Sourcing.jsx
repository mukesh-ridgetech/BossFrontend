import React from 'react'
import Navbar1 from '../../home/Navbar1'
import Footer from '../../Footer'
import SourcingHero from './SourcingHero'
import SourcingText from './SourcingText'
import SourcingForm from './SourcingForm'
const Sourcing = () => {
  return (
    <>
       <Navbar1/>

       <div className='container'>
             <SourcingHero/>
             <SourcingText/>
             <SourcingForm/>
             <Footer/>
       </div>
    </>
  )
}

export default Sourcing