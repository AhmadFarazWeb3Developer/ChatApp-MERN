import { create } from "zustand";
import toast from "react-hot-toast";
import axiosInstance from "../lib/axios";

const useChatStore = create((set) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,

  getUsers: async () => {
    set({ isUsersLoading: true });

    try {
      const res = await axiosInstance.get("/message/users");
      console.log(res.data); // Log the response to check its structure
      set({ users: res.data });
    } catch (error) {
      const message = error.response?.data?.message || "An error occurred";
      toast.error(message);
    } finally {
      set({ isUsersLoading: false });
    }
  },

  getMessages: async (userId) => {
    set({ isMessagesLoading: true });
    try {
      const res = await axiosInstance.get(`/messages/${userId}`);
      set({ messages: res.data });
    } catch (error) {
      const message = error.response?.data?.message || "An error occurred";
      toast.error(message);
    } finally {
      set({ isMessagesLoading: false });
    }
  },

  setSelectedUser: (selectedUser) => set({ selectedUser }),
}));

export default useChatStore;
