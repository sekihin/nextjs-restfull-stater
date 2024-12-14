
import {Orders} from './orders.entity'


export class EmployeeEntity {
  EmployeeID: number ;
LastName: string ;
FirstName: string ;
BirthDate: Date ;
Photo: string ;
Notes: string ;
orders?: Orders[] ;
}
