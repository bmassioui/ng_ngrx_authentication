import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable, of } from "rxjs";

import { ErrorListInterface, SharedConstants } from "src/app/shared";
import { SignInUserInterface } from "../../models";
import { isLoggedIn, isSubmitting, signInAction, validationErrors } from "../../store";


@Component({
    selector: 'signIn-component',
    templateUrl: './signIn.component.html',
})
export class SignInComponent implements OnInit {

    public signInFormGroup: FormGroup = new FormGroup({});
    public backEndErrors$: Observable<ErrorListInterface | null> = of(null)
    public isSubmitting$: Observable<boolean> = of(false)
    public signUpRouteUrl: string = SharedConstants.ROUTENAMES_ROUTEURLS[SharedConstants.SIGNUP_ROUTE_NAME]


    constructor(private formBuilder: FormBuilder, private store: Store, private router: Router) { }

    ngOnInit(): void {
        this.navigateToUserList();
        this.initializeProperties();
        this.initializeSignUpForm();
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
     * Initialize SignIn Component Properties
     */
    initializeProperties(): void {
        this.backEndErrors$ = this.store.pipe(select(validationErrors));
        this.isSubmitting$ = this.store.pipe(select(isSubmitting));
    }

    /**
     * Initialize SignIn form
     */
    initializeSignUpForm(): void {
        this.signInFormGroup = this.formBuilder.group({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(6)])
        });
    }

    /**
     * On SignIn form submitted
     */
    onSubmit(): void {
        const signInUserInterface: SignInUserInterface = {
            user: {
                email: this.signInFormGroup.controls['email'].value,
                password: this.signInFormGroup.controls['password'].value
            }
        };

        this.store.dispatch(signInAction({ signInUserInterface: signInUserInterface }));

    }
}