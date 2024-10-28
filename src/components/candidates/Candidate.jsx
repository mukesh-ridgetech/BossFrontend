import React from 'react'
import Navbar1 from '../home/Navbar1'
import CandidateHero from './CandidateHero'
import CandidateDetails from './CandidateDetails'
import Footer from '../Footer'
const Candidate = () => {
  return (
    <>
       <Navbar1/>
        <div className='container'>
            <CandidateHero/>
            <CandidateDetails/>
            <Footer/>
        </div>
    </>
  )
}

export default Candidate
