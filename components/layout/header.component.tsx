import React from "react";
import { Button } from "../ui/button";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import { CircleUser, User } from "lucide-react";

const HeaderComponent = () => {
  return (
    <nav className="transition-shadow flex items-center justify-between shadow-md bg-white m-4 rounded-2xl py-5 px-6">
      <div className="flex items-center gap-2 w-full">
        <Image src={Logo.src} alt="ArthaNidhi Logo" width={150} height={150} />
      </div>
      <div className="hidden sm:flex items-center justify-around gap-4 text-xs w-full">
        <div>
          <Button variant="ghost" className="text-xs font-semibold">
            Home
          </Button>
          <Button variant="ghost" className="text-xs font-semibold">
            About Us
          </Button>
          <Button variant="ghost" className="text-xs font-semibold">
            Contact
          </Button>
        </div>
        <div >
          <Button variant="ghost" className="text-xs font-semibold">
            <CircleUser />
            Log in
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
