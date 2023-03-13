import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
    return (
      <div className="bg-neutral-600 p-3">
        <div className="">
          <AiOutlineSearch size="22" color="white" width="100%" height="100%" />
        </div>
      </div>
    );
}

export default Header;