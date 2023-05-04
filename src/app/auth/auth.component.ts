import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { NgForm } from "@angular/forms";
import { AuthResponse } from "./authResponse";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent {
    public buttonClicked!:string;

    constructor(private authService:AuthService) {

    }
    public onSubmit(data: NgForm) {
      console.log("Button clicked" + this.buttonClicked);
      console.log(data.value);
      this.authService.signup(data.value.email, data.value.username, data.value.password).subscribe(
        (data:AuthResponse) => {
            console.log(data);
        },
        error => {
            console.log(error.error.error.message);
        }
      
    )}

}