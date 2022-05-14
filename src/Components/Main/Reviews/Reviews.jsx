import {useState} from 'react'
import {BiLeftArrowAlt,BiRightArrowAlt} from 'react-icons/bi'
import ReviewsCard from './ReviewsCard/ReviewsCard';
import { v4 as uuidv4 } from 'uuid';

export default function Reviews() {
    const [start,setstart] = useState(0);
    const [to, setto] = useState(3);
    const Reviewdata=[
        {
            imgUrl:'./Main/Reviews/Img.svg',
            Name:'Hellen Jummy',
            flag:'./Main/Reviews/Flags/amaricanflag.svg',
            review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo similique repudiandae et corporis animi eaque commodi sapiente odit ducimus natus laborum nam numquam, temporibus ut iure ad nisi quisquam! Repudiandae.'
        },
        {
            imgUrl:'./Main/Reviews/Img.svg',
            Name:'Isaac Oluwatemilorun',
            flag:'./Main/Reviews/Flags/Italy.svg',
            review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo similique repudiandae et corporis animi eaque commodi sapiente odit ducimus natus laborum nam numquam, temporibus ut iure ad nisi quisquam! Repudiandae.'
        },
        {
            imgUrl:'./Main/Reviews/Img.svg',
            Name:'Hellen Jummy',
            flag:'./Main/Reviews/Flags/amaricanflag.svg',
            review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo similique repudiandae et corporis animi eaque commodi sapiente odit ducimus natus laborum nam numquam, temporibus ut iure ad nisi quisquam! Repudiandae.'
        },
        {
            imgUrl:'./Main/Reviews/Img.svg',
            Name:'Isaac Oluwatemilorun',
            flag:'./Main/Reviews/Flags/Italy.svg',
            review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo similique repudiandae et corporis animi eaque commodi sapiente odit ducimus natus laborum nam numquam, temporibus ut iure ad nisi quisquam! Repudiandae.'
        },
        {
            imgUrl:'./Main/Reviews/Img.svg',
            Name:'Hellen Jummy',
            flag:'./Main/Reviews/Flags/amaricanflag.svg',
            review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo similique repudiandae et corporis animi eaque commodi sapiente odit ducimus natus laborum nam numquam, temporibus ut iure ad nisi quisquam! Repudiandae.'
        },
        {
            imgUrl:'./Main/Reviews/Img.svg',
            Name:'Hellen Jummy',
            flag:'./Main/Reviews/Flags/amaricanflag.svg',
            review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo similique repudiandae et corporis animi eaque commodi sapiente odit ducimus natus laborum nam numquam, temporibus ut iure ad nisi quisquam! Repudiandae.'
        },
        {
            imgUrl:'./Main/Reviews/Img.svg',
            Name:'Isaac Oluwatemilorun',
            flag:'./Main/Reviews/Flags/Italy.svg',
            review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo similique repudiandae et corporis animi eaque commodi sapiente odit ducimus natus laborum nam numquam, temporibus ut iure ad nisi quisquam! Repudiandae.'
        },
        {
            imgUrl:'./Main/Reviews/Img.svg',
            Name:'Hellen Jummy',
            flag:'./Main/Reviews/Flags/amaricanflag.svg',
            review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo similique repudiandae et corporis animi eaque commodi sapiente odit ducimus natus laborum nam numquam, temporibus ut iure ad nisi quisquam! Repudiandae.'
        },
        {
            imgUrl:'./Main/Reviews/Img.svg',
            Name:'Isaac Oluwatemilorun',
            flag:'./Main/Reviews/Flags/Italy.svg',
            review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo similique repudiandae et corporis animi eaque commodi sapiente odit ducimus natus laborum nam numquam, temporibus ut iure ad nisi quisquam! Repudiandae.'
        },
        {
            imgUrl:'./Main/Reviews/Img.svg',
            Name:'Hellen Jummy',
            flag:'./Main/Reviews/Flags/amaricanflag.svg',
            review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo similique repudiandae et corporis animi eaque commodi sapiente odit ducimus natus laborum nam numquam, temporibus ut iure ad nisi quisquam! Repudiandae.'
        },
        {
            imgUrl:'./Main/Reviews/Img.svg',
            Name:'Hellen Jummy',
            flag:'./Main/Reviews/Flags/amaricanflag.svg',
            review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo similique repudiandae et corporis animi eaque commodi sapiente odit ducimus natus laborum nam numquam, temporibus ut iure ad nisi quisquam! Repudiandae.'
        },
        {
            imgUrl:'./Main/Reviews/Img.svg',
            Name:'Isaac Oluwatemilorun',
            flag:'./Main/Reviews/Flags/Italy.svg',
            review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo similique repudiandae et corporis animi eaque commodi sapiente odit ducimus natus laborum nam numquam, temporibus ut iure ad nisi quisquam! Repudiandae.'
        },
        {
            imgUrl:'./Main/Reviews/Img.svg',
            Name:'Hellen Jummy',
            flag:'./Main/Reviews/Flags/amaricanflag.svg',
            review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo similique repudiandae et corporis animi eaque commodi sapiente odit ducimus natus laborum nam numquam, temporibus ut iure ad nisi quisquam! Repudiandae.'
        },
        {
            imgUrl:'./Main/Reviews/Img.svg',
            Name:'Isaac Oluwatemilorun',
            flag:'./Main/Reviews/Flags/Italy.svg',
            review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo similique repudiandae et corporis animi eaque commodi sapiente odit ducimus natus laborum nam numquam, temporibus ut iure ad nisi quisquam! Repudiandae.'
        },
        {
            imgUrl:'./Main/Reviews/Img.svg',
            Name:'Hellen Jummy',
            flag:'./Main/Reviews/Flags/amaricanflag.svg',
            review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo similique repudiandae et corporis animi eaque commodi sapiente odit ducimus natus laborum nam numquam, temporibus ut iure ad nisi quisquam! Repudiandae.'
        },
        
    ]
    const [reviescount, setreviescount] = useState(1);
    const totolreviews=Math.ceil(Reviewdata.length/3);
    const reviewsLeftBtnHandler=()=>{
        if(reviescount>1)
        {
            setreviescount(reviescount-1);
            setstart(start-3);
            setto(to-3)
        }
    }
    const reviewsRightBtnHandler=()=>{
        if(reviescount<totolreviews)
        {
            setreviescount(reviescount+1);
            setstart(start+3);
            setto(to+3);
        }
        
    }
  return (
    <>
    <div className='flex justify-between px-24 h-fit'>
        <h1 className='text-white font-Libre text-4xl font-normal'><span className="underline underline-offset-4 decoration-blue-800">Re</span>views</h1>
        <div className='flex items-center gap-5'>
            <span className='text-white'>{reviescount}/{totolreviews}</span>
            <div className='flex'>
                <button disabled={reviescount>1?false:true} onClick={reviewsLeftBtnHandler}>{<BiLeftArrowAlt color='white' size={30}/>}</button>
                <button disabled={reviescount<totolreviews?false:true} onClick={reviewsRightBtnHandler}>{<BiRightArrowAlt color='white'size={30}/>}</button>
            </div>
        </div>
    </div>
    <div className='grid md:grid-cols-3 gap-36 mt-24 px-8 pb-24'>
        {Reviewdata.slice(start,to).map(({imgUrl,Name,flag,review})=><div key={uuidv4()}>
            <ReviewsCard Imgurl={imgUrl} Name={Name} Flag={flag} Review={review}/>
        </div>)}
    </div>
</>
  )
}
