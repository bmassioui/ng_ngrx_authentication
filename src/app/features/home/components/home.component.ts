import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import { CurrentUserInterface, LocalStorageService, RouterService, SharedConstants } from "src/app/shared";
import { signOutAction } from "../../auth";

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

    public currentUser: CurrentUserInterface | null = null;

    constructor(private localStorageService: LocalStorageService<CurrentUserInterface>, private store: Store, private routerService: RouterService) { }

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
        this.routerService.navigateTo(SharedConstants.ROUTENAMES_ROUTEURLS[SharedConstants.SIGNIN_ROUTE_NAME]);
    }

    /**
     * Navigate to SignUp Component
     */
    onSignUpClick(): void {
        this.routerService.navigateTo(SharedConstants.ROUTENAMES_ROUTEURLS[SharedConstants.SIGNUP_ROUTE_NAME]);
    }

    /**
     * Sign out the current user and redirect to Home
     */
    onSignOutClick(): void {
        this.localStorageService.remove(SharedConstants.LOCALSTORAGE_CURRENTUSER_KEY);
        this.store.dispatch(signOutAction());
        this.routerService.navigateTo(SharedConstants.ROUTENAMES_ROUTEURLS[SharedConstants.HOME_ROUTE_NAME], true);
    }
}