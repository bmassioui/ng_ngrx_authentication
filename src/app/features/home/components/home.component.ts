import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";

import { CurrentUserInterface, LocalStorageService, SharedConstants } from "src/app/shared";
import { signOutAction } from "../../auth";

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
        this.navigateTo(SharedConstants.ROUTENAMES_ROUTEURLS[SharedConstants.SIGNIN_ROUTE_NAME]);
    }

    /**
     * Navigate to SignUp Component
     */
    onSignUpClick(): void {
        this.navigateTo(SharedConstants.ROUTENAMES_ROUTEURLS[SharedConstants.SIGNUP_ROUTE_NAME]);
    }

    /**
     * Sign out the current user and redirect to SignIn
     */
    onSignOutClick(): void {
        this.localStorageService.remove(SharedConstants.LOCALSTORAGE_CURRENTUSER_KEY);
        this.store.dispatch(signOutAction());
        this.navigateTo(SharedConstants.ROUTENAMES_ROUTEURLS[SharedConstants.HOME_ROUTE_NAME], true);
    }

    /**
     * Navigate/Reload to url
     * @param url Targer Url
     */
    navigateTo(url: string, isReload: boolean = false): void {

        if (isReload) {
            this.router.navigateByUrl(url).then(() => {
                window.location.reload();
            });

            return;
        }

        this.router.navigateByUrl(url);
    }
}