import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

import { SignInComponent } from "./auth/components/signIn/signIn.component";
import { SignUpComponent } from "./auth/components/signUp/signUp.component";
import { AuthService } from "./auth/services/auth.service";

@NgModule({
    declarations: [SignInComponent, SignUpComponent],
    imports: [CommonModule,RouterModule, FormsModule,  ReactiveFormsModule, SharedModule],
    exports: [SignInComponent, SignUpComponent],
    providers: [AuthService]
})

export class FeaturesModule { }