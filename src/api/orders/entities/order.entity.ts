import {Employees} from './employees.entity'
import {Shippers} from './shippers.entity'
import {OrderDetails} from './orderDetails.entity'

export class OrderEntity {
  OrderID: number ;
CustomerID: number ;
EmployeeID: number ;
OrderDate: Date ;
ShipperID: number ;
Customer?: Customers ;
Employee?: Employees ;
Shipper?: Shippers ;
orderdetails?: OrderDetails[] ;
}
