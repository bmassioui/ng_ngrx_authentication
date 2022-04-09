import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'signIn-component',
    templateUrl: './signIn.component.html',
})
export class SignInComponent implements OnInit {

    public signInFormGroup: FormGroup = new FormGroup({});

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.initializeSignUpForm();
    }

    /**
     * Initialize SignUp form
     */
    initializeSignUpForm(): void {
        this.signInFormGroup = this.formBuilder.group({
            username: new FormControl('', [Validators.required, Validators.minLength(6)]),
            password: new FormControl('', [Validators.required, Validators.minLength(6)])
        });
    }

    /**
     * On SignUp form submitted
     */
    onSubmit(): void {
        console.log(this.signInFormGroup.value);
    }
}