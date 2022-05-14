import {React,useState} from 'react'
import {BiSearch} from "react-icons/bi";
import {FiShoppingBag} from 'react-icons/fi';

export default function Navbar() {
    const [searchicon, setsearchicon] = useState(true)
    const [value,setvalue]=useState("");
    const searchbtnHandler=()=>{
        if(searchicon)
        {
            setsearchicon(false);
            console.log(searchicon)
        }
        else{
            setsearchicon(true)
            console.log(searchicon)
        }
    }
  return (
    <>
        <div className='px-3 md:px-24 lg:px-48  flex justify-between bg-transparent'>
            <img src="./Navbar/image 52.svg" alt="none" className='h-16' />
            <div className='flex items-center scale-105'>
                <ol className='flex gap-2 md:gap-10 text-white text-xl font-normal items-center'>
                    <li>
                            {searchicon?
                            <button onClick={searchbtnHandler} className='flex gap-1 items-center justify-center'>
                                <BiSearch color='white' size={window.innerWidth<768?50:20}/>
                                <span className='hidden md:block'>Search</span>
                            </button>
                            :
                            <div>
                                <label htmlFor="searchbox"></label>
                                <input type="search" id="searchbox" onChange={e=>setvalue(e.target.value)} value={value} className="text-black p-1 decoration-slice rounded-md" onBlur={()=>value.length!==0?setsearchicon(false):setsearchicon(true)}/>
                                </div>}
                    </li>
                    <li>
                        <button className='hidden md:block'>Help</button>
                    </li>
                    <li>
                        <button className='hidden md:block'>Account</button>
                    </li>
                    <li>
                        <button>
                            <FiShoppingBag size={window.innerWidth<768?40:20}/>
                        </button>
                    </li>
                </ol>
            </div>
        </div>
    </>
  )
}
