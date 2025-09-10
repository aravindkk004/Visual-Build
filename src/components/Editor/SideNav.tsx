import { features } from "@/utils/features";
import React from "react";

const SideNav = () => {
  return (
    <>
      <div className="xl:w-[5%] md:w-[8%] bg-white p-3 flex flex-col items-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center my-3">
            <feature.icon className="w-6 h-6 text-text-secondary" />
            <h2 className="text-[11px] mt-2 text-text-secondary">
              {feature.name}
            </h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default SideNav;
