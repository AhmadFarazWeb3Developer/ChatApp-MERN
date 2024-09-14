import { useState } from "react";
import { useConversation } from "../zustand/useConversation";
import toast from "react-hot-toast";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      console.log(document.cookie);
      const res = await fetch(
        `http://localhost:8000/api/messages/send/${selectedConversation?._id}`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        }
      );

      const data = await res.json();
      console.log(data);
      if (data.error) {
        console.log(error);
      }

      setMessages([...messages, data]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};

export { useSendMessage };
