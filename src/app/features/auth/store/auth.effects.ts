import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { CurrentUserInterface, LocalStorageService, SharedConstants } from "src/app/shared";
import { AuthService } from "../services";
import { ActionTypes } from "../types";
import { signInFailureAction, signInSuccessAction, signUpFailureAction, signUpSuccessAction } from "./auth.actions";



@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private authService: AuthService, private localStorageService: LocalStorageService<CurrentUserInterface>) { }

    /**
     * SignUp Effect
     */
    signUp$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.SIGNUP),
            switchMap(({ signUpUserInterface }) => {
                return this.authService.SignUp(signUpUserInterface).pipe(
                    map((currentUser: CurrentUserInterface) => {
                        this.localStorageService.set(SharedConstants.LOCALSTORAGE_CURRENTUSER_KEY, currentUser)
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
                        this.localStorageService.set(SharedConstants.LOCALSTORAGE_CURRENTUSER_KEY, currentUser)
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