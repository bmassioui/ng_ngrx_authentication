export class SharedConstants {
    public static readonly EMPTY_ROUTE_NAME = '';
    public static readonly HOME_ROUTE_NAME = 'home';
    public static readonly NOTFOUND_ROUTE_NAME = '**';
    public static readonly SIGNIN_ROUTE_NAME = 'signin';
    public static readonly SIGNUP_ROUTE_NAME = 'signup';
    public static readonly USERS_ROUTE_NAME = 'users';

    /**
     * Route Name and Route Url
     */
    public static readonly ROUTENAMES_ROUTEURLS: { [name: string]: string } = {
        EMPTY_ROUTE_NAME: `/${SharedConstants.HOME_ROUTE_NAME}`,
        HOME_ROUTE_NAME: `/${SharedConstants.HOME_ROUTE_NAME}`,
        NOTFOUND_ROUTE_NAME: `/${SharedConstants.NOTFOUND_ROUTE_NAME}`,
        SIGNIN_ROUTE_NAME: `/${SharedConstants.SIGNIN_ROUTE_NAME}`,
        SIGNUP_ROUTE_NAME: `/${SharedConstants.SIGNUP_ROUTE_NAME}`,
        USERS_ROUTE_NAME: `/${SharedConstants.USERS_ROUTE_NAME}`,
    };
}