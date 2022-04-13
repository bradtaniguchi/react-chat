import { Room } from "./room";
import { User } from "./user";

/**
 * Represents a single chat-message made within a room.
 */
export interface Message {
  id: string;
  /**
   * The room this  message belongs to.
   */
  room: Room["id"];

  /**
   * The user who created this message.
   */
  user: User["id"];

  /**
   * When this message was created.
   */
  createdAt: Date;
}
