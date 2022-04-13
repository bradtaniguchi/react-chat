import { nanoid } from "nanoid";
import { Room } from "../../models/room";
import { getState } from "../get-state";
import { setState } from "../set-state";

/**
 * Creates a new room in the list of rooms
 */
export const createRoom = async (): Promise<Room> => {
  const appState = await getState();

  const room: Room = {
    id: nanoid(8),
    name: "New Room",
    users: [],
    color: "",
  };

  appState.rooms.push(room);

  await setState(appState);

  return room;
};
