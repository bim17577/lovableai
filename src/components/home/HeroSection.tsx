import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="flex w-full flex-col overflow-hidden items-stretch justify-center mt-[78px] py-[3px] max-md:max-w-full max-md:mt-10"
      aria-label="Hero Section"
    >
      <div className="bg-[rgba(11,53,98,1)] w-full pl-20 pr-[9px] pt-[22px] pb-[35px] max-md:max-w-full max-md:pl-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <div className="z-10 flex mr-[-92px] flex-col self-stretch text-[rgba(212,212,211,1)] font-bold my-auto max-md:max-w-full max-md:mt-10">
              <h1 className="text-[75px] max-md:text-[40px]">Unlock</h1>
              <div className="text-[90px] self-stretch max-md:max-w-full max-md:text-[40px]">
                Growth Through
              </div>
              <div className="text-[49px] z-10 mt-[-25px] max-md:text-[40px]">
                Collaboration !
              </div>
              <p className="text-[22px] font-normal leading-10 self-stretch mr-[70px] max-md:max-w-full max-md:mr-2.5">
                Connect with mentors, explore projects, and receive valuable
                feedback. Grow your skills and knowledge through meaningful
                collaboration.
              </p>
              <button
                className="text-[23px] bg-white text-[rgba(11,53,98,1)] font-semibold leading-none mt-[57px] px-[30px] py-[18px] rounded-[10px] max-md:mt-10 max-md:px-5 hover:bg-gray-100 transition-colors"
                aria-label="Explore Now"
              >
                Explore Now
              </button>
            </div>
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/e5a0c4dfcdac12776f25bf16998142fffb6a23c7?placeholderIfAbsent=true"
              alt="Collaboration illustration"
              className="aspect-[1.14] object-contain w-full grow max-md:max-w-full max-md:mt-[22px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
