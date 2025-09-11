// import { elementItems } from "@/utils/elementItems";
// import { Plus, Minus } from "lucide-react";
// import { useState } from "react";
// import { useEditorContext } from "@/context/EditorContext";

// const Elements = () => {
//   const [openCategory, setOpenCategory] = useState<string | null>(null);
//   const { setSelectedFeature } = useEditorContext();

//   const toggleCategory = (name: string) => {
//     if (openCategory === name) {
//       setOpenCategory(null);
//     } else {
//       setOpenCategory(name);
//     }
//   };

//   return (
//     <div className="max-h-[82vh] overflow-y-auto scrollbar-hide mt-3">
//       {elementItems.map((category) => (
//         <div
//           key={category.name}
//           className="border-b border-b-light-gray rounded-lg"
//         >
//           <div
//             className="flex items-center justify-between py-4 px-2 cursor-pointer rounded-lg hover:bg-gray-100 transition"
//             onClick={() => toggleCategory(category.name)}
//           >
//             <p className="text-sm font-semibold">{category.name}</p>
//             {openCategory === category.name ? (
//               <Minus className="h-4 w-4" />
//             ) : (
//               <Plus className="h-4 w-4" />
//             )}
//           </div>
//           <div
//             className={`overflow-hidden transition-all duration-300 ease-in-out ${
//               openCategory === category.name
//                 ? "max-h-96 opacity-100"
//                 : "max-h-0 opacity-0"
//             }`}
//           >
//             <ul className="px-4 py-2 space-y-1">
//               {category.elements.map((el) => (
//                 <li
//                   key={el.name}
//                   className="text-sm cursor-pointer hover:bg-gray-200 rounded px-2 py-1"
//                   onClick={() => setSelectedFeature(el.editorComponent)}
//                 >
//                   {el.name}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Elements;



import { elementItems } from "@/utils/elementItems";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useEditorContext } from "@/context/EditorContext";
import { useCanvasHook } from "@/app/editor/[projectId]/page";

const Elements = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const { addElementToCanvas } = useEditorContext();
  const { canvasEditor } = useCanvasHook(); // get current canvas

  const toggleCategory = (name: string) => {
    setOpenCategory(openCategory === name ? null : name);
  };

  return (
    <div className="max-h-[82vh] overflow-y-auto scrollbar-hide mt-3">
      {elementItems.map((category) => (
        <div
          key={category.name}
          className="border-b border-b-light-gray rounded-lg"
        >
          <div
            className="flex items-center justify-between py-4 px-2 cursor-pointer rounded-lg hover:bg-gray-100 transition"
            onClick={() => toggleCategory(category.name)}
          >
            <p className="text-sm font-semibold">{category.name}</p>
            {openCategory === category.name ? (
              <Minus className="h-4 w-4" />
            ) : (
              <Plus className="h-4 w-4" />
            )}
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openCategory === category.name
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <ul className="px-4 py-2 space-y-1">
              {category.elements.map((el) => (
                <li
                  key={el.name}
                  className="text-sm cursor-pointer hover:bg-gray-200 rounded px-2 py-1"
                  onClick={() => {
                    if (canvasEditor) {
                      addElementToCanvas(canvasEditor, el.editorComponent);
                    }
                  }}
                >
                  {el.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Elements;
