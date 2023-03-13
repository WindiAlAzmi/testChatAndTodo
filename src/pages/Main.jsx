import React, {useState} from "react";
import Auth from "../components/Auth";
import Inbox from "../components/Inbox";
import useChatStore from "../store/chat";

import Cookies from "universal-cookie";
import Logout from "../components/Logout";
const cookies = new Cookies();

const Main = () => {
    const [isAuth, setIstAuth] = useState(cookies.get("auth-token"));
    const { chatBtn } = useChatStore();


    // if(!isAuth){
    //     return (
    //         <div>
    //             <Auth setIstAuth={setIstAuth} />
    //         </div>
    //     )
    // }

    return(
        <div className="border border-black mt-24 ">
            <Logout />
            <Auth />
    
           {chatBtn && <Inbox />}
           
        </div>
    )
}

export default Main;