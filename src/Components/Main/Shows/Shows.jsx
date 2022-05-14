import {React,useState} from 'react'
import ShowCard from './ShowCard/ShowCard'
import { v4 as uuidv4 } from 'uuid';

export default function Shows() {
    const [noofcards, setnoofcards] = useState(4);
    const viewBtnHandler=()=>{
        if(noofcards===4)
        {
            setnoofcards(showdata.length);
        }
        else{
            setnoofcards(4);
        }

    }
    const showdata=[
        {
            imgUrl:"/Main/ShowCards/Img.jpg",
            from:"folk",
            Name:"Benny Dayal",
        },
        {
            imgUrl:"/Main/ShowCards/Img1a.jpg",
            from:"Bollywood",
            Name:"vijay Yesudas",
        },
        {
            imgUrl:"/Main/ShowCards/Img1.jpg",
            from:"folk",
            Name:"Andrea jeremiah",
        },
        {
            imgUrl:"/Main/ShowCards/Img2.jpg",
            from:"folk",
            Name:"Shilpa Rao",
        },
        {
            imgUrl:"/Main/ShowCards/Img.jpg",
            from:"folk",
            Name:"Shilpa Rao",
        },
        {
            imgUrl:"/Main/ShowCards/Img1a.jpg",
            from:"folk",
            Name:"Shilpa Rao",
        },
        {
            imgUrl:"/Main/ShowCards/Img1.jpg",
            from:"folk",
            Name:"Shilpa Rao",
        },
        {
            imgUrl:"/Main/ShowCards/Img2.jpg",
            from:"folk",
            Name:"Shilpa Rao",
        },
        {
            imgUrl:"/Main/ShowCards/Img.jpg",
            from:"folk",
            Name:"Benny Dayal",
        },
        {
            imgUrl:"/Main/ShowCards/Img1a.jpg",
            from:"Bollywood",
            Name:"vijay Yesudas",
        },
        {
            imgUrl:"/Main/ShowCards/Img1.jpg",
            from:"folk",
            Name:"Andrea jeremiah",
        },
        {
            imgUrl:"/Main/ShowCards/Img2.jpg",
            from:"folk",
            Name:"Shilpa Rao",
        },
        {
            imgUrl:"/Main/ShowCards/Img.jpg",
            from:"folk",
            Name:"Shilpa Rao",
        },
        {
            imgUrl:"/Main/ShowCards/Img1a.jpg",
            from:"folk",
            Name:"Shilpa Rao",
        },
        {
            imgUrl:"/Main/ShowCards/Img1.jpg",
            from:"folk",
            Name:"Shilpa Rao",
        },
        {
            imgUrl:"/Main/ShowCards/Img2.jpg",
            from:"folk",
            Name:"Shilpa Rao",
        },{
            imgUrl:"/Main/ShowCards/Img.jpg",
            from:"folk",
            Name:"Benny Dayal",
        },
        {
            imgUrl:"/Main/ShowCards/Img1a.jpg",
            from:"Bollywood",
            Name:"vijay Yesudas",
        },
        {
            imgUrl:"/Main/ShowCards/Img1.jpg",
            from:"folk",
            Name:"Andrea jeremiah",
        },
        {
            imgUrl:"/Main/ShowCards/Img2.jpg",
            from:"folk",
            Name:"Shilpa Rao",
        },
        {
            imgUrl:"/Main/ShowCards/Img.jpg",
            from:"folk",
            Name:"Shilpa Rao",
        },
        {
            imgUrl:"/Main/ShowCards/Img1a.jpg",
            from:"folk",
            Name:"Shilpa Rao",
        },
        {
            imgUrl:"/Main/ShowCards/Img1.jpg",
            from:"folk",
            Name:"Shilpa Rao",
        },
        {
            imgUrl:"/Main/ShowCards/Img2.jpg",
            from:"folk",
            Name:"Shilpa Rao",
        }        
    ]
  return (
    <>
    <div className='flex flex-col gap-32'>
        <div className='flex px-24 justify-between items-center'>
            <h2 className='text-white font-Libre font-normal text-xl'>
                <u className='decoration-blue-800 underline-offset-8'>Up</u>coming Shows
            </h2>
            <div className='text-white font-Nunito'>
                <button className='text-yellow-600 font-semibold' onClick={viewBtnHandler}>{noofcards===4?"View All":"View Less"}</button>
            </div>
        </div>
        <div className='px-24 justify-evenly grid gap-y-36 bg-bgtobalck md:grid-cols-4'>
        {
            showdata.slice(0,noofcards).map(({imgUrl,from,Name})=><div key={uuidv4()}><ShowCard imgUrl={imgUrl} from={from} Name={Name}/></div>)
        }
        </div>
    </div>

    </>
  )
}
