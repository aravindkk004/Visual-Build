// import React from "react";
// import TextSettings from "./Services/TextSettings";

// const EditorPanel = () => {
//   return (
//     <div className="w-[20%] bg-white p-4">
//       <TextSettings />
//     </div>
//   );
// };

// export default EditorPanel;


import React from "react";
import TextSettings from "./Services/TextSettings";
import { useEditorContext } from "@/context/EditorContext";
import ElementsPanel from "./ElementsPanel/ElementsPanel";
import UploadPanel from "./UploadPanel/UploadPanel";
import Templates from "./Templates/Templates";

const EditorPanel = () => {
  const { selectedFeature } = useEditorContext();

  return (
    <div className="w-[20%] bg-white p-4">
      {selectedFeature === "Elements" && <ElementsPanel />}
      {selectedFeature === "Text" && <TextSettings />}
      {selectedFeature === "Upload" && <UploadPanel />}
      {selectedFeature === "Templates" && <Templates />}
      {!selectedFeature && (
        <p className="text-gray-400 text-sm">Select a feature to edit</p>
      )}
    </div>
  );
};

export default EditorPanel;
