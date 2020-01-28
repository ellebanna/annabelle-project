import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HttpDataService } from '../http-data.service';
import { Form } from '../form';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public infoList: Array<any> = []
  // userInfo :any
  userId:number

  constructor(
    // private router :Router,
    private route : ActivatedRoute,
    private userData : HttpDataService
  ) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params['id'];
    
    this.userData.getView(this.userId).subscribe((data)=>{
      console.log(data)
      this.infoList.push(data)
    })
  }


}
