import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})
export class EmployeeComponent implements OnInit {

  constructor(
    public service: EmployeeService,
    private firestore: AngularFirestore,
    private toastor: ToastrService
  ) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.fromData = {
      id: null,
      fullName: '',
      empCode: '',
      mobile: '',
      position: ''
    }
  }

  onSubmit(form:NgForm) {

    let data = Object.assign({},form.value);
    delete data.id;
    if(form.value.id == null)
     this.firestore.collection('employee').add(data);
    else
     this.firestore.doc('employee/' + form.value.id).update(data);
    this.resetForm(form);
    this.toastor.success('Submitted successfully','EMP. Register');
  }

}
