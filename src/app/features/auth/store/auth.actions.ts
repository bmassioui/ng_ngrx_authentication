import { createAction, props } from "@ngrx/store";
import { SignInUserInterface, SignUpUserInterface } from "../models";
import { ActionTypes } from "../types/actionTypes";

/**
 * SignUp Action
 */
export const SignUp = createAction(
    ActionTypes.SIGNUP,
    props<{signUpUserInterface: SignUpUserInterface}>()
);

/**
 * SignIn Action
 */
export const SignIn = createAction(
    ActionTypes.SIGNIN,
    props<{signInUserInterface : SignInUserInterface}>()
);