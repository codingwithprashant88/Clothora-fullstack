import React from "react";
import Tilte from "../components/Tilte";
import { assets } from "../assets";
import NewsLetters from "../components/NewsLetters";

function Contact() {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Tilte text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 ">
        <img className="w-full md:max-w-[480px]" src={assets.contact} alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            Clothora Fashion Pvt. Ltd. 21 Fashion <br /> Street, MG Road Indore,
            Madhya Pradesh 452001 India
          </p>
          <p className="text-gray-500">Tel: (415) 555-0132 <br /> Email: clothora@gmal.com</p>
          <p className="font-semibold text-xl  text-gray-600">Careers at Clothora</p>
           <p className="text-gray-500">
            Learn more our team and job opening.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 ">Explore Jobs</button>
          
        </div>
      </div>
      <NewsLetters/>
    </div>
  );
}

export default Contact;
