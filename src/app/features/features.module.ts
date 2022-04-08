import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { SignInComponent } from "./auth/components/signIn/signIn.component";
import { SignUpComponent } from "./auth/components/signUp/signUp.component";
import { AuthService } from "./auth/services/auth.service";

@NgModule({
    declarations: [SignInComponent, SignUpComponent],
    imports: [RouterModule, FormsModule,  ReactiveFormsModule],
    exports: [SignInComponent, SignUpComponent],
    providers: [AuthService]
})

export class FeaturesModule { }