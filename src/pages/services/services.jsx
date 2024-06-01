import React, { useState } from "react";
import Layout from "../../components/layout/layout";
import { Service } from "./serviceData";
import Image from "../../assets/images/service.svg";
import Button from "../../components/button/button";
import { BsChevronDoubleRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
function Services() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const [serviceName, setServiceName] = useState();
  const [image, setImage] = useState();
  const [text, setText] = useState();

  function shortenText(text) {
    if (text.length > 230) {
      return text.slice(0, 230) + "...";
    } else {
      return text;
    }
  }
  const handleClick = (name, txt, img) => {
    setServiceName(name);
    setText(txt);
    setImage(img);
    setVisible(true);
  };
  return (
    <Layout>
      <div className="flex flex-col min-h-screen mt-20 px-16 mb-32">
        <div className="relative w-fit pb-1 text-2xl font-bold mb-4">
          <span className="relative text-darkblue">Services</span>
          <div className="absolute h-h-2px bottom-0 left-0 right-1/2 bg-golden"></div>
        </div>
        <p className="text-justify text-gray-700 ">
          As a leading international recruitment provider, Inaya Overseas
          Recruitment offers a comprehensive suite of services to meet the
          diverse talent acquisition needs of organizations worldwide.
          Leveraging our extensive industry expertise and global network, we are
          committed to delivering tailored, results-driven solutions that
          empower our clients to build high-performing, diverse teams.
        </p>
        <div className="grid  rounded-lg grid-cols-3 gap-16 px-10 mt-20 cursor-pointer ">
          {Service.map(({ icon, serviceName, text, image }) => (
            <div className=" rounded-lg flex flex-col gap-2 shadow-2xl h-300px justify-center items-center text-justify px-5 pb-5 group hover:bg-skyblue">
              <div className="p-5 bg-white rounded-2xl -mt-8 group-hover:bg-white text-black group-hover:text-black border-2 border-skyblue">
                {React.createElement(icon, {
                  size: 30,
                  fontWeight: 500,
                  // color: "white",
                })}
              </div>
              <h1 className="text-center text-2xl font-semibold text-skyblue group-hover:text-white">
                {serviceName}
              </h1>
              <p className="p-3 text-gray-500 group-hover:text-white">{shortenText(text)}</p>
              <button
                className="font-bold uppercase text-golden mt-8 group-hover:text-orange-600"
                onClick={() => handleClick(serviceName, text, image)}
              >
                More
              </button>
            </div>
          ))}
        </div>
        {visible && (
          <div
            onClick={() => setVisible(false)}
            class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]"
          >
            <div class="w-full flex flex-col items-center max-w-4xl bg-white shadow-lg rounded-md p-6 relative">
              <div className="flex w-full justify-between px-5">
                <span className="text-center text-2xl font-semibold">
                  {serviceName}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-3.5 cursor-pointer shrink-0 fill-black hover:fill-red-500 float-right"
                  viewBox="0 0 320.591 320.591"
                >
                  <path
                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                    data-original="#000000"
                  ></path>
                  <path
                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
              <p className="text-justify text-gray-600 mt-5 px-5">{text}</p>
              <img src={image} alt="" className="w-8/12" />
              <Button
                icon={BsChevronDoubleRight}
                iconSize={16}
                text="Contact Us"
                className="w-64 h-10 hover:bg-darkblue"
                onClick={() => {
                  navigate("/contact");
                }}
              />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Services;
