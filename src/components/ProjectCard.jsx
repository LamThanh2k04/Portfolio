import React from "react";
import {
  ExternalLink,
  Code2,
} from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div
      key={`active-${project.id}`}
      className="
        relative
        w-[500px]
        h-full
        pb-2
        shrink-0
        overflow-hidden
        rounded-2xl
        border
        border-purple-400/20
        bg-[#101016]
        shadow-[0_0_60px_rgba(124,58,237,0.10)]
        animate-[projectIn_500ms_ease-out]
      "
    >

      <div
        className="
          relative
          h-[190px]
          w-full
          overflow-hidden
          sm:h-[210px]
          md:h-[230px]
        "
      >
        <img
          src={project.image}
          alt={project.title}
          className="
            h-[200px]
            w-full
            object-cover
            transition-transform
            duration-700
            hover:scale-105
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-[#101016]
            via-transparent
            to-transparent
          "
        />

        <div
          className="
            absolute
            bottom-3
            left-5
            font-mono
            text-[8px]
            tracking-[0.2em]
            text-white/40
          "
        >
          PROJECT / {project.number}
        </div>
      </div>
      <div
        className="
          relative pt-1 px-5
        "
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-purple-400/60
              "
            >
              Featured Project
            </p>

            <div className="mt-2 flex items-center gap-3">

              <span
                className="
                  font-mono
                  text-[9px]
                  text-purple-400/50
                "
              >
                {project.number}
              </span>

              <span className="h-px w-6 bg-purple-400/20" />

              <span
                className="
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-widest
                  text-gray-600
                "
              >
                {project.category}
              </span>

            </div>

          </div>


          {/* STATUS */}
          <span
            className="
              shrink-0
              rounded-full
              border
              border-green-400/10
              bg-green-400/[0.03]
              px-2.5
              py-1
              font-mono
              text-[7px]
              uppercase
              tracking-widest
              text-green-400/60
            "
          >
            Completed
          </span>

        </div>

        <div className="mt-1">

          <h3
            className="
              text-2xl
              font-bold
              tracking-tight
              md:text-[28px]
            "
          >
            {project.title}
          </h3>

          <p
            className="
              mt-2
              max-w-2xl
              text-[11px]
              leading-5
              text-gray-500
            "
          >
            {project.description}
          </p>

        </div>


        {/* TECH */}
        <div className="mt-4">

          <p
            className="
              mb-2
              font-mono
              text-[8px]
              uppercase
              tracking-[0.2em]
              text-gray-700
            "
          >
            Built With
          </p>

          <div className="flex flex-wrap gap-1.5">

            {project.tech.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-md
                  border
                  border-white/[0.07]
                  bg-white/[0.02]
                  px-2.5
                  py-1
                  font-mono
                  text-[8px]
                  text-gray-500
                  transition-colors
                  hover:border-purple-400/20
                  hover:text-purple-300
                "
              >
                {tech}
              </span>
            ))}

          </div>

        </div>


        {/* BUTTONS */}
        <div className="mt-4 flex items-center gap-2">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              gap-2
              rounded-lg
              bg-purple-600
              px-3.5
              py-2
              text-[10px]
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-purple-500
              hover:shadow-[0_8px_25px_rgba(139,92,246,0.25)]
            "
          >
            <Code2 size={13} />
            GitHub
          </a>


          {project.isLiveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                gap-2
                rounded-lg
                bg-purple-600
                px-3.5
                py-2
                text-[10px]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-purple-500
                hover:shadow-[0_8px_25px_rgba(139,92,246,0.25)]
              "
            >
              Live Demo
              <ExternalLink size={13} />
            </a>
          )}

        </div>

      </div>
    </div>
  );
};

export default ProjectCard;