import React from "react";

interface ProjectCardProps {
  image: string;
  category: {
    name: string;
    color: string;
    dotColor: string;
  };
  title: string;
  students: string;
  hours: string;
  duration: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  category,
  title,
  students,
  hours,
  duration,
}) => {
  return (
    <div className="bg-white shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)] flex w-full flex-col items-stretch text-[15px] text-[rgba(11,53,98,1)] font-medium leading-loose mx-auto pt-4 pb-[25px] px-3 rounded-[20px] border-black">
      <img
        src={image}
        alt={title}
        className="aspect-[1.92] object-contain w-full rounded-[10px]"
      />
      <div
        className={`${category.color} flex items-stretch gap-0.5 whitespace-nowrap text-center mt-2.5 px-2.5 py-0.5 rounded-[5px] max-md:ml-[5px]`}
      >
        <div
          className={`${category.dotColor} flex w-2.5 shrink-0 h-2.5 my-auto rounded-[50%]`}
        />
        <div>{category.name}</div>
      </div>
      <h3 className="text-xl font-semibold leading-none text-center self-center mt-2.5">
        {title}
      </h3>
      <div className="flex items-stretch gap-5 text-[rgba(124,152,182,1)] text-center justify-between mt-9">
        <div className="flex items-stretch gap-px">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/5d35f53f1d9580ba03c1dcd5fecbf8136146bb0f?placeholderIfAbsent=true"
            alt="Students icon"
            className="aspect-[1] object-contain w-5 shrink-0"
          />
          <div>{students}</div>
        </div>
        <div className="flex items-stretch gap-[3px] whitespace-nowrap">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/37b280dfa1cd4f89d53c2bd7b9de60f0fa198b93?placeholderIfAbsent=true"
            alt="Hours icon"
            className="aspect-[1] object-contain w-5 shrink-0 my-auto"
          />
          <div className="basis-auto">{hours}</div>
        </div>
        <div className="flex items-stretch gap-0.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/14f9554bb4761b0a9e9813b614083dad5f8c38d7?placeholderIfAbsent=true"
            alt="Duration icon"
            className="aspect-[1] object-contain w-5 shrink-0"
          />
          <div>{duration}</div>
        </div>
      </div>
      <button
        className="text-[23px] bg-[rgba(11,53,98,1)] text-white font-semibold leading-none mt-7 px-[70px] py-[22px] rounded-[10px] max-md:ml-[5px] max-md:px-5 hover:bg-[rgba(11,53,98,0.9)] transition-colors"
        aria-label="Read More"
      >
        Read More.....
      </button>
    </div>
  );
};

export default ProjectCard;
