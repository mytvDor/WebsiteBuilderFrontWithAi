import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import Template1Fields from "../TemplateDataInputs/Template1Fields";
import Template2Fields from "../TemplateDataInputs/Template2Fields";
import Template3Fields from "../TemplateDataInputs/Template3Fields";
import AiChatComponent from "../../Ai_Components/AiChatComponent";
import { Toaster, toast } from "react-hot-toast";
const CreateWebsite = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    templateName: "t1",
    sectionTitle: "",
    subTitle: "",
    description: "",
    customData: {},
  });
  const [step, setStep] = useState(1);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      // Check if the field is part of the standard form data
      if (name in prev) {
        return { ...prev, [name]: value };
      }
      // If not, add it to customData
      return {
        ...prev,
        customData: {
          ...prev.customData,
          [name]: value,
        },
      };
    });
  };

  const handleTemplateChange = (value) => {
    setFormData((prev) => ({ ...prev, templateName: value }));
    setStep(1); // Reset step when template changes
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(formData);
    try {
      console.log(localStorage.getItem("email"));
      const response = await fetch("http://localhost:8000/generate-sites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          templateName: formData.templateName,
          userId: localStorage.getItem("email"),
          siteData: formData,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        // alert(
        //   `Website Created Successfully:\nLive URL: ${result.liveUrl}\nSite ID: ${result.site_id}`
        // );
        toast.success("Website Created Successfully!");
        resetForm();
      } else {
        throw new Error("Failed to generate website");
      }
    } catch (error) {
      console.error("Error:", error);
      // alert("Error: Failed to create the website. Please try again.");
      toast.error("Error! Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      username: "",
      templateName: "t1",
      sectionTitle: "",
      subTitle: "",
      description: "",
    });
    setStep(1);
  };

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="username"
                className="text-sm font-medium text-gray-300"
              >
                Username
              </Label>
              <Input
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="bg-zinc-900 border-gray-700 text-white"
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="template"
                className="text-sm font-medium text-gray-300"
              >
                Template
              </Label>
              <Select
                name="templateName"
                value={formData.templateName}
                onValueChange={handleTemplateChange}
              >
                <SelectTrigger className="w-full bg-zinc-900 border-gray-700 text-white">
                  <SelectValue placeholder="Select a template" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 text-white border-gray-700">
                  <SelectItem value="t1">Template 1</SelectItem>
                  <SelectItem value="t2">Cafe Website</SelectItem>
                  <SelectItem value="t3">Gym Website</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              onClick={() => setStep(2)}
              className="w-full bg-zinc-200 hover:bg-zinc-700 hover:text-white text-black mt-4"
            >
              Next
            </Button>
          </div>
        );

      case 2:
        return (
          <>
            {formData.templateName === "t1" && (
              <Template1Fields
                formData={formData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                isLoading={isLoading}
                setSteps={setStep}
              />
            )}
            {formData.templateName === "t2" && (
              <Template2Fields
                formData={formData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                isLoading={isLoading}
                setSteps={setStep}
              />
            )}
            {formData.templateName === "t3" && (
              <Template3Fields
                formData={formData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                isLoading={isLoading}
                setSteps={setStep}
              />
            )}
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-4">
      <Toaster position="top-center" />

      <Card className="w-full max-w-2xl mx-auto bg-zinc-950 border-gray-800">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-white">
            Create a New Website
          </CardTitle>
          <CardDescription className="text-gray-400">
            Fill out the form below to generate your custom website.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {renderFormStep()}
          </form>
        </CardContent>
      </Card>
      <AiChatComponent></AiChatComponent>
    </div>
  );
};

export default CreateWebsite;
