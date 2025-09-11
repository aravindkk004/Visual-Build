"use client";
import Canvas from "@/components/Editor/Canvas";
import EditorPanel from "@/components/Editor/EditorPanel";
import SideNav from "@/components/Editor/SideNav";
import TopNav from "@/components/Editor/TopNav";
import MobileBlocker from "@/components/MobileBlocker";
import { EditorProvider } from "@/context/EditorContext";
import { useState, useContext } from "react";
import { CanvasContext } from "@/context/CanvasContext";
import type { Canvas as FabricCanvas } from "fabric";

export default function Home() {
  const [view, setView] = useState<"desktop" | "mobile">("desktop");
  const [canvasEditor, setCanvasEditor] = useState<FabricCanvas | null>(null);

  const handleChangeView = (mode: "desktop" | "mobile") => {
    setView(mode);
  };

  return (
    <div className="bg-light-gray">
      <MobileBlocker />
      <TopNav view={view} handleChangeView={handleChangeView} />
      <CanvasContext.Provider value={{ canvasEditor, setCanvasEditor }}>
        <EditorProvider>
          <div className="flex h-[90vh] fixed w-full">
            <div className="w-[17%] bg-white p-3">
              <SideNav />
            </div>
            <div className="w-[66%] flex items-center justify-center overflow-y-auto h-[90vh] bg-light-gray">
              <Canvas view={view} />
            </div>
            <div className="w-[17%] bg-white p-3">
              <EditorPanel />
            </div>
          </div>
        </EditorProvider>
      </CanvasContext.Provider>
    </div>
  );
}

export const useCanvasHook = () => {
  const context = useContext(CanvasContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};
