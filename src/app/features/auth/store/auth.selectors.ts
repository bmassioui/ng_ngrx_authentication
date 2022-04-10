import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthStateInterface } from "../models";

export const authFeatureSelector = createFeatureSelector<AuthStateInterface>('auth')

/**
* Select isSubmitting's state
*/
export const isSubmitting = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface) => authState.isSubmitting
)

/**
 * Select validation errors' state
 */
export const validationErrors = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface) => authState.validationErrors
)

/**
 * Select isLoggedIn
 */
export const isLoggedIn = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface) => authState.isLoggedIn
)