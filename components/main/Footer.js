import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { MdMail, MdEmail } from "react-icons/md";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="mt-[20px] mb-[20px] text-[35px] text-center">
          Get in touch with me
        </div>
        <div className="flex flex-row justify-evenly space-x-20">
          <a
            href="mailto:sanglee.9174@gmail.com"
            className="flex flex-row items-center my-[15px] cursor-pointer"
          >
            <MdEmail />
            <span className="ml-2">Email</span>
          </a>
          <a
            href="https://github.com/Sanghyeon111"
            target="_blank"
            className="flex flex-row items-center my-[15px] cursor-pointer"
          >
            <RxGithubLogo />
            <span className="ml-2">Github</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sang-lee-67a404212/"
            target="_blank"
            className="flex flex-row items-center my-[15px] cursor-pointer"
          >
            <RxLinkedinLogo />
            <span className="ml-2">Linkedin</span>
          </a>
        </div>
        {/* <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </p>

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>
            </p>

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <MdEmail />
              <span className="text-[15px] ml-[6px]">
                sanglee.9174@gmail.com
              </span>
            </p>
          </div>
        </div> */}

        <div className="mt-[20px] mb-[20px] text-[15px] text-center">
          &copy; Sang Lee 2024
        </div>
      </div>
    </div>
  );
};

export default Footer;
