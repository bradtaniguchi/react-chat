import { Message } from "./message";
import { Room } from "./room";
import { User } from "./user";

/**
 * Represents the overall application state as saved within local-storage.
 *
 * This acts as the "single source of truth" during reloads, emulating
 * a real back-end.
 */
export interface AppState {
  /**
   * The list of user's within the system.
   */
  users: User[];

  /**
   * The list of rooms available within the system.
   */
  rooms: Room[];

  /**
   * The list of all messages within the system.
   */
  messages: Message[];
}

export const createDefaultAppState = (): AppState => ({
  users: [],
  rooms: [],
  messages: [],
});
