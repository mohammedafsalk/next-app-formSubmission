import mongoose from "mongoose";
import { connect } from "@/dbConfig/dbconfig";

connect();

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  mobile: {
    type: Number,
  },

  name: {
    type: String,
  },

  dob: {
    type: String,
  },
  address: {
    type: String,
  },

  addressDetails: {
    type: String,
  },

  empStatus: {
    type: String,
  },
});

const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;
