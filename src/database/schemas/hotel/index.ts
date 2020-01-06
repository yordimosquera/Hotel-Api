import { Schema } from "mongoose";
import { DEFAULT_HOTEL_IMAGE } from "../../../utils/constants";

const PositionSchema = new Schema({
  latitud: {
    type: String
  },
  longitude: {
    type: String
  }
});

export const HotelSchema: Schema = new Schema({
  name: { type: String, required: true },
  qualification: {
    required: true,
    type: Number,
    default: 1
  },
  price: {
    required: true,
    type: Number,
    default: 0
  },
  image: {
    type: String,
    default: DEFAULT_HOTEL_IMAGE
  },
  position: {
    type: PositionSchema
  }
});
