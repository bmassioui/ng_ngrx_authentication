import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { SharedConstants } from "src/app/shared/constants";
import { ErrorListInterface } from "src/app/shared/models";
import { SignUpUserInterface } from "../../models";

import { signUpAction } from "../../store/auth.actions";
import { isLoggedIn, isSubmitting, validationErrors } from "../../store/auth.selectors";

@Component({
    selector: 'signUp-component',
    templateUrl: './signUp.component.html'
})
export class SignUpComponent implements OnInit {
    public signUpFormGroup: FormGroup = new FormGroup({});
    public backEndErrors$: Observable<ErrorListInterface | null> = of(null)
    public isSubmitting$: Observable<boolean> = of(false)
    public signInRouteUrl: string = SharedConstants.ROUTENAMES_ROUTEURLS[SharedConstants.SIGNIN_ROUTE_NAME]


    constructor(private formBuilder: FormBuilder, private store: Store, private router: Router) { }

    ngOnInit(): void {
        this.navigateToUserList();
        this.initializeSignUpForm();
        this.initializeProperties();
    }

    /**
     * Redirect to UserList when User is Already LoggedIn
     * Feature  - Don't show SignUp & SignIn buttons when User is 
     * LoggedIn and Show Welcome @username instead of buttons(this feature should be implemented in header component)
     */
    navigateToUserList(): void {
        this.isLoggedIn().subscribe((result) => { if (result) this.router.navigate([SharedConstants.USERS_ROUTE_NAME]) });
    }

    /**
     * Check if user already logged in
     * @returns 
     */
    isLoggedIn(): Observable<boolean> {
        return this.store.select(isLoggedIn);
    }

    /**
     * Initialize SignUp Component Properties
     */
    initializeProperties(): void {
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
            password: new FormControl('', [Validators.required, Validators.minLength(6)]),
            useragreement: new FormControl('', [Validators.required])
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

        this.store.dispatch(signUpAction({ signUpUserInterface: signUpUserInterface }));
    }
}