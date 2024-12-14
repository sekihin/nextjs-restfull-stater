
import {Orders} from './orders.entity'

export class ShipperEntity {
  ShipperID: number ;
  ShipperName: string ;
  Phone: string ;
  orders?: Orders[] ;
}
