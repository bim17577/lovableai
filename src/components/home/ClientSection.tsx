
import React, { useState } from "react";
import ProjectCreationForm from "../ui/ProjectCreationForm";

const ClientSection: React.FC = () => {
  // Store the submitted project idea to display above the image
  const [submittedProject, setSubmittedProject] = useState<null | {
    projectType: string;
    paid: string;
    company: string;
    headline: string;
    email: string;
    hours: string;
    description: string;
    businessNeed: string;
    helpNeeded: string;
  }>(null);

  return (
    <section
      className="bg-[rgba(11,53,98,1)] flex flex-col items-center text-white font-semibold justify-center mt-[78px] px-4 py-16 max-md:mt-10 max-md:px-2"
      aria-label="Project Creation Section"
    >
      <div className="flex flex-col items-center w-full max-w-4xl">
        <h2 className="text-[39px] font-extrabold leading-none mb-4 text-center w-full">
          Project Creation
        </h2>
        <p className="text-white/90 text-lg text-center font-normal self-stretch mb-8">
          Share your business challenge by completing the questionnaire below, or feel free to contact us directly for a personalized discussion.
        </p>
        {/* Show submitted project idea above the image, if present */}
        {submittedProject && (
          <div className="bg-white text-[rgba(11,53,98,1)] shadow-xl rounded-lg w-full p-6 mb-10 animate-fade-in flex flex-col gap-3 border-t-4 border-[rgba(11,53,98,1)]">
            <div className="text-xl font-extrabold mb-2">Submitted Project</div>
            <div className="flex flex-wrap gap-6">
              <div>
                <span className="font-semibold">Project Type:</span> {submittedProject.projectType}
              </div>
              <div>
                <span className="font-semibold">Paid/Free:</span> {submittedProject.paid}
              </div>
              <div>
                <span className="font-semibold">Company:</span> {submittedProject.company}
              </div>
              <div>
                <span className="font-semibold">Email:</span> {submittedProject.email}
              </div>
              <div>
                <span className="font-semibold">Hours:</span> {submittedProject.hours}
              </div>
              <div>
                <span className="font-semibold">Headline:</span> {submittedProject.headline}
              </div>
            </div>
            <div>
              <span className="font-semibold">Business Need:</span> {submittedProject.businessNeed}
            </div>
            <div>
              <span className="font-semibold">Help Needed:</span> {submittedProject.helpNeeded}
            </div>
            <div>
              <span className="font-semibold">Description:</span>
              <div className="italic">{submittedProject.description}</div>
            </div>
          </div>
        )}

        <div className="flex w-full gap-12 max-md:flex-col max-md:gap-8">
          {/* Project creation form */}
          <div className="bg-white rounded-2xl shadow-md flex-1 p-8 max-w-xl mx-auto">
            <ProjectCreationForm setSubmittedProject={setSubmittedProject} />
          </div>
          {/* Right-side image */}
          <div className="flex-1 flex items-center justify-center max-w-xl">
            <img
              src="/lovable-uploads/9c5907ae-d081-4d06-a76e-18029de56274.png"
              alt="Project form"
              className="w-full max-w-md rounded-lg shadow-lg object-contain"
              style={{ background: "#f8f8f8" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;

