import React from 'react'
import aiIcon from "../images/ai-icon.png"

export default function Button() {

  return (
    <React.Fragment>
        <button type='submit' className=' w-2/5 h-[40px] flex justify-center items-center gap-3 text-center bg-transparent border-solid border-2 border-secondary text-secondary rounded max-md:w-[50%] '>Generate <img src={aiIcon} className='h-[30px]  ' alt="" /></button>
    </React.Fragment>
  )
}
