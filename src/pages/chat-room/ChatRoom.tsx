import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Message } from "../../models/message";
import { Room } from "../../models/room";
import { createMessage } from "../../utils/messages/create-message";
import { getMessages } from "../../utils/messages/get-messages";
import { getRoom } from "../../utils/rooms/get-room";

export const ChatRoom = () => {
  const { id: roomId } = useParams();

  const [loadingRoom, setLoadingRoom] = useState(false);
  const [noRoom, setNoRoom] = useState<boolean>(false);
  const [room, setRoom] = useState<Room | null>(null);

  const [messages, setMessages] = useState<Message[]>([]);
  const [loadingMessages, setLoadingMessages] = useState(false);

  const [messageValue, setMessageValue] = useState("");

  useEffect(() => {
    if (roomId) {
      setLoadingRoom(true);
      getRoom(roomId).then((room) => {
        setLoadingRoom(false);
        if (room) {
          setRoom(room);
        } else {
          // no room with this id found!
          setNoRoom(true);
        }
      });
    }
  }, [roomId]);

  useEffect(() => {
    if (room) {
      setLoadingMessages(true);
      getMessages(room.id).then((messages) => {
        setLoadingMessages(false);
        setMessages(messages);
      });
    }
  }, [room]);

  const handleMessageOnChange = (e: React.ChangeEvent<HTMLElement>) => {
    setMessageValue((e.target as HTMLInputElement).value);
  };

  const handleMessageCreate = (e: React.SyntheticEvent) => {
    e.preventDefault();
    createMessage({
      room: room!.id,
      text: messageValue,
      user: "1", // TODO:
    }).then(() => {
      setMessageValue("");
      return (() => {
        setLoadingMessages(true);
        return getMessages(room!.id).then((messages) => {
          setLoadingMessages(false);
          setMessages(messages);
        });
      })();
    });
  };

  // TODO: Add message bar component
  if (loadingRoom) return <div>loading...</div>;
  if (noRoom || !room) return <div>No Room with id: {roomId} found :(</div>;
  if (loadingMessages) {
    return (
      <div>
        <h1>{room?.name}</h1>
        <div>loading...</div>
      </div>
    );
  }

  return (
    <div>
      <h1>{room?.name}</h1>
      <ul>
        {messages && messages.length ? (
          messages.map((message) => <li key={message.id}>{message.text}</li>)
        ) : (
          <div>No messages yet :(</div>
        )}
      </ul>
      <div>
        <TextField value={messageValue} onChange={handleMessageOnChange} />
        <Button variant="outlined" onClick={handleMessageCreate}>
          Send
        </Button>
      </div>
    </div>
  );
};
