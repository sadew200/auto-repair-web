import { Routes } from '@angular/router';
import { SignUpPageComponent } from './page/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { ServicePageComponent } from './page/service-page/service-page.component';
import { AboutPageComponent } from './page/about-page/about-page.component';
import { ContactPageComponent } from './page/contact-page/contact-page.component';
import { PreviousServicePageComponent } from './page/previous-service-page/previous-service-page.component';

export const routes: Routes = [
    {
        path:"",
        component:LoginPageComponent
    
    },
    {
        path:"SignUp",
        component:SignUpPageComponent
    
    },
    {
        path:"HomePage",
        component:HomePageComponent
    
    },
    {
        path:"ServicePage",
        component:ServicePageComponent
    
    },
    {
        path:"About",
        component:AboutPageComponent
    
    },
    {
        path:"Contact",
        component:ContactPageComponent
    
    },
    {
        path:"PreviousService",
        component:PreviousServicePageComponent
    
    }
];
