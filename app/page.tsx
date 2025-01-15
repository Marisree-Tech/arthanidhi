"use client";
import {
  ChartNoAxesCombined,
  CheckCircle,
  CircleUser,
  Menu,
  Target,
  Telescope,
  X,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import Icon from "@/assets/images/icon.png";
import HeaderComponent from "@/components/layout/header.component";
import ContactForm from "@/components/contact.component.tsx";
import PersonImg from "@/assets/images/person.png";
import ArrowComponent from "@/components/layout/arrow.component";
import Logo from "@/assets/images/logo.png";
import { Button } from "@/components/ui/button";

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };
  return (
    <>
      <div className="bg-[#FEF1CF] pt-2">
        <nav className="transition-shadow flex items-center justify-between shadow-md bg-white m-4 rounded-2xl py-1 sm:py-5 px-6">
          <div className="flex items-center gap-2 w-full">
            <Image
              src={Logo.src}
              alt="ArthaNidhi Logo"
              width={150}
              height={150}
            />
          </div>
          <div className="hidden sm:flex items-center justify-around gap-4 text-xs w-full">
            <div>
              <Button variant="ghost" className="text-xs font-semibold"   onClick={() => scrollToSection('home')}>
                Home
              </Button>
              <Button variant="ghost" className="text-xs font-semibold"   onClick={() => scrollToSection('about')}>
                About Us
              </Button>
              <Button variant="ghost" className="text-xs font-semibold"   onClick={() => scrollToSection('contact')}>
                Contact
              </Button>
            </div>
            <div>
              <Button variant="ghost" className="text-xs font-semibold">
                <CircleUser />
                Log in
              </Button>
            </div>
          </div>
          <Button
            variant="ghost"
            className="text-xs font-semibold block sm:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <Button
                variant="ghost"
                className="w-full text-left text-sm font-semibold hover:bg-gray-100"
                onClick={() => scrollToSection("home")}
              >
                Home
              </Button>
              <Button
                variant="ghost"
                className="w-full text-left text-sm font-semibold hover:bg-gray-100"
                onClick={() => scrollToSection("about")}
              >
                About Us
              </Button>
              <Button
                variant="ghost"
                className="w-full text-left text-sm font-semibold hover:bg-gray-100"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </Button>
              <Button
                variant="ghost"
                className="w-full text-left text-sm font-semibold hover:bg-gray-100"
              >
                <CircleUser className="mr-2 h-4 w-4 inline" />
                Log in
              </Button>
            </div>
          </div>
        )}

        <div
          id="home"
          className="max-w-6xl mx-8 sm:mx-auto flex flex-col sm:flex-row"
        >
          <div className="pt-8 sm:pt-36">
            <h1 className="text-[#434343] text-4xl sm:text-6xl font-bold mb-6 leading-tight">
              Empowering Businesses.
              <br />
              Driving Growth.
            </h1>

            <p className="text-gray-700 text-lg sm:text-2xl italic mb-12 max-w-2xl">
              A platform dedicated to helping businesses scale, innovate, and
              create lasting impact.
            </p>

            <button className="text-white bg-[#FD8641] px-8 py-4 rounded-xl text-sm font-semibold transition-colors duration-300">
              LEARN MORE
            </button>
          </div>
          <div>
            <Image src={PersonImg.src} alt="" width={600} height={600} />
          </div>
        </div>

        <div className="max-w-6xl mx-2 sm:mx-auto bg-[#5ABB76]  flex items-center justify-center text-white font-bold text-2xl py-8 sm:py-20 shadow-2xl rounded-3xl rounded-tr-none">
          <ChartNoAxesCombined className="h-8 w-8 sm:h-12 sm:w-12" />
          <p className="ml-2 sm:ml-12 text-sm sm:text-4xl">
            Only 8% of companies manage to scale
          </p>
        </div>

        <ArrowComponent
          id="top"
          className="h-[6rem] sm:h-[10rem] text-blue-100 relative left-[8rem] sm:left-[20rem]"
          fill="#4E81DD"
        />
        {/* Arthanidhi */}
        <div
          id="about"
          className="flex flex-col sm:flex-row max-w-6xl mx-4 sm:mx-auto items-center text-[#434343]"
        >
          <Image src={Icon.src} alt="" width={350} height={400} />
          <div className="w-full mx-8">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 ">ArthaNidhi</h1>
            <p className="font-semibold text-sm sm:text-lg serif italic text-pretty text-wrap">
              <span>
                A platform that empowers businesses to scale and thrive.
              </span>
              <span className="pt-2 block">
                Beyond funding, we provide mentorship, strategic guidance,
              </span>
              <span className="pt-2 block">
                and a supportive ecosystem to unlock growth and create
              </span>
              <span className="pt-2 block">
                lasting impact. We partner with businesses to build a future
              </span>
              <span className="pt-2 block">
                {" "}
                where success drives both progress and purpose
              </span>
            </p>
          </div>
        </div>

        <ArrowComponent
          id="ourVision"
          className="h-[10rem] relative transform -scale-x-100 rotate-[39deg] left-52 top-4 sm:left-8 sm:top-6 md:left-32 md:top-8 lg:left-64 lg:top-12 xl:left-96 xl:top-16 2xl:left-[64rem] 2xl:top-16 transition-all duration-300"
          fill="#FD8641"
        />
        {/* Vision & Goal */}
        <div className="max-w-6xl mx-2 sm:mx-auto relative">
          {/* Vision Card */}
          <div className="bg-[#FD8641] rounded-3xl rounded-tl-none p-4 sm:p-8 mb-12 text-white max-w-2xl z-50 relative">
            <div className="">
              <Telescope className="w-20 h-20 block" />
              <h2 className="text-3xl font-bold py-3">Our Vision</h2>
            </div>
            <p className="text-xl italic py-1 font-medium leading-8">
              To create a robust ecosystem that fuels business growth, empowers
              entrepreneurs, and delivers measurable outcomes that benefit
              society.
            </p>
          </div>
          <ArrowComponent
            className="absolute h-[10rem] text-blue-100 -rotate-45  left-[15rem]"
            fill="#5ABB76"
            id="goalsArrow"
          />

          {/* Goals Card */}
          <div className="bg-[#5ABB76] rounded-3xl p-8 text-white max-w-2xl ml-auto sm:relative -top-48 rounded-tr-none flex items-end">
            <div className="w-full">
              <div className="flex mb-6 items-end flex-col sm:px-12 sm:mx-16">
                <Target className="w-20 h-20 text-right" />
                <h2 className="text-3xl font-bold mt-2">Our Goals</h2>
              </div>
              <ul className="sm:px-12 sm:mx-10">
                {[
                  "Empowering Sustainable Business Growth",
                  "Fostering Collaboration & Innovation",
                  "Providing Essential Resources for Success",
                  "Overcoming Scaling Challenges",
                ].map((goal, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 font-semibold text-lg py-2 text-left"
                  >
                    <CheckCircle className="w-6 h-6 flex-shrink-0" />
                    <span className="text- italic">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Insight Block */}
        <div className="text-center mt-4 sm:mt-0 mx-1 sm:mx-0  rounded-md text-white mb-8 bg-[#4E81DD] py-4 sm:py-12">
          <h1 className="text-lg sm:text-2xl font-bold mb-2">
            Your insights are invaluable to us.
          </h1>
          <p className="text-sm sm:text-xl">
            Help shape the future by sharing your experiences!
          </p>
        </div>
      </div>

      <div className="relative">
        <ArrowComponent
          className="absolute h-[10rem] sm:h-[14rem] rotate-[21deg] -top-[8.75rem] sm:-top-[12rem] text-blue-100 left-[8rem] sm:left-[25rem] z-50"
          fill="#FD8641"
          id="contactArrow"
        />
        <div className="mt-28" id="contact">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Page;
