import { useState } from "react";
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
import Template1Fields from "../TemplateDataInputs/Template1Fields";
import Template2Fields from "../TemplateDataInputs/Template2Fields";
import Template3Fields from "../TemplateDataInputs/Template3Fields";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const UpdateWebsite = ({ site, onBack }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [formData, setFormData] = useState({
    username: site.username || "",
    templateName: site.templateName || "t1",
    sectionTitle: site.siteData?.sectionTitle || "",
    subTitle: site.siteData?.subTitle || "",
    description: site.siteData?.description || "",
    customData: site.siteData?.customData || {},
  });
  const [step, setStep] = useState(1);

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
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch(`http://localhost:8000/update-site`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          siteId: site.siteId,
          username: formData.username,
          templateName: formData.templateName,
          userId: localStorage.getItem("email"),
          siteData: formData,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(
          errorData?.message || `Failed to update website: ${response.status}`
        );
      }

      const result = await response.json();
      setSuccess(
        `Website updated successfully! It's live at ${result.liveUrl}`
      );
    } catch (error) {
      console.error("Error:", error);
      setError(`Failed to update the website: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
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
                  <SelectItem value="t2">Template 2</SelectItem>
                  <SelectItem value="t3">Template 3</SelectItem>
                </SelectContent>
              </Select>
              {site.templateName !== formData.templateName && (
                <div className="mt-2 text-sm text-yellow-500">
                  Warning: Changing the template will modify the structure of
                  your website.
                </div>
              )}
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
      <Card className="w-full max-w-2xl mx-auto bg-zinc-950 border-gray-800">
        <CardHeader className="space-y-1">
          <div className="flex justify-between items-center mb-4">
            <CardTitle className="text-2xl font-bold text-white">
              Update Website
            </CardTitle>
            <Button
              onClick={onBack}
              variant="outline"
              className="border-gray-700 text-gray-900 hover:bg-zinc-800 hover:text-zinc-100"
            >
              Back to Selection
            </Button>
          </div>
          <CardDescription className="text-gray-400">
            Update your website at {site.liveUrl}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert
              variant="destructive"
              className="mb-4 bg-red-900 border-red-700"
            >
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert className="mb-4 bg-green-900 border-green-700">
              <AlertDescription>{success}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {renderFormStep()}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpdateWebsite;
