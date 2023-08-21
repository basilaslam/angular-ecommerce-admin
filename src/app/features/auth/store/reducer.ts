import { createReducer, on } from '@ngrx/store';
import * as authActions from './actions'
import { Admin } from 'src/app/shared/models/user.model';


export const initialState: Admin | {} = {}

export const reducer = createReducer(initialState,
  on(authActions.setUserData, (state, auth ) => auth),
)
