import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './clock.css';

import hourHandImage from './images/Group 1500.png'
const Clock = () => {
    const [time,setTime] = useState(new Date());
    console.log(time);
    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setTime(new Date())
        },1000);
        return clearInterval(intervalId);
    },[])
    const hours=time.getHours%12;
    const minutes=time.getMinutes();
    const seconds=time.getSeconds();

    const hourRotation = `rotate(${360*(hours/12)+90+(30*(minutes/60))}deg)`;
    const minuteRotation = `rotate(${360 * (seconds / 60) + 90}deg)`;
    const SecondRotation = `rotate(${360 * (seconds / 60) + 90}deg)`;

  return (
    <div className='clockContainer'>

        {/* <div className="origin-top-left rotate-[51.26deg] w-[27.59px] h-[197.75px] relative">
        </div> */}
        <div className='hand hour-hand'
        style={{ backgroundImage: `url(${hourHandImage})`, transform: hourRotation }}></div>
        
        <div className='hand minute-hand'></div>
        <div className='hand second-hand'></div>

    </div>
  )
}

export default Clock