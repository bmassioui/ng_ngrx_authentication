import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { Observable, of } from "rxjs";

import { ErrorListInterface, RouterService, SharedConstants } from "src/app/shared";
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


    constructor(private formBuilder: FormBuilder, private store: Store, private routerService: RouterService) {    }

    ngOnInit(): void {
        this.navigateToHome();
        this.initializeProperties();
        this.initializeSignInForm();
    }

    /**
    * Redirect to Home when User is SignedIn successfully
    */
    navigateToHome(): void {
        this.isLoggedIn().subscribe((result) => { if (result) this.routerService.navigateTo(SharedConstants.ROUTENAMES_ROUTEURLS[SharedConstants.HOME_ROUTE_NAME], true) });
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
    initializeSignInForm(): void {
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