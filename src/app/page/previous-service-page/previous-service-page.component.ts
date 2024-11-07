import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-previous-service-page',
  standalone: true,
  imports: [HeaderComponent,NgFor],
  templateUrl: './previous-service-page.component.html',
  styleUrl: './previous-service-page.component.css'
})
export class PreviousServicePageComponent implements OnInit {

  public serviceList:any=[];

  ngOnInit(): void {

    fetch("http://localhost:8080/PreviousService")
    .then(res=>res.json())
    .then(data=>{
      data.forEach((e:any) => {
        this.serviceList.push(e);
      });
      
    })
    
  }


}
