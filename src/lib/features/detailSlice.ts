import { createSlice } from "@reduxjs/toolkit";
import UserState from "./types";

const initialState: UserState = {
  email: "",
  mobile: "",
  password: "",
  name: "",
  address: "",
  dob: "",
  desc: "",
  employmentStatus: "",
};

export const detailSlice: any = createSlice({
  name: "details",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setMobile: (state, action) => {
      state.mobile = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setDob: (state, action) => {
      state.dob = action.payload;
    },
    setDesc: (state, action) => {
      state.desc = action.payload;
    },
    setEmploymentStatus: (state, action) => {
      state.employmentStatus = action.payload;
    },
  },
});

export const {
  setEmail,
  setMobile,
  setAddress,
  setPassword,
  setEmploymentStatus,
  setDob,
  setDesc,
  setName,
} = detailSlice.actions;

export default detailSlice.reducer;
