
import { Controller} from '../../controllers/hotel'

export const Hotel = {
    find: {
        verb: 'get',
        mountPoint: '/hotel',
        handler: Controller.findHotels
    }
}