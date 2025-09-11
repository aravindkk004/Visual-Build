import { useCanvasHook } from "@/app/editor/[projectId]/page";
import { IText } from "fabric";
import React from "react";

const TextSettings = () => {
  const { canvasEditor } = useCanvasHook();
  const onAddTextClick = (type: "Heading" | "SubHeading" | "Para") => {
    if (type == "Heading") {
      const textRef = new IText("Add Heading", {
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "Arial",
        fill: "black",
        left: 100,
        top: 100,
      });

      canvasEditor?.add(textRef);
    }
    else if(type == 'SubHeading') {
      const textRef = new IText("Add SubHeading", {
        fontSize: 30,
        fontWeight: "semibold",
        fontFamily: "Arial",
        fill: "black",
        left: 100,
        top: 100,
      });

      canvasEditor?.add(textRef);
    }
    else if(type == 'Para') {
      const textRef = new IText("Add Para", {
        fontSize: 30,
        fontWeight: "medium",
        fontFamily: "Arial",
        fill: "black",
        left: 100,
        top: 100,
      });

      canvasEditor?.add(textRef);
    }
  };
  return (
    <>
      <div>
        <h2 className="text-lg text-text-clr font-bold">Text</h2>
        <p className="text-gray-400 mb-3">Add Text and Heading</p>
      </div>
      <div className="flex flex-col gap-3">
        <h2
          className="font-bold text-3xl p-3 bg-light-gray rounded-md cursor-pointer"
          onClick={() => onAddTextClick("Heading")}
        >
          Add Heading
        </h2>
        <h2
          className="font-semibold text-lg p-3 bg-light-gray rounded-md cursor-pointer"
          onClick={() => onAddTextClick("SubHeading")}
        >
          Add SubHeading
        </h2>
        <h2
          className="font-medium text-md p-3 bg-light-gray rounded-md cursor-pointer"
          onClick={() => onAddTextClick("Para")}
        >
          Paragraph
        </h2>
      </div>
    </>
  );
};

export default TextSettings;
