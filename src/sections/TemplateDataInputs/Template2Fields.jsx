// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";
// import { Loader2 } from 'lucide-react';
// const Template2Fields = ({ formData, handleInputChange, handleSubmit, isLoading , setSteps }) => {
//   const [step, setformstep] = useState(1);

//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return (
//           <div className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="cafeName" className="text-sm font-medium text-gray-300">
//                 Section Title
//               </Label>
//               <Input
//                 id="cafeName"
//                 name="cafeName"
//                 value={formData.cafeName}
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
//               Backbtn
//             </Button>
//             <Button
//               onClick={() => setformstep(2)}
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
//               <Label htmlFor="about" className="text-sm font-medium text-gray-300">
//                 about
//               </Label>
//               <Input
//                 id="about"
//                 name="about"
//                 // value={formData.about}
//                 // onChange={handleInputChange}
//                 className="bg-zinc-900 border-gray-700 text-white"
//                 placeholder="Enter about"
//                 required
//               />
//             </div>
//             <Button
//               onClick={() => setformstep(1)}
//               className="w-full bg-zinc-200 hover:bg-zinc-700 hover:text-white text-black mt-4"
//             >
//               Back
//             </Button>
//             <Button
//               onClick={() => setformstep(3)}
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
//               onClick={() => setformstep(2)}
//               className="w-full bg-zinc-200 hover:bg-zinc-700 hover:text-white text-black mt-4"
//             >
//               Back
//             </Button>

//             <Button onClick={handleSubmit} className="w-full bg-zinc-200 hover:bg-zinc-700 hover:text-white text-black mt-2" disabled={isLoading}>
//               {isLoading ? `Generating... ${<Loader2 className="mr-2 h-4 w-4 animate-spin" />}` : 'Generate Website'}
//             </Button>

//            {/* <Button type="submit" disabled={isLoading}>
// //             {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
// //             Generate Website
// //           </Button> */}
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

// export default Template2Fields;

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Template2Fields = ({
  formData,
  handleInputChange,
  handleSubmit,
  isLoading,
  setSteps,
}) => {
  const [step, setFormStep] = useState(1); // Local step management for multi-step form

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="cafeName"
                className="text-sm font-medium text-gray-300"
              >
                Cafe Name
              </Label>
              <Input
                id="cafeName"
                name="cafeName"
                value={formData.cafeName}
                onChange={handleInputChange}
                className="bg-zinc-900 border-gray-700 text-white"
                placeholder="Enter section title"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="about"
                className="text-sm font-medium text-gray-300"
              >
                about
              </Label>
              <Input
                id="about"
                name="about"
                value={formData.about}
                onChange={handleInputChange}
                className="bg-zinc-900 border-gray-700 text-white"
                placeholder="Enter about"
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
            <div>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num}>
                  <div className="space-y-2">
                    <Label
                      htmlFor={`menu${num}`}
                      className="text-sm font-medium text-gray-300"
                    >
                      Menu No.{num}
                    </Label>
                    <Input
                      id={`menu${num}`}
                      name={`menu${num}`}
                      value={formData[`menu${num}`]}
                      onChange={handleInputChange}
                      className="bg-zinc-900 border-gray-700 text-white"
                      placeholder={`Enter Menu ${num}`}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor={`menuDes${num}`}
                      className="text-sm font-medium text-gray-300"
                    >
                      Menu No.{num} Description
                    </Label>
                    <Input
                      id={`menuDes${num}`}
                      name={`menuDes${num}`}
                      value={formData[`menu${num}des`]}
                      onChange={handleInputChange}
                      className="bg-zinc-900 border-gray-700 text-white"
                      placeholder={`Enter Menu ${num} Description`}
                    />
                  </div>
                </div>
              ))}
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
            <div>
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="space-y-2">
                  <Label
                    htmlFor={`testimonial${num}`}
                    className="text-sm font-medium text-gray-300"
                  >
                    Testimonial Name {num}
                  </Label>
                  <Input
                    id={`testimonial${num}`}
                    name={`testimonial${num}`}
                    value={formData[`test${num}`]}
                    onChange={handleInputChange}
                    className="bg-zinc-900 border-gray-700 text-white"
                    placeholder={`Enter Testimonial Name ${num}`}
                  />
                </div>
              ))}
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
                onClick={() => setFormStep(4)} // Go to next step
                className="bg-zinc-200 hover:bg-zinc-700 hover:text-white text-black"
              >
                Next
              </Button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <div>
              {[
                { id: "address", label: "Address" },
                { id: "email", label: "Email" },
                { id: "phone", label: "Phone" },
                { id: "time", label: "Time" },
                { id: "facebook", label: "Facebook Link" },
                { id: "instagram", label: "Instagram Link" },
                { id: "twitter", label: "Twitter Link" },
              ].map((field) => (
                <div key={field.id} className="space-y-2">
                  <Label
                    htmlFor={field.id}
                    className="text-sm font-medium text-gray-300"
                  >
                    {field.label}
                  </Label>
                  <Input
                    id={field.id}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleInputChange}
                    className="bg-zinc-900 border-gray-700 text-white"
                    placeholder={`Enter ${field.label}`}
                  />
                </div>
              ))}
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
                {isLoading ? "Generating..." : "Generate Website"}
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

export default Template2Fields;
