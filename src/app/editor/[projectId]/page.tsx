"use client";
import Canvas from "@/components/Editor/Canvas";
import EditorPanel from "@/components/Editor/EditorPanel";
import SideNav from "@/components/Editor/SideNav";
import TopNav from "@/components/Editor/TopNav";
import MobileBlocker from "@/components/MobileBlocker";
import { CanvasContext } from "@/context/CanvasContext";
import { useContext, useState } from "react";
import type {Canvas as FabricCanvas} from "fabric";

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
        <div className="flex h-[90vh]">
          <SideNav />
          <Canvas view={view} />
          <EditorPanel />
        </div>
      </CanvasContext.Provider>
    </div>
  );
}

export const useCanvasHook = () => {
  const context = useContext(CanvasContext);
  if(!context){
    throw new Error("Error");
  }
  return context;
}