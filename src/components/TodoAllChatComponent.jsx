import React from "react";
import expand from '../assets/img/feather-icon/expand.svg';
import more from "../assets/img/feather-icon/more.svg";
import time from "../assets/img/feather-icon/time.svg";
import edit from "../assets/img/feather-icon/edit.svg";
import editAdd from "../assets/img/feather-icon/editAdd.svg";
import timeAdd from "../assets/img/feather-icon/timeAdd.svg";

const TodoUpdateBody = () => {
  return (
    <div className=" border border-b-black border-white pl-8 flex flex-col gap-3 w-full p-4">
      <div className="flex flex-row items-center justify-start gap-1">
        <div className="w-10  flex flex-row items-center">
          <img src={time} alt="ini time" />
        </div>
        <div className="w-40 flex flex-row rounded-md items-center p-2 border border-black">
          <input type="date" className="w-full :checked:bg-white " />
        </div>
      </div>
      <div className=" flex flex-row  items-center justify-start gap-1">
        <div className="w-10  flex flex-row items-center">
          <img src={edit} alt="ini edit" />
        </div>
        <div className="w-5/6  flex flex-row justify-start items-center ">
          <textarea className="w-full text-start p-3 text-black border rounded-md border-[#4F4F4F]">
            lorem ipsumgrtghrthrtrt
          </textarea>
        </div>
      </div>
    </div>
  );




}



const TodoNewCardHeader = () => {
     return (
       <div className="flex gap-2 flex-row w-full items-center">
         <div className="">
           <input type="checkbox"  className="border-gray-600" />
         </div>
         <div className=" w-3/6 p-2 ml-2 rounded-md flex flex-row border border-gray-800 items-center justify-start">
           <div className="w-full  ">
             <input type="text" placeholder="Type Task Title" className="outline-none text-gray-600 w-full" />
             {/* <h3 className="font-bold text-gray-600 line-through text-left">
               Title task
             </h3> */}
           </div>
         </div>
         <div className="bg-white flex w-3/6 flex-row gap-1 items-center justify-between">
           <div className=" w-2/6"></div>
           <div className="w-2/6  ">
           </div>
           <div className=" w-1/6">
             <button className="w-full flex flex-row items-center">
               <img src={expand} alt="expand" width="12" />
             </button>
           </div>
           <div className="w-1/6 ">
             <button className="w-full flex flex-row items-center">
               <img src={more} alt="expand" width="12" />
             </button>
           </div>
         </div>
       </div>
     );
}

const TodoNewCardBody = () => {
     return (
       <div className=" border border-b-black border-white pl-8 flex flex-col gap-3 w-full p-4">
         <div className="flex flex-row items-center justify-start gap-1">
           <div className="w-10  flex flex-row items-center">
             <img
               src={timeAdd}
               alt="ini time"
               color="#4F4F4F"
               className="text-[#4F4F4F]"
             />
           </div>
           <div className="w-40 flex flex-row rounded-md items-center p-2 border border-[#4F4F4F]">
             <input
               type="date"
               placeholder="set date"
               className="text-gray-800 w-full outline-none"
             />
           </div>
         </div>
         <div className=" flex flex-row  items-center justify-start gap-1">
           <div className="w-10  flex flex-row items-center">
             <img src={editAdd} alt="ini edit" color="#4F4F4F" />
           </div>
           <div className="w-5/6  flex flex-row justify-start items-center ">
             <p className="w-full text-start text-[#4F4F4F]">No Description</p>
           </div>
         </div>
       </div>
     );
}
const TodoCoretHeader = () => {
    return (
      <div className="flex gap-2 flex-row w-full items-center">
        <div className="">
          <input type="checkbox" checked className="border-gray-600" />
        </div>
        <div className=" w-3/6 flex flex-row items-center justify-start">
          <div className="w-full pl-2">
            <h3 className="font-bold text-gray-600 line-through text-left">Title task</h3>
          </div>
        </div>
        <div className="bg-white flex w-3/6 flex-row gap-1 items-center justify-between">
          <div className=" w-2/6">
          </div>
          <div className="w-2/6  ">
            <h3 className="font-semibold text-black text-sm text-left">
              12/06/2021
            </h3>
          </div>
          <div className=" w-1/6">
            <button className="w-full flex flex-row items-center">
              <img src={expand} alt="expand" width="12" />
            </button>
          </div>
          <div className="w-1/6 ">
            <button className="w-full flex flex-row items-center">
              <img src={more} alt="expand" width="12" />
            </button>
          </div>
        </div>
      </div>
    );
}




