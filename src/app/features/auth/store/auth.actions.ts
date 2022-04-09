import { createAction, props } from "@ngrx/store";
import { CurrentUserInterface, ErrorListInterface } from "src/app/shared/models";
import { SignInUserInterface, SignUpUserInterface } from "../models";
import { ActionTypes } from "../types/actionTypes";

/**
 * SignUp Action
 */
export const signUpAction = createAction(
    ActionTypes.SIGNUP,
    props<{ signUpUserInterface: SignUpUserInterface }>()
);

/**
 * SignUp Success Action
 */
export const signUpSuccessAction = createAction(
    ActionTypes.SIGNUP_SUCCESS,
    props<{ currentUser: CurrentUserInterface }>()
);

/**
 * SignUp Failure Action
 */
export const signUpFailureAction = createAction(
    ActionTypes.SIGNUP_FAILURE,
    props<{ erros: ErrorListInterface }>()
);

/**
 * SignIn Action
 */
export const signInAction = createAction(
    ActionTypes.SIGNIN,
    props<{ signInUserInterface: SignInUserInterface }>()
);

/**
 * SignIn Success Action
 */
export const signInSuccessAction = createAction(
    ActionTypes.SIGNIN_SUCCESS,
    props<{ currentUser: CurrentUserInterface }>()
);

/**
 * SignIn Failure Action
 */
export const signInFailureAction = createAction(
    ActionTypes.SIGNIN_FAILURE,
    props<{ errors: ErrorListInterface }>()
);