import { Component, OnInit } from '@angular/core';
import { Form } from '../form';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  mnhslogo = "https://georgelumayag.weebly.com/uploads/1/1/9/2/119208204/mnhs-logo-png-gpl_1_orig.png"

  public infoList:Array<Form>
  public data:Form
  public register = true;
  public list = false;


  constructor() {  
    this.infoList = new Array<Form>();
    this.data = new Form();
  }

  ngOnInit() {
  }
  onSubmit(data) {
    this.infoList.push(data.form.value)
    console.log(this.infoList)
    data.form.reset();
    this.register = false
    this.list = true
    alert(" Successfully Registered!" )
  }
  editForm(info) {
    this.data = info;
    this.infoList = this.infoList.filter(item => {
      if (item != info) {
        return item;
      }
    })
  }
}
