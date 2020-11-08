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
  hasSubmittedData: boolean
  hasError: boolean
  isFetching: boolean
  isWaiting: boolean
}

const initialState: ApiState = {
  dolarEmReal: 0,
  dolarSemImposto: 0,
  dolarComImposto: 0,
  realSemImposto: 0,
  realComImposto: 0,
  iof: 0,
  hasSubmittedData: false,
  hasError: false,
  isFetching: false,
  isWaiting: false
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

        state.hasError = false;
      } catch (e) {
        state.hasError = true;
      }
    },
    setValues: (state, action) => {
      const payload = action.payload

      state.iof = action.payload.iof
      state.dolarSemImposto = payload.dolarSemImposto
      state.dolarComImposto = payload.dolarComImposto
      
      state.realSemImposto = state.dolarComImposto * state.dolarEmReal
      state.realComImposto = state.realSemImposto * (1 + payload.iof)

      state.isWaiting = true;
    },
    setFetching: (state, action) => {
      state.isFetching = true;
    },
    setSubmitted: (state, action) => {
      state.hasSubmittedData = true
      state.isWaiting = false;
    }
  },
});

//Async functions
export const fetchApi = (): AppThunk => (dispatch) => {
  dispatch(setFetching(true))
  fetch("https://economia.awesomeapi.com.br/all/USD-BRL")
    .then((res) => res.json())
    .then((res) => dispatch(setNewValues({res})))
    .catch(e => console.log(e))
    .finally(() => dispatch(setFetching(false)));
};

export const calculateExchange = (value: IExchangeFormData): AppThunk => (dispatch) => {
  const dolarSemImposto = value.dolar ? parseFloat(value.dolar.toString()) : 0
  const taxa = value.taxa ? (value.taxa / 100) : 0

  const dolarComImposto = dolarSemImposto + (dolarSemImposto * taxa)

  const iof = value.iof ? (1.1/100) : (6.4/100)

  dispatch(setValues({dolarSemImposto, taxa, dolarComImposto, iof}))
  setTimeout(function() {
    dispatch(setSubmitted({}))
  }, 1000)
}

export const {
  setNewValues,
  setValues,
  setFetching,
  setSubmitted
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

export const selectStatus = (state: RootState) => {
  return {
    hasError: state.api.hasError,
    hasSubmittedData: state.api.hasSubmittedData,
    isWaiting: state.api.isWaiting
  }
}

export default apiSlice.reducer;
