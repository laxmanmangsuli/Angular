import { Component, OnInit } from '@angular/core';
import { BankDatails } from 'src/app/bank-datails';
import { User } from 'src/app/user';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   name="Kisan"
 u:User={
   uid: 101,
   uname: 'Laxman',
   uadd: 'Sangli',
   bank: new BankDatails
 }
 u1:User={
   uid: 102,
   uname: 'Swapnil',
   uadd: 'Nagar',
   bank: new BankDatails
 }
 u2:User={
   uid: 103,
   uname: 'kisan',
   uadd: 'Yavatmal',
   bank: new BankDatails
 }
b:BankDatails={
  acno: 987654,
  bankname: 'BIO',
  bankuname: 'lucky',
  bankupass: 'lucky123'
}


 uarr:User[]=[this.u,this.u1,this.u2]
 
sname:string="Kisan";
onclick(){
  alert("Successfully")
  console.log(this.sname);
  this.name="Lucky"
  this.fno;
  this.sno;
  this.fno+this.sno;
}
j(){
  this.name="Laxman"
}
k(){
  this.name="Swapnil"
}
tname:string;

fno:number;
sno:number;

}
