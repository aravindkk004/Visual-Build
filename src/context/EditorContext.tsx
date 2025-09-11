// context/EditorContext.tsx
"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import * as fabric from "fabric";

export type SelectedFeature = string | null;

interface EditorContextType {
  selectedFeature: SelectedFeature; // Sidebar element like "Text", "Image"
  setSelectedFeature: (f: SelectedFeature) => void;

  selectedElement: fabric.Object | null; // Canvas element
  setSelectedElement: (el: fabric.Object | null) => void;
}

export const EditorContext = createContext<EditorContextType | undefined>(
  undefined
);

export const EditorProvider = ({ children }: { children: ReactNode }) => {
  const [selectedFeature, setSelectedFeature] = useState<SelectedFeature>(null);
  const [selectedElement, setSelectedElement] = useState<fabric.Object | null>(
    null
  );

  return (
    <EditorContext.Provider
      value={{
        selectedFeature,
        setSelectedFeature,
        selectedElement,
        setSelectedElement,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export const useEditorContext = (): EditorContextType => {
  const ctx = useContext(EditorContext);
  if (!ctx)
    throw new Error("useEditorContext must be used within EditorProvider");
  return ctx;
};
