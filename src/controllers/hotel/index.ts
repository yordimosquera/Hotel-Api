import { Request, Response, NextFunction } from 'express'
import { Services } from  '../../services/hotel'

export const Controller = {

    findHotels: async (req: Request, res: Response) => {
        const data = await Services.findHotels(req.query)
        res.send({ data })
    }
}
