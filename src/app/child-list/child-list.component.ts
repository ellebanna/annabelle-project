import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Form } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
  }
  onEdit(newInfo) {
    this.newEdit.emit(newInfo)
    this.register2.emit(true)
    this.list2.emit(false)
  }
  back() {
    this.register2.emit(true)
    this.list2.emit(false)
  }

}
