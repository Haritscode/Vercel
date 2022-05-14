import React, { useState } from 'react'
import {CircularProgressbar,buildStyles} from "react-circular-progressbar";


export default function Circularbars({Color,ImgUrl,Count,Label,Btn}) {
  const [percentage, setpercentage] = useState((Count/500)*100);
  const [count,setcount]=useState(Count);
  const [likes,setlikes]=useState(false);
  const likeBtnHandler=()=>{
    if(likes)
    {
      setlikes(false);
      setpercentage(percentage+1);
      setcount(count+1);
    }
    else
    {
      setlikes(true);
      setpercentage(percentage-1);
      setcount(count-1)      
    }

  }
  return (
    <>
    <div className='flex flex-col relative md:scale-50 md:-top-80 -top-40 scale-75'>
      <div className='w-full relative'>
      <CircularProgressbar
          value={percentage}
          strokeWidth={1}
          styles={buildStyles({
            strokeLinecap: "butt",pathColor:`${Color}`,trailColor:"gray"
          })}
        />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='flex flex-col items-center gap-4'>
          <button disabled={Btn} onClick={likeBtnHandler}><img src={ImgUrl} alt="none" className='w-0.6'/></button>
          <div className='text-3xl font-Libre text-white'>{count}</div>
          <div className='font-Nunito
          text-3xl font-bold text-gray-300'>{Label}</div>
        </div>

      </div>
      </div>
    </div>
    </>
  )
}
