import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogin = () => {
  const { setAuthUser } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const Login = async (inputs) => {
    const { username, password } = inputs;
    if (username && password) {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:8000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        const data = await res.json(); // Only parse the response once

        if (res.status === 200) {
          console.log(data);
          toast.success(`${data.username} Logged In`);
          localStorage.setItem("chat-user", JSON.stringify(data));
          setAuthUser(data);
        } else if (res.status === 400) {
          console.log(data);
          toast.error(data.error);
        }
      } catch (error) {
        toast.error("Login failed: " + error.message); // Ensure proper error message
      } finally {
        setLoading(false); // Ensure loading state is reset
      }
    } else {
      toast.error("Fields are Empty");
    }
  };

  return { loading, Login }; // Return the login function with correct name
};

export { useLogin };
