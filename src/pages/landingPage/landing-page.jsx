import React from "react";
import Layout from "../../components/layout/layout";
import Button from "../../components/button/button";
import { BsChevronDoubleRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Image from "../../assets/images/landingpage.jpg";
function LandingPage() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="flex justify-between items-center min-h-screen">
        <div className="flex flex-col pl-16">
          <p className="flex flex-col font-black text-3xl text-darkblue mb-16">
            <span>Welcome to Enaya Overseas</span>
            <span>Recuiretment</span>
          </p>
          <p className="flex flex-col font-bold text-2xl text-darkblue mb-5">
            <span>Connecting Global Talent</span>
            <span>with Global</span>
            <span>Opportunities</span>
          </p>
          <span className="mb-16">
            At Inaya Overseas Recruitment, we specialize in bridging the gap
            between employers and job seekers worldwide.
          </span>
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
        <img src={Image} className="h-11/12 w-7/12" alt="" />
      </div>
    </Layout>
  );
}

export default LandingPage;
