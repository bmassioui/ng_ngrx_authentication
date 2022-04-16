import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { CurrentUserInterface } from "src/app/shared/models";
import { LocalStorageService } from "src/app/shared/services";
import { AuthService } from "../services/auth.service";
import { ActionTypes } from "../types/actionTypes";
import { signUpFailureAction, signUpSuccessAction, signInSuccessAction, signInFailureAction } from "./auth.actions";

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private authService: AuthService, private localStorageService: LocalStorageService) { }

    /**
     * SignUp Effect
     */
    signUp$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.SIGNUP),
            switchMap(({ signUpUserInterface }) => {
                return this.authService.SignUp(signUpUserInterface).pipe(
                    map((currentUser: CurrentUserInterface) => {
                        this.localStorageService.set('token', currentUser.token) // Persist token into local storage
                        return signUpSuccessAction({ currentUser })
                    }),
                    catchError((errorResponse: HttpErrorResponse) => {
                        return of(signUpFailureAction({ errors: errorResponse.error }))
                    })
                )
            })
        )
    );


    /**
     * SignIn Effect
     */
    singIn$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.SIGNIN),
            switchMap(({ signInUserInterface }) => {
                return this.authService.SignIn(signInUserInterface).pipe(
                    map((currentUser: CurrentUserInterface) => {
                        this.localStorageService.set('token', currentUser.token) // Persist token into local storage
                        return signInSuccessAction({ currentUser })
                    }),
                    catchError((errorResponse: HttpErrorResponse) => {
                        return of(signInFailureAction({ errors: errorResponse.error }))
                    })
                )
            })
        )
    );
}