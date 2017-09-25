import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  pass:string;
  constructor(private router: Router) {
   }

  ngOnInit() {
  }

  log(){
    console.log(this.username);
    console.log(this.pass);
    if(this.username=="a" && this.pass=="1"){
      this.router.navigateByUrl('compiler');
    }
    else{
      alert("Invalid details");
    }
  }

}
