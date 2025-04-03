import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Template3Fields = ({
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
                htmlFor="gymname"
                className="text-sm font-medium text-gray-300"
              >
                Gym Name
              </Label>
              <Input
                id="gymname"
                name="gymname"
                value={formData.gymname}
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
                About Gym
              </Label>
              <Input
                id="about"
                name="about"
                value={formData.about}
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
            <div>
              {[
                { id: "yearPlan", label: "yearly Plan name" },
                { id: "yearPrice", label: "Yearly Plan Price" },
                { id: "yeardescription", label: "Yearly Description" },
                { id: "sixmonthPlan", label: "6 month Plan name" },
                { id: "sixmonthPrice", label: "6 month Plan Price" },
                {
                  id: "sixmonthdescription",
                  label: "6 month Plan Description",
                },

                { id: "threemonthPlan", label: "3 month Plan name" },
                { id: "threeonthPrice", label: "3 month Plan Price" },
                {
                  id: "threemonthdescription",
                  label: "3 month Plan Description",
                },
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
              {[
                { id: "address", label: "Address" },
                { id: "email", label: "Email" },
                { id: "phone", label: "Phone" },
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

export default Template3Fields;
