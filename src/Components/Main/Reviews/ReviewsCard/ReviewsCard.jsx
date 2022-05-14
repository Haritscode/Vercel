import React from 'react'

export default function ReviewsCard({Imgurl,Name,Flag,Review}) {
  return (
    <>
        <div className='bg-blue-500 rounded-2xl'>
            <div className='flex flex-col gap-8 p-12 border-4 border-yellow-600 rounded-2xl bg-black relative right-4 top-4'>
                <div className='flex gap-8'>
                    <img src={Imgurl} alt="none"/>
                    <div className='flex flex-col gap-2'>
                        <span className='text-white font-Quattrocento'>{Name}</span>
                        <div className='flex gap-6'>
                            <img src={Flag} alt="none" />
                            <div className='text-yellow-600'>PALO ALTO, CA</div>
                        </div>
                    </div>
                </div>
                <div className='text-white  font-Nunito font-normal text-2xl'>
                    {Review}
                </div>
            </div>
        </div>
    </>
  )
}
