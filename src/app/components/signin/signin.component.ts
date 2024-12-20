import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    FooterComponent,
    RouterLink
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit{

  signInForm!:FormGroup

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      useraname: new FormControl(''),
      email:new FormControl(''),
      password: new FormControl('')
    })
  }


}
