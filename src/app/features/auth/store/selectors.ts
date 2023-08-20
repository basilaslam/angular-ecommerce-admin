import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/types/appState.interface";

export const selectAuthState = (state: AppStateInterface) => state.isAuthenticated;

export const isAuthenticated = createSelector(
  selectAuthState,
  (authState) => authState
);
