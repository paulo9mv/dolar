import { createSlice } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "./store";

interface ApiState {
  dolar: number
}

const initialState: ApiState = {
  dolar: NaN
};

//Update state
export const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    setNewValues: (state, action) => {
      try {
        const resJson = action.payload.res;
        state.dolar = resJson.USD.ask;
      } catch (e) {
        console.error(e)
      }
    },
  },
});

//Async functions
export const fetchApi = (): AppThunk => (dispatch) => {
  fetch("https://economia.awesomeapi.com.br/all/USD-BRL")
    .then((res) => res.json())
    .then((res) => dispatch(setNewValues({res})))
    .catch(function (error) {
      console.log(error.message);
    });
};

export const {
  setNewValues
} = apiSlice.actions;

//Get data
export const selectData = (state: RootState) => {
  return {
    value: state.api.dolar
  };
};

export default apiSlice.reducer;
