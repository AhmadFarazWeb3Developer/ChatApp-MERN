import { create } from "zustand";
import axiosInstance from "../lib/axios.js";
import axionsInstance from "../lib/axios.js";
import toast from "react-hot-toast";
import { io } from "socket.io-client";
const BASE_URL = "http://localhost:3000";

const useAuthStore = create((set, get) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isCheckingAuth: true,
  isUpdatingProfile: false,
  onlineUsers: [],
  socket: null,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");

      set({ authUser: res.data });
      get().connectSocket();
    } catch (error) {
      console.log("Error in checkAuth : ", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axionsInstance.post("/auth/signup", data);
      set({ authUser: res.data });
      toast.success("Account created Successfully");
      get().connectSocket();
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },
  logout: async () => {
    try {
      await axionsInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
      get().disconnectSocket();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    console.log("data :", data);
    try {
      const res = await axionsInstance.post("/auth/login", data);

      if (res.status === 200) {
        set({ authUser: res.data });
        toast.success("Logged in Successfully");

        get().connectSocket();
      } else {
        toast.error(`Unexpected status: ${res.status}`);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          toast.error("Unauthorized: Incorrect credentials.");
        } else if (error.response.status === 400) {
          toast.error("Bad Request: Please check your input.");
        } else {
          toast.error(
            `Error: ${error.response.data.message || "Something went wrong."}`
          );
        }
      } else {
        toast.error("Network error or server not reachable.");
      }
    } finally {
      set({ isLoggingIn: false });
    }
  },

  updateProfile: async (data) => {
    set({ isUpdatingProfile: true });
    try {
      const res = await axionsInstance.put("/auth/update-profile", data);
      set({ authUser: { ...authUser, profilePic: res.data.profilePic } });
      toast.success("Profile updated Successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isUpdatingProfile: false });
    }
  },
  connectSocket: () => {
    const { authUser } = get();
    if (!authUser || get().socket?.connected) return;

    const socket = io(BASE_URL, {
      query: {
        userId: authUser._id,
      },
    });

    socket.connect();

    set({ socket: socket });

    socket.on("getOnlineUsers", (usersIds) => {
      set({ onlineUsers: usersIds });
    });
  },
  disconnectSocket: () => {
    if (get().socket?.connected) get().socket.disconnect();
  },
}));

export default useAuthStore;
