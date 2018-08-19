import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const serverRoute = 'http://localhost:8080/rest/api';
@Injectable()
export class MainService {
    private isLoggedIn: boolean;
    public username$: BehaviorSubject<{username: string, type: string}> = new BehaviorSubject(null);
    
    constructor(private _http: HttpClient) { }

    request(route: string) {
        return this._http.get(`${serverRoute}/${route}`);
    }
    requestPost(route: string, body: any) {
       return this._http.post(`${serverRoute}/${route}`, body);
    }
}