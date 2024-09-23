import Image from "next/image";

export const ResumeHeader = ({ sectionHeader }: { sectionHeader: string }) => {
  return (
    <div className="header mb-2 flex items-center gap-3">
      <span className="font-[600] uppercase text-accent dark:text-violet-300">
        {sectionHeader}
      </span>
      <span className="borderline block h-[2px] w-full bg-zinc-200 dark:bg-zinc-500/40" />
    </div>
  );
};

export const ResumeExperienceUI = ({
  institution,
  duration,
  description,
}: {
  institution: string;
  duration: string;
  description: string | React.ReactNode;
}) => {
  return (
    <div className="mb-3">
      <div className="header flex">
        <p className="mr-auto font-[600] uppercase dark:text-zinc-300 text-zinc-800">{institution}</p>
        <p className="max-w-max font-[600]">{duration}</p>
      </div>
      <div className="section-body">{description}</div>
    </div>
  );
};

export const ResumeTabcontent = () => {
  return (
    <div id="resume-page--resume">
      <div className="py-3">
        <h3 className="mb-2 text-[18px] font-[600]">Resume</h3>
        <div className="flex flex-col gap-4 sm:gap-8 md:flex-row">
          <div className="resume-header mb-5 flex items-start gap-4 md:w-[30%] md:flex-col">
            <Image
              src="/gallery/A logo for a software developer.png"
              width={512}
              height={512}
              alt="Avatar image"
              className="w-[120px] rounded-full border-[6px] border-zinc-200/20"
            />
            <div className="flex flex-wrap gap-4">
              <span>
                {" "}
                <span className="font-[600] dark:text-zinc-300">Name</span>:
                Quarshie Bernard{" "}
              </span>
              <span>
                {" "}
                <span className="font-[600] dark:text-zinc-300">
                  Nationality
                </span>
                : Ghanaian{" "}
              </span>
              <span className="md:max-w-[180px]">
                {" "}
                <span className="font-[600] dark:text-zinc-300">Languages</span>
                : English (fluent) , French (beginner), Twi (native), Ewe
                (beginner)
              </span>
            </div>
          </div>
          <div className="resume-body md:grow">
            <div className="my-2">
              <div className="mb-[50px]">
                <ResumeHeader sectionHeader="Experience" />
                <ResumeExperienceUI
                  institution="Sololearn"
                  duration="2020 - 2021"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem maiores tempora quod odit aliquam asperiores."
                />
                {/* <ResumeExperienceUI
                  institution="Sololearn"
                  duration="2020 - 2021"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem maiores tempora quod odit aliquam asperiores."
                /> */}
              </div>
              <div className="mb-[50px]">
                <ResumeHeader sectionHeader="Education" />
                <ResumeExperienceUI
                  institution="KNUST (Kwame Nkrumah University of Science and Technology)"
                  duration="2020 - 2024"
                  description="BSc. Mechanical Engineering"
                />
                <ResumeExperienceUI
                  institution="Achimota School"
                  duration="2017 - 2020"
                  description="General Science"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
