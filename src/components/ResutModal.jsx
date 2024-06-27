import React from 'react'
import { forwardRef,useImperativeHandle,useRef } from 'react';
const ResultModal=forwardRef( function (props,ref) {
    const dialog=useRef();
    let userLost;
    if(props.remainingTime<=0)
        {
            userLost=true;
        }
    const X =(props.remainingTime/1000).toFixed(2);
useImperativeHandle(ref,()=>{
    return{
        open(){
            dialog.current.showModal();
        }
    }

});
  return (
    <dialog ref={dialog}className='result-modal'>
       {userLost&& <h2>You lost</h2>}
       {!userLost&& <h2>You Won</h2>}
        <p>The target time was <strong>{props.targetTime} seconds.</strong></p>
        <p>You stopped the time with <strong>{X} seconds left</strong></p>
        <form method='dialog'>
            <button>Close</button>
        </form>
    </dialog>
  )
})
export default ResultModal;
