import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Message } from "../../models/message";
import { Room } from "../../models/room";
import { getMessages } from "../../utils/messages/get-messages";
import { getRoom } from "../../utils/rooms/get-room";

export const ChatRoom = () => {
  const { id: roomId } = useParams();

  const [loadingRoom, setLoadingRoom] = useState(false);
  const [noRoom, setNoRoom] = useState<boolean>(false);
  const [room, setRoom] = useState<Room | null>(null);

  const [messages, setMessages] = useState<Message[]>([]);
  const [loadingMessages, setLoadingMessages] = useState(false);

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
  if (messages && !messages.length)
    return (
      <div>
        <h1>{room.name}</h1>
        <div>No messages yet :(</div>
      </div>
    );

  return (
    <div>
      <h1>{room?.name}</h1>
      <ul>
        {messages.map((message) => (
          <li>{message.text}</li>
        ))}
      </ul>
    </div>
  );
};
