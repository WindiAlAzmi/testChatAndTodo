import React, {useEffect} from "react";
import { AiOutlineSearch } from "react-icons/ai";
import useChatStore from "../store/chat";
import DetailChat from "./DetailChat";
import InboxAllChat from "./InboxAllChat";

const SearchComponent = () => {
      return (
        <div className="border border-[#828282] rounded-[5px] p-2 w-full flex flex-row items-center justify-between">
          <div className="bg-green-200 ml-10 w-4/5 flex flex-row items-center">
            <input
              type="text"
              className="bg-white outline-none w-full text-[#333333] text-base"
              placeholder="Search"
            />
          </div>
          <div className="mr-10">
            <AiOutlineSearch size="18" color="#333333" width="" height="" />
          </div>
        </div>
      ); 
}

const Inbox = () => {
        const { chatBtn, detailChatBtn } = useChatStore();

    useEffect(() => {
        console.log('ini inbox ');
    }, [])

    useEffect(() => {
      console.log(detailChatBtn, "ini zustand storre detail chat");
    }, [detailChatBtn]);

    return (
      <div className=" w-full flex flex-row justify-end">
        <div className="bg-white w-1/2 flex flex-col p-6 gap-4 mr-20">
          {chatBtn && !detailChatBtn && 
          <>
          <SearchComponent />
          <InboxAllChat />
          </>
          }
          {detailChatBtn && chatBtn && <DetailChat />}
        </div>
      </div>
    );
}

export default Inbox;