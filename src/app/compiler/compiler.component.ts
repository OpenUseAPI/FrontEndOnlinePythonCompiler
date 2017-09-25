import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../provider/http.provider';


@Component({
  selector: 'app-compiler',
  templateUrl: './compiler.component.html',
  styleUrls: ['./compiler.component.css']
})
export class CompilerComponent implements OnInit {

  code:String;
  result = "apple";
  constructor(private router:Router, private http: Service) { }

  ngOnInit() {
  }
  compile(){
    console.log(this.code);
    this.http.getReply(this.code).subscribe(res => {
      this.result = res.json().res;
      console.log(res.json().res);
    });
  }

  logout(){
   this.router.navigateByUrl('login')
   
  }

}
