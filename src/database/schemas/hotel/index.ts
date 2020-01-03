import {  Schema } from 'mongoose'
import {DEFAULT_HOTEL_IMAGE} from '../../../utils/constants'

export const HotelSchema: Schema = new Schema({
    name: { type: String, required: true },
    stars: {
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
    amenities: {
        type: [String],
        required: true
    }
})
