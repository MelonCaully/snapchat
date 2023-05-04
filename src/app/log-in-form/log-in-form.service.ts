import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthResponse } from "../auth/authResponse";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root"
})
export class LogInFormService{
    baseUrl:string = "https://identitytoolkit.googleapis.com/v1/accounts";
    signInEndpoint:string = "signInWithPassword";

    public constructor (private http:HttpClient) {
    }

    public login(email:string, password:string) {
        const requestBody = {
            "email":email,
            "password":password,
            "returnSecureToken": true
        };
        return this.http.post<AuthResponse>(this.baseUrl + ":" + this.signInEndpoint + '?' + 
                                            'keys=' + environment.firebase.apiKey , requestBody)
    }
}