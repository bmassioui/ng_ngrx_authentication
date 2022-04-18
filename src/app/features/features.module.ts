import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { HomeComponent } from "./home";
import { Users } from "./usersMangement";
import { AuthEffects, AuthService, reducers, SignInComponent, SignUpComponent } from "./auth";
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [HomeComponent, SignInComponent, SignUpComponent, Users],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        StoreModule.forFeature('auth', reducers),
        EffectsModule.forFeature([AuthEffects])
    ],
    exports: [HomeComponent, SignInComponent, SignUpComponent, Users],
    providers: [AuthService]
})

export class FeaturesModule { }