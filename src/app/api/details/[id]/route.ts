import { connect } from "@/dbConfig/dbconfig";
import Link from "@/app/models/linkModel";

import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const id = request.url.split("details/")[1];

    if (id === undefined || id === null) {
      return NextResponse.json({
        success: false,
        message: "Couldnt fetch data",
      });
    }
    const link = await Link.find({ linkId: id }).populate("userId");
    return NextResponse.json({ success: true, link });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong ",
    });
  }
}
