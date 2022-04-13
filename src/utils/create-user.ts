import { User } from "../models/user";
import { nanoid } from "nanoid";
import { getState } from "./get-state";

/**
 * Creates a user within the local-storage state.
 */
export const createUser = async ({
  name,
}: Pick<User, "name">): Promise<User> => {
  const id = nanoid(8);

  const user: User = {
    id,
    color: "", // always blank for now
    name,
  };
  const store = await getState();

  store.users.push(user);

  return user;
};
