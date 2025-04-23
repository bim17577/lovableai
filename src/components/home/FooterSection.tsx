import React, { useState } from "react";

const FooterSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    company: "",
    position: "Student",
    phone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  return (
    <footer
      className="bg-[#22242A] flex w-full flex-col mt-[78px] pl-[33px] pr-20 py-5 max-md:max-w-full max-md:mt-10 max-md:px-5"
      aria-label="Footer"
    >
      <div className="w-full max-w-[1259px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-4/5 max-md:w-full max-md:ml-0">
            <div className="max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-[56%] max-md:w-full max-md:ml-0">
                  <div className="flex w-full flex-col text-base text-white font-normal max-md:max-w-full max-md:mt-8">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/dc07445d3c52628daac0388e64059a86c62fe0bc?placeholderIfAbsent=true"
                      alt="TRACE Logo"
                      className="aspect-[1.33] object-contain w-[149px] z-10 max-w-full"
                    />
                    <p className="text-lg self-stretch mt-[-27px] max-md:max-w-full">
                      <br />
                      <br />
                      Connecting students and mentors to foster innovation and
                      growth in a collaborative ecosystem.
                    </p>
                    <div className="flex items-stretch gap-[13px] whitespace-nowrap mt-[53px] max-md:mt-10">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/ea87738fde7e1cc5dc517dab880e88b89ecd15ba?placeholderIfAbsent=true"
                        alt="Location icon"
                        className="aspect-[1] object-contain w-6 shrink-0"
                      />
                      <div className="mt-1">Anyware</div>
                    </div>
                    <div className="flex items-stretch gap-[11px] whitespace-nowrap text-center mt-[38px]">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/3dad1ad31189dcede02395e59fc0c37b861f1bbe?placeholderIfAbsent=true"
                        alt="Email icon"
                        className="aspect-[1] object-contain w-6 shrink-0"
                      />
                      <div className="my-auto">Gmail.com</div>
                    </div>
                  </div>
                </div>
                <div className="w-[44%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex w-full flex-col items-stretch mt-14 max-md:mt-10">
                    <h3 className="text-white text-[26px] font-bold">
                      Question us
                    </h3>
                    <form onSubmit={handleSubmit}>
                      <div className="flex items-stretch gap-5 justify-between mt-[34px]">
                        <label
                          htmlFor="firstName"
                          className="text-white text-base font-normal"
                        >
                          First Name
                        </label>
                        <div className="flex flex-col items-stretch text-sm text-[#9A9EA5] font-light">
                          <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="Enter your name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="bg-transparent text-[#9A9EA5] outline-none"
                          />
                          <div className="border bg-[#696C73] shrink-0 h-px mt-1 border-[rgba(105,108,115,1)] border-solid" />
                        </div>
                      </div>
                      <div className="flex items-stretch gap-5 justify-between mt-6">
                        <label
                          htmlFor="company"
                          className="text-white text-base font-normal"
                        >
                          Company
                        </label>
                        <div className="flex flex-col items-stretch text-sm text-[#9A9EA5] font-light">
                          <input
                            id="company"
                            name="company"
                            type="text"
                            placeholder="Company Name"
                            value={formData.company}
                            onChange={handleChange}
                            className="bg-transparent text-[#9A9EA5] outline-none"
                          />
                          <div className="border bg-[#696C73] shrink-0 h-px mt-1 border-[rgba(105,108,115,1)] border-solid" />
                        </div>
                      </div>
                      <div className="flex w-full items-stretch gap-5 whitespace-nowrap justify-between mt-6 max-md:mr-1">
                        <div className="flex items-stretch gap-[40px_73px]">
                          <label
                            htmlFor="position"
                            className="text-white text-base font-normal"
                          >
                            Position
                          </label>
                          <div className="text-[#9A9EA5] text-sm font-light">
                            Student
                          </div>
                        </div>
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/7807db37d9784c1afbdaa68e26cc764be2380854?placeholderIfAbsent=true"
                          alt="Dropdown icon"
                          className="aspect-[2] object-contain w-2.5 shrink-0 my-auto cursor-pointer"
                        />
                      </div>
                      <div className="border bg-[#696C73] w-[206px] shrink-0 h-px border-[rgba(105,108,115,1)] border-solid" />
                      <div className="flex items-stretch gap-5 justify-between mt-6">
                        <label
                          htmlFor="phone"
                          className="text-white text-base font-normal"
                        >
                          Phone
                        </label>
                        <div className="flex flex-col items-stretch text-sm text-[#9A9EA5] font-light">
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+94 000 000 000"
                            value={formData.phone}
                            onChange={handleChange}
                            className="bg-transparent text-[#9A9EA5] outline-none"
                          />
                          <div className="border bg-[#696C73] shrink-0 h-px mt-1 border-[rgba(105,108,115,1)] border-solid" />
                        </div>
                      </div>
                      <div className="flex items-stretch gap-5 justify-between mt-6">
                        <label
                          htmlFor="email"
                          className="text-white text-base font-normal"
                        >
                          Email
                        </label>
                        <div className="flex flex-col items-stretch text-sm text-[#9A9EA5] font-light">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-transparent text-[#9A9EA5] outline-none"
                          />
                          <div className="border bg-[#696C73] shrink-0 h-px mt-1 border-[rgba(105,108,115,1)] border-solid" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/5 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow items-stretch gap-5 justify-between mt-14 max-md:mt-10">
              <nav className="flex flex-col text-[22px] text-white font-normal">
                <h3 className="text-[26px] font-bold self-stretch">Company</h3>
                <a
                  href="#about"
                  className="mt-[45px] max-md:mt-10 hover:text-gray-300 transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#careers"
                  className="mt-5 hover:text-gray-300 transition-colors"
                >
                  Careers
                </a>
                <a
                  href="#faqs"
                  className="mt-[19px] hover:text-gray-300 transition-colors"
                >
                  FAQs
                </a>
                <a
                  href="#teams"
                  className="mt-5 hover:text-gray-300 transition-colors"
                >
                  Teams
                </a>
                <a
                  href="#contact"
                  className="self-stretch mt-[19px] max-md:mr-0.5 hover:text-gray-300 transition-colors"
                >
                  Contact Us
                </a>
              </nav>
              <div className="mt-20 max-md:mt-10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/e3447af3f1ff0616c335fe8fee368cd478115a39?placeholderIfAbsent=true"
                  alt="Arrow icon"
                  className="aspect-[0.47] object-contain w-2"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/e3447af3f1ff0616c335fe8fee368cd478115a39?placeholderIfAbsent=true"
                  alt="Arrow icon"
                  className="aspect-[0.47] object-contain w-2 mt-[29px]"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/e3447af3f1ff0616c335fe8fee368cd478115a39?placeholderIfAbsent=true"
                  alt="Arrow icon"
                  className="aspect-[0.47] object-contain w-2 mt-7"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/e3447af3f1ff0616c335fe8fee368cd478115a39?placeholderIfAbsent=true"
                  alt="Arrow icon"
                  className="aspect-[0.47] object-contain w-2 mt-[29px]"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/e3447af3f1ff0616c335fe8fee368cd478115a39?placeholderIfAbsent=true"
                  alt="Arrow icon"
                  className="aspect-[0.47] object-contain w-2 mt-7"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full max-w-[1258px] gap-5 flex-wrap justify-between mt-1 max-md:max-w-full">
        <div className="flex items-stretch gap-[13px] text-base text-white font-normal">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/04632f070495d434a52af13be0535ff08ad27ffc?placeholderIfAbsent=true"
            alt="Phone icon"
            className="aspect-[1] object-contain w-6 shrink-0"
          />
          <div>+94 000 000 0000 </div>
        </div>
        <button
          className="self-stretch bg-white border min-h-[50px] gap-2.5 text-base text-black font-normal text-center mt-[22px] px-[26px] py-4 rounded-[10px] border-black border-solid max-md:px-5 hover:bg-gray-100 transition-colors"
          aria-label="Get started"
        >
          Get started
        </button>
        <div className="flex gap-[23px] mt-[41px] max-md:mt-10">
          <a href="#" aria-label="Social media link">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/9cf0c008fcf7a340a1525f3f62f15c2ea1b9060f?placeholderIfAbsent=true"
              alt="Social icon 1"
              className="aspect-[0.57] object-contain w-[13px] shrink-0 hover:opacity-80 transition-opacity"
            />
          </a>
          <a href="#" aria-label="Social media link">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/fa361803a357ee8311a2a0d585e90b1a53f0404f?placeholderIfAbsent=true"
              alt="Social icon 2"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 hover:opacity-80 transition-opacity"
            />
          </a>
          <a href="#" aria-label="Social media link">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/0b6ea147bc3caa29702c260cf0b37f191c69bea8?placeholderIfAbsent=true"
              alt="Social icon 3"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 hover:opacity-80 transition-opacity"
            />
          </a>
          <a href="#" aria-label="Social media link">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/68bac548e9bd332e16153cecbe79691c57ac2273?placeholderIfAbsent=true"
              alt="Social icon 4"
              className="aspect-[1] object-contain w-[22px] shrink-0 hover:opacity-80 transition-opacity"
            />
          </a>
          <a href="#" aria-label="Social media link">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/a643fffdbaf3422bf5f8900f3a748a52599d68a8?placeholderIfAbsent=true"
              alt="Social icon 5"
              className="aspect-[1.04] object-contain w-[23px] shrink-0 hover:opacity-80 transition-opacity"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
