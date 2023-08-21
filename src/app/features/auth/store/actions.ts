import { createAction, props } from "@ngrx/store";
import { Admin } from "src/app/core/authentication/models/api.model";

export const getUserData = createAction('[auth] get AuthData')
export const setUserData = createAction('[auth] set adminData',props<Admin>())
export const removeUserData = createAction('[auth] Remove AuthInfo');

