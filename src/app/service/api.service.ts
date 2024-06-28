import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  serverUrl = `http://localhost:3000`

  //create object for behavior subject
  sharedata = new BehaviorSubject(false)

  constructor(private http: HttpClient) { }

  //function to update behavior subject
  updateData(data: any) {
    this.sharedata.next(data)
  }

  loginApi() {
    return this.http.get(`${this.serverUrl}/employee/1`)
  }

  //api to add employee

  addEmployeeApi(reqBody: any) {
    return this.http.post(`${this.serverUrl}/employee`, reqBody)
  }

  //api to get all emloyee details
  getAllEmployeeApi() {
    return this.http.get(`${this.serverUrl}/employee`)
  }

  //api to delete all employee
  deleteEmployeeApi(id: string) {
    return this.http.delete(`${this.serverUrl}/employee/${id}`)
  }

  //get a particular employee
  getAEmployee(id: any) {
    return this.http.get(`${this.serverUrl}/employee/${id}`)
  }

  //api to update employee details
  updateEmpDetailsApi(id: any, body: any) {
    return this.http.put(`${this.serverUrl}/employee/${id}`, body)
  }

  //api to update admin details
  updateAdminDetailsApi(body: any) {
    return this.http.put(`${this.serverUrl}/employee/1`, body)
  }

}
