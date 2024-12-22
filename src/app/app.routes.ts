import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { Error404Component } from './components/error-404/error-404.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    // main static page
    {path:'', component:HomepageComponent},
    {path:'about-us', component:AboutUsComponent},
    {path:'our-services', component:OurServicesComponent},
    {path:'contact-us', component:ContactUsComponent},

    // authentication routes
    {path:'auth', children:
        [
            {path:'signin', component:SigninComponent},
            {path:'signup', component:SignupComponent},
            {path:'forgot-password', component:ForgotPasswordComponent},
        ]
    },

    // after auth
    {path:'dashboard',canActivate:[authGuard], component:DashboardComponent},

    // error 404 routes
    {path:'**',component:Error404Component}
];
