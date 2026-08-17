import React from "react";

import SkillCategory from "./SkillCategory";

import {
  frontendSkills,
  backendSkills,
  databaseSkills,
  toolSkills,
} from "../data/skills";
import useInView from "../hook/useInView";


const SkillsSection = () => {
  const [sectionRef, isVisible] = useInView({
    threshold: 0.15,
  });

  return (
    <section
      id='skills'
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        px-6
        py-5
        text-white
        md:px-10
        lg:px-12
      "
    >

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-600/[0.025]
          blur-[120px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-6xl
        "
      >

        <div
          className={`
    mb-12
    transform
    transition-all
    duration-700
    ease-out
    ${isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
            }
  `}
        >

          <p
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-purple-400/70
            "
          >
            02 / Tech Stack
          </p>

          <div
            className="
              mt-4
              flex
              flex-col
              justify-between
              gap-5
              md:flex-row
              md:items-end
            "
          >

            <div>

              <h2
                className="
                  text-3xl
                  font-bold
                  tracking-tight
                  md:text-5xl
                "
              >
                My Tech Stack
              </h2>


              <p
                className="
                  mt-4
                  max-w-xl
                  text-sm
                  leading-7
                  text-gray-500
                  md:text-base
                "
              >
                Technologies I use to build,
                connect and ship modern applications.
              </p>

            </div>

          </div>

        </div>

        <div
          className="
    grid
    grid-cols-1
    gap-4
    md:grid-cols-2
  "
        >

          <SkillCategory
            number="1"
            title="Frontend (Support)"
            description="Building clean and responsive interfaces."
            skills={frontendSkills}
            isVisible={isVisible}
            delay="0"
          />

          <SkillCategory
            number="2"
            title="Backend"
            description="Designing APIs, authentication and real-time systems."
            skills={backendSkills}
            featured
            isVisible={isVisible}
            delay="100"
          />

          <SkillCategory
            number="3"
            title="Database"
            description="Modeling and managing application data."
            skills={databaseSkills}
            isVisible={isVisible}
            delay="200"
          />

          <SkillCategory
            number="4"
            title="Tools"
            description="Tools I use to build, test and ship."
            skills={toolSkills}
            isVisible={isVisible}
            delay="300"
          />
        </div>

      </div>

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-px
          w-[70%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-purple-500/40
          to-transparent
        "
      />
    </section>
  );
};
export default SkillsSection;