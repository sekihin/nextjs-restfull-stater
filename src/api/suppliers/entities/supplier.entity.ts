import {Products} from './products.entity'

export class SupplierEntity {
  SupplierID: number ;
  SupplierName: string ;
  ContactName: string ;
  Address: string ;
  City: string ;
  PostalCode: string ;
  Country: string ;
  Phone: string ;
  products?: Products[] ;
}
