import { Briefcase, CircleCheck, GraduationCap, Luggage } from "lucide-react";
import Image from "next/image";
import SectionHeading from "../section-heading";

export default function AboutSection() {
  return (
    <div className="about-section bg-white dark:bg-[#17171A]">
      <div className="wrapper container-4xl p-6 py-[70px]">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            hElement="h1"
            className="text-3xl"
            title="About Me"
            subheading="Get to know about the person behind @nard."
          />
        </div>
        {/* Bento grid */}
        <div className="mt-5">
          <div className="bento-grid mx-auto grid grid-cols-3 gap-2 sm:grid-rows-[250px_270px]">
            {/* 1 */}
            <div className="c1 relative col-span-3 border p-7 sm:col-span-2 sm:row-span-1">
              <div className="gradient-bar absolute left-0 top-0 h-full w-[6px] bg-gradient-to-b from-blue-300 via-cyan-300 to-fuchsia-300" />
              <h3 className="mb-3 text-[22px] font-[600] text-black/90 dark:text-zinc-300">
                👋 Welcome once again
              </h3>
              <p className="">
                <span className="ml-3">My</span> love for programming, was
                sparked somewhat by curiosity during the pandemic when I had
                more than enough time to do other things, that was when I knew,
                I loved instructing computers.{" "}
              </p>
              <p className="mt-4">
                All I can say is that, this love will never fade away, From then till now, 
                I have worked tirelessly to perfect this skill;
                built countless projects and learnt many concepts, but this is
                just the beginning ...
                <a href="" className="ml-1 text-blue-500 dark:text-blue-200 hover:underline">
                  continue reading
                </a>
              </p>
            </div>
            {/* 2 */}
            <div className="c1 col-span-3 grid border p-5 sm:col-span-1 sm:place-items-center">
              <div className="flex flex-col gap-1 sm:items-start md:mx-auto">
                <div className="mb-3">
                  <Briefcase className="mb-2 text-black dark:text-gray-100" />
                  <ul className="">
                    <li className="flex gap-3">
                      <CircleCheck
                        size={17}
                        className="ml-2 shrink-0 text-accent dark:text-violet-300"
                      />{" "}
                      4yrs experience in web development
                    </li>
                  </ul>
                </div>
                <div>
                  <GraduationCap className="mb-2 text-black dark:text-gray-100" />
                  <ul className="">
                    <li className="flex gap-3">
                      <CircleCheck
                        size={17}
                        className="ml-2 shrink-0 text-accent dark:text-violet-300"
                      />
                      <span className="font-[600]">
                        BSc. Mechanical Engineering{" "}
                        <span className="font-[500]"> (KNUST, Ghana)</span>
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <CircleCheck
                        size={17}
                        className="ml-2 shrink-0 text-accent dark:text-violet-300"
                      />
                      Achimota School
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="c1 col-span-3 border p-5 sm:col-span-1 sm:row-span-1">
              <div className="mb-5">
                <div className="lineTitle mb-2 flex items-center gap-3">
                  <div className="title font-[700] text-accent dark:text-violet-300">
                    Web design and full-stack development
                  </div>
                  <div className="line grow border-b" />
                </div>
                <div className="pill-section flex flex-wrap gap-1">
                  <p className="pill">React</p>
                  <p className="pill">VC: Git</p>
                  <p className="pill">Next.js+Remix+Vite</p>
                </div>
              </div>
              <div>
                <div className="lineTitle mb-2 flex items-center gap-3">
                  <div className="title font-[700] text-accent dark:text-violet-300">
                    Graphic Design
                  </div>
                  <div className="line grow border-b" />
                </div>
                <div className="pill-section flex flex-wrap gap-1">
                  <p className="pill">Flyers</p>
                  <p className="pill">Video Thumbnails</p>
                  <p className="pill">Product package designs</p>
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className="c1 col-span-3 flex gap-3 border bg-black p-6 text-white sm:col-span-2 sm:row-span-1">
              <div className="left w-[40%]">
                <div className="fav-libraries">
                  <h5 className="mb-2 text-[9px] font-[600] text-gray-400">
                    FAVOURITE LIBRARIES AND FRAMEWORKS
                  </h5>
                  <Image
                    src="/bg-designs/fav-libraries.png"
                    alt="favourite libraries"
                    width={264}
                    height={114}
                    className="min-w-[130px]"
                  />
                </div>
                <div className="mt-7">
                  <h5 className="mb-2 text-[9px] font-[600] text-gray-400">
                    FAVOURITE TOOLS
                  </h5>
                  <Image
                    src="/bg-designs/fav-tools.svg"
                    alt="favourite libraries"
                    width={264}
                    height={114}
                  />
                </div>
              </div>
              <div className="right grid grow place-items-center">
                <Image
                  src="/bg-designs/code-ui.png"
                  alt="code ui"
                  width={210 * 1.5}
                  height={144 * 1.5}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
