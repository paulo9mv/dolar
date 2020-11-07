import { createSlice } from "@reduxjs/toolkit";
import { IExchangeFormData } from "../components/ExchangeForm";
import { AppThunk, RootState } from "./store";

interface ApiState {
  dolarEmReal: number
  dolarSemImposto: number
  dolarComImposto: number
  realSemImposto: number
  realComImposto: number
  iof: number
}

const initialState: ApiState = {
  dolarEmReal: 0,
  dolarSemImposto: 0,
  dolarComImposto: 0,
  realSemImposto: 0,
  realComImposto: 0,
  iof: 0
};

//Update state
export const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    setNewValues: (state, action) => {
      try {
        const resJson = action.payload.res;
        state.dolarEmReal = parseFloat(resJson.USD.ask);
      } catch (e) {
        console.error(e)
      }
    },
    setValues: (state, action) => {
      const payload = action.payload

      state.iof = action.payload.iof
      state.dolarSemImposto = payload.dolarSemImposto
      state.dolarComImposto = payload.dolarComImposto
      
      state.realSemImposto = state.dolarComImposto * state.dolarEmReal
      state.realComImposto = state.realSemImposto * (1 + payload.iof)
      console.log('payload', payload)
    }
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

export const calculateExchange = (value: IExchangeFormData): AppThunk => (dispatch) => {
  const dolarSemImposto = value.dolar ? value.dolar : 0
  const taxa = value.taxa ? (value.taxa / 100) : 0

  const dolarComImposto = dolarSemImposto + (dolarSemImposto * taxa)
  console.log(dolarSemImposto, dolarSemImposto * taxa)

  const iof = value.iof ? (1.1/100) : (6.4/100)

  dispatch(setValues({dolarSemImposto, taxa, dolarComImposto, iof}))
}

export const {
  setNewValues,
  setValues
} = apiSlice.actions;

//Get data
export const selectData = (state: RootState) => {
  return {
    dolarEmReal: state.api.dolarEmReal,
    dolarSemImposto: state.api.dolarSemImposto,
    dolarComImposto: state.api.dolarComImposto,
    realSemImposto: state.api.realSemImposto,
    realComImposto: state.api.realComImposto,
    iof: state.api.iof
  };
};

export default apiSlice.reducer;
