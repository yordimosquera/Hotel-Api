import { Request, Response } from "express";
import { Services } from "../../services/hotel";

export const Controller = {
  findHotels: async (req: Request, res: Response) => {
    const data = await Services.findHotels(req.query);
    res.send({ data });
  },
  findHotel: async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = await Services.findHotel(id);
    res.send({ data });
  }
};
