import React from "react";
import close from "../assets/img/feather-icon/close.svg";
import back from "../assets/img/feather-icon/back.svg";
import useChatStore from "../store/chat";


const AddMessage = () => {
    return (
        <>
            <div className="w-5/6 bg-white p-2 flex flex-row items-left rounded-md border border-gray-500">
                <input type="text" className="text-gray-700 w-full outline-none" placeholder="Type a new message" />
            </div>
            <div className="w-1/6 bg-[#2F80ED]  rounded-lg">
                <button className="w-full p-2 rounded-lg"><h4 className="text-white">Send</h4></button>
            </div>
        </>
    )
}






const ChatUserPageRight = () => {
  return (
    <div className=" flex flex-col w-4/6 items-end">
      <div className="w-full flex flex-row justify-end">
        <h4 className="text-[#9B51E0] text-end ">You</h4>
      </div>
      <div className="w-full p-2 flex flex-row-reverse">
        <div className="bg-[#EEDCFF] rounded-md p-2 w-5/6 flex flex-col">
          <div className="">
            <h4 className="text-black text-left">me too</h4>
          </div>
          <div className="">
            <h4 className="text-black text-left">19:32</h4>
          </div>
        </div>
        <div className=" flex flex-row w-1/6  -mt-2 items-start justify-end  text-black">
          <h4 className="p-2">...</h4>
        </div>
      </div>
    </div>
  );
};




const ChatUserPageLeft = () => {
    return (
      <div className="flex flex-col w-4/6 items-start">
        <div className="w-full flex flex-row items-start justify-start">
          <h4 className="text-[#E5A443] text-left">Mary Hilda</h4>
        </div>
        <div className="w-full  flex flex-row">
          <div className="bg-[#FCEED3] rounded-md p-2 w-5/6 flex flex-col">
            <div className="">
              <h4 className="text-black text-left">haiiiii keep going</h4>
            </div>
            <div className="">
              <h4 className="text-black text-left">19:32</h4>
            </div>
          </div>
          <div className=" flex flex-col w-1/6 -mt-5 items-start justify-start text-black">
            <h4 className="p-2">...</h4>
          </div>
        </div>
      </div>
    );
}


const ContainerAllChatUser = () => {
  return (
    <div className="flex flex-col gap-2 p-2 ">
      <div className="flex flex-row w-full justify-start p-2">
        <ChatUserPageLeft />
      </div>
      <div className="flex flex-row w-full items-end justify-end p-2">
        <ChatUserPageRight />
      </div>
    </div>
  );
}



const AllDetailChat = () => {
    return (
      <>
        <ContainerAllChatUser />
        <div className="flex flex-row  w-full">
          <div className="w-3/6 flex flex-row items-center">
            <div className="border border-black w-full"></div>
          </div>
          <div className="text-black w-4/6">Today, June 09 2021</div>
          <div className="w-3/6 flex flex-row items-center">
            <div className="border border-black w-full"></div>
          </div>
        </div>
        <ContainerAllChatUser />
        <div className="flex flex-row w-full">
          <div className="w-3/6 flex flex-row items-center">
            <div className="border border-[#EB5757] w-full"></div>
          </div>
          <div className="text-[#EB5757] w-4/6">New Message</div>
          <div className="w-3/6 flex flex-row items-center">
            <div className="border border-[#EB5757] w-full"></div>
          </div>
        </div>
        <div className="p-2">
          <ChatUserPageLeft />
        </div>
      </>
    );
}




const DetailChat = () => {
    const { setFalseDetailChatBtn} = useChatStore();


    const goToAllChat = () => {
        console.log('go back ke main');
        setFalseDetailChatBtn();
        // setChatBtn();
        
    }
    return (
      <div className="flex flex-col mb-24 justify-start gap-2  relative h-96">
        <div className="bg-white border-b-black border w-full flex flex-row ">
          <button
            className="w-1/6 flex flex-row items-center justify-center"
            onClick={goToAllChat}
          >
            <img src={back} alt="back" className="h-[14px]" />
          </button>
          <div className=" p-2 items-start justify-start flex flex-col w-4/6">
            <div className=" mb-2 text-[#2F80ED] font-bold">Title Chat</div>
            <div className=" text-black text-sm">3 participants</div>
          </div>
          <button
            className=" w-1/6 flex flex-row items-center justify-center"
            onClick={goToAllChat}
          >
            <img src={close} alt="close" className="h-[14px]" />
          </button>
        </div>
        <div className="bg-white w-full flex flex-col h-96 overflow-y-scroll">
          <AllDetailChat />
        </div>
        <div className=" w-full flex -mb-24 flex-row gap-3 items-center ">
          <AddMessage />
        </div>
      </div>
    );

}

export default DetailChat;