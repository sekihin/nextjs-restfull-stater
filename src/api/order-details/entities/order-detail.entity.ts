
import {Orders} from './orders.entity'
import {Products} from './products.entity'


export class OrderDetailEntity {
  OrderDetailID: number ;
OrderID: number ;
ProductID: number ;
Quantity: number ;
Order?: Orders ;
Product?: Products ;
}
