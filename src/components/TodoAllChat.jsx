import React, {useState, useEffect} from "react";
import { Oval } from "react-loader-spinner";
import TodoAllChatComponent from "./TodoAllChatComponent";


const LoadingChat = () => {
  return (
    <div className="flex flex-col  mb-24 justify-center items-center gap-4  h-80">
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
        <h3 className="text-[#4F4F4F] text-sm">Loading Task List ...</h3>
      </div>
    </div>
  );
};



const TodoAllChat = () => {
    const [loadingProgress, setLoadingProgress] = useState(true);

    useEffect(() => {
      console.log(loadingProgress, "ini loading");
      if (loadingProgress) {
        setTimeout(() => {
          setLoadingProgress(false);
        }, 1000);
      }
    }, [loadingProgress]);

    return (
      <div className="">
        {loadingProgress && <LoadingChat />}
        {!loadingProgress && <TodoAllChatComponent />}
      </div>
    );
}

export default TodoAllChat;