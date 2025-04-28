import React, { useState } from "react";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Button } from "./button";

// Define the prop type for lifting state up to parent for display
interface ProjectCreationFormProps {
  setSubmittedProject: (project: {
    projectType: string;
    paid: string;
    company: string;
    headline: string;
    email: string;
    hours: string;
    description: string;
    businessNeed: string;
    helpNeeded: string;
  }) => void;
}

const ProjectCreationForm: React.FC<ProjectCreationFormProps> = ({
  setSubmittedProject,
}) => {
  // Form state
  const [form, setForm] = useState({
    projectType: "",
    paid: "",
    company: "",
    headline: "",
    email: "",
    hours: "",
    description: "",
    businessNeed: "",
    helpNeeded: "",
  });

  // Handle change for all fields
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedProject(form);
    // Optionally reset the form (comment if you prefer to keep the data in form)
    setForm({
      projectType: "",
      paid: "",
      company: "",
      headline: "",
      email: "",
      hours: "",
      description: "",
      businessNeed: "",
      helpNeeded: "",
    });
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-4">
        {/* Project type */}
        <div className="flex-1">
          <label className="block mb-1 text-sm font-medium text-[rgba(11,53,98,1)]">
            Is it a company project or personal project?
          </label>
          <select
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            required
          >
            <option value="">Select type</option>
            <option value="Personal Project">Personal Project</option>
            <option value="Company Project">Company Project</option>
          </select>
        </div>
        {/* Paid/free */}
        <div className="flex-1">
          <label className="block mb-1 text-sm font-medium text-[rgba(11,53,98,1)]">
            Is this a paid project or not?
          </label>
          <select
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
            name="paid"
            value={form.paid}
            onChange={handleChange}
            required
          >
            <option value="">Select one</option>
            <option value="Paid">Paid</option>
            <option value="Free">Free</option>
          </select>
        </div>
      </div>

      {/* Company Name & Headline */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="block mb-1 text-sm font-medium text-[rgba(11,53,98,1)]">
            Company/Project Name
          </label>
          <Input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Enter company or project name"
            required
          />
        </div>
        <div className="flex-1">
          <label className="block mb-1 text-sm font-medium text-[rgba(11,53,98,1)]">
            Project Headline
          </label>
          <Input
            name="headline"
            value={form.headline}
            onChange={handleChange}
            placeholder="Project headline"
            required
          />
        </div>
      </div>

      {/* Email & Hours */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="block mb-1 text-sm font-medium text-[rgba(11,53,98,1)]">
            Email Address
          </label>
          <Input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email address"
            required
          />
        </div>
        <div className="flex-1">
          <label className="block mb-1 text-sm font-medium text-[rgba(11,53,98,1)]">
            Weekly Hours
          </label>
          <Input
            type="number"
            name="hours"
            value={form.hours}
            onChange={handleChange}
            placeholder="e.g. 10"
            min={0}
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block mb-1 text-sm font-medium text-[rgba(11,53,98,1)]">
          Tell us a little bit about what you need
        </label>
        <Textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Describe your project idea..."
          required
        />
      </div>

      {/* Business Need */}
      <div>
        <label className="block mb-1 text-sm font-medium text-[rgba(11,53,98,1)]">
          Which area of need does it affect, why are you hoping to address something with this?
        </label>
        <select
          name="businessNeed"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
          value={form.businessNeed}
          onChange={handleChange}
          required
        >
          <option value="">Select a business need</option>
          <option value="Want to validate my product">Want to validate my product</option>
          <option value="I want to pay someone to build it">I want to pay someone to build it</option>
          <option value="I want to license a groundbreaking tool/SaaS">I want to license a groundbreaking tool/SaaS</option>
          <option value="I need to grow and scale a local business">I need to grow and scale a local business</option>
        </select>
      </div>
      {/* Help Needed */}
      <div>
        <label className="block mb-1 text-sm font-medium text-[rgba(11,53,98,1)]">
          Specific needs (may expand as your needs solidify)
        </label>
        <select
          name="helpNeeded"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
          value={form.helpNeeded}
          onChange={handleChange}
          required
        >
          <option value="">Select an option</option>
          <option value="Prototyping/MVP">Prototyping/MVP</option>
          <option value="UI/UX">UI/UX</option>
          <option value="Software Engineering">Software Engineering</option>
          <option value="Go-to-market strategy">Go-to-market strategy</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-[#2e4977] to-[#a4bddb] text-white font-bold py-3 text-lg hover:from-[#4c6ea8] hover:to-[#7fa0c2] rounded transition-colors"
      >
        Submit
      </Button>
    </form>
  );
};

export default ProjectCreationForm;
