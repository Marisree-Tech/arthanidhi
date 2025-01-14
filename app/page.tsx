import {
  ChartNoAxesCombined,
  CheckCircle,
  Target,
  Telescope,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import Icon from "@/assets/images/icon.png";
import HeaderComponent from "@/components/layout/header.component";
import ContactForm from "@/components/contact.component.tsx";
import PersonImg from "@/assets/images/person.png";
import ArrowComponent from "@/components/layout/arrow.component";
import TypeFormComponent from "@/components/typeform.component";

const Page = () => {
  return (
    <>
      <div className="bg-[#f2f2f2] pt-2">
        <HeaderComponent />
        <div className="max-w-6xl  mx-auto flex ">
          <div className="pt-36">
            <h1 className="text-[#434343] text-6xl font-bold mb-6 leading-tight">
              Empowering Businesses.
              <br />
              Driving Growth.
            </h1>

            <p className="text-gray-700 text-2xl italic mb-12 max-w-2xl">
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

        <div className="max-w-6xl mx-auto bg-[#5ABB76]  flex items-center justify-center text-white font-bold text-2xl py-20 shadow-2xl rounded-3xl rounded-tr-none">
          <ChartNoAxesCombined className="h-12 w-12" />
          <p className="ml-12 text-4xl">Only 8% of companies manage to scale</p>
        </div>

        <ArrowComponent
          id="top"
          className="h-[10rem] text-blue-100 relative left-[20rem]"
          fill="#4E81DD"
        />
        {/* Arthanidhi */}
        <div className="flex max-w-6xl mx-auto items-center text-[#434343]">
          <Image src={Icon.src} alt="" width={350} height={400} />
          <div className="w-full mx-8">
            <h1 className="text-6xl font-bold mb-4 ">ArthaNidhi</h1>
            <p className="font-semibold text-lg serif italic text-pretty text-wrap">
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
          className="h-[10rem] text-blue-100 ourVision "
          fill="#FD8641"
        />
        {/* Vision & Goal */}
        <div className="max-w-6xl mx-auto relative">
          {/* Vision Card */}
          <div className="bg-[#FD8641] rounded-3xl rounded-tl-none p-8 mb-12 text-white max-w-2xl z-50 relative">
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
          <div className="bg-[#5ABB76] rounded-3xl p-8 text-white max-w-2xl ml-auto relative -top-48 rounded-tr-none flex items-end">
            <div className="w-full">
              <div className="flex mb-6 items-end flex-col px-12 mx-16">
                <Target className="w-20 h-20 text-right" />
                <h2 className="text-3xl font-bold mt-2">Our Goals</h2>
              </div>
              <ul className="px-12 mx-10">
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
        <div className="text-center text-white mb-8 bg-[#4E81DD] py-12">
          <h1 className="text-2xl font-bold mb-2">
            Your insights are invaluable to us.
          </h1>
          <p className="text-xl">
            Help shape the future by sharing your experiences!
          </p>
        </div>
      </div>

      <div className="relative">
        <ArrowComponent
          className="absolute h-[14rem] rotate-[21deg] -top-[12rem] text-blue-100 left-[25rem] z-50"
          fill="#FD8641"
          id="contactArrow"
        />
        <div className="mt-28">
          <ContactForm />
        </div>
      </div>

      <TypeFormComponent />
    </>
  );
};

export default Page;
