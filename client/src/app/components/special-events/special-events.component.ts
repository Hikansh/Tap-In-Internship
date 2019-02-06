import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { HttpErrorResponse } from '../../../../node_modules/@angular/common/http';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {
msg:String
  constructor(private event:EventService,private router:Router) { }

  ngOnInit() {
    this.event.getSpecialEvents().subscribe(
      res=>this.msg=res.msg,
      err=>{
        if(err instanceof HttpErrorResponse){
          if(err.status==401){
            this.router.navigate(['/login'])
          }
        }
      }
      
    )
  }

}
