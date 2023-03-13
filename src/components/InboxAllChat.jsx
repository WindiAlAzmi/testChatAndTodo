import React, {useState, useEffect} from "react";
import { Oval } from "react-loader-spinner";
import InboxAllChatComponent from "./InboxAllChatComponent";


const LoadingChat = () => {
    return (
      <div className="flex flex-col items-center gap-4 ml-24 mr-24 mt-24 mb-24">
        <div className="">
          <Oval
            height={50}
            width={50}
            color="#C4C4C4"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="white"
            strokeWidth={6}
            strokeWidthSecondary={6}
          />
        </div>
        <div className="">
          <h3 className="text-[#4F4F4F] text-sm">Loading Chats ...</h3>
        </div>
      </div>
    );
}

const InboxAllChat = () => {
    const [loadingProgress, setLoadingProgress] = useState(true);

    useEffect(() => {
     console.log(loadingProgress, 'ini loading');
        if (loadingProgress) {
           setTimeout(() => {
             setLoadingProgress(false);
         }, 1000);
     }

    },[loadingProgress])


    return(
        <div className="">
            {loadingProgress &&  <LoadingChat /> }
            {!loadingProgress && <InboxAllChatComponent />}
        </div>
    )
}

export default InboxAllChat;