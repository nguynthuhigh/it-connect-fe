import React from "react";
import IconSendWhite from '../../assets/svg/icon_sendwhite.svg';
import IconFacebook from '../../assets/svg/icon_facebook.svg';
import IconTwitter from '../../assets/svg/icon_twitter.svg';
import IconYoutube from '../../assets/svg/icon_youtube.svg';

const Footer: React.FC = () => {
  return (
    <div className="mt-10">
      <div className="h-[180px] px-4 sm:p-0 bg-[#b7e0ff] justify-center gap-5 items-center flex flex-col sm:flex-row">
        <h1 className="font-semibold text-[16px] sm:text-[18px] sm:mb-0">Newsletter</h1>
        <div className="relative flex items-center justify-end w-full sm:w-auto">
          <input
            placeholder="Your email"
            className="h-[60px] sm:h-[75px] text-[16px] sm:text-[18px] hover:ring focus:ring focus:outline-none font-semibold px-5 sm:px-7 w-full sm:w-[380px] bg-white rounded-full"
          />
          <button type="submit" className="absolute right-4 bg-[#ADDCFF] h-[40px] sm:h-[48px] rounded-full flex items-center justify-center w-[40px] sm:w-[48px]">
            <img src={IconSendWhite} alt="Send Icon" />
          </button>
        </div>
      </div>
      <div className="h-[280px] sm:h-[330px] p-5 sm:p-0 flex flex-col items-center text-center justify-center bg-[#ADDCFF] space-y-6">
        <ul className="flex gap-4 sm:gap-12 text-[14px] font-semibold flex-wrap justify-center">
          <a href="/" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Experience</a>
          <a href="#" className="hover:underline">News</a>
          <a href="#" className="hover:underline">About us</a>
          <a href="#" className="hover:underline">Jobs</a>
          <a href="https://www.facebook.com/phuczu13" target="_blank" rel="noopener noreferrer" className="hover:underline">Contact</a>
        </ul>
        <div className="flex gap-4 sm:gap-8 justify-center">
          <img src={IconFacebook} alt="Facebook Icon" className="w-6 h-6 sm:w-auto sm:h-auto" />
          <img src={IconTwitter} alt="Twitter Icon" className="w-6 h-6 sm:w-auto sm:h-auto" />
          <img src={IconYoutube} alt="YouTube Icon" className="w-6 h-6 sm:w-auto sm:h-auto" />
        </div>
        <div className="text-[12px] font-semibold">
          © Copyright 2024 - IT Connected
        </div>
      </div>
    </div>
  );
};

export default Footer;
