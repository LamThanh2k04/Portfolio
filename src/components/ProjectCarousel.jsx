import React from "react";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import ProjectCard from "./ProjectCard";
import ProjectSideCard from "./ProjectSideCard";

const ProjectCarousel = ({
  previous,
  active,
  next,
  isVisible,
  activeIndex,
  projects,
  isPaused,
  previousProject,
  nextProject,
  setActiveIndex,
  setIsPaused,
}) => {
  return (
    <>
      <div
        className={`
          relative
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
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        <button
          onClick={previousProject}
          aria-label="Previous project"
          className="
            absolute
            left-0
            top-1/2
            z-30
            hidden
            h-11
            w-11
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            text-gray-500
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-purple-400/30
            hover:bg-purple-500/10
            hover:text-purple-300
            lg:flex
          "
        >
          <ArrowLeft size={17} />
        </button>

        <div
          className="
            flex
            items-center
            justify-center
            gap-5
            overflow-hidden
            px-0
            py-8
            lg:px-8
          "
        >

          <ProjectSideCard
            project={previous}
            position="previous"
          />

          <ProjectCard
            project={active}
          />

          <ProjectSideCard
            project={next}
            position="next"
          />

        </div>

        <button
          onClick={nextProject}
          aria-label="Next project"
          className="
            absolute
            right-0
            top-1/2
            z-30
            hidden
            h-11
            w-11
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            text-gray-500
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-purple-400/30
            hover:bg-purple-500/10
            hover:text-purple-300
            lg:flex
          "
        >
          <ArrowRight size={17} />
        </button>

      </div>

      <div
        className={`
          mt-5
          flex
          items-center
          justify-center
          gap-3
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
        {projects.map((project, index) => (
          <button
            key={project.id}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to project ${index + 1}`}
            className={`
              rounded-full
              transition-all
              duration-300
              ${
                activeIndex === index
                  ? "h-1.5 w-8 bg-purple-400"
                  : "h-1.5 w-1.5 bg-white/10 hover:bg-white/30"
              }
            `}
          />
        ))}
      </div>
    </>
  );
};
export default ProjectCarousel;