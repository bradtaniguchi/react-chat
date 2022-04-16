import { Room } from "../../models/room";
import { getState } from "../get-state";

export const getRoom = async (roomId: Room["id"]) =>
  getState().then((state) => state.rooms.find((room) => room.id === roomId));
