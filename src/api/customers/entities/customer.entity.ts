
import {Orders} from './orders.entity'


export class Customers {
  CustomerID: number ;
CustomerName: string ;
ContactName: string ;
Address: string ;
City: string ;
PostalCode: string ;
Country: string ;
orders?: Orders[] ;
}
