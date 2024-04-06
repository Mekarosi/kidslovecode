import React, { useState } from 'react'
import  right  from '../assets/icons/right.png'
import down from '../assets/icons/down.png'
import { codeImportant } from '../constants'

const DisplayText = () => {

   
   
    // const [text, setText] = useState(messages)
    const [info, setInfo] = useState(codeImportant)
    const [show1 , setShow1] = useState(false)
    const [show2 , setShow2] = useState(false)
    const [show3 , setShow3] = useState(false)
    const [show4 , setShow4] = useState(false)
    const [show5 , setShow5] = useState(false)
    const [show6 , setShow6] = useState(false)
    const [show7 , setShow7] = useState(false)
   

  return (
    <section>

    <div className='border-spacing-20 to-blue-300'>
        <div className='flex flex-row gap-11 pb-5'>
          <h3 key={info[0]}>{info[0].message}</h3>
          <img onClick={(e) => {setShow1(!show1)}} src={show1 === false ? right : down} className='w-4 h-4 object-contain'/>
        </div>
      {show1 === true ? (<h3 className='pb-5'>{info[0].detail}</h3>) : ""}
    </div>

    <div>
        <div className='flex flex-row gap-11 pb-5'>
          <h3 key={info[1]}>{info[1].message}</h3>
          <img onClick={(e) => {setShow2(!show2)}} src={show2 === false ? right : down} className='w-4 h-4 object-contain'/>
        </div>
      {show2 === true ? (<h3 className='pb-5'>{info[1].detail}</h3>) : ""}
    </div>

    <div>
        <div className='flex flex-row gap-11 pb-5'>
          <h3 key={info[2]}>{info[2].message}</h3>
          <img onClick={(e) => {setShow3(!show3)}} src={show3 === false ? right : down} className='w-4 h-4 object-contain'/>
        </div>
      {show3 === true ? (<h3 className='pb-5'>{info[2].detail}</h3>) : ""}
    </div>

    <div>
        <div className='flex flex-row gap-11 pb-5'>
          <h3 key={info[3]}>{info[3].message}</h3>
          <img onClick={(e) => {setShow4(!show4)}} src={show4 === false ? right : down} className='w-4 h-4 object-contain'/>
        </div>
      {show4 === true ? (<h3 className='pb-5'>{info[3].detail}</h3>) : ""}
    </div>

    <div>
        <div className='flex flex-row gap-11 pb-5'>
          <h3 key={info[4]}>{info[4].message}</h3>
          <img onClick={(e) => {setShow5(!show5)}} src={show5 === false ? right : down} className='w-4 h-4 object-contain'/>
        </div>
      {show5 === true ? (<h3 className='pb-5'>{info[4].detail}</h3>) : ""}
    </div>

    <div>
        <div className='flex flex-row gap-11 pb-5'>
            <h3 key={info[5]}>{info[5].message}</h3>
            <img onClick={(e) => {setShow6(!show6)}} src={show6 === false ? right : down} className='w-4 h-4 object-contain'/>
        </div>
      {show6 === true ? (<h3 className='pb-5'>{info[5].detail}</h3>) : ""}
    </div>

    <div >
        <div className='flex flex-row gap-11 pb-5'>
          <h3 key={info[6]}>{info[6].message}</h3>
          <img onClick={(e) => {setShow7(!show7)}} src={show7 === false ? right : down} className='w-4 h-4 object-contain'/>
        </div> 
      {show7 === true ? (<h3 className='pb-5'>{info[6].detail}</h3>) : ""}
    </div>
    
           
    </section>  
  )
}

export default DisplayText