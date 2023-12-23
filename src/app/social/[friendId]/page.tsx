"use client";

//import { useChat } from "@/hooks/useChat";
//import { useRef } from "react";
import { GoHeartFill } from "react-icons/go";

// {userId}: {userId: string}
function ChatPage() {
  // const { messages, announcedMessage } = useChat({userId});
  // // console.log(userId);
  // // console.log(messages);
  // const { createMessage, announceMessage, unsendMessage } = useChat({userId});
  // const newmessageRef = useRef<HTMLInputElement>(null);

  // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === 'Enter') {
  //     e.preventDefault(); // prevent line break
  //     //console.log(newmessageRef.current?.value);
  //     if(!newmessageRef.current?.value) return;
  //     createMessage(newmessageRef.current?.value);
  //     newmessageRef.current.value = "";
  //     // commentreplyRef.current.dispatchEvent(
  //     //   new Event("input", { bubbles: true, composed: true }),
  //     // );
  //   }
  // };

  // console.log(messages);

  return (
    <div className="h-full w-full" style={{ backgroundColor: "#DFD3C4" }}>
      <div className="flex">
        <h1 className="p-4 text-6xl" style={{ color: "#8E6920" }}>
          friend's name
        </h1>
        <h2 className="ml-auto p-8 text-4xl" style={{ color: "#998D73" }}>
          2023/12/09(Sat.)
        </h2>
      </div>
      <div
        className="mx-8 flex h-4/5 items-end rounded-xl border-4 bg-white"
        style={{ borderColor: "#7C5A16" }}
      >
        <div
          className="flex h-min w-full justify-between rounded-b-lg px-8 py-4 text-5xl"
          style={{ backgroundColor: "#E8BA5D", borderColor: "#7C5A16" }}
        >
          <div className="flex flex-col gap-2">
            <p className="text-4xl">topic</p>
            <p className="text-2xl">description</p>
          </div>
          <span className="flex gap-4 self-center">
            <GoHeartFill size={48} /> 2
          </span>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
