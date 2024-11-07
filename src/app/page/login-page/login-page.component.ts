import { Component } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FooterComponent,RouterLink,FormsModule,NgIf],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  constructor(private router: Router) {}

  public loginAcc:any={
    email:"",
    password:""
  }

  public errorEmail:String="";
  public errorPassword:String="";

  public login():void{
    let header=new Headers();
    header.append("Content-Type","application/json");

    let body=JSON.stringify(this.loginAcc);

    let req={
      method: "POST",
      headers: header,
      body: body
    }

    fetch("http://localhost:8080/auto_repair/Login",req)
    .then(res=>res.json())
    .then(data=>{
      this.errorEmail=data.emailValid ? "* Invalid email address" : "";
      this.errorPassword=data.passwordValid ? "* Invalid password" : "";
      if(this.errorEmail=="" && this.errorPassword==""){
        this.router.navigateByUrl("/HomePage");
      }
  })
  }

}
