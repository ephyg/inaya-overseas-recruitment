import React from "react";
import Layout from "../../components/layout/layout";
import Image from "../../assets/images/Aboutuspage.svg";
import { FaHandPointRight } from "react-icons/fa";
import { Goal } from "./goals";
import { Values } from "./values";
function AboutUs() {
  return (
    <Layout>
      <div className="min-h-screen  mt-20">
        <div className="flex flex-col px-14">
          <div className="relative w-fit pb-1 text-2xl font-bold mb-4">
            <span className="relative text-darkblue">About Us</span>
            <div className="absolute h-h-2px bottom-0 left-0 right-1/2 bg-golden"></div>
          </div>

          <div className="grid grid-cols-2 mb-20">
            <img src={Image} className="w-11/12" alt="" />
            <div className="flex flex-col gap-10 pt-10">
              <p className="text-justify text-lg font-normal text-gray-700">
                Established in 2015 and headquartered in Addis Ababa, Ethiopia,
                Inaya Overseas Recruitment is a leading provider of
                international recruitment services. With a team of experienced
                professionals and a vast global network, we specialize in
                sourcing and placing top talent for organizations worldwide.
              </p>
              <p className="text-justify text-lg font-normal text-gray-700">
                At the heart of Inaya Overseas Recruitment's success is our
                unwavering commitment to quality, integrity, and customer
                satisfaction. We pride ourselves on our ability to consistently
                deliver exceptional results, helping organizations around the
                world build diverse, high-performing teams capable of thriving
                in the ever-evolving global marketplace.
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-20 mb-10">
            <div className="flex items-center px-10 py-8 flex-col gap-10 bg-skyblue rounded-xl w-2/6 hover:-translate-y-5 cursor-pointer">
              <span className="uppercase font-black text-2xl text-white">
                Mission
              </span>
              <p className="text-white text-center">
                Inaya Overseas Recruitment's mission is to be the trusted
                partner of choice for organizations seeking to access top global
                talent. By leveraging our extensive industry expertise and
                international network, we strive to connect the most qualified
                professionals with rewarding career opportunities worldwide,
                driving the success and growth of our clients and candidates
                alike.
              </p>
            </div>
            <div className="flex items-center px-10 pt-8 flex-col gap-10 bg-skyblue rounded-xl w-2/6 hover:-translate-y-5 cursor-pointer">
              <span className="uppercase font-black text-2xl text-white">
                Vision
              </span>
              <p className="text-white text-center">
                Inaya Overseas Recruitment's vision is to become the premier
                global recruitment solutions provider, renowned for our
                commitment to excellence, innovation, and the seamless
                facilitation of international talent acquisition. We aspire to
                be the driving force that empowers organizations to build
                diverse, high-performing teams capable of thriving in the
                ever-evolving global marketplace.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 mt-20">
            <span className="uppercase font-black text-2xl text-darkblue ">
              Goals
            </span>
            <div className="flex flex-col gap-5 px-72">
              {Goal.map(({ goal }) => (
                <div className="flex gap-5">
                  <div className="flex w-16 h-16 justify-center items-center">
                    <FaHandPointRight
                      className="text-golden text-xl"
                      size={40}
                    />
                  </div>
                  <p className="flex items-center text-justify">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center mt-20 px-14 py-5 flex-col gap-5 mb-20">
          <span className="uppercase font-black text-2xl text-darkblue">
            Values
          </span>
          <div className="flex flex-col gap-5 px-40">
            {Values.map(({ num, topic, value }) => (
              <div className="flex gap-5 px-10 items-center">
                <span className="text-5xl font-black text-customorange">
                  {num}
                </span>
                <div className="flex flex-col">
                  <span className="text-lg font-bold">{topic}</span>
                  <span className="text-sm">{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;
