import { useEffect, useState } from "react";

const ProgressBar = ({value = 0, onComplete = ()=>{} })=>{
    const [precent, setPercent] = useState(value);
    useEffect(()=>{
        setPercent(Math.min(100,(Math.max(0,value))))
        if(value >=100) 
          onComplete()
    },[value])

    return (
        <div className="progress">
           <span style={{color:precent >49 ?"white":"black"}}>{precent} %</span>
           <div
            role="progressbar" 
            // style={{width:`${precent}%`}} 
            style12={{width: `${precent}%`,transformOrigin:"left", transition: "width .3s"}}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={precent} 
            />

        </div>
    )
}

export default ProgressBar;