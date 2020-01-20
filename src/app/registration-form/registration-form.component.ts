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
  public list = false;
  public data:Form
  public register = true;


  constructor() {  
    this.infoList = new Array<Form>();
    this.data = new Form();
  }

  ngOnInit() {
  }
  onSubmit(data) {
    console.log(data.form.value)
    this.infoList.push(data.form.value)
    data.form.reset();
    this.list = true
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
