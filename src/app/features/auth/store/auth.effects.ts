import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { CurrentUserInterface } from "src/app/shared/models";
import { AuthService } from "../services/auth.service";
import { ActionTypes } from "../types/actionTypes";
import { signUpFailureAction, signUpSuccessAction, signInSuccessAction, signInFailureAction } from "./auth.actions";

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private authService: AuthService) { }

    /**
     * SignUp Effect
     */
    signUp$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.SIGNUP),
            switchMap(({ signUpUserInterface }) => {
                return this.authService.SignUp(signUpUserInterface).pipe(
                    map((currentUser: CurrentUserInterface) => {
                        return signUpSuccessAction({ currentUser })
                    }),
                    catchError((errorResponse: HttpErrorResponse) => {
                        return of(signUpFailureAction({ erros: errorResponse.error }))
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