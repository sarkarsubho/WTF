import React from "react";
import { useEffect } from "react";
import axios from "axios"
export const Home = () => {

    useEffect(()=>{
      axios.post(`http://wtfup.me/gym_details/WTF-The-Fitness-Point-Gym/gym/plan`,{
        "gym_id":"GLKdIYAWDS2Q8"
        }).then(res=>console.log(res))
    },[])
  return <div>
    <h2>dfsdfsda</h2>

    <img src="https://d1e9q0asw0l2kk.cloudfront.net/terms_upload/1KCck9dUBDHVi-1656669740566WTF.png" alt="icon"></img>
  </div>;
};
