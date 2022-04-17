export interface CurrentUserInterface {
    user: {
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        bio: string | null,
        image: string | null,
        token: string
    }
}