import * as types from "./action.types";
import axios from "axios";
export const getData = (payload) => (dispatch) => {
  dispatch({ type: types.GETDATALOADING });
  axios
    .get(
      "https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231",payload
    )
    .then((res) => {
      console.log(res.data);
      dispatch({ type: types.GETDATASUCCESS, payload: res.data });
    })
    .catch((er) => {
      console.log(er);
      dispatch({ type: types.GETDATAERROR });
    });
};

export const getLocation=(payload)=>(dispatch)=>{

     axios.get("https://devapi.wtfup.me/gym/places").then((res)=>{
        console.log(res.data);
        dispatch({type:types.GETLOCATIONSUCCESS,payload:res.data.data})
     })
}
