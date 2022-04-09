import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'signUp-component',
    templateUrl: './signUp.component.html'
})
export class SignUpComponent implements OnInit {
    public signUpFormGroup: FormGroup = new FormGroup({});

    constructor(private formBuilder: FormBuilder) { }

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
        console.log(this.signUpFormGroup.value);
    }
}