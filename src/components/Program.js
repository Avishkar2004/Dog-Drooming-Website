import React from "react";
import PhoneIcon from "../assets/img/phone.svg";
const Program = () => {
  return (
    <div>
      {/* phone icon and phone num */}
      <div className="flex lg:gap-x-[10px] items-baseline justify-end">
        <img
          className="w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]"
          src={PhoneIcon}
          alt=""
        />
        <div className="lg:text-[23px] text-blue font-extrabold ">
          + 1000 10 84 000
        </div>
      </div>
      {/* open hour */}
      <div className="text-sm ">
        {/* show only in desktop mode */}
        <div className="hidden lg:flex">
          Opening Hours: Mon- Sun: 10am - 6pm
        </div>
        {/* show only in mobile mode */}
        <div className="lg:hidden text-right">Mon- Sun: 10am - 6pm</div>
      </div>
    </div>
  );
};

export default Program;
