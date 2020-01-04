import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const { DB_NAME, DB_URL, DB_USER, DB_PASSWORD } = process.env;
const url = `mongodb://${DB_USER}:${DB_PASSWORD}${DB_URL}/${DB_NAME}`;

mongoose.set("debug", true);
try {
  mongoose.connect(url);
} catch (err) {
  mongoose.createConnection(url);
}
export const connection = () => {
  mongoose.connection
    .once("open", () => console.log("MongoDB connection success"))
    .on("error", error => {
      throw error;
    });
};
