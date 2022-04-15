import { Component } from "@angular/core";
import { Router } from "@angular/router";

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
        this.router.navigateByUrl('/signIn');
    }

    /**
     * Navigate to SignUp Component
     */
    onSignUpClick(): void {
        this.router.navigateByUrl('/signUp');
    }
}