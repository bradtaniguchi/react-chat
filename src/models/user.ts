/**
 * Represents a user on the platform
 */
export interface User {
  id: string;
  /**
   * The color of the user's avatar.
   */
  color: string;
  /**
   * The name of the user, setup during login
   */
  name: string;
}
