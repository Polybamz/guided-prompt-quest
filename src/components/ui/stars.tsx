import { useState, useEffect } from "react"
import { Sparkles } from "lucide-react"

export const Stars = () => {
    const [stars, setStars] = useState<Array<{
          left: string,
          top:string
          size:number,
          delay:number,
          duration: string,
          w: number,
          h:number
        }>>([])

         useEffect(()=>{
     const generateStars  = () => {
       const starArray = [];
      for (let i = 0; i < 70; i++){   
        console.log(i) 
        starArray.push({
          size: Math.floor(Math.random()*3) + 1,
          top: `${Math.random()*100}%`,
          left: `${Math.random()*100}%`,
          duration: `${Math.random()*20+20}s`,
          delay:Math.random()*2,
          h: Math.floor(Math.random()*5)+1,
          w: Math.floor(Math.random()*5)+1
  
        })
      }
      setStars(starArray)
     }
     generateStars()
    //  const interval = setInterval(()=> {
    //   generateStars();
    //  }, Math.random()*300+1000)
    //  return ()=> clearInterval(interval)
    },[])

    return (<>

        { stars.map((star, index)=>(   
        <div key={index} className={`h-1 w-1 stars shadow-sm size-[${star.size}] `}
        style={
          {
            height: `${star.h}`,
            width: `${star.w}`,
            position: 'absolute',
            animationDelay: `${star.delay}s`, 
            top: star.top,
            left: star.left,
            zIndex: 1,
            borderRadius: star.size,
            animationDuration: star.duration
          }
        }
        />
      )) }
    </>
     
    )
}