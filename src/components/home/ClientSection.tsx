import React, { useState } from "react";
import ProjectCreationForm from "../ui/ProjectCreationForm";

const ClientSection: React.FC = () => {
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

        <div className="flex w-full gap-12 max-md:flex-col max-md:gap-8">
          <div className="bg-white rounded-2xl shadow-md flex-1 p-8 max-w-xl mx-auto">
            <ProjectCreationForm />
          </div>
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
