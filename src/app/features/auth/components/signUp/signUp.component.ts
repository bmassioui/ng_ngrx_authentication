import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
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

    initializeSignUpForm(): void{
        this.signUpFormGroup = this.formBuilder.group({
            User
        });
    }

    /**
     * On SignUp form submitted
     */
    onSubmit(): void {
        console.log(this.signUpFormGroup);
    }
}