import { Component, OnInit } from '@angular/core';
import { CommonService } from './services/common.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: any;

  constructor(private commonService:CommonService){
   this.commonService.getMessage().subscribe(data => {
      console.log(data);
      this.title = data['message'];
    });;
  }

  ngOnInit() {
      
  }

}
