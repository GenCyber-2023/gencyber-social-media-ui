import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../user.service";
import {User} from "../../User";
import {tsCastToAny} from "@angular/compiler-cli/src/ngtsc/typecheck/src/ts_util";

@Component({
  selector: 'app-hacker-window',
  templateUrl: './hacker-window.component.html',
  styleUrls: ['./hacker-window.component.css']
})
export class HackerWindowComponent implements OnInit {
  @Input() users: User[] = [];

  // @ts-ignore
  hackerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.hackerForm = this.formBuilder.group( {
      password: ['', Validators.required]
    })
  }
  onSubmit(user: User): boolean {
    const userInput = this.hackerForm.value.password;
    if (userInput === user.password) {
      console.log('Password matched! You hacked this account!')
      return true;
    }
    else {
      console.log('Password incorrect. Try again!')
      return false;
    }
  }
}
