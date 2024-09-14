import { useGetConversation } from "../../hooks/useGetConversations";
import Conversation from "./Conversation";
import { getRandEmoji } from "../../utils/emoji";

const Conversations = () => {
  const { loading, conversations } = useGetConversation();
  // console.log("Conversation : ", conversations);

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, index) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandEmoji()}
          lastIndex={index === conversations.length - 1}
        />
      ))}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};
export default Conversations;
