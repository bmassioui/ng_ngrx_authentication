import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { SignUpUserInterface } from "../../models";

import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'signUp-component',
    templateUrl: './signUp.component.html'
})
export class SignUpComponent implements OnInit {
    public signUpFormGroup: FormGroup = new FormGroup({});

    constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

    ngOnInit(): void {
        this.initializeSignUpForm();
    }

    /**
     * Initialize SignUp form
     */
    initializeSignUpForm(): void {
        this.signUpFormGroup = this.formBuilder.group({
            username: new FormControl('', [Validators.required, Validators.minLength(6)]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(6)])
        });
    }

    /**
     * On SignUp form submitted
     */
    onSubmit(): void {
        const signUpUserInterface: SignUpUserInterface = {
            user: {
                email: this.signUpFormGroup.controls['email'].value,
                password: this.signUpFormGroup.controls['password'].value,
                username: this.signUpFormGroup.controls['username'].value,
            }
        };

        this.authService.SignUp(signUpUserInterface).subscribe({
            next(response) { console.log(response); },
            error(err) { console.error('Error: ' + err); },
            complete() { console.log('Completed'); }
        });
    }
}