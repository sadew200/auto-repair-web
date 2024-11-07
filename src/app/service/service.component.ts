import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [FormsModule,NgIf,RouterLink,FooterComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent implements OnInit {

  ngOnInit(): void {
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

  public Service:any={
    name:"",
    email:"",
    serviceType:"",
    date:"",
    time:"",
    specialRequest:""
  }
  public emailError:String="";
  public dateError:String=""

  public book():void{

    this.emailError= /^\w{2,}@gmail.com$/.test(this.Service.email) ? "" : "* Invalid email address";
    this.dateError= (this.Service.date=="") || (new Date(new Date().toLocaleDateString("en-US")).getTime()>new Date(this.Service.date).getTime()) ? "* Invalid date" : "";
    if(this.dateError=="" && this.emailError=="" && this.Service.name!="" && this.Service.serviceType!=""){

      let header=new Headers();
      header.append("Content-Type","application/json");
      
      let body=JSON.stringify(this.Service);
      let req={
        method:"POST",
        headers:header,
        body:body
      }
      
      fetch("http://localhost:8080/BookService",req)
      .then(res=>{res.text()})
      .then(data=>console.log(data));
      document.getElementById(`popup`)?.classList.remove("hide");
      document.getElementById(`popup`)?.classList.add("setFlex");
    }
    }


}
