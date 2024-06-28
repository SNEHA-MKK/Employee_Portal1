import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  mailId: string = ""
  pswd: string = ""

  constructor(private api: ApiService, private router: Router) { }


  login() {
    if (!this.mailId || !this.pswd) {
      Swal.fire({
        title: 'info',
        text: 'Please fill the form completely',
        icon: 'info'
      })
    } else {
      this.api.loginApi().subscribe({
        next: (res: any) => {

          const { Email, password } = res
          if (Email == this.mailId && password == this.pswd) {
            Swal.fire({
              title: 'Wow',
              text: 'login successfull',
              icon: 'success'
            })
            this.api.updateData(true)
            this.router.navigateByUrl('/dashboard')
          } else {
            Swal.fire({
              title: 'Oops',
              text: 'Invalid Email or Password',
              icon: 'error'
            })

          }

        },
        error: (err: any) => {

          console.log(err);


        }
      })
    }
  }
}
