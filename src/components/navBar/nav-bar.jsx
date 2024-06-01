import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { navData } from "./nav-data";
import { Link, useLocation, useNavigate } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const pathName = location.pathname;
  const navigate = useNavigate();
  return (
    <>
      <div className=" fixed top-0 w-full bg-white  flex items-center justify-between z-40 px-14 box-border  pt-2 md:px-3 md:h-20">
        <div className="flex items-center justify-between md:justify-start w-full">
          <Link to="/" className="flex items-center md:ml-12">
            {/* <img src={Logo} className="h-20 md:h-16" alt="" /> */}
            <p
              className="text-xl font-bold font-mont ml-2"
              onClick={() => Navigate("/")}
            >
              IOR
            </p>
          </Link>
        </div>
        <div className="flex w-full justify-end mr-20">
          {navData.map(({ path, title, index }) => (
            <li
              key={index}
              className="text-bluecol list-none mx-3 uppercase text-sm font-bold hover:animate-pulse"
            >
              <Link
                className={`pb-1 w-40 ${
                  path == pathName ? "border-b-2 border-golden" : ""
                }`}
                to={path}
              >
                {title}
              </Link>
            </li>
          ))}
        </div>
      </div>
    </>
  );
}

export default NavBar;
