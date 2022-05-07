import { Component, OnInit } from '@angular/core';
import { MlserviceService } from '../services/mlservice.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  showmessage = false;
  status      = "";
  message     = "";
  icon        = "";

  datamessage = "";
  spin        = "";
  isdanger    = false;
  

  constructor(private service: MlserviceService) { }

  ngOnInit() {
  }

  getresult(){
    if(this.datamessage != ""){
      this.spin = "fa-spin"; 
      this.showmessage = false;
      this.service.getpredection(this.datamessage).subscribe(
        res => {
          if(res == "1"){
            this.showmessage = true;
            this.status   = "danger";
            this.icon     = "fa-times-circle-o";
            this.message  = "Oops! Your message was classified as a Spam message!";
          }
          else{
            this.showmessage = true;
            this.status   = "success";
            this.icon     = "fa-check-circle-o";
            this.message  = "Yuhoo! Your message is classified as not Spam :) .";
          }
          this.spin = "";
        }
      );
    }
    else{
      this.isdanger = true;
    }
  }
  
  valid(){
    if(this.datamessage != "")
      this.isdanger = false;
    else
      this.isdanger =true;
  }
}
