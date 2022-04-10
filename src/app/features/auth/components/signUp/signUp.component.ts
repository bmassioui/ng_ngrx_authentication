import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { ErrorListInterface } from "src/app/shared/models";
import { SignUpUserInterface } from "../../models";

import { AuthService } from "../../services/auth.service";
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

    constructor(private formBuilder: FormBuilder, private authService: AuthService, private store: Store, private router: Router) { }

    ngOnInit(): void {
        this.navigateToUserList();
        this.initializeSignUpForm();
        this.initializeProperties();
    }

    /**
     * Redirect to UserList when User is Already LoggedIn
     */
    navigateToUserList(): void {
        this.isLoggedIn().subscribe((result) => { if (result) this.router.navigate(['/userList']) });
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

        this.store.dispatch(signUpAction({ signUpUserInterface: signUpUserInterface }));
    }
}