import { create } from "zustand";
import toast from "react-hot-toast";
import axiosInstance from "../lib/axios";

const useChatStore = create((set, get) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,

  getUsers: async () => {
    set({ isUsersLoading: true });

    try {
      const res = await axiosInstance.get("/message/users");
      console.log(res.data);
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
      const res = await axiosInstance.get(`/message/${userId}`);
      set({ messages: res.data });
    } catch (error) {
      const message = error.response?.data?.message || "An error occurred";
      toast.error(message);
    } finally {
      set({ isMessagesLoading: false });
    }
  },

  sendMessage: async (messageData) => {
    const { selectedUser, messages } = get();
    console.log("User ID : ", selectedUser._id);
    console.log("message Data : ", messageData);
    try {
      const res = await axiosInstance.post(
        `/message/send/${selectedUser._id}`,
        messageData
      );
      console.log(res);

      set({ messages: [...messages, res.data] });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
    }
  },

  setSelectedUser: (selectedUser) => set({ selectedUser }),
}));

export default useChatStore;
