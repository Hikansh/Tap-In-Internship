import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginUserData={}
  errors:String;

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {
  }

  loginUser(){
    this.auth.loginUser(this.loginUserData).subscribe(
      res=> {
        if(res.status=='401'){
          alert('hello')
        }
          this.router.navigate(['/specialevents'])
          localStorage.setItem('token',res.token)  
    },
      err=> {
        this.errors='Invalid Credentials'
    }
      
    )
  }
}
