import {Suppliers} from './suppliers.entity'
import {Categories} from './categories.entity'
import {OrderDetails} from './orderDetails.entity'


export class ProductEntity {
  ProductID: number ;
  ProductName: string ;
  SupplierID: number ;
  CategoryID: number ;
  Unit: string ;
  Price: number ;
  Supplier?: Suppliers ;
  Category?: Categories ;
  orderdetails?: OrderDetails[] ;
}
