import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  type_user: string | null;
  password = '';
  showPassword = false;

  constructor(private route: ActivatedRoute) {
    this.type_user = this.route.snapshot.queryParamMap.get('type_user');
  }
 

  togglePasswordVisibility() {
    this.showPassword =!this.showPassword;
  }
}
