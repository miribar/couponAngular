import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthenticationService {
    private isLoggedIn: boolean;
    public username$: BehaviorSubject<{username: string, type: string}> = new BehaviorSubject(null);

    constructor(private _http: HttpClient) { }

}