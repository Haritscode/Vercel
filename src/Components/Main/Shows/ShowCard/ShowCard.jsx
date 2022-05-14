import React, { useState } from 'react'
import {HiOutlineArrowSmRight} from 'react-icons/hi'
import {MdOutlineBookmarks} from 'react-icons/md'

export default function ShowCard({imgUrl,from,Name,Id}) {
    const ispresent=localStorage.getItem(Id);
    console.log(ispresent);
    const [booked, setbooked] = useState(ispresent?true:false);
    const [bookmarkclr,setbookmarkclr]=useState(ispresent?'purple':'white');
    const bookmarkHandler=()=>{
        if(booked)
        {
            setbooked(false);
            setbookmarkclr('white');
            localStorage.removeItem(Id);
        }
        else
        {
            setbooked(true);
            setbookmarkclr('purple')
            localStorage.setItem(Id,true)
        }
    }
  return (
    <>
    <div className='bg-darkpurple rounded-lg h-full'>
        <div className='flex flex-col gap-5 bg-showsbg relative right-3 top-2 rounded-lg pb-7'>
            <div>
                <img src={imgUrl} alt="none" className=' rounded-lg w-full h-56'/>
            </div>
            <div className='flex flex-col gap-5 bg-showsbg relative top-2 rounded-lg pb-7 px-3'>
            <div className='font-Nunito text-xl font-semibold bg-yellow-500 text-amber-800 px-4 py-2 rounded-lg w-fit'>
                {from}
            </div>
            <div className='font-Libre font-bold text-3xl text-white'>
                {Name}
            </div>
            <div className='flex justify-between items-center'>
                <button className='flex items-center gap-4 font-Nunito font-semibold text-2xl text-blue-700'>
                    <div className='inline'>More Info
                    </div>
                    <span>
                        <HiOutlineArrowSmRight size={35}/>
                    </span>
                </button>
                <div className='flex gap-3'>
                    <div className='text-2xl text-white'>|</div>
                    <button onClick={bookmarkHandler}><MdOutlineBookmarks color={bookmarkclr} size={32}/></button>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
