import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    FooterComponent,
    RouterLink,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit{

  signInForm!:FormGroup

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      userNameOrEmail: new FormControl(null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
      ),
      password: new FormControl(null,
        [
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,10}$'),
        ],
      ),
      rememberMe: new FormControl(null, )
    })
  }

  // on form submition
  onSubmit(){
    console.log(this.signInForm.value)
    this.signInForm.reset()
  }


}
