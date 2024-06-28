import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  Employee: any = {}

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      const { id } = res
      this.getAEmployee(id)
    })
  }


  getAEmployee(id: any) {
    this.api.getAEmployee(id).subscribe({
      next: (res: any) => {
        // console.log(res);
        this.Employee = res
        console.log(this.Employee);

      },
      error: (err: any) => {
        console.log(err);
      }
    })

  }

  cancel(id: any) {
    this.getAEmployee(id)
  }

  editEmployee(id: any) {
    this.api.updateEmpDetailsApi(id, this.Employee).subscribe({
      next: (res: any) => {
        console.log(res);
        Swal.fire({
          title: 'Wow',
          text: 'Employee Updated Succesfully',
          icon: 'success'
        })
        this.router.navigateByUrl('/employee')
      },
      error: (err: any) => {
        console.log(err);

      }
    })
  }

}
