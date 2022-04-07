import { NgModule } from "@angular/core";
import { SignInComponent } from "./auth/signIn/signIn.component";
import { SignUpComponent } from "./auth/signUp/signUp.component";

@NgModule({
    declarations: [SignInComponent, SignUpComponent],
    exports: [SignInComponent, SignUpComponent],
})

export class FeaturesModule { }