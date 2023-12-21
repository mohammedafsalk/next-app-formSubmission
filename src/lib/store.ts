import { configureStore } from "@reduxjs/toolkit";
import { detailSlice } from "./features/detailSlice";

export const store = configureStore({
  reducer: {
    [detailSlice.name]: detailSlice.reducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
