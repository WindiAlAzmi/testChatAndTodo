import React, {useState, useEffect}  from "react";
import light from "../assets/img/feather-icon/light.svg";
import reader from "../assets/img/feather-icon/reader.svg";
import chat from "../assets/img/feather-icon/chat.svg";
import chatFixWhite from "../assets/img/feather-icon/chatFixWhite.svg";
import readerWhite from "../assets/img/feather-icon/readerWhite.svg";
import useChatStore from "../store/chat";



const Footer =  () => {
      const [btnToggle, setBtnToggle] = useState(false);
      const [btnContainer, setBtnContainer] = useState(false);
      const [clickChat, setClickChat] = useState(false);
      const [clickReader, setClickReader] = useState(false);
      const { setTodoBtn, setFalseTodoBtn,  setChatBtn, chatBtn, setFalseChatBtn, setFalseDetailChatBtn } = useChatStore();

      const chatHandler = () => {
        setClickReader(false);
        setClickChat(!clickChat);
        setFalseDetailChatBtn();
        setChatBtn();
        setFalseTodoBtn();
      };

      const readerHandler = () => {
        setClickChat(false);
        setClickReader(!clickReader);
         setFalseChatBtn();
    setFalseDetailChatBtn();
      setTodoBtn();

      };

      let content = null;
      if (btnContainer === true) {
        content = (
          <div className="grid grid-cols-2 gap-6">
            <div className={` ${clickReader && "col-start-2 col-end-3"}`}>
              {clickReader ? (
                <>
                  <div className="flex flex-row gap-2 ">
                    <div
                      className={` rounded-full p-3 w-[50px] h-[50px] 
             bg-[#4F4F4F] relative right-3
            `}
                    ></div>
                    <div
                      className={` rounded-full p-3 w-[50px] h-[50px] 
              bg-[#F8B76B] absolute
            `}
                      onClick={() => readerHandler()}
                    >
                      <img
                        className="w-full h-full rounded-lg"
                        src={readerWhite}
                        alt="readerWhite"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div
                  className={`bg-[#F2F2F2] rounded-full p-3 w-[50px] h-[50px] 
            `}
                  onClick={() => readerHandler()}
                >
                  <img
                    className="w-full h-full rounded-lg"
                    src={reader}
                    alt="readerChat"
                  />
                </div>
              )}
            </div>
            <div className={` ${clickReader && "col-start-1 row-start-1"}`}>
              {clickChat ? (
                <>
                  <div className="flex flex-row gap-2 ">
                    <div
                      className={` rounded-full p-3 w-[50px] h-[50px] 
             bg-[#4F4F4F] relative right-3
            `}
                    ></div>
                    <div
                      className={` rounded-full p-3 w-[50px] h-[50px] 
             bg-[#8785FF] absolute
            `}
                      onClick={() => chatHandler()}
                    >
                      <img
                        className="w-full h-full rounded-lg"
                        src={chatFixWhite}
                        alt="imageChatWhite"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div
                  className={`bg-[#F2F2F2] rounded-full p-3 w-[50px] h-[50px] 
            `}
                  onClick={() => chatHandler()}
                >
                  <img
                    className="w-full h-full rounded-lg"
                    src={chat}
                    alt="imageChat"
                  />
                </div>
              )}
            </div>
          </div>
        );
      }

      useEffect(() => {
        if(btnToggle === false){
          setFalseChatBtn();
          setFalseTodoBtn();
          setFalseDetailChatBtn();
        }
      }, [btnToggle, setFalseChatBtn, setFalseDetailChatBtn, setFalseTodoBtn]);

      useEffect(() => {
        if (btnToggle === true) {
          setBtnContainer(!btnContainer);
          if (clickChat === true) {
            setClickChat(!clickChat);
          }
          if (clickReader === true) {
            setClickReader(!clickReader);
          }
        }

        return () => {
          setBtnToggle(false);
        };
      }, [
        btnToggle,
        btnContainer,
        clickChat,
        clickReader,
        chatBtn,
        setChatBtn,
      ]);


    return (
      <div className=" bg-[#262626] w-full flex justify-end right-6 pb-2 flex-row gap-6">
        {content}
        <div
          className="bg-[#2F80ED] rounded-full p-3 w-[50px] h-[50px]"
          onClick={() => setBtnToggle(!btnToggle)}
        >
          <img
            className="w-full h-full rounded-lg"
            src={light}
            alt="imageLight"
          />
        </div>
      </div>
    );
}

export default Footer;