import {Component, OnInit} from '@angular/core';
import {UserService} from "../../user.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {catchError, of} from "rxjs";
import {User} from "../../User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  errorMessage: string | null = null;

  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.userService.logout();
  }

  submit() {
    if (this.form.valid) {
      let user = new User();
      user.username = this.form.value.username;
      user.password = this.form.value.password;

      // Login the user if valid credentials, else show error message if observable sends error
      this.userService.login(user).pipe(
        catchError((error): any => {
          let message = error.message.toString();
          if (message.includes("404")) {
            this.errorMessage = "Invalid username!";
          } else if (message.includes("401")) {
            this.errorMessage = "Invalid password!";
          } else {
            this.errorMessage = "An error occurred!";
          }
          return of(null);
        })
      ).subscribe(
        (user) => {
          if (user) this.router.navigate(['/home']).then();
        });
    }
  }
}
