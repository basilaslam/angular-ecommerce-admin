import { createAction } from "@ngrx/store";

export const getAuthInfo = createAction('[authInfo] get AuthInfo')
export const setAuthInfo = createAction('[authInfo] set AuthInfo')
export const removeAuthInfo = createAction('[authInfo] remove AuthInfo')
