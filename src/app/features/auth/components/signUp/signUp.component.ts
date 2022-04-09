import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { ErrorListInterface } from "src/app/shared/models";
import { SignUpUserInterface } from "../../models";

import { AuthService } from "../../services/auth.service";
import { signInAction } from "../../store/auth.actions";
import { isSubmitting, validationErrors } from "../../store/auth.selectors";

@Component({
    selector: 'signUp-component',
    templateUrl: './signUp.component.html'
})
export class SignUpComponent implements OnInit {
    public signUpFormGroup: FormGroup = new FormGroup({});
    public backEndErrors$: Observable<ErrorListInterface | null> = of(null)
    public isSubmitting$: Observable<boolean> = of(false)

    constructor(private formBuilder: FormBuilder, private authService: AuthService, private store: Store) { }

    ngOnInit(): void {
        this.initializeSignUpForm();
    }

    /**
     * Initialize SignUp Component Properties
     */
    initializeProperties():void{
        this.backEndErrors$ = this.store.pipe(select(validationErrors));
        this.isSubmitting$ = this.store.pipe(select(isSubmitting));
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

        this.store.dispatch(signInAction({ signInUserInterface: signUpUserInterface }));
    }
}