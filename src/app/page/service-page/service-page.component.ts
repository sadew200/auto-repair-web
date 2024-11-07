import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { ServiceComponent } from '../../service/service.component';

@Component({
  selector: 'app-service-page',
  standalone: true,
  imports: [HeaderComponent,ServiceComponent],
  templateUrl: './service-page.component.html',
  styleUrl: './service-page.component.css'
})
export class ServicePageComponent {

}
