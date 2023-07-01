import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../user.service";
import {User} from "../../User";

@Component({
  selector: 'app-hacker-window',
  templateUrl: './hacker-window.component.html',
  styleUrls: ['./hacker-window.component.css']
})
export class HackerWindowComponent implements OnInit {
  @Input() users: User[] = [];
  allAccountsHacked: boolean = false; // Variable to track successful hacking attempts

  // @ts-ignore
  hackerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.hackerForm = this.formBuilder.group( {
      password: ['', Validators.required]
    })
  }
  onSubmit(user: User): void {
    const userInput = this.hackerForm.value.password;
    if (userInput === user.password) {
      console.log('Password matched! You hacked this account!');
      user.isHacked = true;
      this.checkAllAccountsHacked(); // Check if all accounts have been hacked
    } else {
      console.log('Password incorrect. Try again!');
      user.isHacked = false;
    }
  }

  private checkAllAccountsHacked(): void {
    this.allAccountsHacked = this.users.every(user => user.isHacked); // Check if all accounts are hacked
  }
}
