import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { UserIterface } from "../../models/user";

@Component({
    selector: 'signUp-component',
    templateUrl: './signUp.component.html'
})
export class SignUpComponent implements OnInit {
    public user: UserIterface = {};
    public signUpFormGroup: FormGroup = new FormGroup({});

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.initializeSignUpForm();
    }

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
        // Get all Form Controls keys and loop them
        Object.keys(this.signUpFormGroup.controls).forEach(key => {
            // Get errors of every form control
            console.log(this.signUpFormGroup.get(key));
        });
    }
}