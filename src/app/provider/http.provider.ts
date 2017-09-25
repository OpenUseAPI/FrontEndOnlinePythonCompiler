import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class Service {
    constructor (private http: Http) {}
    getReply(){
        var url = "https://pythoncompile.herokuapp.com/";
        var send = {
            "program": "for i in range(10):\n    print(i)"
        };
        this.http.post(url, send).subscribe(res => {
            console.log(res);
        });
    }
}