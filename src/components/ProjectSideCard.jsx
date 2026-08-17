import React from "react";

const ProjectSideCard = ({
  project,
  position,
}) => {
  return (
    <div
      key={`${position}-${project.id}`}
      className="
        hidden
        h-[360px]
        w-[240px]
        shrink-0
        scale-90
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.06]
        bg-white/[0.015]
        opacity-30
        transition-all
        duration-500
        lg:block
      "
    >

      <div className="h-[110px] overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="
            h-full
            w-full
            object-cover
            grayscale
          "
        />

      </div>

      <div
        className="
          flex
          h-[205px]
          flex-col
          justify-between
          p-5
        "
      >

        <div>

          <span
            className="
              font-mono
              text-xs
              text-gray-700
            "
          >
            {project.number}
          </span>

          <p
            className="
              mt-3
              text-sm
              font-semibold
              text-gray-500
            "
          >
            {project.title}
          </p>

          <p
            className="
              mt-2
              line-clamp-3
              text-xs
              leading-5
              text-gray-700
            "
          >
            {project.description}
          </p>

        </div>

        <span
          className="
            font-mono
            text-[8px]
            uppercase
            tracking-widest
            text-gray-700
          "
        >
          {position === "previous"
            ? "Previous"
            : "Next"}
        </span>

      </div>
    </div>
  );
};
export default ProjectSideCard;