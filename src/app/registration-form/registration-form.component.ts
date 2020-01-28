import { Component, OnInit } from '@angular/core';
import { Form } from '../form';
import { HttpDataService } from '../http-data.service';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  depEDlogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Department_of_Education_%28DepEd%29.svg/490px-Department_of_Education_%28DepEd%29.svg.png"
  public infoList: Array<Form>
  public newUser: any
  public data: any
  public register = true;
  public list = false;
  public edit = false;
  public number = 0;
  public toEdit = false
  public counter = 0;

  newid: number
  newname: string
  newemail: string
  newphone: string

  submit = "Submit"



  constructor(
    private service: HttpDataService

  ) {
    this.infoList = new Array<Form>();

  }

  ngOnInit() {
    this.fetchData();
    // this.service.getData()
    //   .subscribe((data: any[]) => (this.infoList = data))
  }

  fetchData() {
    this.service.getData()
      .subscribe((data: any[]) => (this.infoList = data)
      );
  }


  onSubmit(formdata) {
    if (this.toEdit) {
      this.service.updateData(this.data, this.newid).subscribe((res) => {
      })
      console.log("infolist ", this.infoList)
      this.infoList.forEach(e => {
        if (e.id == this.newid) {
          e.name = this.newname
          e.email = this.newemail
          e.phone = this.newphone
          console.log("e  ", e)
        }
      })
      this.toEdit = false
    } else {
      this.submit = "Submit"
      this.data = new Form
      this.data.name = formdata.form.value.name
      this.data.email = formdata.form.value.email
      this.data.phone = formdata.form.value.phone
      this.service.addData(this.data)
        .subscribe((res: any) => {
          this.newUser = res
          this.newUser.id -= 1
          this.newUser.id += this.counter
          this.infoList.push(this.newUser),
            console.log("Parent infolist ", this.infoList)
        })
      this.counter += 1
    }
    formdata.form.reset();
    alert(" Successfully Registered!")
    this.register = false
    this.list = true
    this.edit = false

  }
  editForm(info) {
    this.toEdit = true
    this.submit = "Save"
    this.newid = info.id
    this.newemail = info.email
    this.newname = info.name
    this.newphone = info.phone
  }
  showlist() {
    this.list = true
    this.register = false

  }
}
