import { Component } from '@angular/core';
import { FaqsComponent } from "../faqs/faqs.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FaqsComponent, FooterComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

}
