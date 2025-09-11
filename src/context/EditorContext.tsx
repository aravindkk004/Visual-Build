"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type SelectedFeature = string | null;

interface EditorContextType {
  selectedFeature: SelectedFeature;
  setSelectedFeature: (f: SelectedFeature) => void;
}

// ⬇️ export added here
export const EditorContext = createContext<EditorContextType | undefined>(undefined);

export const EditorProvider = ({ children }: { children: ReactNode }) => {
  const [selectedFeature, setSelectedFeature] = useState<SelectedFeature>(null);

  return (
    <EditorContext.Provider value={{ selectedFeature, setSelectedFeature }}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditorContext = (): EditorContextType => {
  const ctx = useContext(EditorContext);
  if (!ctx) throw new Error("useEditorContext must be used within EditorProvider");
  return ctx;
};
