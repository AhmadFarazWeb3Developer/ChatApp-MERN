import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:8000/api/users");
        const data = await res.json();
        // console.log("Data:", data);
        if (data.error) {
          toast.error(data.error);
        } else {
          setConversations(data);
        }
      } catch (error) {
        toast.error("Failed to fetch conversation data");
      } finally {
        setLoading(false);
      }
    };
    getConversation();
  }, []);

  return { loading, conversations };
};

export { useGetConversation };
