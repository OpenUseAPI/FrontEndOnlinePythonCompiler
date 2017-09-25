import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class Service {
    constructor (private http: Http) {}
    getReply(message): Observable<any>{
        var url = "https://pythoncompile.com";
        var send = {
            "one": message
        };
        return this.http.post(url, send);
    }
}