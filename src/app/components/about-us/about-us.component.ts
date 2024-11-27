import { Component } from '@angular/core';
import { FaqsComponent } from "../faqs/faqs.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    FaqsComponent,
    FooterComponent
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
