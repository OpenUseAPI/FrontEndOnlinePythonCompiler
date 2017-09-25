import { Component, OnInit } from '@angular/core';
import { Service } from '../provider/http.provider';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: Service) {
    
   }

  ngOnInit() {
  }

}
