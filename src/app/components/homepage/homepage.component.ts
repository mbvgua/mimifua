import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { FaqsComponent } from "../faqs/faqs.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { OurServicesComponent } from "../our-services/our-services.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [FooterComponent, FaqsComponent, AboutUsComponent, OurServicesComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
