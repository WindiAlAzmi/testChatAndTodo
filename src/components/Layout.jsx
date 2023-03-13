import React from "react";
import Footer from "../pages/Footer";
import { Outlet } from "react-router-dom";
import Header from "../pages/Header";

const Layout = () => {

    return (
      <div className="h-full bg-[#262626] flex flex-col justify-between">
        <Header />
        <div className="bg-yellow-400 w-full flex pr-3 pb-2 flex-col justify-end gap-4">
          <Outlet />
          <Footer />
        </div>
      </div>
    );
}

export default Layout;