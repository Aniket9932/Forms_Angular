import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  errorMessage = '';
  public user = {
    name: '',
    password: '',
  };

  onSubmit() {
    if (!this.user.name || !this.user.password) {
      this.errorMessage = 'Mandatory Fields';
      return;
    }

    this.errorMessage = '';
    console.log(this.user);
    this.router.navigate(['/registration']);
  }
}
