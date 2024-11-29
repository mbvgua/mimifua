import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-error-404',
  standalone: true,
  imports: [
    RouterModule,
    FooterComponent
  ],
  templateUrl: './error-404.component.html',
  styleUrl: './error-404.component.css'
})
export class Error404Component {

}
