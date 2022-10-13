import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EmployeeListComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[
    EmployeeListComponent
  ]
})
export class Module2Module { }
