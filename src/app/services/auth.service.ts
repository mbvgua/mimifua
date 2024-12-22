import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private isLoggedIn!:boolean

  // login the user
  login(){
    this.isLoggedIn = true
  }

  // logout the user
  logout(){
    this.isLoggedIn = false
  }

  // show status
  showStatus(){
    return this.isLoggedIn
  }
}
