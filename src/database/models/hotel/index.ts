import { Document, Model, model } from 'mongoose'
import { HotelInterface } from '../../../interfaces/hotel'
import {HotelSchema} from '../../schemas/hotel'

export interface HotelModel extends HotelInterface, Document { }

export const Hotel: Model<HotelModel> = model<HotelModel>('hotels', HotelSchema)