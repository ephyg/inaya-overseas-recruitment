import React from "react";
import { contacts, navData, socialLinks } from "../navBar/nav-data";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
function Footer() {
  return (
    <div className="flex-col items-center justify-center bg-gray-800 w-full pt-8 pb-2 px-14">
      <div className="grid grid-cols-2">
        {/* Logo */}
        <div className="flex pl-10 flex-1">
          <div className="flex flex-col">
            <span className="text-2xl text-white font-bold ml-2 mb-5">
              Inayas Overseas Recruitment{" "}
            </span>
            <div className="flex gap-2 items-center">
              <MdLocationOn size={40} color="white" />
              <div className="flex flex-col">
                <span className="text-lg text-white  ml-2">
                  Bole Road, Addis Ababa
                </span>
                <span className="text-lg text-white  ml-2">Ethiopia</span>
              </div>
            </div>
          </div>
        </div>
        {/* links,contacts,socials */}
        <div className="justify-center items-center">
          <div className="grid grid-cols-3">
            <div className="flex flex-col">
              <h1 className="font-black text-lg mb-4 text-white uppercase ">
                Links
              </h1>
              {navData.map(({ path, title }) => (
                <li className="text-white list-none text-base mb-1">
                  <Link className="hover:text-_orange cursor-pointer" to={path}>
                    <div className="flex items-center hover:text-customorange">
                      {title}
                    </div>
                  </Link>
                </li>
              ))}
            </div>
            <div className="flex flex-col">
              <h1 className="font-black text-lg mb-4 text-white uppercase ">
                Socials
              </h1>
              {socialLinks.map(({ path, title, icon }) => (
                <li className="text-white list-none text-base mb-1">
                  <Link className="hover:text-_orange cursor-pointer" to={path}>
                    <div className="flex items-center gap-3 hover:text-customorange">
                      {React.createElement(icon, {
                        size: 16,
                        fontWeight: 500,
                      })}
                      {title}
                    </div>
                  </Link>
                </li>
              ))}
            </div>
            <div className="flex-col">
              <h1 className=" font-black text-lg mb-4 text-white uppercase">
                Contacts
              </h1>
              {contacts.map(({ contact }) => (
                <li className="text-white list-none text-base mb-1">
                  {contact}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="text-customorange text-sm pl-10  pt-3">
        © 2024 | Enaya Overseas Recuiretment | All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
