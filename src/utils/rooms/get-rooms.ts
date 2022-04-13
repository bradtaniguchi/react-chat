import { getState } from "../get-state";

export const getRooms = async () => getState().then((state) => state.rooms);
