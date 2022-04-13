import { User } from "../../models/user";
import { nanoid } from "nanoid";
import { getState } from "../get-state";
import { setState } from "../set-state";

/**
 * Creates a user within the local-storage state.
 */
export const createUser = async ({
  username,
}: Pick<User, "username">): Promise<User> => {
  const id = nanoid(8);

  const user: User = {
    id,
    color: "", // always blank for now
    username,
  };
  const store = await getState();

  store.users.push(user);

  await setState(store);

  return user;
};
