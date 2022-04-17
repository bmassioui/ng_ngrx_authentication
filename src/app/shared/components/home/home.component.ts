import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { signOutAction } from "src/app/features/auth/store/auth.actions";
import { SharedConstants } from "../../constants";
import { CurrentUserInterface } from "../../models";
import { LocalStorageService } from "../../services";

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

    public currentUser: CurrentUserInterface | null = null;

    constructor(private router: Router, private localStorageService: LocalStorageService<CurrentUserInterface>, private store: Store) { }

    ngOnInit(): void {
        this.initializeProperties();
    }

    /**
     * Initialize home component's properties
     */
    initializeProperties(): void {
        this.currentUser = this.localStorageService.get(SharedConstants.LOCALSTORAGE_CURRENTUSER_KEY);
    }

    /**
     * Navigate to SignIn Component
     */
    onSignInClick(): void {
        this.redirectTo(SharedConstants.ROUTENAMES_ROUTEURLS[SharedConstants.SIGNIN_ROUTE_NAME]);
    }

    /**
     * Navigate to SignUp Component
     */
    onSignUpClick(): void {
        this.redirectTo(SharedConstants.ROUTENAMES_ROUTEURLS[SharedConstants.SIGNUP_ROUTE_NAME]);
    }

    /**
     * Sign out the current user and redirect to SignIn
     */
    onSignOutClick(): void {
        this.localStorageService.remove(SharedConstants.LOCALSTORAGE_CURRENTUSER_KEY);
        this.store.dispatch(signOutAction()); // Circular reference between shared and features !!
        this.redirectTo(SharedConstants.ROUTENAMES_ROUTEURLS[SharedConstants.SIGNIN_ROUTE_NAME]);
    }

    /**
     * Redirect to url
     * @param url Targer Url
     */
    redirectTo(url: string): void {
        this.router.navigateByUrl(url);
    }
}