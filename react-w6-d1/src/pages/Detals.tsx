import React from 'react'
import {useParams} from "react-router-dom";

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

type character={
    image:string;
    id:number;
    name:string;
    status:string;
    species:string;
    gender:string;

}

function Detals() {
    const [detail,setDetail]=React.useState<character[]>([]);
    const { id } = useParams();
    const char = detail.find((char)=>char.id == id)
    

    
    React.useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => setDetail(data.results))
    },[])
  return (
    <div>
        <Navbar/>
        <div className='flex justify-center items-center my-32'>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <img className="rounded-t-lg w-full  rounded-lg" src={char?.image} alt={char?.name} />
                <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{char?.name}</h5>
                    <p className="mb-3 font-normal text-white dark:text-white"> The status:{char?.status}</p>
                    <p className="mb-3 font-normal text-white dark:text-white"> The species:{char?.species}</p>
                    <p className="mb-3 font-normal text-white dark:text-white"> The gender:{char?.gender}</p>

                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Detals