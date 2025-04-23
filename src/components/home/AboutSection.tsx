import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section
      className="w-full overflow-hidden mt-[78px] pt-[45px] px-20 max-md:max-w-full max-md:mt-10 max-md:px-5"
      aria-label="About Section"
    >
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[55%] max-md:w-full max-md:ml-0">
          <div className="flex flex-col relative min-h-[660px] grow text-[15px] text-black font-normal leading-[27px] pr-[17px] pt-[81px] pb-[29px] max-md:max-w-full max-md:mt-10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/0188671b3432ba7af0a3a7493e5a856e4c8cf9c2?placeholderIfAbsent=true"
              alt="Background pattern"
              className="absolute h-full w-full object-cover inset-0"
            />
            <div className="relative bg-[rgba(196,166,97,0.76)] mr-[62px] px-2 py-[3px] rounded-[10px] max-md:mr-2.5">
              &quot;Empowering growth through collaboration&quot;
            </div>
            <div className="relative bg-[rgba(253,184,189,0.76)] mt-[53px] px-1 py-[3px] rounded-[10px] max-md:mt-10">
              &quot;Learning thrives when mentorship guides the way&quot;
            </div>
            <div className="relative flex w-[553px] max-w-full flex-col mt-[276px] max-md:mt-10">
              <div className="bg-[rgba(176,227,246,0.48)] w-[303px] max-w-full pt-2 pb-3.5 px-[15px] rounded-[10px]">
                &quot;Unlock potential through knowledge <br />
                and mentorship&quot;
              </div>
              <div className="bg-[rgba(196,166,97,0.76)] mt-[57px] px-[15px] py-[3px] rounded-[10px] max-md:mt-10">
                &quot;Innovation begins with meaningful connections&quot;
              </div>
            </div>
          </div>
        </div>
        <div className="w-[45%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col self-stretch items-stretch text-[22px] text-black font-normal my-auto max-md:max-w-full max-md:mt-10">
            <h2 className="text-[rgba(11,53,98,1)] text-[39px] font-extrabold leading-none">
              About Us
            </h2>
            <p className="leading-[33px] mt-[50px] max-md:max-w-full max-md:mr-[9px] max-md:mt-10">
              TRACE{" "}
              <span className="font-bold text-[rgba(11,53,98,1)]">
                (Technologically Re-Awakening Culture of Excellence)
              </span>{" "}
              aims to advance Sri Lanka through technology and innovation,
              fostering a culture of excellence and enhancing the country's
              global position.
            </p>
            <p className="leading-10 mt-[15px] max-md:max-w-full">
              We aim to make Sri Lanka a leading innovation hub by fostering
              high-performance technology, creating job opportunities, and
              driving growth.
            </p>
            <button
              className="text-[23px] bg-[rgba(11,53,98,1)] text-white font-semibold leading-none mt-[35px] px-[53px] py-[22px] rounded-[10px] max-md:px-5 hover:bg-[rgba(11,53,98,0.9)] transition-colors"
              aria-label="Read More"
            >
              Read More.....
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
