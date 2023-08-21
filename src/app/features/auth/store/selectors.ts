import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/types/appState.interface";


export const selectUserData = (state: AppStateInterface) => state.auth


