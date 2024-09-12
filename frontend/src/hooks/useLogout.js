import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (res.status === 200) {
        toast.success(data.message || "Logged out successfully");
        setAuthUser(null);
        localStorage.removeItem("chat-user");
      } else if (data.error) {
        toast.error(data.error);
      }
    } catch (error) {
      toast.error("Error logging out: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export { useLogout };
