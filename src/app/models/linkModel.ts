import mongoose from "mongoose";
import { connect } from "@/dbConfig/dbconfig";

connect();

const linkSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  linkId: {
    type: String,
  },
  link: {
    type: String,
  },
});

const Link = mongoose.models.links || mongoose.model("links", linkSchema);
export default Link
