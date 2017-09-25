import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compiler',
  templateUrl: './compiler.component.html',
  styleUrls: ['./compiler.component.css']
})
export class CompilerComponent implements OnInit {

  code:String;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  compile(){
    console.log(this.code);
    
  }
  logout(){
   this.router.navigateByUrl('login')
   
  }
}
