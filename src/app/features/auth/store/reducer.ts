import { createReducer, on } from '@ngrx/store';
import { authStateInterface } from '../types/auth.stateInterface';
import * as authActions from './actions'
export const initialState: authStateInterface = {
  isAuthenticated: false
}


export const reducer = createReducer(initialState, on(authActions.setAuthInfo, (state: authStateInterface)=>({...state, isAuthenticated: true})))
