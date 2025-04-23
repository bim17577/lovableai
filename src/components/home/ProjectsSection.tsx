import React from "react";
import ProjectCard from "../ui/ProjectCard";

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/d6f0bb6062d2bcbaee3968cdbcbc6f98dff45963?placeholderIfAbsent=true",
      category: {
        name: "Website",
        color: "bg-[rgba(252,170,184,0.61)]",
        dotColor: "bg-[rgba(242,84,113,1)]",
      },
      title: "ABC Car Rent Website Development",
      students: "06 Students",
      hours: "8Hourse/Day",
      duration: "03 Months",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/5c98edd5917a0ac9d127a57b62271c9804e380f9?placeholderIfAbsent=true",
      category: {
        name: "Software",
        color: "bg-[rgba(217,242,251,1)]",
        dotColor: "bg-[rgba(35,189,238,1)]",
      },
      title: "ABC Microfinance Software Development",
      students: "06 Students",
      hours: "8Hourse/Day",
      duration: "06 Months",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/0aee5349401b0a50e394f3fb56de010df4b86894?placeholderIfAbsent=true",
      category: {
        name: "App",
        color: "bg-[rgba(240,226,194,1)]",
        dotColor: "bg-[rgba(244,196,103,1)]",
      },
      title: "Employee Working Area Analyzer",
      students: "06 Students",
      hours: "8Hourse/Day",
      duration: "03 Months",
    },
  ];

  return (
    <section
      className="flex w-full flex-col overflow-hidden items-center mt-[78px] pt-[29px] pb-3.5 px-20 max-md:max-w-full max-md:mt-10 max-md:px-5"
      aria-label="Projects Section"
    >
      <h2 className="text-[rgba(11,53,98,1)] text-[39px] font-extrabold leading-none">
        Explore Our Project
      </h2>
      <p className="text-[rgba(84,85,103,1)] text-xl font-semibold leading-[25px] text-center mt-6">
        &quot;Dive into hands-on projects and <br />
        collaborate with mentors&quot;
      </p>
      <div className="self-stretch mt-8 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-[33%] ml-5 first:ml-0 max-md:w-full max-md:ml-0 max-md:mt-[22px]"
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
      <button
        className="w-[202px] max-w-full text-[23px] bg-[rgba(11,53,98,1)] text-white font-semibold leading-none ml-[17px] mt-11 px-[31px] py-[18px] rounded-[10px] max-md:mt-10 max-md:px-5 hover:bg-[rgba(11,53,98,0.9)] transition-colors"
        aria-label="View More"
      >
        View More....
      </button>
    </section>
  );
};

export default ProjectsSection;
