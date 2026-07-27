import React from "react";
import { Link } from "react-router-dom";

import Achievement from "./Achievement";
import FeaturedVideoEmbed from "./FeaturedVideoEmbed";
import About from "../Pages/About";
import Footer from "./Footer";
import ClientStories from "./ClientStories";

import "../App.css";

import feature1 from "../images/alldebdatta-images/feature1.jpg";
import feature2 from "../images/alldebdatta-images/feature2.jpg";
import feature3 from "../images/alldebdatta-images/feature3.jpg";
import feature4 from "../images/alldebdatta-images/feature4.jpg";
import feature5 from "../images/alldebdatta-images/feature5.jpg";
import feature6 from "../images/alldebdatta-images/feature6.jpg";

const FeaturedServices = () => {
  const imageArray = [
    {
      image: feature1,
      navigatePath: "astro-birth-chart-reformation",
      HeadText: "Astro Birth Chart Reformation",
      paragraph:
        "Discover the mysteries of your life's path with a profound examination of your birth chart.",
    },
    {
      image: feature2,
      navigatePath: "astro-vastu-consultancy",
      HeadText: "Astro Vastu Consultancy",
      paragraph:
        "Dance through life's energies—immerse yourself in the vibrant hues of happiness.",
    },
    {
      image: feature3,
      navigatePath: "life-coach-and-success-guru",
      HeadText: "Life Coach and Success Guru",
      paragraph:
        "Elevate your essence with a coaching journey: sculpt your style, infuse substance, and claim the trio of Power, Peace, and Prosperity.",
    },
    {
      image: feature4,
      navigatePath: "palmistry",
      HeadText: "Palmistry",
      paragraph:
        "Trace the echoes of your destiny in the lines of your hands; let the journey begin towards a future woven with blissful possibilities.",
    },
    {
      image: feature5,
      navigatePath: "numerology",
      HeadText: "Numerology",
      paragraph:
        "When questions linger, Numerology brings answers, leading you from uncertainty to tranquillity.",
    },
    {
      image: feature6,
      navigatePath: "face-reading",
      HeadText: "Face Reading",
      paragraph:
        "Master face reading for heightened decision-making wisdom. Unveil allure and insist on your success with serene confidence.",
    },
  ];

  return (
    <>
      <div className="absolute mt-[1620px] md:mt-[1200px] lg:mt-[1160px] bg-white w-full">
        <About />

        {/* Featured Services */}
        <div>
          <h1 className="text-center text-2xl md:text-3xl lg:text-4xl m-3 font-philosopher mt-[800px] md:mt-[300px] lg:mt-[150px] mb-5">
            Featured Services
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] mx-auto mb-16">
          {imageArray.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border"
            >
              <img
                src={item.image}
                alt={item.HeadText}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-center">
                  {item.HeadText}
                </h3>

                <p className="text-gray-600 text-sm text-center leading-6 mb-6">
                  {item.paragraph}
                </p>

                <div className="text-center">
                  <Link to={item.navigatePath}>
                    <button className="bg-black text-white px-6 py-3 rounded hover:bg-white hover:text-black border border-black transition duration-300">
                      Get Started Here
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement */}
        <Achievement />

        {/* Featured Video */}
        

        {/* Client Stories */}
        <div className="m-auto w-[90%] md:w-[70%] lg:w-[50%] mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-philosopher mb-4">
            Client Stories
          </h1>

          <p className="text-center text-gray-600">
            Explore the inspiring success stories of individuals whose lives
            have been positively impacted by Achariya Debdatta's guidance and
            expertise.
          </p>
        </div>

        <ClientStories />

        <Footer />
      </div>
    </>
  );
};

export default FeaturedServices;