import React from "react";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ClientSection from "../components/home/ClientSection";
import ProjectsSection from "../components/home/ProjectsSection";
import TrainingSection from "../components/home/TrainingSection";
import PartnersSection from "../components/home/PartnersSection";
import FooterSection from "../components/home/FooterSection";

const Index: React.FC = () => {
  return (
    <div className="bg-[rgba(248,248,248,1)] overflow-hidden">
      <div className="w-full max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/c4d00d8b5eefb4fbffde665bff7946be8860e391?placeholderIfAbsent=true"
          alt="Header banner"
          className="aspect-[17.24] object-contain w-[1440px] max-md:max-w-full"
        />

        {/* Main content sections */}
        <HeroSection />
        <AboutSection />
        <ClientSection />
        <ProjectsSection />
        <TrainingSection />
        <PartnersSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
