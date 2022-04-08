import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SignInComponent } from "./auth/components/signIn/signIn.component";
import { SignUpComponent } from "./auth/components/signUp/signUp.component";

@NgModule({
    declarations: [SignInComponent, SignUpComponent],
    imports: [RouterModule],
    exports: [SignInComponent, SignUpComponent],
})

export class FeaturesModule { }