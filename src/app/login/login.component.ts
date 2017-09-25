import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../provider/http.provider';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  pass:string;
  purple = false;
  result: string;
  list = [
    {
      prog: "from platform import python_version\nprint(python_version())"
    },
    {
      prog: "for i in range(10):\n\tprint(i)"
    },
    {
      prog: "def add(one, two):\n\treturn one + two\nmy_list = [1, 2]\nx = add(*my_list)  # x = 3\nprint(x)\nmy_dict = {'one': 1, 'two': 2}\ny = add(**my_dict) #y = 3\nprint(y)"
    },
    {
      prog: "from collections import Counter\nfruits = ['orange', 'banana', 'apple', 'orange']\nprint(Counter(fruits))"
    },
    {
      prog: "long_string = 'This is a very long string'\nif 'long' in long_string:\n\tprint('Match found')\nif 'apple' in long_string:\n\tprint('Match found')\nelse:\n\tprint('Not Found')"
    }
  ];
  constructor(private router: Router, private http: Service) {
   }

  ngOnInit() {
  }

  log(){
    if(this.username=="apple" && this.pass=="banana"){
      this.router.navigateByUrl('compiler');
    }
    else{
      alert("Invalid details");
    }
  }

  login(){
    this.purple = true;
  }

  runner(l){
    console.log(l);
    this.http.getReply(l).subscribe(res => {
      this.result = res.json().res;
    });
  }

}
