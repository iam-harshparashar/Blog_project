import { Component, OnInit ,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { ConnectService } from '../service/connect.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string="";
  password:string="";
  user:string="admin";
  pass:string="pass";
  loginData:any;


  constructor(private router: Router, private auth:AuthGuard, private connect: ConnectService) { }

  ngOnInit(): void {
    this.getLoginData();
  }

  getLoginData(){
    this.connect.getLoginData().subscribe(res=>{
      this.loginData=res;
    })
  }
  onSubmit(){
    for(var login of this.loginData)
    {
      if(this.username===login.username && this.password===login.password)
      {
        this.connect.isLoggedIn=true;
        this.router.navigate(['admin-dashboard']);
        console.log("hello")
        break;
      }
      else{
        this.connect.isLoggedIn=false;
      }
    }
  }
}
