// // context/EditorContext.tsx
// "use client";
// import React, { createContext, useContext, useState, ReactNode } from "react";
// import * as fabric from "fabric";

// export type SelectedFeature = string | null;

// interface EditorContextType {
//   selectedFeature: SelectedFeature; // Sidebar element like "Text", "Image"
//   setSelectedFeature: (f: SelectedFeature) => void;

//   selectedElement: fabric.Object | null; // Canvas element
//   setSelectedElement: (el: fabric.Object | null) => void;
// }

// export const EditorContext = createContext<EditorContextType | undefined>(
//   undefined
// );

// export const EditorProvider = ({ children }: { children: ReactNode }) => {
//   const [selectedFeature, setSelectedFeature] = useState<SelectedFeature>(null);
//   const [selectedElement, setSelectedElement] = useState<fabric.Object | null>(
//     null
//   );

//   return (
//     <EditorContext.Provider
//       value={{
//         selectedFeature,
//         setSelectedFeature,
//         selectedElement,
//         setSelectedElement,
//       }}
//     >
//       {children}
//     </EditorContext.Provider>
//   );
// };

// export const useEditorContext = (): EditorContextType => {
//   const ctx = useContext(EditorContext);
//   if (!ctx)
//     throw new Error("useEditorContext must be used within EditorProvider");
//   return ctx;
// };

"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import * as fabric from "fabric";

interface EditorContextType {
  selectedFeature: string | null;
  setSelectedFeature: (feature: string | null) => void;
  selectedObject: fabric.Object | null;
  setSelectedObject: (obj: fabric.Object | null) => void;
  addElementToCanvas: (canvas: fabric.Canvas, type: string) => void;
}

const EditorContext = createContext<EditorContextType | undefined>(undefined);

export const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const [selectedObject, setSelectedObject] = useState<fabric.Object | null>(
    null
  );

  // 👉 Function to add new objects
  const addElementToCanvas = (canvas: fabric.Canvas, editorComponent: string) => {
    let obj: fabric.Object | null = null;

    switch (editorComponent) {
      case "TextSettings":
        obj = new fabric.Textbox("New text", {
          left: 100,
          top: 100,
          fontSize: 24,
        });
        break;
      case "Image":
        obj = new fabric.Rect({
          left: 100,
          top: 100,
          width: 120,
          height: 80,
          fill: "gray",
        });
        break;
      case "Canvas":
        obj = new fabric.Rect({
          left: 150,
          top: 150,
          width: 200,
          height: 150,
          fill: "lightblue",
        });
        break;
      default:
        console.warn("Unknown editorComponent:", editorComponent);
    }

    if (obj) {
      canvas.add(obj);
      canvas.setActiveObject(obj);
      canvas.renderAll();
      setSelectedObject(obj);
      setSelectedFeature(editorComponent);
    }
  };

  useEffect(() => {
    console.log("Selected feature:", selectedFeature);
    console.log("Selected Object:", selectedObject);
  }, [selectedFeature, selectedObject]);

  return (
    <EditorContext.Provider
      value={{
        selectedFeature,
        setSelectedFeature,
        selectedObject,
        setSelectedObject,
        addElementToCanvas,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export const useEditorContext = () => {
  const context = useContext(EditorContext);
  if (!context)
    throw new Error("useEditorContext must be used within EditorProvider");
  return context;
};