const TodoCardBody = () => {
    return (
      <div className=" border border-b-black border-white pl-8 flex flex-col gap-3 w-full p-4">
        <div className="flex flex-row items-center justify-start gap-1">
          <div className="w-10  flex flex-row items-center">
            <img src={time} alt="ini time" />
          </div>
          <div className="w-40 flex flex-row rounded-md items-center p-2 border border-black">
            <input type="date" className="w-full :checked:bg-white " />
          </div>
        </div>
        <div className=" flex flex-row  items-center justify-start gap-1">
          <div className="w-10  flex flex-row items-center">
            <img src={edit} alt="ini edit" />
          </div>
          <div className="w-5/6  flex flex-row justify-start items-center ">
            <p className="w-full text-start text-black">lorem ipsumgrtghrthrtrt</p>
          </div>
        </div>
      </div>
    );
}






const TodoCardHeader = () => {
    return (
      <div className="flex gap-2 flex-row w-full items-center">
        <div className="">
          <input type="checkbox" className="border-gray-600" />
        </div>
        <div className=" w-3/6 flex flex-row items-center justify-start">
          <div className="w-full pl-2">
            <h3 className="font-bold text-black text-left">Title task</h3>
          </div>
        </div>
        <div className="bg-white flex w-3/6 flex-row gap-1 items-center justify-between">
          <div className=" w-2/6">
            <h3 className="font-semibold text-sm text-red-600 text-right pr-4">
              2 Days Left
            </h3>
          </div>
          <div className="w-2/6  ">
            <h3 className="font-semibold text-black text-sm text-left">12/06/2021</h3>
          </div>
          <div className=" w-1/6">
            <button className="w-full flex flex-row items-center" >
              <img src={expand} alt="expand" width="12" />
            </button>
          </div>
          <div className="w-1/6 ">
            <button className="w-full flex flex-row items-center">
              <img src={more} alt="expand" width="12" />
            </button>
          </div>
        </div>
      </div>
    );
}

const TodoCard = () => {
    return (
      <div className=" w-full flex flex-col">
          <TodoCardHeader />
          <TodoCardBody />
      </div>
    );
}

const TodoCardCoretHeader = () => {
        return (
          <div className=" w-full flex flex-col items-center -mt-2 pb-3 border  border-white border-b-black">
              <TodoCoretHeader />
          </div>
        );
}

const TodoCardCoret = () => {
       return (
         <div className=" w-full flex flex-col">
           <TodoCoretHeader />
           <TodoCardBody />
         </div>
       );
}

const TodoCardNewTask = () => {
       return (
         <div className=" w-full flex flex-col">
           <TodoNewCardHeader/>
           <TodoNewCardBody/>
         </div>
       );
}

const TodoCardUpdateTask = () => {
       return (
         <div className=" w-full flex flex-col">
           <TodoCoretHeader />
           <TodoUpdateBody />
         </div>
       );
}


const TodoAllChatComponent = () => {
        return (
          <div className="flex flex-col items-center gap-4 mb-24 h-80 overflow-y-scroll">
            <TodoCard/>
            <TodoCardCoretHeader/>
            <TodoCardCoret/>
            <TodoCardNewTask/>
            <TodoCardUpdateTask/>
          </div>
        );
}

export default TodoAllChatComponent;