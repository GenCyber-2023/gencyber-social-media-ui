import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../../User";
import {UserService} from "../../user.service";
import {Router} from "@angular/router";
import {catchError, of} from "rxjs";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private userService: UserService, private router: Router) {
  }
  errorMessage: string | null = null;

  form = new FormGroup( {
    username: new FormControl(),
    password: new FormControl(),
    name: new FormControl(),
  });

  ngOnInit() {
  }
  onSubmit() {
    if (this.form.valid) {
      let user = new User();
      user.username = this.form.value.username;
      user.password = this.form.value.password;
      user.name = this.form.value.name;

      // Login the user if valid credentials, else show error message if observable sends error
      this.userService.createUser(user).pipe(
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
          if (user) this.router.navigate(['/home/newsfeed']).then();
        });
      this.userService.login(user).subscribe((user) => {
        if (user) this.router.navigate(['/home/newsfeed']).then();
    });
  }
}}
