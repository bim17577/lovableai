import React from "react";

const TrainingSection: React.FC = () => {
  return (
    <section
      className="w-full overflow-hidden mt-[78px] pt-[30px] pb-[49px] px-20 max-md:max-w-full max-md:mt-10 max-md:px-5"
      aria-label="Training Section"
    >
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[66%] max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col items-stretch max-md:max-w-full max-md:mt-10">
            <h2 className="text-[rgba(11,53,98,1)] text-[39px] font-extrabold leading-none self-center">
              Training Programme{" "}
            </h2>
            <p className="text-[rgba(43,43,43,1)] text-xl font-semibold leading-8 text-center mt-4">
              You can apply now our
              <br />
              training programme{" "}
            </p>
            <div className="w-full mt-[72px] max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-6/12 max-md:w-full max-md:ml-0">
                  <div className="flex w-full flex-col max-md:mt-10">
                    <div className="flex items-stretch gap-[15px] text-3xl text-[rgba(43,43,43,1)] font-semibold whitespace-nowrap text-center">
                      <div className="bg-[rgba(124,152,182,1)] flex w-9 shrink-0 h-9 mt-[7px] rounded-[50%]" />
                      <h3 className="basis-auto">Development</h3>
                    </div>
                    <p className="text-black text-[22px] font-[275] leading-[33px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
                <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex items-stretch gap-3 max-md:mt-10">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/cc3546c60a249fe23343a0e4b03a63de89f959b6?placeholderIfAbsent=true"
                      alt="Online + Onsite icon"
                      className="aspect-[1] object-contain w-9 shrink-0 mt-[5px] rounded-[50%]"
                    />
                    <div className="flex flex-col items-stretch grow shrink-0 basis-0 w-fit">
                      <h3 className="text-[rgba(43,43,43,1)] text-3xl font-semibold text-center">
                        Online + Onsite
                      </h3>
                      <p className="text-black text-[22px] font-[275] leading-[33px]">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[732px] max-w-full mt-[59px] max-md:mr-0.5 max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-6/12 max-md:w-full max-md:ml-0">
                  <div className="grow max-md:mt-10">
                    <h3 className="text-[rgba(43,43,43,1)] text-3xl font-semibold text-center">
                      Experienced instructors
                    </h3>
                    <p className="text-black text-[22px] font-[275] leading-[33px] mr-[31px] max-md:mr-2.5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
                <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex grow items-stretch gap-4 max-md:mt-10">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/7b06d8042ff0ed22ac3215b568669f5a380d3eec?placeholderIfAbsent=true"
                      alt="Internship icon"
                      className="aspect-[1] object-contain w-[25px] shrink-0 mt-3"
                    />
                    <div className="flex flex-col items-stretch grow shrink-0 basis-0 w-fit">
                      <h3 className="text-[rgba(43,43,43,1)] text-3xl font-semibold text-center">
                        Internship
                      </h3>
                      <p className="text-black text-[22px] font-[275] leading-[33px]">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[34%] ml-5 max-md:w-full max-md:ml-0">
          <div className="bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex w-[407px] shrink-0 max-w-full h-[601px] mt-[15px] mx-auto rounded-[63px] max-md:mt-10 overflow-y-auto">
            <div className="w-full px-8 py-10">
              <h3 className="text-[rgba(11,53,98,1)] text-2xl font-bold text-center mb-6">
                Apply for Training
              </h3>
              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="fullName"
                    className="text-[rgba(43,43,43,1)] text-sm font-medium"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Enter your full name"
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgba(11,53,98,0.5)]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="email"
                    className="text-[rgba(43,43,43,1)] text-sm font-medium"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgba(11,53,98,0.5)]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="phone"
                    className="text-[rgba(43,43,43,1)] text-sm font-medium"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgba(11,53,98,0.5)]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="education"
                    className="text-[rgba(43,43,43,1)] text-sm font-medium"
                  >
                    Highest Education
                  </label>
                  <select
                    id="education"
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgba(11,53,98,0.5)]"
                  >
                    <option value="">Select your education level</option>
                    <option value="high-school">High School</option>
                    <option value="diploma">Diploma</option>
                    <option value="bachelors">Bachelor's Degree</option>
                    <option value="masters">Master's Degree</option>
                    <option value="phd">PhD</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="experience"
                    className="text-[rgba(43,43,43,1)] text-sm font-medium"
                  >
                    Experience Level
                  </label>
                  <select
                    id="experience"
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgba(11,53,98,0.5)]"
                  >
                    <option value="">Select your experience level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="program"
                    className="text-[rgba(43,43,43,1)] text-sm font-medium"
                  >
                    Training Program
                  </label>
                  <select
                    id="program"
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgba(11,53,98,0.5)]"
                  >
                    <option value="">Select a program</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="data-science">Data Science</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="cloud">Cloud Computing</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="message"
                    className="text-[rgba(43,43,43,1)] text-sm font-medium"
                  >
                    Why do you want to join?
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Tell us why you want to join this program"
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgba(11,53,98,0.5)]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-[rgba(11,53,98,1)] text-white font-semibold py-3 px-4 rounded-md mt-4 hover:bg-[rgba(11,53,98,0.9)] transition-colors"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
