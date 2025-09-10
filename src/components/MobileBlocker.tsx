"use client";
import { useEffect, useState } from "react";

const MobileBlocker = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  if (!isMobile) return null;

  return (
    <div className="fixed inset-0 bg-light-gray bg-opacity-80 z-[9999] flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm text-center">
        <h2 className="text-lg font-bold text-gray-900">
          Not Available on Mobile
        </h2>
        <p className="mt-3 text-sm text-gray-600">
          For the best experience, please use <br />
          <span className="font-semibold">VisualBuild</span> on a desktop or
          laptop device.
        </p>
      </div>
    </div>
  );
};

export default MobileBlocker;
