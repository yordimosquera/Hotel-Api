import express from 'express'
import { Hotel } from '../../database/models/hotel'
import { HotelInterface } from '../../interfaces/hotel'

export const Services = {
    findHotels: async (query: any) => {
        try {
            const data = await (typeof query !== 'undefined' ? Hotel.find(query) : Hotel.find())
            return {length: data.length, data}
        } catch (error) {
            return `Error al encontrar los hoteles.--->${error}`
        }
    }
}