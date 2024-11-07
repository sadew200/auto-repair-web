import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomePageComponent } from '../page/home-page/home-page.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,HomePageComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
