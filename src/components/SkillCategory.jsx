import React from "react";
import SkillItem from "./SkillItem";

const SkillCategory = ({
  number,
  title,
  description,
  skills,
  featured = false,
  isVisible,
  delay = "0",
}) => {
  return (
    <div
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`
    group
    relative
    overflow-hidden
    rounded-2xl
    border
    p-6

    transform
    transition-all
    duration-700
    ease-out

    ${isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-12 opacity-0"
        }

    ${featured
          ? `
          border-purple-400/20
          bg-purple-500/[0.035]

          hover:border-purple-400/30
          hover:bg-purple-500/[0.05]
        `
          : `
          border-white/[0.07]
          bg-white/[0.015]

          hover:border-white/[0.12]
          hover:bg-white/[0.025]
        `
        }
  `}
    >

      <div
        className="
          pointer-events-none
          absolute
          -right-2
          -top-6
          font-mono
          text-[90px]
          font-bold
          leading-none
          text-white/[0.025]
          transition-all
          duration-500
          group-hover:text-purple-400/[0.06]
        "
      >
        {number}
      </div>

      <div className="relative z-10 flex items-start justify-between">

        <div>
          
          <p
            className="
              font-mono
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-gray-600
            "
          >
            0{number} / Layer
          </p>

          <h3
            className={`
              mt-2
              text-xl
              font-semibold
              ${featured
                ? "text-white"
                : "text-gray-200"
              }
            `}
          >
            {title}
          </h3>

          <p
            className="
              mt-2
              max-w-xs
              text-xs
              leading-5
              text-gray-600
            "
          >
            {description}
          </p>

        </div>
        {featured && (
          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-purple-400/10
              px-2.5
              py-1
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-purple-400
                shadow-[0_0_8px_rgba(167,139,250,0.8)]
              "
            />

            <span
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-wider
                text-purple-300/60
              "
            >
              Core
            </span>
          </div>
        )}
      </div>
    
      <div
        className="
          relative
          z-10
          my-5
          h-px
          w-full
          bg-white/[0.06]
        "
      />

      <div
        className="
          relative
          z-10
          grid
          grid-cols-1
          gap-1
          sm:grid-cols-2
        "
      >

        {skills.map((skill) => (
          <SkillItem
            key={skill.name}
            skill={skill}
          />
        ))}

      </div>
    </div>
  );
};
export default SkillCategory;