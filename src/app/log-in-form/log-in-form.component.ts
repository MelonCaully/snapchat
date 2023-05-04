import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LogInFormService } from './log-in-form.service';
import { AuthResponse } from '../auth/authResponse';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.css']
})
export class LogInFormComponent {
    public buttonClicked!:string;
    
    constructor(private authService:LogInFormService) {

    }
    public onSubmit(data: NgForm) {
      console.log("Button clicked" + this.buttonClicked);
      console.log(data.value);
      this.authService.login(data.value.email, data.value.password).subscribe(
        (data:AuthResponse) => {
            console.log(data);
        },
        error => {
            console.log(error.error.error.message);
        }
      
    )}
}
