import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

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
}