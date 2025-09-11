// import { features } from "@/utils/features";
// import React from "react";

// const SideNav = () => {
//   return (
//     <>
//       <div className="xl:w-[5%] md:w-[8%] bg-white p-3 flex flex-col items-center">
//         {features.map((feature, index) => (
//           <div key={index} className="flex flex-col items-center my-3">
//             <feature.icon className="w-6 h-6 text-text-secondary" />
//             <h2 className="text-[11px] mt-2 text-text-secondary">
//               {feature.name}
//             </h2>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default SideNav;

import { features } from "@/utils/features";
import React from "react";
import { useEditorContext } from "@/context/EditorContext";

const SideNav = () => {
  const { setSelectedFeature, selectedFeature } = useEditorContext();

  return (
    <div className="xl:w-[5%] md:w-[8%] bg-white p-3 flex flex-col items-center">
      {features.map((feature, index) => {
        const isActive = selectedFeature === feature.name;
        return (
          <div
            key={index}
            className={`flex flex-col items-center my-3 cursor-pointer ${
              isActive ? "text-primary" : "text-text-secondary"
            }`}
            onClick={() => setSelectedFeature(feature.name)}
          >
            <feature.icon
              className={`w-6 h-6 ${
                isActive
                  ? "text-primary bg-[#e5ddf9] p-2 rounded-md h-10 w-10"
                  : "text-gray-500"
              }`}
            />
            <h2 className={`text-[11px] mt-2 ${isActive ? "font-bold" : "font-medium"}`}>{feature.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default SideNav;
