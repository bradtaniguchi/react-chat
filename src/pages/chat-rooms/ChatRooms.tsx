import {
  Fab,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useEffect, useState } from "react";
import { AppState } from "../../models/app-state";
import { getRooms } from "../../utils/rooms/get-rooms";
import { Add } from "@mui/icons-material";
import { createRoom } from "../../utils/rooms/create-room";
import { Link, useNavigate } from "react-router-dom";

export const ChatRooms = () => {
  const [rooms, setRooms] = useState<AppState["rooms"]>([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getRooms()
      .then(setRooms)
      .then(() => setLoading(false));
  }, []);

  const handleCreate = async (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    const room = await createRoom();

    setLoading(false);
    navigate(`/rooms/${room.id}`);
  };

  const fab = (
    <Fab
      color="primary"
      aria-label="add"
      onClick={handleCreate}
      sx={{
        position: "absolute",
        bottom: "1rem",
        right: "1rem",
      }}
    >
      <Add />
    </Fab>
  );
  if (loading)
    return (
      <>
        <div>loading...</div>
      </>
    );
  if (!rooms.length)
    return (
      <>
        <div>No Rooms available, please create one</div>
        {fab}
      </>
    );

  return (
    <>
      <List>
        {rooms.map((room) => (
          <ListItem disablePadding key={room.id}>
            <ListItemButton component={Link} to={`/rooms/${room.id}`}>
              <ListItemText primary={room.name || "No Name"} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {fab}
    </>
  );
};
