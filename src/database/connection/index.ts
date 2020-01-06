import mongoose from "mongoose";
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../../../.env") });

const { DB_NAME, DB_URL, DB_USER, DB_PASSWORD, NODE_ENV } = process.env;
const USER_DATA =
  NODE_ENV === "production"
    ? `${DB_USER}:${DB_PASSWORD}`
    : `${DB_USER}${DB_PASSWORD}`;
const url = `mongodb://${USER_DATA}${DB_URL}/${DB_NAME}`;

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
