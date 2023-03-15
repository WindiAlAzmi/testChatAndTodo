import React, {useEffect} from "react";
import useChatStore from "../store/chat";
// import { AiOutlineSearch } from "react-icons/ai";
import TodoAllChat from "./TodoAllChat";

const NavbarComponent = () => {
  return (
    <div className=" rounded-md p-2 w-full flex flex-row items-center justify-between">
      <div className="w-5/6 flex flex-row items-center justify-start p-1">
        <div className="bg-white w-40 ml-20 border rounded-md border-black p-2">
          <p>My Tasks</p>
        </div>
      </div>
      <div className=" p-1 w-1/6 flex flex-row items-center justify-center">
        <button className="bg-[#2F80ED] rounded-md w-full p-2">
          <h3 className="text-white font-bold">New Task</h3>
        </button>
      </div>
    </div>
  );
};


const Todo = () => {
       const { todoBtn } = useChatStore();

       useEffect(() => {
         console.log("ini todo");
       }, []);
;

       return (
         <div className=" w-full flex flex-row justify-end">
           <div className="bg-white w-1/2 flex flex-col p-6 gap-4 mr-20">
             {todoBtn  && (
               <>
                 <NavbarComponent />
                 <TodoAllChat/>
               </>
             )}
         
           </div>
         </div>
       );
}

export default Todo;