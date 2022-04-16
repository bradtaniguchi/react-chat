import { nanoid } from "nanoid";
import { Message } from "../../models/message";
import { getState } from "../get-state";
import { setState } from "../set-state";

export const createMessage = async ({
  room,
  user,
  text,
}: Pick<Message, "room" | "user" | "text">) => {
  const appState = await getState();

  const message: Message = {
    id: nanoid(8),
    room,
    user,
    text,
    createdAt: new Date(),
  };

  appState.messages.push(message);

  await setState(appState);

  return message;
};
