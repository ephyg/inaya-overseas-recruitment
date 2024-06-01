import React from "react";
import Layout from "../../components/layout/layout";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope, FaPhoneVolume } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ContactUsPage() {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen mt-20 px-14">
        <div className="relative w-fit pb-1 text-2xl font-bold mb-4">
          <span className="relative text-darkblue">Contact Us</span>
          <div className="absolute h-h-2px bottom-0 left-0 right-1/2 bg-golden"></div>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-5">
              <div className="flex w-10 items-center justify-between">
                <FaLocationDot className="text-3xl w-full" />
              </div>
              <div className="flex flex-col">
                <p className="text-base font-bold">Location</p>
                <p className="text-sm">Bole, Addis Ababa, Ethiopia</p>
              </div>
            </div>
            <div
              className="flex flex-row items-center gap-5"
            >
              <div className="flex w-10 items-center justify-between">
                <FaPhoneVolume className="text-2xl flex w-full" />
              </div>
              <div className="flex flex-col">
                <p className="text-base font-bold">Call</p>
                <p className="text-sm">+251920681717</p>
              </div>
            </div>
            <div
              className="flex flex-row items-center gap-5 mb-3"
            >
              <div className="flex w-10 items-center justify-between">
                <FaEnvelope className="text-2xl flex w-full" />
              </div>
              <div className="flex flex-col">
                <p className="text-base font-bold">Email</p>
                <p className="text-sm">info@inayaoverseas.com</p>
              </div>
            </div>
            <div className="">
              <iframe
                className="w-full h-96 rounded-3xl border border-black1"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31565.504517978952!2d39.2652391!3d8.5296342!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9b33a3569139%3A0xb505349b8c87fdd2!2sBole%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1689433135336!5m2!1sen!2set"
              ></iframe>
            </div>
          </div>
          <div className="w-full ">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScKug8ThlMYjXWTbZ3xzZhhDGHYoZ7P8-2aUzBGJz5bnuzpNg/viewform?embedded=true"

              className="w-full min-h-lvh"

            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContactUsPage;
