import { Hotel } from "../../database/models/hotel";
import { ErrorResponses } from "../../errorResponses";
import { HotelInterface } from "../../interfaces/hotel";

export const Services = {
  findHotels: async (query: any) => {
    try {
      const data = await (typeof query !== "undefined"
        ? Hotel.find(query)
        : Hotel.find());
      return { items: data, size: data.length };
    } catch (error) {
      return ErrorResponses.findHotels(error);
    }
  },
  findHotel: async (id: string) => {
    try {
      const data = await Hotel.findById(id);
      return data;
    } catch (error) {
      return ErrorResponses.findHotel(id, error);
    }
  }
};
