// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import * as fabric from "fabric";
// import { useCanvasHook } from "@/app/editor/[projectId]/page";

// interface CanvasProps {
//   view: "desktop" | "mobile";
// }

// const Canvas: React.FC<CanvasProps> = ({ view }) => {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
//   const { canvasEditor, setCanvasEditor } = useCanvasHook();

//   useEffect(() => {
//     if (!canvasRef.current) return;

//     if (canvas) {
//       canvas.dispose();
//     }

//     const width = view === "desktop" ? 1280 : 420;
//     const height = view === "desktop" ? 720 : 740;

//     const initCanvas = new fabric.Canvas(canvasRef.current, {
//       width: width / 1.3,
//       height: height / 1.3,
//       backgroundColor: "#fff",
//       preserveObjectStacking: true,
//     });

//     const scaleFactor = window.devicePixelRatio || 1;
//     initCanvas.setDimensions(
//       { width: width * scaleFactor, height: height * scaleFactor },
//       { backstoreOnly: true }
//     );
//     initCanvas.setViewportTransform([scaleFactor, 0, 0, scaleFactor, 0, 0]);

//     setCanvas(initCanvas);
//     setCanvasEditor(initCanvas);
//     return () => {
//       initCanvas.dispose();
//     };
//   }, [view]);

//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key == "Delete") {
//         if (canvasEditor) {
//           const activeObject = canvasEditor.getActiveObject();
//           if (activeObject) {
//             canvasEditor.remove(activeObject);
//             canvasEditor.renderAll();
//           }
//         }
//       }
//     };
//     document.addEventListener("keydown", handleKeyDown);

//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [canvasEditor]);
//   return (
//     <div className="w-full flex items-center justify-center overflow-y-auto">
//       <canvas ref={canvasRef} />
//     </div>
//   );
// };

// export default Canvas;






"use client";
import React, { useEffect, useRef, useState } from "react";
import * as fabric from "fabric";
import { useCanvasHook } from "@/app/editor/[projectId]/page";
import { useEditorContext } from "@/context/EditorContext";

interface CanvasProps {
  view: "desktop" | "mobile";
}

const Canvas: React.FC<CanvasProps> = ({ view }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const { setCanvasEditor } = useCanvasHook();
  const { setSelectedFeature, setSelectedObject } = useEditorContext();

  useEffect(() => {
    if (!canvasRef.current) return;
    if (canvas) canvas.dispose();

    const width = view === "desktop" ? 1280 : 420;
    const height = view === "desktop" ? 720 : 740;

    const initCanvas = new fabric.Canvas(canvasRef.current, {
      width: width / 1.3,
      height: height / 1.3,
      backgroundColor: "#ffffff",
      preserveObjectStacking: true,
    });

    setCanvas(initCanvas);
    setCanvasEditor(initCanvas);

    // Selection handlers
    initCanvas.on("selection:created", (e) => {
      const obj = e.selected?.[0] || null;
      setSelectedObject(obj);
      if (obj && obj.type === "textbox") {
        setSelectedFeature("TextSettings");
      } else {
        setSelectedFeature(null);
      }
    });

    initCanvas.on("selection:updated", (e) => {
      const obj = e.selected?.[0] || null;
      setSelectedObject(obj);
      if (obj && obj.type === "textbox") {
        setSelectedFeature("TextSettings");
      } else {
        setSelectedFeature(null);
      }
    });

    initCanvas.on("selection:cleared", () => {
      setSelectedObject(null);
      setSelectedFeature(null);
    });

    return () => {
      initCanvas.dispose();
    };
  }, [view]);

  // Delete key handler
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Delete" && canvas) {
        const activeObject = canvas.getActiveObject();
        if (activeObject) {
          canvas.remove(activeObject);
          canvas.discardActiveObject();
          canvas.renderAll();
          setSelectedObject(null);
          setSelectedFeature(null);
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [canvas]);

  return (
    <div className="w-full flex items-center justify-center overflow-y-auto">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Canvas;
