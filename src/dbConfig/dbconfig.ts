import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGOURI!);
    const connection =  mongoose.connection;

    connection.on("connected", () => {
      console.log("Connection established");
    });

    connection.on("error", (err) => {
      console.log("Connection error", err);
      process.exit();
    });
  } catch (error) {
    console.log(error);
  }
}


