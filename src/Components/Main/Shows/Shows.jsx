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
            id:1
        },
        {
            imgUrl:"/Main/ShowCards/Img1a.jpg",
            from:"Bollywood",
            Name:"vijay Yesudas",
            id:2
        },
        {
            imgUrl:"/Main/ShowCards/Img1.jpg",
            from:"folk",
            Name:"Andrea jeremiah",
            id:3
        },
        {
            imgUrl:"/Main/ShowCards/Img2.jpg",
            from:"folk",
            Name:"Shilpa Rao",
            id:4
        },
        {
            imgUrl:"/Main/ShowCards/Img.jpg",
            from:"folk",
            Name:"Shilpa Rao",
            id:5
        },
        {
            imgUrl:"/Main/ShowCards/Img1a.jpg",
            from:"folk",
            Name:"Shilpa Rao",
            id:6
        },
        {
            imgUrl:"/Main/ShowCards/Img1.jpg",
            from:"folk",
            Name:"Shilpa Rao",
            id:7
        },
        {
            imgUrl:"/Main/ShowCards/Img2.jpg",
            from:"folk",
            Name:"Shilpa Rao",
            id:8
        },
        {
            imgUrl:"/Main/ShowCards/Img.jpg",
            from:"folk",
            Name:"Benny Dayal",
            id:9
        },
        {
            imgUrl:"/Main/ShowCards/Img1a.jpg",
            from:"Bollywood",
            Name:"vijay Yesudas",
            id:10
        },
        {
            imgUrl:"/Main/ShowCards/Img1.jpg",
            from:"folk",
            Name:"Andrea jeremiah",
            id:11
        },
        {
            imgUrl:"/Main/ShowCards/Img2.jpg",
            from:"folk",
            Name:"Shilpa Rao",
            id:12
        },
        {
            imgUrl:"/Main/ShowCards/Img.jpg",
            from:"folk",
            Name:"Shilpa Rao",
            id:13
        },
        {
            imgUrl:"/Main/ShowCards/Img1a.jpg",
            from:"folk",
            Name:"Shilpa Rao",
            id:14
        },
        {
            imgUrl:"/Main/ShowCards/Img1.jpg",
            from:"folk",
            Name:"Shilpa Rao",
            id:15
        },
        {
            imgUrl:"/Main/ShowCards/Img2.jpg",
            from:"folk",
            Name:"Shilpa Rao",
            id:16
        },{
            imgUrl:"/Main/ShowCards/Img.jpg",
            from:"folk",
            Name:"Benny Dayal",
            id:17
        },
        {
            imgUrl:"/Main/ShowCards/Img1a.jpg",
            from:"Bollywood",
            Name:"vijay Yesudas",
            id:18
        },
        {
            imgUrl:"/Main/ShowCards/Img1.jpg",
            from:"folk",
            Name:"Andrea jeremiah",
            id:19
        },
        {
            imgUrl:"/Main/ShowCards/Img2.jpg",
            from:"folk",
            Name:"Shilpa Rao",
            id:20
        },
        {
            imgUrl:"/Main/ShowCards/Img.jpg",
            from:"folk",
            Name:"Shilpa Rao",
            id:21
        },
        {
            imgUrl:"/Main/ShowCards/Img1a.jpg",
            from:"folk",
            Name:"Shilpa Rao",
            id:22
        },
        {
            imgUrl:"/Main/ShowCards/Img1.jpg",
            from:"folk",
            Name:"Shilpa Rao",
            id:23
        },
        {
            imgUrl:"/Main/ShowCards/Img2.jpg",
            from:"folk",
            Name:"Shilpa Rao",
            id:24
        }        
    ]
  return (
    <>
    <div className='flex flex-col gap-32 bg-bgtobalck relative -top-36'>
            <div className='flex px-8 md:px-24 md:justify-between justify-evenly items-center'>
                <h2 className='text-white font-Libre font-normal text-xl'>
                    <u className='decoration-blue-800 underline-offset-8'>Up</u>coming Shows
                </h2>
                <div className='text-white font-Nunito'>
                    <button className='text-yellow-600 font-semibold' onClick={viewBtnHandler}>{noofcards===4?"View All":"View Less"}</button>
                </div>
            </div>
        <div className='justify-center grid gap-y-36 grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 justify-items-center'>
        {
            showdata.slice(0,noofcards).map(({imgUrl,from,Name,id})=><ShowCard imgUrl={imgUrl} from={from} Name={Name} Id={id} key={uuidv4()}/>)
        }
        </div>
    </div>

    </>
  )
}
