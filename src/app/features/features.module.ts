import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SignInComponent } from "./auth/signIn/components/signIn.component";
import { SignUpComponent } from "./auth/signUp/components/signUp.component";

@NgModule({
    declarations: [SignInComponent, SignUpComponent],
    imports: [RouterModule],
    exports: [SignInComponent, SignUpComponent],
})

export class FeaturesModule { }