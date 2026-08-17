import React from "react";
import useInView from "../hook/useInView";
import imagePortfolio from "../assets/imagePortfolio.jpg";

const AboutSection = () => {
  const [sectionRef, isVisible] = useInView({
    threshold: 0.15,
  });

  return (
    <section
      ref={sectionRef}
      id="about-me"
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

      <div className="relative z-10 mx-auto max-w-6xl">

        <div
          className={`
            mb-12
            transition-all
            duration-700
            ease-out
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
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
            04 / About Me
          </p>

          <div className="mt-4 flex items-end justify-between">
            <div>
              <h2
                className="
                  text-3xl
                  font-bold
                  tracking-tight
                  md:text-5xl
                "
              >
                A little about me
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
                Beyond the code, here is a little more
                about how I think, work and grow.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[320px_1fr]">

          <div
            className={`
              transition-all
              duration-700
              ease-out
              ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }
            `}
          >
            <div
              className="
                relative
                mx-auto
                max-w-[320px]
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.02]
                p-2
                shadow-[0_0_50px_rgba(124,58,237,0.10)]
              "
            >
              <img
                src={imagePortfolio}
                alt="Ngo Nguyen Thanh Lam"
                className="
                  h-[400px]
                  w-full
                  rounded-xl
                  object-cover
                  grayscale-[15%]
                  transition-all
                  duration-500
                  hover:grayscale-0
                "
              />

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  rounded-lg
                  border
                  border-white/10
                  bg-[#11071F]/75
                  px-3
                  py-2
                  font-mono
                  text-xs
                  text-purple-300
                  backdrop-blur-md
                "
              >
                <div className="flex items-center gap-2">
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-purple-400
                      shadow-[0_0_8px_rgba(167,139,250,0.8)]
                    "
                  />

                  Ngo Nguyen Thanh Lam
                </div>
              </div>
            </div>
          </div>

          <div
            className={`
              transition-all
              delay-150
              duration-700
              ease-out
              ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }
            `}
          >
            <div
              className="
                rounded-2xl
                border
                border-white/[0.07]
                bg-white/[0.015]
                p-6
                md:p-8
              "
            >
              <p
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-purple-400/60
                "
              >
                // who I am
              </p>

              <h3
                className="
                  mt-3
                  text-2xl
                  font-semibold
                  text-white
                "
              >
                Building things with curiosity.
              </h3>

              <p
                className="
                  mt-5
                  text-sm
                  leading-7
                  text-gray-400
                  md:text-base
                "
              >
                I enjoy turning ideas into practical and
                maintainable applications. I like exploring
                how systems work behind the interface and
                finding simple solutions to complex problems.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-gray-400
                  md:text-base
                "
              >
                I'm especially interested in backend
                architecture, database design and building
                applications that can grow with their users.
              </p>

              <div className="my-7 h-px bg-white/[0.06]" />

              <p
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-purple-400/60
                "
              >
                // what I care about
              </p>

              <div className="mt-5 grid gap-3 md:grid-cols-3">

                <div
                  className="
                    rounded-xl
                    border
                    border-white/[0.06]
                    bg-white/[0.02]
                    p-4
                    transition-all
                    duration-300
                    hover:border-purple-400/20
                    hover:bg-purple-500/[0.03]
                  "
                >
                  <span className="font-mono text-xs text-purple-400">
                    01
                  </span>

                  <h4 className="mt-3 text-sm font-semibold">
                    Clean Code
                  </h4>

                  <p className="mt-2 text-xs leading-5 text-gray-600">
                    Writing code that is easy to understand
                    and maintain.
                  </p>
                </div>

                <div
                  className="
                    rounded-xl
                    border
                    border-white/[0.06]
                    bg-white/[0.02]
                    p-4
                    transition-all
                    duration-300
                    hover:border-purple-400/20
                    hover:bg-purple-500/[0.03]
                  "
                >
                  <span className="font-mono text-xs text-purple-400">
                    02
                  </span>

                  <h4 className="mt-3 text-sm font-semibold">
                    Problem Solving
                  </h4>

                  <p className="mt-2 text-xs leading-5 text-gray-600">
                    Breaking complex problems into simple
                    solutions.
                  </p>
                </div>

                <div
                  className="
                    rounded-xl
                    border
                    border-white/[0.06]
                    bg-white/[0.02]
                    p-4
                    transition-all
                    duration-300
                    hover:border-purple-400/20
                    hover:bg-purple-500/[0.03]
                  "
                >
                  <span className="font-mono text-xs text-purple-400">
                    03
                  </span>

                  <h4 className="mt-3 text-sm font-semibold">
                    Keep Learning
                  </h4>

                  <p className="mt-2 text-xs leading-5 text-gray-600">
                    Continuously improving through real
                    projects and experience.
                  </p>
                </div>

              </div>

              <div
                className="
                  mt-6
                  flex
                  flex-col
                  gap-2
                  rounded-xl
                  border
                  border-purple-400/10
                  bg-purple-500/[0.03]
                  p-4
                  md:flex-row
                  md:items-center
                  md:justify-between
                "
              >
                <span
                  className="
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-wider
                    text-purple-400/60
                  "
                >
                  Currently
                </span>

                <span className="text-xs text-gray-400">
                  Learning • Building • Improving
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="
            mt-10
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-purple-500/30
            to-transparent
          "
        />
      </div>
    </section>
  );
};

export default AboutSection;