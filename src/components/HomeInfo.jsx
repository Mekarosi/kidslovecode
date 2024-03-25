import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons/'

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
 )

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center
        neo-brutalism-blue py-4 px-8 text-white mx-5 font-semibold'>KidsLoveCode <span className='font-semibold'>is all about Children, </span> 👋
        <br />
        Learning to code.
        </h1>
    ),
    2: (
        <InfoBox 
           text="Coding is the new literacy, so let's educate our children" 
           link='/about'
           btnText='Learn more about KidsLoveCode'
        />
    ), 
        
    3: (
        <InfoBox 
        text='Kids will learn a lot about programming and robotics and also create amazing projects'
        link='/activities'
        btnText='Check out kids projects'
     />
    ),
   4 : ( 
    <InfoBox 
    text="Need to prepare your children for a world of programming?"
    link='/contact'
    btnText="Contact Us"
 />
    )           
}

// const InfoBox = ({ text, link, btnText }) => (
//    <div className='info-box'>
//        {text}
//    </div>
// )
  


const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null
} 

export default HomeInfo