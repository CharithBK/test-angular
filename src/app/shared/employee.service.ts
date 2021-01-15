import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   fromData :Employee;

  constructor(private firestore: AngularFirestore) { }

  getEmployees() {
  return this.firestore.collection('employee').snapshotChanges();
  }
}
