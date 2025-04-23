import React from "react";

const PartnersSection: React.FC = () => {
  const partnerRows = [
    [
      { src: "https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/68a9ccc17ac193e8f8b01f68af5e9a345460b335?placeholderIfAbsent=true", alt: "Partner 1" },
      { src: "https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/104136f2a53e09cee7288ba47bd9338f6414a499?placeholderIfAbsent=true", alt: "Partner 2" },
      { src: "https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/c0bcb9705c276954064c9314f17f7d4c02cb836a?placeholderIfAbsent=true", alt: "Partner 3" },
      { src: "https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/e7ab8b641b611e7e4000d52198eb5679162fbc81?placeholderIfAbsent=true", alt: "Partner 4" },
      { src: "https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/a022e590baa6f3683d3c0b3f3f54c6e0c7a9081b?placeholderIfAbsent=true", alt: "Partner 5" },
    ],
    [
      { src: "https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/5bc9c411ec08d73871074d7191302caa10fd1c5c?placeholderIfAbsent=true", alt: "Partner 6" },
      { src: "https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/b19558757316440813156cfe42739be4c31b241b?placeholderIfAbsent=true", alt: "Partner 7" },
      { src: "https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/cb7dee466db89cd639c4021f454efaefab593e81?placeholderIfAbsent=true", alt: "Partner 8" },
      { src: "https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/b7ad88f07a979943d821f41acd2b46a606e8cc3a?placeholderIfAbsent=true", alt: "Partner 9" },
      { src: "https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/d1c756851eeb49ce3e192823df909e44c90b4c13?placeholderIfAbsent=true", alt: "Partner 10" },
    ],
  ];

  return (
    <section
      className="flex w-full flex-col overflow-hidden items-stretch mt-[78px] px-20 py-[37px] max-md:max-w-full max-md:mt-10 max-md:px-5"
      aria-label="Partners Section"
    >
      <h2 className="text-[rgba(11,53,98,1)] text-[39px] font-extrabold leading-none self-center max-md:max-w-full">
        Our Valued Contributors and Partners
      </h2>

      {partnerRows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`flex items-stretch gap-[23px] flex-wrap ${rowIndex === 0 ? "mt-[65px]" : "mt-7"} max-md:max-w-full ${rowIndex === 0 ? "max-md:mt-10" : ""}`}
        >
          {row.map((partner, index) => (
            <div
              key={index}
              className="bg-[rgba(233,236,239,1)] flex flex-col items-center justify-center aspect-[1] flex-1 px-2 rounded-[10px]"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="object-contain w-full max-h-[80%]"
              />
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default PartnersSection;
