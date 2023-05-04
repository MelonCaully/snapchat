export interface AuthResponse {
    idToken:string,
    email:string,
    refreshToken:string,
    expiredIn:string,
    localId:string,
    registered?:boolean,
}