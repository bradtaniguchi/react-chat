import { AppState } from "../models/app-state";
import { STATE_LOCAL_STORAGE_KEY } from "./state-local-storage-key";

/**
 * Sets the given app state into local-storage
 *
 * **Note** this is done as a promise to emulate an actual HTTP call
 *
 * @returns the app state passed, and a boolean to represent
 * if the update went through or not correctly
 */
export const setState = async (
  appState: AppState
): Promise<[AppState, boolean]> => {
  try {
    localStorage.setItem(STATE_LOCAL_STORAGE_KEY, JSON.stringify(appState));

    return [appState, true];
  } catch (err) {
    return [appState, false];
  }
};
