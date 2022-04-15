import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html'
})

export class HomeComponent {

    constructor(private router : Router) {
    }

    onSignInClick(): void {
        this.router.navigate(['/signIn']);
    }

    onSignUpClick(): void {

    }
}