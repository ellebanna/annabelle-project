import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from './form';


@Injectable({
  providedIn: 'root'
})
export class HttpDataService {
  private apiUrl = "http://jsonplaceholder.typicode.com/users"
  private form:Array<Form>
  private data:any

  constructor(
    private http: HttpClient
  ) { 
     this.data = new Form()
  }
  getData() {
    return this.http.get(this.apiUrl)
  }
  addData(form: Form) {

    return this.http.post(this.apiUrl, form)
  }
  deleteData(id) {
    return this.http.delete(this.apiUrl + "/:" + id)
  }
  updateData(user, id: any) {
    return this.http.put(this.apiUrl + "/:" + user, id)
  }
  getView(id){
    return this.http.get(this.apiUrl+ "/"+ id)
  }
}
