import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Template1Fields = ({
  formData,
  handleInputChange,
  handleSubmit,
  isLoading,
  setSteps,
}) => {
  const [step, setFormStep] = useState(1); // Local step management for multi-step form

  function handleCustChange(e) {}
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="sectionTitle"
                className="text-sm font-medium text-gray-300"
              >
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
            <div className="space-y-2">
              <Label
                htmlFor="sectionTitle"
                className="text-sm font-medium text-gray-300"
              >
                Idform
              </Label>
              <Input
                id="customField"
                name="customField"
                value={formData.customData.customField || ""}
                onChange={handleInputChange}
                className="bg-zinc-900 border-gray-700 text-white"
                placeholder="Enter custom data"
              />
            </div>
            <div className="flex justify-between mt-4">
              <Button
                onClick={() => setSteps(1)}
                className="bg-zinc-200 hover:bg-zinc-700 hover:text-white text-black"
                type="button"
              >
                Back
              </Button>
              <Button
                type="button"
                onClick={() => setFormStep(2)}
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
              <Label
                htmlFor="subTitle"
                className="text-sm font-medium text-gray-300"
              >
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
                type="button"
                onClick={() => setFormStep(1)}
                className="bg-zinc-200 hover:bg-zinc-700 hover:text-white text-black"
              >
                Back
              </Button>
              <Button
                type="button"
                onClick={() => setFormStep(3)}
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
              <Label
                htmlFor="description"
                className="text-sm font-medium text-gray-300"
              >
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
                type="button"
                onClick={() => setFormStep(2)}
                className="bg-zinc-200 hover:bg-zinc-700 hover:text-white text-black"
              >
                Back
              </Button>
              <Button
                type="button"
                onClick={handleSubmit}
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

export default Template1Fields;
