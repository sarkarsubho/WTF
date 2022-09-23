import * as types from "./action.types";
const initialState = {
  data: [],
  terms: [],
  location: [],
  isLoading: false,
  isError: false,
};

export const appReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GETDATALOADING:
      return { ...state, isError: false, isLoading: true };
    case types.GETDATASUCCESS:
      return {
        ...state,
        isError: false,
        isLoading: false,
        data: payload.data,
        terms: payload.terms,
      };
    case types.GETDATAERROR:
      return { ...state, isError: true, isLoading: false };
    case types.GETLOCATIONSUCCESS:
      return {
        ...state,
        isError: false,
        isLoading: false,
        location: payload[0].addressComponent,
      };
   
    default:
      return state;
  }
};
