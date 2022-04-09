import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ChatRoom } from "./pages/chat-room/ChatRoom";
import { ChatRooms } from "./pages/chat-rooms/ChatRooms";
import { Login } from "./pages/login/Login";
import reportWebVitals from "./reportWebVitals";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="login" element={<Login />} />
          <Route path="rooms" element={<ChatRooms />} />
          <Route path="rooms/:id" element={<ChatRoom />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
