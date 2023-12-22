import React from "react";

import { LOGO_PREFIX, LOGO_SUFFIX } from "@/constants/index";

export const Heading = () => {
  return (
    <header className="text-white border-b border-gray-300">
      <div className="max-w-screen-xl mx-auto py-4 ">
        <h1 className="text-3xl font-bold">
          <span className="text-black">{LOGO_PREFIX}</span>
          <span className="text-purple-400">{LOGO_SUFFIX}</span>
        </h1>
      </div>
    </header>
  );
};
