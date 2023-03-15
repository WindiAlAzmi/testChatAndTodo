import React, {useEffect, useState} from "react";
import biru from "../assets/img/feather-icon/biru.svg";
import abu from "../assets/img/feather-icon/abu.svg";
import ball from "../assets/img/feather-icon/ball.svg";
// import useChatStore from "../store/chat.js";
import {db} from "../firebase-config";
import { collection, query, getDocs, where } from "firebase/firestore";
import { addSeconds, format } from "date-fns";
import useChatStore from "../store/chat";



const IconImg = ({gambar}) => {
    return (
            <img alt="ini gambar" src={gambar} className="h-full w-full" />
    )
}

const Chat1PersonCard = () => {
      return (
        <div className=" border-white w-full  ">
          <div className=" w-full mb-7  gap-8  flex flex-row">
            <div className="mr-10 flex flex-row relative">
              <div className="absolute left-5 h-[50px] w-[40px]">
                <IconImg gambar={biru} />
              </div>
            </div>
            <div className=" flex flex-col w-full">
              <div className="w-full flex flex-row justify-start gap-4 ">
                <div className="">
                  <h3 className="text-[#2F80ED] text-base font-semibold">
                    109220-Naturalization
                  </h3>
                </div>
                <div className="">
                  <h3 className="text-[#4F4F4F] text-sm">
                    January 1, 2021 19:10
                  </h3>
                </div>
              </div>
              <div className=" flex flex-row justify-between">
                <div className=" flex flex-col">
                  <div className=" text-left">
                    <h3 className="text-[#4F4F4F] font-semibold text-base">
                      Cameron Philips :
                    </h3>
                  </div>
                  <div className="">
                    <h3 className="text-[#4F4F4F] text-sm">
                      Please check this out!
                    </h3>
                  </div>
                </div>
                <div className="flex flex-row items-end justify-end">
                  {/* <img src={ball} alt="ini ball" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      );


}


const ChatCard = ({dataRoom, title}) => {
    const [dataMessage, setDataMessage] = useState([]);
    const [dataObjectMessage, setDataObjectMessage] = useState({});
    const [date, setDate] = useState(false);
    const [dateTemp, setDateTemp] = useState();
    const [isData, setIsData] = useState(false);

      const { detailChatBtn, setDetailChatBtn } = useChatStore();


    const goToDetailChat = () => {
      console.log('ke halaman detail');
        setDetailChatBtn();

    }
  
   

    // console.log(dataObjectMessage, 'data object')
   
    // console.log(dataMessage, 'ini data message dari firebase yg samadgn');

      
   useEffect(() => {
          console.log(detailChatBtn, "data detail object");
   }, [detailChatBtn])

    useEffect(() => {
      if(isData === true){
        setDataObjectMessage(dataMessage.sort((a,b) => b.createdAt - a.createdAt)[0]);        
        setDate(true);
      };
       
      return () => {setIsData(false)}
    }, [isData, dataMessage, dataObjectMessage]);

    useEffect(() => {
      if(date === true){
          const changeTime = (data) => {
            const date = addSeconds(new Date(0), data);
            const formatString = "dd/MM/yyyy HH:mm";

            const formattedDate = format(date, formatString);
            setDateTemp(formattedDate);
            // console.log(formattedDate, "ini format deate");
          };

          changeTime(dataObjectMessage.createdAt);
        
      }

      return () => {
        setDate(false);
      };
    }, [date, dataObjectMessage])

    useEffect(() => {
      const fetchMessage = async() => {
        const messageDb = collection(db,"message");
        const q = query(messageDb, where("room", "==", dataRoom));
        const querySnapshot = await getDocs(q);
           setDataMessage(
             querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
           );
           setIsData(true);
           
      }

      fetchMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
      <div className="border-2 border-white w-full  border-b-[#828282] ">
        <div className=" w-full mb-7  gap-8  flex flex-row">
          <div className=" flex flex-row gap-2 relative">
            <div className=" h-[50px] w-[40px]">
              <IconImg gambar={abu} />
            </div>
            <div className="absolute left-5 h-[50px] w-[40px]">
              <IconImg gambar={biru} />
            </div>
          </div>
          <button className=" flex  flex-col w-full" 
          onClick={goToDetailChat}>
            <div className="w-full flex flex-row justify-start gap-2 ">
              <div className="text-left w-3/4 ">
                <h3 className="text-[#2F80ED]  tracking-tight leading-normal text-base font-semibold">
                  {title}
                </h3>
              </div>
              <div className="flex flex-row items-start">
                <h3 className="text-[#4F4F4F] text-sm">
                  {/* {dt.created} */}
                  {dateTemp}
                </h3>
              </div>
            </div>
            <div className=" flex flex-row justify-between">
              <div className=" flex flex-col">
                <div className=" text-left">
                  <h3 className="text-[#4F4F4F] font-semibold text-base">
                    {/* Cameron Philips : */}
                    {dataObjectMessage.user}
                  </h3>
                </div>
                <div className="">
                  <h3 className="text-[#4F4F4F] text-sm">
                    {/* Please check this out! */}
                    {dataObjectMessage.text}
                  </h3>
                </div>
              </div>
              <div className="flex flex-row items-end justify-end">
                <img src={ball} alt="ini ball" />
              </div>
            </div>
          </button>
        </div>
      </div>
    );
}


const InboxAllChatComponent = () => {
  const [room, setRoom] = useState([]);
  // const [message, setMessage] = useState([]);



  // useEffect(() => {
  //     const fetchMessage = async () => {
  //       const q = query(collection(db, "message"));
  //       const querySnapshot = await getDocs(q);
  //       setMessage(
  //         querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  //       );
  //     };

  //     fetchMessage();
  //     console.log(message, "ini data all chat");
  // }, []);


useEffect(() => {
    const q = query(collection(db, "room"));
    const funcQuery = async() => {
     const querySnapshot = await getDocs(q);
      const dataList = [];
    querySnapshot.forEach((doc) => {
        dataList.push({ id: doc.id, ...doc.data() });
  });
   setRoom(dataList);
    }
     funcQuery();
}, [])
 
    return (
      <div className="flex flex-col items-center gap-4 mb-24 h-80 overflow-y-scroll">
        {room.map(({ id, room, title }) => (
          <ChatCard key={id} dataRoom={room} title={title} />
        ))}
        {/* <ChatCard />
       
        <ChatCard /> */}
        {/* <ChatCard />
        <ChatCard /> */}
        <Chat1PersonCard />
        <Chat1PersonCard />
             <Chat1PersonCard />
      </div>
    );
}

export default InboxAllChatComponent;