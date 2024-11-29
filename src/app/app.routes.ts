import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { Error404Component } from './components/error-404/error-404.component';

export const routes: Routes = [
    {path:'', component:HomepageComponent},
    {path:'about-us', component:AboutUsComponent},
    {path:'our-services', component:OurServicesComponent},
    {path:'contact-us', component:ContactUsComponent},


    {path:'**',component:Error404Component}
];
