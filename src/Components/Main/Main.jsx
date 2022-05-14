import React from 'react'
import Circularbars from '../circular/Circularbars'
import Reviews from './Reviews/Reviews'
import Shows from './Shows/Shows'
import { v4 as uuidv4 } from 'uuid';


export default function Main() {
  const Circularbardata=[
    {
      color:'rgb(202, 69, 157)',
      imgUrl:'/Main/Vector.svg',
      count:344,
      label:'Likes',
      btn:false
    }
    ,
    {
      color:'rgb(202, 69, 157)',
      imgUrl:'/Main/Vector1.svg',
      count:0,
      label:'Label',
      btn:true
    },
    {
      color:'rgb(202, 69, 157)',
      imgUrl:'/Main/Vector1.svg',
      count:0,
      label:'Label',
      btn:true
    },
    {
      color:'rgb(202, 69, 157)',
      imgUrl:'/Main/Vector1.svg',
      count:0,
      label:'Label',
      btn:true
    }
  ]
  return (
    <div className='flex flex-col'>
      <div className='relative w-2/3 md:w-3/4 flex justify-center h-screen items-center ml-4 2xl:ml-0'>
      <div className='flex flex-col items-start gap-5'>
        <h2 className='font-Libre font-semibold text-white md:text-6xl text-5xl'>Cari Cari</h2>
        <p className='font-Nunito text-white md:text-3xl text-2xl font-normal md:w-3/4 leading-8'>Live from their sofa to yours. Get closer to your favorite artists,and never miss out.</p>
      </div>
    </div>
    <div className='grid md:grid-cols-2  xl:grid-cols-4 bg-transparent -mt-96 items-center'>
      {Circularbardata.map(({color,imgUrl,count,label,btn})=><div key={uuidv4()}><Circularbars Color={color} ImgUrl={imgUrl} Count={count} Label={label} Btn={btn}/></div>)}
    </div>
    <div className='-mt-24'>
      <Shows/>
    </div>
    <div className='col-4 justify-evenly pt-28 bg-black h-screen'>
      <Reviews/>
    </div>
</div>

  )
}