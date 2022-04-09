
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { CurrentUserInterface } from "src/app/shared/models";
import { SignInUserInterface, SignUpUserInterface } from "../models";
import { environment } from "src/environments/environment";
@Injectable({
    providedIn: 'root'
})

/**
 * Auth Service
 */
export class AuthService {

    constructor(private httpClient: HttpClient) { }

    /**
     * SignUp
     * @param signUpUserInterface 
     * @returns 
     */
    SignUp(signUpUserInterface: SignUpUserInterface): Observable<CurrentUserInterface> {
        const signUpEndPoint: string = `${environment.api_url}/users`;
        return this.httpClient.post<CurrentUserInterface>(signUpEndPoint, signUpUserInterface);
    }

    /**
     * SignIn
     * @param signInUserInterface 
     * @returns 
     */
    SignIn(signInUserInterface: SignInUserInterface): Observable<CurrentUserInterface> {
        const signInEndPoint: string = `${environment.api_url}/users/login`;
        return this.httpClient.post<CurrentUserInterface>(signInEndPoint, signInUserInterface);
    }
}