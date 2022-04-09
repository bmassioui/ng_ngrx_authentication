import { Action, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../models";
import { signInAction, signInFailureAction, signInSuccessAction, signUpAction, signUpSuccessAction } from "./auth.actions";

const authInitialState: AuthStateInterface = {
    isSubmitting: false,
    currentUser: null,
    isLoggedIn: false,
    validationErrors: null
}

const authReducer = createReducer(
    authInitialState,

    /**
     * When SignUp Action called
     */
    on(signUpAction, (state): AuthStateInterface => ({
        ...state,
        isSubmitting: true
    })),

    /**
     * When SignUp succeeded
     */
    on(signUpSuccessAction, (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        currentUser: action.currentUser,
        isLoggedIn: true,
        validationErrors: null
    })),

    /**
     * When SignUp failed
     */
    on(signInFailureAction, (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        currentUser: null,
        isLoggedIn: false,
        validationErrors: action.errors
    })),

    /**
     * When SignIn Action called
     */

    on(signInAction, (state): AuthStateInterface => ({
        ...state,
        isSubmitting: true,
    })),

    /**
     * When SignIn succeeded
     */
    on(signInSuccessAction, (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        currentUser: action.currentUser,
        isLoggedIn: true,
        validationErrors: null
    })),

    /**
     * When SignIn failed
     */
    on(signInFailureAction, (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        currentUser: null,
        isLoggedIn: false,
        validationErrors: action.errors
    }))
)

/**
 * Export reducers
 * @param state
 * @param action 
 * @returns 
 */
export function reducers(state: AuthStateInterface, action: Action): AuthStateInterface {
    return authReducer(state, action);
}