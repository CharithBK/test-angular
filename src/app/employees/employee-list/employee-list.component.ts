import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/shared/employee.model';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.sass']
})
export class EmployeeListComponent implements OnInit {

  list: Employee[];
  constructor(
    private service: EmployeeService ,
    private firestore: AngularFirestore,
    private toastor: ToastrService
    ) { }
  ngOnInit() {

    this.service.getEmployees().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() as any
        } as Employee;
      })
    });

  }

  onEdit(emp: Employee) {
    this.service.fromData = Object.assign({}, emp);
  }
  onDelete(id: string) {
    if(confirm("Are you sure to delete this record?")){
       this.firestore.doc('employee/' +id).delete();
       this.toastor.warning("Employee Deleted");
    }
    }
}
