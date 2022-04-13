import { AppState, createDefaultAppState } from "../models/app-state";
import { STATE_LOCAL_STORAGE_KEY } from "./state-local-storage-key";

/**
 * Returns the data currently saved within local-storage.
 *
 * Will manage issues with JSON parsing.
 *
 */
export const getState = async (): Promise<AppState> => {
  try {
    const appStateStr = localStorage.getItem(STATE_LOCAL_STORAGE_KEY);
    if (!appStateStr) return createDefaultAppState();
    const appState = JSON.parse(appStateStr);

    return {
      // Set defaults if pre-existing state is missing some
      ...createDefaultAppState(),
      ...appState,
    };
  } catch (err) {
    console.error(err);
    return Promise.resolve(createDefaultAppState());
  }
};
