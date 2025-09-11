"use client";
import { Download, Monitor, Save, Smartphone } from "lucide-react";
import React from "react";

interface TopNavEditorProps {
  view: "desktop" | "mobile";
  handleChangeView: (mode: "desktop" | "mobile") => void;
}

const TopNav: React.FC<TopNavEditorProps> = ({ view, handleChangeView }) => {
  return (
    <nav className="bg-gradient-to-r from-[#00c4cc] to-[#7d2ae8] flex items-center justify-between px-6 py-3">
      <div className="text-white font-bold text-lg w-[33%]">VisualBuild</div>

      <div className="text-white flex items-center justify-center gap-3 w-[34%]">
        <Monitor
          className={`cursor-pointer p-1 rounded-sm h-8 w-8 ${
            view === "desktop"
              ? "bg-white border-blue-500 text-primary"
              : "text-white hover:bg-gray-700"
          } transition`}
          onClick={() => handleChangeView("desktop")}
        />
        <Smartphone
          className={`cursor-pointer p-1 rounded-sm h-8 w-8 ${
            view === "mobile"
              ? "bg-white border-blue-500 text-primary"
              : "text-white hover:bg-gray-700"
          } transition`}
          onClick={() => handleChangeView("mobile")}
        />
      </div>

      <div className="flex items-center gap-4 w-[33%] justify-end">
        <button className="flex items-center space-x-2 rounded-md hover:text-white px-3 py-2 text-gray-200 cursor-pointer">
          <Save className="w-5 h-5" />
          <p>Save</p>
        </button>
        <button className="bg-white text-text-clr px-3 py-2 rounded-md flex items-center space-x-2 cursor-pointer hover:bg-gray-300">
          <Download className="h-5 w-5" />
          <p>Export</p>
        </button>
      </div>
    </nav>
  );
};

export default TopNav;
