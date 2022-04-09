import { CurrentUserInterface, ErrorListInterface } from "../../../shared/models";

export interface AuthStateInterface {
    isSubmitting: boolean,
    currentUser: CurrentUserInterface | null,
    isLoggedIn: boolean | false,
    validationErrors: ErrorListInterface | null
}