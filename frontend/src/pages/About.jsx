import React from "react";
import Tilte from "../components/Tilte";
import { assets } from "../assets";
import NewsLetters from "../components/NewsLetters";

function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Tilte text1={"ABOUT"} text2={"CLOTHORA"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to Clothora, your destination for modern, stylish, and
            affordable fashion for both men and women. At Clothora, we believe
            that fashion is more than just clothing — it’s a way to express your
            personality and confidence.{" "}
          </p>
          <p>
            Our mission is to bring you the latest trends, high-quality fabrics,
            and comfortable styles that fit perfectly into your everyday life.
            Whether you are looking for casual outfits, trendy collections, or
            timeless fashion pieces, Clothora has something for everyone.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At Clothora, our mission is to make fashion simple, stylish, and
            accessible for everyone. We aim to provide high-quality clothing for
            both men and women that combines modern trends, comfort, and
            affordability.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Tilte text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Latest Fashion Trends:</b>
          <p className="text-gray-500">
            At Clothora, we bring you the newest and most stylish clothing
            collections for both men and women so you can stay updated with
            modern fashion.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>High-Quality Products:</b>
          <p className="text-gray-500">
            We focus on quality fabrics and comfortable designs that look great
            and feel even better.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Affordable Prices:</b>
          <p className="text-gray-500">
            Fashion should be for everyone. That’s why we offer stylish clothing
            at prices that fit your budget.
          </p>
        </div>
      </div>
      <NewsLetters />
    </div>
  );
}

export default About;
