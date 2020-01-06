import { PositionInterface } from "../position";
export interface HotelInterface {
  name: string;
  qualification: number;
  price: number;
  image?: string;
  position?: PositionInterface;
}
