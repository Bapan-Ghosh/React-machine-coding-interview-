import React, { useEffect, useState } from 'react'

const Carausal = () => {
  const [current,setCurrent] = useState(0)
  const imagaes = [
    "https://w0.peakpx.com/wallpaper/477/18/HD-wallpaper-range-rover-autobiography-2022.jpg",
    "https://www.hdcarwallpapers.com/download/range_rover_sv_intrepid_2022_4k_8k-5120x2880.jpg",
    "https://w0.peakpx.com/wallpaper/198/344/HD-wallpaper-land-rover-defender-130-first-edition-2022-3.jpg",
    "https://www.hdcarwallpapers.com/walls/2023_range_rover_p530_first_edition_5k_2-HD.jpg"             
]
 
  const handelincr = ()=>{
    (current === imagaes.length-1) ? setCurrent(0) :
     setCurrent( current+1 )
  }

  const handeldecr = ()=>{
    (current == 0) ? setCurrent(imagaes.length-1) : setCurrent(current-1)   
  }


  // we want to change the carausal image after 5 second 
  // so we have to use useeffect hook, that useeffect will be called after my
  // rendering

  useEffect(()=>{
   const timer =  setTimeout(()=>{
      handelincr()
    },5000)

    return ()=>{
       clearTimeout(timer)
    }

  },[current])
  
  return (
    <div className='flex justify-center items-center mt-4 gap-4'>
          <button onClick={handelincr} className='text-2xl bg-blue-700 text-white p-3 rounded-2xl hover:bg-blue-950'>prev</button>
          {imagaes.map((url,index)=>{
            return (
                  <img key={index} className={'h-[400px] w-[700px] ' +(current === index ? "block" : "hidden")} src={url} alt="" />
            )
          })}
          <button onClick={handeldecr} className='text-2xl bg-blue-700 text-white p-3 rounded-2xl hover:bg-blue-950'>Next</button>
    </div>
  )
}

export default Carausal