import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Form } from '@angular/forms';
import { HttpDataService } from '../http-data.service';

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.css']
})
export class ChildListComponent implements OnInit {

  @Input() studentList: Array<Form>;
  @Output() newEdit = new EventEmitter();

  @Output() list2 = new EventEmitter()
  @Output() register2 = new EventEmitter()
  @Output() edit = new EventEmitter()

  constructor(
    private service: HttpDataService

  ) { }

  ngOnInit() {
  }
  onEdit(newInfo) {
    this.newEdit.emit(newInfo)
    
    this.edit.emit(true)
    this.register2.emit(true)
    this.list2.emit(false)
    console.log(this.studentList)
  }
  back() {
    this.register2.emit(true)
    this.list2.emit(false)
  }

  onDelete(id) {
    alert(" Successfully Deleted")
    this.service.deleteData(id).subscribe((res) => {
      this.studentList.splice(id, 1);
    })
    console.log(id)
    console.log(this.studentList)
  }

}
