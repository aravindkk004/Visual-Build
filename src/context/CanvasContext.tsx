import { createContext } from "react";
import type { Canvas } from "fabric";

interface CanvasContextType {
  canvasEditor: Canvas | null;
  setCanvasEditor: (c: Canvas | null) => void;
}

export const CanvasContext = createContext<CanvasContextType>({
  canvasEditor: null,
  setCanvasEditor: () => {},
});
