export class SharedConstants {
    public static readonly EMPTY_ROUTE_NAME: string = '';
    public static readonly HOME_ROUTE_NAME: string = 'home';
    public static readonly NOTFOUND_ROUTE_NAME: string = '**';
    public static readonly SIGNIN_ROUTE_NAME: string = 'signin';
    public static readonly SIGNUP_ROUTE_NAME: string = 'signup';
    public static readonly USERS_ROUTE_NAME: string = 'users';

    /**
     * Route Name and Route Url
     */
    public static readonly ROUTENAMES_ROUTEURLS: { [name: string]: string } = {
        '': `/${SharedConstants.HOME_ROUTE_NAME}`,
        'home': `/${SharedConstants.HOME_ROUTE_NAME}`,
        '**': `/${SharedConstants.NOTFOUND_ROUTE_NAME}`,
        'signin': `/${SharedConstants.SIGNIN_ROUTE_NAME}`,
        'signup': `/${SharedConstants.SIGNUP_ROUTE_NAME}`,
        'users': `/${SharedConstants.USERS_ROUTE_NAME}`,
    };
}