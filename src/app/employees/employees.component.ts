import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.sass']
})
export class EmployeesComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit() {

  }

 requestLogout() {
  this.authService.googleLogout();
  this.router.navigate(['/login']);
  }

}
