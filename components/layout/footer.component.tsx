import React from "react";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";

const FooterComponent = () => {
  return (
    <div className="mt-8 flex justify-between items-center max-w-6xl bg-white mb-4 mx-auto">
      <div className="flex items-center space-x-2">
        <Image src={Logo.src} width={150} height={400} alt="" />
      </div>
      <div className="text-xs font-bold">
        All Rights Reserved © 2025 ArthaNidhi.
      </div>
    </div>
  );
};

export default FooterComponent;
