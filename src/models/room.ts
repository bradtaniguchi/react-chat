import { User } from "./user";

/**
 * Represents a room on the platform, where users and messages
 * can be made.
 */
export interface Room {
  id: string;

  /**
   * The name of the room
   */
  name: string;
  /**
   * The color of the rooms "avatar" icon.
   */
  color: string;

  /**
   * The list of users, byt their id within the system
   * that are inside of this room.
   */
  users: Array<User["id"]>;
}
