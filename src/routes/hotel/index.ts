import { Controller } from "../../controllers/hotel";

export const Hotel = {
  findHotels: {
    verb: "get",
    mountPoint: "/hotels",
    handler: Controller.findHotels
  },
  findHotel: {
    verb: "get",
    mountPoint: "/hotels/:id",
    handler: Controller.findHotel
  }
};
