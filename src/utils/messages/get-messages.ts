import { Room } from "../../models/room";
import { getState } from "../get-state";

export const getMessages = (roomId: Room["id"]) =>
  getState().then((state) =>
    state.messages.filter((message) => message.room === roomId)
  );
