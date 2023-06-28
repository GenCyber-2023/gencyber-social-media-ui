import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../user.service";

@Component({
  selector: 'app-hacker-window',
  templateUrl: './hacker-window.component.html',
  styleUrls: ['./hacker-window.component.css']
})
export class HackerWindowComponent implements OnInit {
  // @ts-ignore
  hackerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, public userService: UserService) {
  }

  ngOnInit(): void {
    this.hackerForm = this.formBuilder.group( {
      password: ['', Validators.required]
    })
  }
  onSubmit(): void {
    if (this.hackerForm.valid) {
      const enteredPassword = { enteredPassword: this.hackerForm.value.content };
      this.userService.getAllUsers();


    }

  }
}
