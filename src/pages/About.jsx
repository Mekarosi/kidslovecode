import React from 'react'
import { Chrono } from "react-chrono";
import { skills, experiences, socialLinks,  images  } from '../constants' 

import CTA from '../components/CTA';
import Carousel from "../components/Carousel";

const About = () => {

  
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, welcome to <span className='blue-gradient_text font-semibold
        drop-shadow'
      >KidsLoveCode</span> 
      </h1>
      
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p><span className='blue-gradient_text font-semibold
        drop-shadow'
      >KidsLoveCode</span>is a kids coding academy focused on teaching children age 4 to 18 years old coding and robotics skills. Children will learn
          coding skills in Web Design, Mobile App design, Game design, Robotics, and Artificial Intelligence.At KidsLoveCode, we believe that empowering Your Child with Coding skills is a Gateway to Endless Opportunities!
        <br/>
        <br/>
        
          In today's rapidly evolving world, equipping our children with the right skills is paramount to ensuring their success and future readiness. One such indispensable skill is coding. As the digital age continues to shape our society, proficiency in coding is no longer just a bonus; it's becoming a fundamental requirement. 
          
          </p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>Skills to be learnt</h3>

        <Carousel images={images} />

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div key={skill.name} className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img  
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      


      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Social Media Links</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {socialLinks.map((socialLink) => (
            <div 
            key={socialLink.name} 
            className='block-container w-20 h-20 cursor-pointer'
            onClick={(e) => {
              e.preventDefault();
              window.location.href=`${socialLink.link}`
              }}
            >
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img  
                  src={socialLink.iconUrl}
                  alt={socialLink.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className='py-16'>
        <h3 className='subhead-text'>Why should your Kid learn to Code?</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>Coding isn't just a technical skill; it's a gateway to endless opportunities for personal growth, academic success, and future career prospects. By introducing your child to coding, you're empowering them to thrive in the digital age and become creators of tomorrow. So why wait? Invest in your child's future today by unlocking the power of coding!</p>
      </div>
      <div className='mt-12 flex'>
   
           <Chrono 
          mode="HORIZONTAL" 
          items={experiences} 
          slideShow
          slideItemDuration={2500}
          slideShowType="slide_from_sides"
          theme={{
            primary: '#EDC21F',
            secondary: '#F0EEBD',
            cardBgColor: '#EFEEEC',
            titleColor: 'black',
            titleColorActive: '#1E1BEF',
          }}
          >
          {experiences.map((experience) => (
              <div key={experience.cardSubtitle} cardTitle={experience.cardTitle}>
                <h3 className='text-black text-xl font-poppins font-semibold' >{experience.title}</h3>
                <p className='text-black-500 font-medium font-base'>{experience.cardSubtitle}</p>
                
                <div className="chrono-icons w-[4%] h-[4%] object-contain mb-3">
                  <img src={experience.icon} alt={experience.cardSubtitle} />
                </div>
                {experience.cardTitle}
                <ul className='my-5 list-disc ml-5 space-y-2'>
            {experience.points.map((point, index) => (
              <li 
                className='text-black font-normal pl-1 text-sm'
                key={`experience-point-${index}`}
                >  
                {point}
                <br />
                
               
              </li>
              
            ))}
          </ul>
              </div>  
                 
          ))}
               

          </Chrono>  
        
       
      </div>
      </div>

      <hr className='border-slate-200'/>
     <CTA />
    </section>
  )
}

export default About