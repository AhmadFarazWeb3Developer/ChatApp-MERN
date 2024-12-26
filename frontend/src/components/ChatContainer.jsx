import React, { useEffect } from "react";
import useChatStore from "../store/useChatStore";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";

const ChatContainer = () => {
  const { messges, getMessages, isMessagesLoading, selectedUser } =
    useChatStore();

  if (isMessagesLoading) return <div>Loading...</div>;

  useEffect(() => {
    getMessages(selectedUser._id);
  }, [selectedUser._id, getMessages]);
  return (
    <div className=" flex-1 flex flex-col overflow-auto">
      <ChatHeader />
      <p> messges...</p>
      <MessageInput />
    </div>
  );
};

export default ChatContainer;
