import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  onEmailChange(event: any) {
    // const emailCheck =
    // const regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    // if(regex.match())

    this.email = event.target.value;
  }
  onPasswordChange(event: any) {
    this.password = event.target.value;
  }

  onSubmit() {
    // event.preventDefault();
    if (!this.email || !this.password) {
      this.errorMessage = 'Mandatory Fields';
      return;
    }

    this.errorMessage = '';
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
