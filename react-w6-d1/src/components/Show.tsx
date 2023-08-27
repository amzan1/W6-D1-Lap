import React, { useEffect, } from 'react'
type character={
    image:string;
    id:number
}
function Show() {
    const [img,setImg]=React.useState<character[]>([]);

    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => setImg(data.results))
    },[])
  return (
    <div>
        <div className=' flex flex-wrap mx-20 justify-center items-center my-10 gap-4'>
        {img.map((itme) =>(
            <div key={itme.id}>
                <a href={`/detal/${itme.id}`}><img src={itme.image} alt="" className=' w-72 hover:w-80 border  border-solid hover:border-zinc-500 hover:shadow-lg hover:shadow-zinc-500/40'/></a>
            </div>

        ))}
        </div>
    </div>
  )
}

export default Show