import React from "react";
import NavBar from "../navBar/nav-bar";
import Footer from "../footer/footer";

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div className="">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
