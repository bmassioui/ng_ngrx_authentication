import { Component } from "@angular/core";
import { Router } from "@angular/router";

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
        this.router.navigateByUrl('/signIn');
    }

    /**
     * Navigate to SignUp Component
     */
    onSignUpClick(): void {
        this.router.navigateByUrl('/signUp');
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