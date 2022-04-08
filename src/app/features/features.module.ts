import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SignInComponent } from "./auth/signIn/signIn.component";
import { SignUpComponent } from "./auth/signUp/signUp.component";

@NgModule({
    declarations: [SignInComponent, SignUpComponent],
    imports: [RouterModule],
    exports: [SignInComponent, SignUpComponent],
})

export class FeaturesModule { }