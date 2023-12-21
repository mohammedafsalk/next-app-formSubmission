import { connect } from "@/dbConfig/dbconfig";
import User from "../models/userModel";
import Link from "../models/linkModel";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password, mobile, name, address, dob, desc } =
      reqBody.details;

    const user = await User.findOne({
      $or: [{ email: email }, { mobile: mobile }],
    });
    if (user)
      return NextResponse.json({
        success: false,
        message: "User already exists",
      });
    const linkId = uuidv4();

    const link = `http://localhost:3000/formDetails/${linkId}`;

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      email,
      password: hashedPassword,
      mobile,
      name,
      dob,
      address,
      linkId: linkId,
      addressDetails: desc,
      empStatus: reqBody.status,
    });
    await newUser.save();
    const userId = newUser._id;
    
    const newLink = new Link({
      userId: userId,
      linkId: linkId,
      link: link,
    });
    await newLink.save();
    return NextResponse.json({ success: true, link });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error });
  }
}
