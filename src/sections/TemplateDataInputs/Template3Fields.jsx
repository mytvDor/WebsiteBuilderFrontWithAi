// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";

// const Template3Fields = ({ formData, handleInputChange, handleSubmit, isLoading , setSteps }) => {
//   const [step, setStep] = useState(1);

//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return (
//           <div className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="sectionTitle" className="text-sm font-medium text-gray-300">
//                 Section Title
//               </Label>
//               <Input
//                 id="sectionTitle"
//                 name="sectionTitle"
//                 value={formData.sectionTitle}
//                 onChange={handleInputChange}
//                 className="bg-zinc-900 border-gray-700 text-white"
//                 placeholder="Enter section title"
//                 required
//               />
//             </div>
//             <Button
//               onClick={() => setSteps(1)}
//               className="w-full bg-zinc-200 hover:bg-zinc-700 hover:text-white text-black mt-4"
//             >
//               Back
//             </Button>
//             <Button
//               onClick={() => setStep(2)}
//               className="w-full bg-zinc-200 hover:bg-zinc-700 hover:text-white text-black mt-4"
//             >
//               Next
//             </Button>
//           </div>
//         );
//       case 2:
//         return (
//           <div className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="subTitle" className="text-sm font-medium text-gray-300">
//                 Subtitle
//               </Label>
//               <Input
//                 id="subTitle"
//                 name="subTitle"
//                 value={formData.subTitle}
//                 onChange={handleInputChange}
//                 className="bg-zinc-900 border-gray-700 text-white"
//                 placeholder="Enter subtitle"
//                 required
//               />
//             </div>
//             <Button
//               onClick={() => setStep(1)}
//               className="w-full bg-zinc-200 hover:bg-zinc-700 hover:text-white text-black mt-4"
//             >
//               Back
//             </Button>
//             <Button
//               onClick={() => setStep(3)}
//               className="w-full bg-zinc-200 hover:bg-zinc-700 hover:text-white text-black mt-2"
//             >
//               Next
//             </Button>
//           </div>
//         );
//       case 3:
//         return (
//           <div className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="description" className="text-sm font-medium text-gray-300">
//                 Description
//               </Label>
//               <Input
//                 id="description"
//                 name="description"
//                 value={formData.description}
//                 onChange={handleInputChange}
//                 className="bg-zinc-900 border-gray-700 text-white"
//                 placeholder="Enter description"
//                 required
//               />
//             </div>
//             <Button
//               onClick={() => setStep(2)}
//               className="w-full bg-zinc-200 hover:bg-zinc-700 hover:text-white text-black mt-4"
//             >
//               Back
//             </Button>
            
//             <Button onClick={handleSubmit} className="w-full bg-zinc-200 hover:bg-zinc-700 hover:text-white text-black mt-2" disabled={isLoading}>
//               {isLoading ? 'Generating...' : 'Generate Website'}
//            Submit </Button>
//             {/* <Button
//               onClick={onSubmit}
//               className="w-full bg-zinc-200 hover:bg-zinc-700 hover:text-white text-black mt-2"
//             >
//               Submit
//             </Button> */}
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return <>{renderStep()}</>;
// };

// export default Template3Fields;

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Template3Fields = ({ formData, handleInputChange, handleSubmit, isLoading, setSteps }) => {
  const [step, setFormStep] = useState(1); // Local step management for multi-step form

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="sectionTitle" className="text-sm font-medium text-gray-300">
                Section Title
              </Label>
              <Input
                id="sectionTitle"
                name="sectionTitle"
                value={formData.sectionTitle}
                onChange={handleInputChange}
                className="bg-zinc-900 border-gray-700 text-white"
                placeholder="Enter section title"
              />
            </div>
            <div className="flex justify-between mt-4">
              <Button
                onClick={() => setSteps(1)} // Go back to template selection
                className="bg-zinc-200 hover:bg-zinc-700 hover:text-white text-black"
                type="button" // Add this line
              >
                Back
              </Button>
              <Button
                type="button" // Add this line
                onClick={() => setFormStep(2)} // Go to next step
                className="bg-zinc-200 hover:bg-zinc-700 hover:text-white text-black"
              >
                Next
              </Button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="subTitle" className="text-sm font-medium text-gray-300">
                Subtitle
              </Label>
              <Input
                id="subTitle"
                name="subTitle"
                value={formData.subTitle}
                onChange={handleInputChange}
                className="bg-zinc-900 border-gray-700 text-white"
                placeholder="Enter subtitle"
                
              />
            </div>
            <div className="flex justify-between mt-4">
              <Button
                type="button" // Add this line
                onClick={() => setFormStep(1)} // Go back to previous step
                className="bg-zinc-200 hover:bg-zinc-700 hover:text-white text-black"
              >
                Back
              </Button>
              <Button
                type="button" // Add this line
                onClick={() => setFormStep(3)} // Go to next step
                className="bg-zinc-200 hover:bg-zinc-700 hover:text-white text-black"
              >
                Next
              </Button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="description" className="text-sm font-medium text-gray-300">
                Description
              </Label>
              <Input
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="bg-zinc-900 border-gray-700 text-white"
                placeholder="Enter description"
                
              />
            </div>
            <div className="flex justify-between mt-4">
              <Button
                type="button" // Add this line
                onClick={() => setFormStep(2)} // Go back to previous step
                className="bg-zinc-200 hover:bg-zinc-700 hover:text-white text-black"
              >
                Back
              </Button>
              <Button
                type="button" // Add this line
                onClick={handleSubmit} // Final submission
                className="bg-zinc-200 hover:bg-zinc-700 hover:text-white text-black"
                disabled={isLoading}
              >
                {isLoading ? 'Generating...' : 'Generate Website'}
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
};

export default Template3Fields;
