import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import { signOutAction } from "src/app/features/auth";
import { SharedConstants } from "../../constants";
import { CurrentUserInterface } from "../../models";
import { LocalStorageService, RouterService } from "../../services";


@Component({
    selector: 'header-component',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    public toggleAvatarSubMenu: boolean = false;
    public currentUser: CurrentUserInterface | null = null;

    constructor(private localStorageService: LocalStorageService<CurrentUserInterface>, private store: Store, private routerService: RouterService) {    }

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
     * Update toggleMenu's value when user clicks on Avatar
     */
    onAvatarClick(): void {
        this.toggleAvatarSubMenu = !this.toggleAvatarSubMenu;
    }

    /**
     * Update toggleMenu's value when Mouse leaves the AVatar's SubMenu
     */
    onMouseLeaveSubMenu(): void {
        this.toggleAvatarSubMenu = !this.toggleAvatarSubMenu;
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