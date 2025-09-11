"use client";

import { ChevronDown, ChevronUp, GripVertical } from "lucide-react";
import React, { useState } from "react";
import { elements } from "@/utils/elements";

const ElementsPanel = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    if (openCategory === category) {
      setOpenCategory(null);
    } else {
      setOpenCategory(category);
    }
  };

  return (
    <div>
      <div>
        <h2 className="font-bold text-[18px]">Elements</h2>
        <p className="font-medium text-sm text-gray-400 text-[13px]">
          Click the elements
        </p>
      </div>

      {elements.map((element) => (
        <div key={element.category} className="my-3">
          {/* Category header */}
          <div
            onClick={() => toggleCategory(element.category)}
            className="w-full flex items-center justify-between py-2 cursor-pointer hover:bg-gray-100 px-2 rounded"
          >
            <p className="font-medium">{element.category}</p>
            {openCategory === element.category ? (
              <ChevronUp />
            ) : (
              <ChevronDown />
            )}
          </div>

          {/* Sliding items */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openCategory === element.category
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-2 space-y-2 mt-2">
              {element.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-2 px-3 py-2 border-2 border-gray-200 rounded cursor-pointer hover:bg-gray-50"
                >
                  <span className="text-sm text-text-clr">{item.name}</span>
                  <GripVertical className="text-gray-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ElementsPanel;
