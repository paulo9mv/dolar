import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import apiReducer from "./reducer";

export const store = configureStore({
  reducer: {
    api: apiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
