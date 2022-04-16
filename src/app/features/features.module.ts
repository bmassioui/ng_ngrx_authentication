import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SharedModule } from "../shared/shared.module";

import { SignInComponent } from "./auth/components/signIn/signIn.component";
import { SignUpComponent } from "./auth/components/signUp/signUp.component";
import { AuthService } from "./auth/services/auth.service";
import { AuthEffects } from "./auth/store/auth.effects";
import { reducers } from "./auth/store/auth.reducer";
import { Users } from "./usersMangement/component/users/users.component";

@NgModule({
    declarations: [SignInComponent, SignUpComponent, Users],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        StoreModule.forFeature('auth', reducers),
        EffectsModule.forFeature([AuthEffects])
    ],
    exports: [SignInComponent, SignUpComponent, Users],
    providers: [AuthService]
})

export class FeaturesModule { }