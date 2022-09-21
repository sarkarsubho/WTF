import React from "react";
import { useEffect } from "react";
import axios from "axios"
import { useState } from "react";
import { Cart } from "../components/Cart";
export const Home = () => {
    const [data,setData]=useState([]);
    const [terms,setTerms]=useState([]);

    useEffect(()=>{
      axios.get("https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231").then(res=>{
        console.log(res.data);
        setData(res.data.data);
        setTerms(res.data.terms)
      })
    },[])
  return <div>
    <div>
        <h2>Filters</h2>

        <div>
            <h4>
              Location  
            </h4>
            
            
        </div>
        <div></div>
        <div></div>
    </div>
    <div>
        {
        data.map((e)=>{
            return <Cart key={e.user_id}></Cart>

        })
    }
    </div>
    

  </div>;
};
