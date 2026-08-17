import React from "react";

const SkillItem = ({ skill }) => {
  const Icon = skill.icon;

  return (
    <div
      className="
        group
        flex
        items-center
        gap-3
        rounded-lg
        px-3
        py-2.5
        transition-all
        duration-300
        hover:bg-purple-500/[0.04]
      "
    > 
      <div
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-md
          border
          border-white/[0.07]
          bg-white/[0.025]
          text-gray-500
          transition-all
          duration-300
          group-hover:border-purple-400/20
          group-hover:bg-purple-500/[0.08]
          group-hover:text-purple-300
        "
      >
        <Icon size={16} />
      </div>

      <div className="min-w-0">

        <p
          className="
            font-mono
            text-sm
            font-medium
            text-gray-300
            transition-colors
            duration-300
            group-hover:text-white
          "
        >
          {skill.name}
        </p>

        <p
          className="
            mt-0.5
            text-[10px]
            text-gray-600
          "
        >
          {skill.description}
        </p>

      </div>

      {skill.featured && (
        <span
          className="
            ml-auto
            rounded-full
            border
            border-purple-400/10
            px-2
            py-0.5
            font-mono
            text-[8px]
            uppercase
            tracking-wider
            text-purple-400/60
          "
        >
          Core
        </span>
      )}
    </div>
  );
};
export default SkillItem;