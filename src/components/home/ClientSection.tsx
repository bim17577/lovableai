import React from "react";

const ClientSection: React.FC = () => {
  return (
    <section
      className="bg-[rgba(11,53,98,1)] flex w-full flex-col overflow-hidden items-center text-white font-semibold justify-center mt-[78px] px-20 py-[89px] max-md:max-w-full max-md:mt-10 max-md:px-5"
      aria-label="Client Section"
    >
      <div className="flex w-[928px] max-w-full flex-col items-center">
        <h2 className="text-[39px] font-extrabold leading-none max-md:max-w-full">
          Bring Your Ideas to Real World
        </h2>
        <p className="text-xl leading-[25px] text-center self-stretch mt-[34px] max-md:max-w-full">
          T2T is a smart platform where clients can easily upload their project
          ideas and connect with skilled developers to turn them into reality.
          Fast, simple, and secure project collaboration starts here.
        </p>
        <button
          className="bg-white w-[247px] max-w-full text-[23px] text-[rgba(11,53,98,1)] leading-none mt-24 px-[31px] py-[22px] rounded-[10px] max-md:mt-10 max-md:px-5 hover:bg-gray-100 transition-colors"
          aria-label="Submit Your Idea"
        >
          Submit Your Idea
        </button>
      </div>
    </section>
  );
};

export default ClientSection;
