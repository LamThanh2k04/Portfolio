import React, { useEffect, useState } from "react";
import useInView from "../hook/useInView";
import { projects } from "../data/projects";
import ProjectCarousel from "./ProjectCarousel";

const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const [sectionRef, isVisible] = useInView({
    threshold: 0.15,
  });

  const nextProject = () => {
    setActiveIndex(
      (prev) => (prev + 1) % projects.length
    );
  };

  const previousProject = () => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + projects.length) %
        projects.length
    );
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextProject();
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const getProject = (offset) => {
    return projects[
      (activeIndex + offset + projects.length) %
        projects.length
    ];
  };

  const previous = getProject(-1);
  const active = getProject(0);
  const next = getProject(1);

  return (
    <section
      ref={sectionRef}
      id="projects"
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
          bg-purple-600/[0.035]
          blur-[140px]
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

        <div className="mb-14">

          <p
            className={`
              transform
              font-mono
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-purple-400/70
              transition-all
              duration-700
              ease-out
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }
            `}
          >
            03 / Selected Works
          </p>

          <div
            className={`
              mt-4
              flex
              flex-col
              justify-between
              gap-5
              transform
              transition-all
              duration-700
              ease-out
              md:flex-row
              md:items-end
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }
            `}
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
                Things I've Built
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
                A collection of projects where I turn ideas
                into working products.
              </p>

            </div>

          </div>
        </div>

        <ProjectCarousel
          previous={previous}
          active={active}
          next={next}
          isVisible={isVisible}
          activeIndex={activeIndex}
          projects={projects}
          isPaused={isPaused}
          previousProject={previousProject}
          nextProject={nextProject}
          setActiveIndex={setActiveIndex}
          setIsPaused={setIsPaused}
        />

        <p
          className={`
            mt-4
            text-center
            font-mono
            text-[9px]
            uppercase
            tracking-[0.2em]
            text-gray-700
            transform
            transition-all
            duration-700
            ease-out
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }
          `}
        >
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(projects.length).padStart(2, "0")}
          {" — "}
          {isPaused ? "Paused" : "Auto Playing"}
        </p>

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
export default ProjectsSection;