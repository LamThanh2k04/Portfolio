import React, { useEffect, useState } from "react";

const Header = () => {
  const navItems = [
    {
      name: "Introduction",
      href: "#introduction",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "About Me",
      href: "#about-me",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true)
  }, 200)

  return (
    <header
      className={`
        fixed
        left-0
        right-0
        top-0
        z-50
        border-b
        border-white/[0.06]
        bg-[#11071F]/80
        backdrop-blur-xl
        transition-all
        duration-700
        ease-out
        ${loaded
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0"
        }
      `}
    >
      <div
        className="
          mx-auto
          flex
          h-16
          max-w-6xl
          items-center
          justify-between
          px-6
          md:px-10
        "
      >
        <a
          href="#introduction"
          className="
            group
            flex
            items-center
            gap-2
            font-mono
            text-sm
          "
        >
          <span className="text-purple-400">
            {"<"}
          </span>

          <span
            className="
              text-gray-300
              transition-colors
              duration-300
              group-hover:text-white
            "
          >
            Lam
          </span>

          <span className="text-purple-400">
            {"/>"}
          </span>
        </a>

        <nav className="flex items-center gap-7">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="
                group
                relative
                font-mono
                text-[11px]
                text-gray-500
                transition-colors
                duration-300
                hover:text-purple-300
              "
            >
              <span className="mr-1 text-purple-400/40">
                0{index + 1}
              </span>
              {item.name}
              <span
                className="
                  absolute
                  -bottom-2
                  left-0
                  h-px
                  w-0
                  bg-purple-400
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </a>
          ))}
        </nav>

        <div
          className="
            hidden
            items-center
            gap-2
            font-mono
            text-[9px]
            uppercase
            tracking-widest
            text-gray-600
            lg:flex
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
          Available
        </div>
      </div>
    </header>
  );
};
export default Header;