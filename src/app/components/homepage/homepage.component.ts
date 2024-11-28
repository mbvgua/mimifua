import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { FaqsComponent } from "../faqs/faqs.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    FooterComponent,
    FaqsComponent,
    RouterModule,
],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
