import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule,FormGroup, FormControl, FormControlName, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    FooterComponent,
    RouterLink,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  signUpForm!:FormGroup


  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      username:new FormControl(null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
          // Validators.pattern(
            // no special characters
            // all small letters
            // search basic rules for usernames in other websites
          // )
        ],
      ),
      email:new FormControl(null,
        [
          Validators.required,
          Validators.email
        ],
      ),
      password:new FormControl(null,
        [
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,10}$'),
        ],
      ),
      tos:new FormControl(null,Validators.requiredTrue,),
    })
  }

  // when form is submitted
  onSubmit(){
    console.log(this.signUpForm.value)
    this.signUpForm.reset()
  }

}
