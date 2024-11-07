import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../../footer/footer.component";
import { FormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [RouterLink, FooterComponent,FormsModule,NgIf,NgClass],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css'
})
export class SignUpPageComponent implements OnInit {
  ngOnInit(): void {
    console.log("HI")
    setTimeout(()=>{
      document.getElementById(`popup`)?.classList.add("hide");
    },0.1)

  }

  public closePopup():void{
    document.getElementById(`popup`)?.classList.remove("setFlex");
    setTimeout(()=>{
      document.getElementById(`popup`)?.classList.add("hide");
    },0.1)

  }

  public Account:any={
    email:"",
    name:"",
    contactNumber:"",
    password:""
  }

    public emailError:String="";
    public contactNumberError:String="";
    public passwordError:String="";

  public signUp():void{

    this.emailError= /^\w{2,}@gmail.com$/.test(this.Account.email) ? "" : "* Invalid email address";
    this.contactNumberError= this.Account.contactNumber.length !=10? "* Invalid contact number" : "";

    let numbers=this.Account.password.match(/\d/g) || [];
    let letters=this.Account.password.match(/[a-zA-Z]/g) || [];
    this.passwordError=numbers.length>3 && letters.length>3 ? "" : "* Invalid password";

    if(this.emailError=="" && this.contactNumberError=="" && this.passwordError==""){4

      let header=new Headers();
      header.append("Content-Type","application/json");

      let body=JSON.stringify(this.Account)

      let req={
        method: "POST",
        headers:header,
        body:body
      }

      fetch("http://localhost:8080/auto_repair/SignUp",req)
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        this.emailError=data.emailValid ? "* This email address has been already used" : "";
        this.contactNumberError=data.contactNumberValid ? "* This contact number has been already used" : "";

        if(this.emailError=="" && this.contactNumberError==""){
          document.getElementById(`popup`)?.classList.remove("hide");
          document.getElementById(`popup`)?.classList.add("setFlex");
        }
      })

    }

  }


}
