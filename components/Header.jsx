import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="shadow text-white py-4 text-center">
      <div className="flex justify-between items-center w-[90%] mx-auto relative">
        <div className="flex items-center">
          <Image
            src="https://media.licdn.com/dms/image/v2/D4D0BAQHvkN2AXIFGjg/company-logo_200_200/company-logo_200_200/0/1696440162395?e=1732147200&v=beta&t=veFzxTCUymotIhpYJmC4B9_2qI46ivfV9C-u9fCikXw"
            className="object-cover rounded-full"
            alt="logo"
            width={50}
            height={50}
          />
          <h1 className="text-3xl font-bold -ml-3">
            <span className="text-blue-900">witc</span>

            <span className="text-red-500">hive</span>
          </h1>
        </div>

        <div className="flex gap-4 text-gray-900  text-base font-bold ">
          <p>MarketPlace</p> <p className="text-black">|</p>
          <p>Join the waiting list</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
