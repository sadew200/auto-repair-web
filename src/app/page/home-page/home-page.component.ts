import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { ServicePageComponent } from '../service-page/service-page.component';
import { ServiceComponent } from '../../service/service.component';
import { AboutComponent } from '../../about/about.component';
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NgClass, HeaderComponent, ServiceComponent, AboutComponent, FooterComponent,FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {


}
