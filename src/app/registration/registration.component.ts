import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userId: number;
  email: string;
  username: string;
  password: string;


  constructor() { }

  ngOnInit(): void {
  }

}
