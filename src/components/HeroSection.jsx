import React, { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import coding from "../assets/coding.lottie";
import useInView from "../hook/useInView";

const introduction =
  "Hi, I am Ngo Nguyen Thanh Lam. I am a Backend Developer, and I specialize in building scalable RESTful APIs, real-time applications, and database-driven systems.";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const typingSpeed = isDeleting ? 30 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(
          introduction.substring(0, displayText.length + 1)
        );

        if (displayText === introduction) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
        }
      } else {
        setDisplayText(
          introduction.substring(0, displayText.length - 1)
        );

        if (displayText === "") {
          setIsDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting]);

  return (
    <section id='introduction' className="relative min-h-screen overflow-hidden bg-[#11071F] px-6 text-white">
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.08]
          [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-600/10
          blur-[140px]
        "
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center gap-8 lg:gap-12">

        <p
          className={`
                      absolute
                      top-[100px]
                      left-[66px]
                      font-mono
                      text-[10px]
                      uppercase
                      tracking-[0.3em]
                    text-purple-400/70
                      transition-all
                      duration-700
                      ease-out
                      ${loaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                        }
            `}
        >
          01 / Introduction
        </p>
        <div className={`w-full lg:w-[52%]  transition-all ease-out  duration-700 ${loaded
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
          } `}>
          <div
            className="
              mx-auto
              w-full
              max-w-[550px]
              overflow-hidden
              rounded-xl
              border
              border-white/10
              bg-[#0D0D12]
              shadow-[0_0_60px_rgba(124,58,237,0.12)]
            "
          >

            <div className="flex h-10 items-center border-b border-white/10 bg-[#15151C] px-4">

              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              </div>

              <span className="ml-4 font-mono text-xs text-gray-400">
                lam@portfolio ~
              </span>
            </div>

            <div className="p-5 font-mono md:p-6">

              <div className="mb-5">
                <p className="mb-2 text-xs text-gray-500">
                  <span className="text-purple-400">$</span>{" "}
                  whoami
                </p>

                <p className="text-sm text-purple-400">
                  Ngo Nguyen Thanh Lam
                </p>
              </div>

              <div className="mb-6">
                <p className="mb-3 text-xs text-gray-500">
                  <span className="text-purple-400">$</span>{" "}
                  about_me
                </p>

                <div className="min-h-[100px]">
                  <h1 className="max-w-[600px] text-xl font-bold leading-relaxed text-white md:text-xl">
                    {displayText}

                    <span className="ml-1 animate-pulse text-purple-400">
                      ▌
                    </span>
                  </h1>
                </div>
              </div>

              <div className="mb-6">
                <p className="mb-3 text-xs text-gray-500">
                  <span className="text-purple-400">$</span>{" "}
                  ./projects
                </p>

                <div className="flex flex-wrap gap-3 font-sans">
                  <button 
                    className="
                      rounded-lg
                      bg-purple-600
                      px-5
                      py-2.5
                      text-sm
                      font-semibold
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-purple-500
                      hover:shadow-[0_10px_30px_rgba(139,92,246,0.35)]
                    "
                  >
                   <a href="#projects">View Projects</a>
                  </button>

                  <button
                    className="
                      rounded-lg
                      border
                      border-white/15
                      px-5
                      py-2.5
                      text-sm
                      font-semibold
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-purple-400/50
                      hover:text-purple-300
                    "
                  >
                    <a href="#contact">Contact Me</a>
                  </button>
                </div>
              </div>

              <div className="mt-5 font-mono text-xs text-purple-400">
                <span>$</span>

                <span className="ml-2 animate-pulse">
                  ▋
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={`relative hidden min-h-[500px] flex-1 items-center justify-center lg:flex transition-all ease-out  duration-700 ${loaded
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
          }`}>
          <div
            className="
              absolute
              h-[400px]
              w-[400px]
              rounded-full
              bg-purple-600/20
              blur-[110px]
            "
          />

          <div
            className="
              absolute
              h-[220px]
              w-[220px]
              rounded-full
              bg-violet-400/20
              blur-[80px]
            "
          />

          <div className="relative z-10 animate-[float_4s_ease-in-out_infinite]">
            <DotLottieReact
              src={coding}
              loop
              autoplay
              style={{
                width: "450px",
                height: "450px",
              }}
            />
          </div>

          <div
            className="
              absolute
              left-0
              top-24
              z-20
              rounded-lg
              border
              border-white/10
              bg-white/5
              px-3
              py-2
              font-mono
              text-xs
              text-purple-300
              backdrop-blur-md
              animate-[float_5s_ease-in-out_infinite]
            "
          >
            {"< Frontend />"}
          </div>


          <div
            className="
              absolute
              right-0
              top-32
              z-20
              rounded-lg
              border
              border-white/10
              bg-white/5
              px-3
              py-2
              font-mono
              text-xs
              text-purple-300
              backdrop-blur-md
              animate-[float_4s_ease-in-out_infinite]
            "
          >
            {"< Backend />"}
          </div>

          <div
            className="
              absolute
              bottom-24
              left-8
              z-20
              rounded-lg
              border
              border-white/10
              bg-white/5
              px-3
              py-2
              font-mono
              text-xs
              text-purple-300
              backdrop-blur-md
              animate-[float_6s_ease-in-out_infinite]
            "
          >
            {"< API />"}
          </div>

          <div
            className="
              absolute
              bottom-20
              right-8
              z-20
              rounded-lg
              border
              border-white/10
              bg-white/5
              px-3
              py-2
              font-mono
              text-xs
              text-purple-300
              backdrop-blur-md
              animate-[float_5s_ease-in-out_infinite]
            "
          >
            {"< Database />"}
          </div>
        </div>
      </div>
      <div
        className={`
          absolute
          bottom-3
          left-1/2
          z-20
          flex
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-gray-500
          transition-all ease-out  duration-700 ${loaded
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
          }
        `}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          Scroll to explore
        </span>

        <div className="h-8 w-px overflow-hidden bg-white/10">
          <div className="h-3 w-px animate-bounce bg-purple-400" />
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

export default HeroSection;