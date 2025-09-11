import { useEditorContext } from "@/context/EditorContext";
import TextSettings from "./services/TextSettings";
import { useEffect } from "react";

const EditorPanel = () => {
  const { selectedFeature } = useEditorContext();
  useEffect(() => {
    console.log("selected feature is,",selectedFeature);
  }, [selectedFeature]);

  return (
    <div className="p-2 pb-5 overflow-y-auto h-[90vh] scrollbar-hide">
      {selectedFeature === "TextSettings" && <TextSettings />}

      {!selectedFeature && (
        <p className="text-sm text-gray-500">Elements appear here</p>
      )}
    </div>
  );
};

export default EditorPanel;
