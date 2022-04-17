import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { SharedConstants } from "../../constants";

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    public toggleAvatarSubMenu: boolean = false;

    constructor(private router: Router) { }

    /**
     * Navigate to SignIn Component
     */
    onSignInClick(): void {
        this.router.navigateByUrl(SharedConstants.ROUTENAMES_ROUTEURLS[SharedConstants.SIGNIN_ROUTE_NAME]);
    }

    /**
     * Navigate to SignUp Component
     */
    onSignUpClick(): void {
        this.router.navigateByUrl(SharedConstants.ROUTENAMES_ROUTEURLS[SharedConstants.SIGNUP_ROUTE_NAME]);
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
}