import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { SharedConstants } from "../../constants";

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html'
})

export class HomeComponent {

    constructor(private router: Router) { }

    /**
     * Navigate to SignIn Component
     */
    onSignInClick(): void {
        this.router.navigateByUrl(SharedConstants.SIGNIN_ROUTE_NAME);
    }

    /**
     * Navigate to SignUp Component
     */
    onSignUpClick(): void {
        this.router.navigateByUrl(SharedConstants.SIGNUP_ROUTE_NAME);
    }
}