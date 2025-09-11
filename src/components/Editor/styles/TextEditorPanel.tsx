"use client";
import React, { useEffect, useState } from "react";
import {
  MdFormatAlignLeft,
  MdFormatAlignCenter,
  MdFormatAlignRight,
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
  MdStrikethroughS,
} from "react-icons/md";
import { useEditorContext } from "@/context/EditorContext";
import * as fabric from "fabric";

const TextEditorPanel = () => {
  const { selectedObject } = useEditorContext();
  const textbox = selectedObject as fabric.Textbox | null;

  const [content, setContent] = useState("Sample Text");
  const [fontSize, setFontSize] = useState(20);
  const [fontSizeUnit, setFontSizeUnit] = useState("px");
  const [textAlign, setTextAlign] = useState<"left" | "center" | "right">(
    "left"
  );
  const [fontFamily, setFontFamily] = useState("Arial");
  const [fontWeight, setFontWeight] = useState("400");
  const [color, setColor] = useState("#000000");

  // spacing
  const [marginTop, setMarginTop] = useState(0);
  const [marginRight, setMarginRight] = useState(0);
  const [marginBottom, setMarginBottom] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);

  const [paddingTop, setPaddingTop] = useState(0);
  const [paddingRight, setPaddingRight] = useState(0);
  const [paddingBottom, setPaddingBottom] = useState(0);
  const [paddingLeft, setPaddingLeft] = useState(0);

  const [opacity, setOpacity] = useState(1);

  // new features
  const [lineHeight, setLineHeight] = useState(1.5);
  const [letterSpacing, setLetterSpacing] = useState(0);

  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrike, setIsStrike] = useState(false);

  const [textTransform, setTextTransform] = useState<
    "none" | "uppercase" | "lowercase" | "capitalize"
  >("none");

  useEffect(() => {
    console.log("Text box is:", textbox);
    console.log("selected object from editorpanel", selectedObject);
    if (!textbox) return;
    setContent(textbox.text || "Sample Text");
    setFontSize(textbox.fontSize || 20);
    setFontFamily(textbox.fontFamily || "Arial");
    setFontWeight(textbox.fontWeight?.toString() || "400");
    setColor((textbox.fill as string) || "#000000");
    setTextAlign((textbox.textAlign as "left" | "center" | "right") || "left");
    setLineHeight(textbox.lineHeight || 1.5);
    setLetterSpacing(textbox.charSpacing ? textbox.charSpacing / 1000 : 0);
    setOpacity(textbox.opacity ?? 1);
    setIsBold((textbox.fontWeight as string) === "700");
    setIsItalic(textbox.fontStyle === "italic");
    setIsUnderline(!!textbox.underline);
    setIsStrike(!!textbox.linethrough);
    console.log("textbox after", textbox);
  }, [textbox]);

  const updateTextbox = (changes: Partial<fabric.Textbox>) => {
    if (!textbox) return;
    textbox.set({ ...changes });
    textbox.canvas?.renderAll();
  };

  const resetAll = () => {
    setContent("Sample Text");
    setFontSize(20);
    setFontSizeUnit("px");
    setTextAlign("left");
    setFontFamily("Arial");
    setFontWeight("400");
    setColor("#000000");
    setMarginTop(0);
    setMarginRight(0);
    setMarginBottom(0);
    setMarginLeft(0);
    setPaddingTop(0);
    setPaddingRight(0);
    setPaddingBottom(0);
    setPaddingLeft(0);
    setOpacity(1);
    setLineHeight(1.5);
    setLetterSpacing(0);
    setIsBold(false);
    setIsItalic(false);
    setIsUnderline(false);
    setIsStrike(false);
    setTextTransform("none");

    if (textbox) {
      textbox.set({
        text: "Sample Text",
        fontSize: 20,
        fontFamily: "Arial",
        fontWeight: "400",
        fill: "#000000",
        opacity: 1,
        lineHeight: 1.5,
        charSpacing: 0,
        underline: false,
        linethrough: false,
        fontStyle: "normal",
        textAlign: "left",
      });
      textbox.canvas?.renderAll();
    }
  };

  return (
    <div className="space-y-4 bg-white">
      <p className="font-bold text-sm text-gray-700">Text</p>
      {/* Content */}
      <div className="flex items-center justify-between">
        <p className="text-[13px]">Content</p>
        <input
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
            updateTextbox({ text: e.target.value });
          }}
          className="bg-light-gray rounded-md p-2 outline-none w-[60%] text-[13px]"
        />
      </div>
      {/* Font Size */}
      <div className="flex items-center justify-between">
        <p className="text-[13px]">Font Size</p>
        <div className="w-[60%] flex gap-2">
          <input
            type="number"
            value={fontSize}
            onChange={(e) => {
              const size = Number(e.target.value);
              setFontSize(size);
              updateTextbox({ fontSize: size });
            }}
            className="bg-light-gray rounded-md p-2 outline-none w-[50%] text-[13px]"
          />
          <select
            value={fontSizeUnit}
            onChange={(e) => setFontSizeUnit(e.target.value)}
            className="bg-light-gray rounded-md p-2 outline-none w-[50%] text-[13px]"
          >
            <option value="px">px</option>
            <option value="rem">rem</option>
            <option value="em">em</option>
          </select>
        </div>
      </div>
      {/* Font Family */}
      <div className="flex items-center justify-between">
        <p className="text-[13px]">Font Family</p>
        <select
          value={fontFamily}
          onChange={(e) => {
            setFontFamily(e.target.value);
            updateTextbox({ fontFamily: e.target.value });
          }}
          className="bg-light-gray rounded-md p-2 outline-none w-[60%] text-[13px]"
        >
          <option value="Arial">Arial</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Georgia">Georgia</option>
          <option value="Verdana">Verdana</option>
          <option value="Courier New">Courier New</option>
        </select>
      </div>
      {/* Font Weight */}
      <div className="flex items-center justify-between">
        <p className="text-[13px]">Font Weight</p>
        <select
          value={fontWeight}
          onChange={(e) => {
            setFontWeight(e.target.value);
            updateTextbox(e.target.value);
          }}
          className="bg-light-gray rounded-md p-2 outline-none w-[60%] text-[13px]"
        >
          <option value="100">Thin</option>
          <option value="200">Extra Light</option>
          <option value="300">Light</option>
          <option value="400">Normal</option>
          <option value="500">Medium</option>
          <option value="600">Semi Bold</option>
          <option value="700">Bold</option>
          <option value="800">Extra Bold</option>
          <option value="900">Black</option>
        </select>
      </div>
      {/* Text Color */}
      <div className="flex items-center justify-between">
        <p className="text-[13px]">Text Color</p>
        <input
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
            updateTextbox(e.target.value);
          }}
          className="w-[60%] h-8 rounded-md border-none outline-none text-[13px]"
        />
      </div>
      {/* Line Height */}
      <div className="flex items-center justify-between">
        <p className="text-[13px]">Line Height</p>
        <input
          type="number"
          step={0.1}
          value={lineHeight}
          onChange={(e) => setLineHeight(Number(e.target.value))}
          className="bg-light-gray rounded-md p-2 outline-none w-[60%] text-[13px]"
        />
      </div>
      {/* Margin */}
      <div>
        <p className="text-sm font-medium">Margin</p>
        <div className="grid grid-cols-2 gap-2 mt-1">
          {[
            { label: "Top", value: marginTop, setter: setMarginTop },
            { label: "Right", value: marginRight, setter: setMarginRight },
            { label: "Bottom", value: marginBottom, setter: setMarginBottom },
            { label: "Left", value: marginLeft, setter: setMarginLeft },
          ].map((item, idx) => (
            <div key={idx} className="relative flex-col items-start">
              <p className="text-[10px] text-gray-600 mb-1">{item.label}</p>
              <input
                type="number"
                placeholder={item.label}
                value={item.value}
                onChange={(e) => item.setter(Number(e.target.value))}
                className="bg-light-gray rounded-md p-2 outline-none text-[13px] w-full pr-6"
              />
              <span className="absolute right-2 top-[65%] -translate-y-1/2 text-gray-500 text-[12px] pointer-events-none">
                px
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Padding */}
      <div className="mt-4">
        <p className="text-sm font-medium">Padding</p>
        <div className="grid grid-cols-2 gap-2 mt-1">
          {[
            { label: "Top", value: paddingTop, setter: setPaddingTop },
            { label: "Right", value: paddingRight, setter: setPaddingRight },
            { label: "Bottom", value: paddingBottom, setter: setPaddingBottom },
            { label: "Left", value: paddingLeft, setter: setPaddingLeft },
          ].map((item, idx) => (
            <div key={idx} className="relative flex-col items-start">
              <p className="text-[10px] text-gray-600 mb-1">{item.label}</p>
              <input
                type="number"
                placeholder={item.label}
                value={item.value}
                onChange={(e) => item.setter(Number(e.target.value))}
                className="bg-light-gray rounded-md p-2 outline-none text-[13px] w-full pr-6"
              />
              <span className="absolute right-2 top-[65%] -translate-y-1/2 text-gray-500 text-[12px] pointer-events-none">
                px
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Letter Spacing */}
      <div className="flex items-center justify-between">
        <p className="text-[13px]">Letter Spacing</p>
        <input
          type="number"
          step={0.1}
          value={letterSpacing}
          onChange={(e) => setLetterSpacing(Number(e.target.value))}
          className="bg-light-gray rounded-md p-2 outline-none w-[60%] text-[13px]"
        />
      </div>
      {/* Text Decoration */}
      <div className="flex items-center justify-between">
        <p className="text-[13px]">Decoration</p>
        <div className="flex gap-1">
          <button
            onClick={() => setIsBold(!isBold)}
            className={`p-2 rounded-md ${
              isBold ? "bg-blue-500 text-white" : "bg-light-gray"
            }`}
          >
            <MdFormatBold size={16} />
          </button>
          <button
            onClick={() => setIsItalic(!isItalic)}
            className={`p-2 rounded-md ${
              isItalic ? "bg-blue-500 text-white" : "bg-light-gray"
            }`}
          >
            <MdFormatItalic size={16} />
          </button>
          <button
            onClick={() => setIsUnderline(!isUnderline)}
            className={`p-2 rounded-md ${
              isUnderline ? "bg-blue-500 text-white" : "bg-light-gray"
            }`}
          >
            <MdFormatUnderlined size={16} />
          </button>
          <button
            onClick={() => setIsStrike(!isStrike)}
            className={`p-2 rounded-md ${
              isStrike ? "bg-blue-500 text-white" : "bg-light-gray"
            }`}
          >
            <MdStrikethroughS size={16} />
          </button>
        </div>
      </div>
      {/* Text Transform */}
      <div className="flex items-center justify-between">
        <p className="text-[13px]">Transform</p>
        <select
          value={textTransform}
          onChange={(e) => setTextTransform(e.target.value as any)}
          className="bg-light-gray rounded-md p-2 outline-none w-[60%] text-[13px]"
        >
          <option value="none">None</option>
          <option value="uppercase">UPPERCASE</option>
          <option value="lowercase">lowercase</option>
          <option value="capitalize">Capitalize</option>
        </select>
      </div>
      {/* Align */}
      <div className="flex items-center justify-between my-4">
        <p className="text-sm">Align</p>
        <div className="flex gap-2">
          <button
            onClick={() => setTextAlign("left")}
            className={`p-2 rounded-md ${
              textAlign === "left" ? "bg-blue-500 text-white" : "bg-light-gray"
            }`}
          >
            <MdFormatAlignLeft size={18} />
          </button>
          <button
            onClick={() => setTextAlign("center")}
            className={`p-2 rounded-md ${
              textAlign === "center"
                ? "bg-blue-500 text-white"
                : "bg-light-gray"
            }`}
          >
            <MdFormatAlignCenter size={18} />
          </button>
          <button
            onClick={() => setTextAlign("right")}
            className={`p-2 rounded-md ${
              textAlign === "right" ? "bg-blue-500 text-white" : "bg-light-gray"
            }`}
          >
            <MdFormatAlignRight size={18} />
          </button>
        </div>
      </div>
      {/* Opacity */}
      <div className="flex items-center justify-between my-2">
        <p className="text-[13px]">Opacity</p>
        <input
          type="range"
          min={0}
          max={1}
          step={0.1}
          value={opacity}
          onChange={(e) => setOpacity(Number(e.target.value))}
          className="w-[60%]"
        />
      </div>
      {/* Live Preview */}
      <div className="border rounded-md p-3 mt-4 bg-light-gray">
        <p
          style={{
            fontSize: `${fontSize}${fontSizeUnit}`,
            fontFamily,
            fontWeight,
            color,
            lineHeight,
            letterSpacing,
            textAlign,
            opacity,
            textDecoration: `${isUnderline ? "underline " : ""}${
              isStrike ? "line-through" : ""
            }`.trim(),
            fontStyle: isItalic ? "italic" : "normal",
            textTransform,
            marginTop: `${marginTop}px`,
            marginRight: `${marginRight}px`,
            marginBottom: `${marginBottom}px`,
            marginLeft: `${marginLeft}px`,
            paddingTop: `${paddingTop}px`,
            paddingRight: `${paddingRight}px`,
            paddingBottom: `${paddingBottom}px`,
            paddingLeft: `${paddingLeft}px`,
          }}
        >
          {isBold ? <strong>{content}</strong> : content}
        </p>
      </div>

      {/* Reset */}
      <button
        onClick={resetAll}
        className="w-full bg-red-500 text-white py-2 rounded-md mt-4 text-sm font-medium"
      >
        Reset
      </button>
    </div>
  );
};

export default TextEditorPanel;
