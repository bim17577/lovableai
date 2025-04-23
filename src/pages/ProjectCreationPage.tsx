
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProjectCreationPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Project submission passed via state
  const project = location.state?.submittedProject;

  if (!project) {
    // If no submission, redirect back
    navigate("/");
    return null;
  }

  return (
    <section
      className="bg-[rgba(11,53,98,1)] min-h-screen flex flex-col items-center text-white font-semibold justify-center px-4 py-16"
      aria-label="Project Creation Page"
    >
      <div className="flex flex-col items-center w-full max-w-2xl bg-white text-[rgba(11,53,98,1)] shadow-xl rounded-lg p-8 border-t-4 border-[rgba(11,53,98,1)]">
        <h2 className="text-[39px] font-extrabold mb-4 text-center w-full">
          Project Creation
        </h2>
        <div className="flex flex-wrap gap-6 mb-4">
          <div>
            <span className="font-semibold">Project Type:</span> {project.projectType}
          </div>
          <div>
            <span className="font-semibold">Paid/Free:</span> {project.paid}
          </div>
          <div>
            <span className="font-semibold">Company:</span> {project.company}
          </div>
          <div>
            <span className="font-semibold">Email:</span> {project.email}
          </div>
          <div>
            <span className="font-semibold">Hours:</span> {project.hours}
          </div>
          <div>
            <span className="font-semibold">Headline:</span> {project.headline}
          </div>
        </div>
        <div>
          <span className="font-semibold">Business Need:</span> {project.businessNeed}
        </div>
        <div>
          <span className="font-semibold">Help Needed:</span> {project.helpNeeded}
        </div>
        <div>
          <span className="font-semibold">Description:</span>
          <div className="italic">{project.description}</div>
        </div>
        <button
          className="mt-6 bg-[rgba(11,53,98,1)] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[rgba(11,53,98,0.8)] transition-all"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </section>
  );
};

export default ProjectCreationPage;

