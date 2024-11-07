import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { SignUpPageComponent } from './page/sign-up-page/sign-up-page.component';
import { ServicePageComponent } from './page/service-page/service-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginPageComponent,SignUpPageComponent,ServicePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'auto-repair-web';
}
