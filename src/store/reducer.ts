import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "./store";

const initialState = {

};

//Update state
export const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    
  },
});

//Async functions
export const fetchApi = (): AppThunk => (dispatch) => {
  fetch("https://economia.awesomeapi.com.br/all/USD-BRL")
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch(function (error) {
      console.log(error.message);
    });
};

export default apiSlice.reducer;
