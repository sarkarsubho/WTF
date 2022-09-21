import React from "react";
import { useEffect } from "react";

export const Details = () => {
    const getData= async()=>{
        await fetch("https://wtfup.me/gym_details/WTF-The-Fitness-Point-Gym/gym/plan",{
            method:"POST",
            mode: 'cors',
            credentials: 'same-origin',
            body: JSON.stringify({
                "gym_id":"GLKdIYAWDS2Q8"
                }),
                
            headers :{"Content-Type":"application/json"}
        }).then(data=>data.json()).then(res=>console.log(res))
    }
    useEffect(()=>{
      getData()
    },[])
  return <div>Details</div>;
};
