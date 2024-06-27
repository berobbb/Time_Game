import React, { useRef, useState } from 'react'
import ResutModal from './ResutModal';


export default function TimerChallenge(props) {
    const[timeRemaining,setTimeRemaining]=useState(props.targetTime*1000)
    const dialog=useRef();
    const timer=useRef();
    const timerActive=timeRemaining>0&&timeRemaining<props.targetTime*1000
    if(timeRemaining<=0){
        clearInterval(timer.current)
        
        dialog.current.open();
    }
    function handleReset()
    {
        setTimeRemaining(targetTime*1000);
    }
    function handleStart()
    {
       timer.current= setInterval(()=>{
        setTimeRemaining(prev=>prev-10)    
        },10)
        
    }
    function handleStop()
    {
         clearInterval(timer.current);
         dialog.current.open();
    }
  return (
    <>
    <ResutModal ref ={dialog} targetTime={props.targetTime} remainingTime={timeRemaining} onReset={handleReset} />
    <section className='challenge'>
        <h2>{props.title}</h2>
        <p className='challenge-time'>
            {props.targetTime} second{props.targetTime>1?'s':''}

        </p>
        <button onClick={timerActive?handleStop:handleStart}>
            {timerActive?'Stop':'Start'}
        </button>
        <p className={timerActive?"active":undefined}>
            {timerActive?"Timer is running":"Timer inactive"}
        </p>
    </section>
    </>
  )
}
