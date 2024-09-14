import { useEffect } from "react";
import { useConversation } from "../../zustand/useConversation";
const Message = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();



  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={selectedConversation.profilePic}
          />
        </div>
      </div>
      <div className="chat-bubble text-white bg-blue-500 pb-2">
        Hey! how are you , Are you with me ?
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:24 PM
      </div>
    </div>
  );
};
export default Message;
