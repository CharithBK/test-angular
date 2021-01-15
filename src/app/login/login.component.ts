import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,private router: Router,private db: AngularFireDatabase,private toastor: ToastrService) { }

  ngOnInit() {
  }
  googleLogin() {
    console.log("OK");
    this.authService.authGoogleLogin()
      .then(async (result: firebase.auth.UserCredential) => {
        console.log(result);
          const user: AngularFireObject<any> = this.db.object('/users/' + result.user.uid);
          console.log(result.user.uid);
          if (result.user.uid == null) {
            this.toastor.warning("No User ID");

          }else {
            console.log("Employees");
            this.router.navigate(['/employees']);
          }

      })
      .then(() => {
        this.toastor.warning("Error");
      })
      .catch(err => {
        console.log(err);
        this.toastor.warning(err);
        //this.error = err;
        //this.loading = false;
      });
  }

}
