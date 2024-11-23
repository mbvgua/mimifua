import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { FaqsComponent } from "../faqs/faqs.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [FooterComponent, FaqsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
