import React from "react";
import Image from "next/image";
import logo from "@/asset/cmc_header_logo.png";
import cartIcon from "@/asset/cmc_header_cart_icon.png";
const header = () => {
  return (
    <div className="home-contain position-relative  flex items center justify-center ">
      <div className="fixed top-[40px] flex items center justify-center w-[100%] xl:w-[90%] ">
        <div className="flex w-[90%] justify-between items-center">
          <Image src={logo} width={80} height={80} alt="Picture of the logo" />

          <div className="text-[#000] text-[20px] font-[600] flex gap-[40px]">
            <a className="cursor-pointer">Home</a>
            <a className="cursor-pointer">Courses</a>
            <a className="cursor-pointer">About us</a>
            <a className="cursor-pointer">Testimonials</a>
            <a className="cursor-pointer">Contact</a>
          </div>

          <div className="flex items-center justify-center gap-[20px]">
            <Image
              src={cartIcon}
              width={40}
              height={40}
              alt="Picture of the logo"
            />
            <button className="min-w-[92px] max-w-[92px] bg-[#F9AB70] min-h-[32px] max-h-[32px] flex items-center justify-center rounded-[8px] font-[600]  text-[#ffffff]">
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
