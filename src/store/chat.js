import { create } from "zustand";

const useChatStore = create((set, get) => ({
    dataChat : [
        {
          id: 1,
          room: 1,
          userId: 4,
          text: " Please check this out!",
          createdAt: "01/01/2021 19:10",
        },
        {
          id: 1,
          room: 2,
          userId: 5,
          text: "Hey, Please read",
          createdAt: "02/06/2021 10:45",
        },
      ],
    dataArray : [
      {
        id:1,
        room: 1,
        title: "109220-Naturalization",
        created: "01/01/2021 19:10",
      },
      {
        id:2,
        room: 2,
        title: "Jeannette Moraima Guaman Chamba(Hutto I-589)[Hutto Follow Up - Brief Service]",
        created: "02/06/2021 10:45",
      },
      {
        id:3,
        room: 3,
        title: "8405-Diana SALAZAR MUNGUIA",
        created: "01/06/2021 12:19",
      },
      {
        id:4,
        room: 4,
        title: "FastVisa Support",
        created: "01/06/2021 12:19",
      },
    ],
  chatBtn: false,
  isRoom : [],
  allChatRoom: [],
  searchBtn: "",
  setAllChatRoom: (data) => {
    set((state) => ({ allChatRoom: [...state.allChatRoom, data] }));
  },
  setChatBtn: () => {
    set((state) => ({ chatBtn: !state.chatBtn }));
  },
  setFalseChatBtn: () => {
    set((state) => ({ chatBtn: false }));
  },
  setDataChat : () => {
    const getData = get().dataArray.filter((dc) =>
      get().dataChat.find((dr) =>
      dr.room === dc.room
       
       )
    );
    console.log(getData, 'ini data');
    set(() => ({ isRoom: getData }))
  },
  filterSearchArticles: (findDataRoom) => {
    set((state) => ({
      allChatRoom: state.allChatRoom.filter((chatRoom) =>
        chatRoom.name.toLowerCase().includes(findDataRoom.toLowerCase())
      ),
    }));
  },
}));

export default useChatStore;
