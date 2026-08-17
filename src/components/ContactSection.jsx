import React from "react";
import useInView from "../hook/useInView";
import { socials } from "../data/socials";
const ContactSection = () => {
    const [sectionRef, isVisible] = useInView({
        threshold: 0.2,
    });

    return (
        <section
            ref={sectionRef}
            id="contact"
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
          h-[400px]
          w-[600px]
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
            flex
            flex-col
            transition-all
            duration-700
            ease-out
            ${isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
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
                        05 / Contact
                    </p>


                    <div className='flex flex-col items-center justify-center'>
                        <h2
                            className="
              mt-4
              text-3xl
              font-bold
              tracking-tight
              md:text-4xl
            "
                        >
                            Contact Me
                        </h2>

                        <p
                            className="
              mt-4
              max-w-lg
              text-sm
              leading-7
              text-gray-500
              md:text-base
              text-center
            "
                        >
                            You can contact me at the places mentioned below. 
                            I will try to get back to you as fast as I can.
                        </p>
                    </div>

                    <div
                        className={`
              mt-8
              flex
              flex-wrap
              items-center
              justify-center
              gap-3
              transition-all
              delay-150
              duration-700
              ease-out
              ${isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-4 opacity-0"
                            }
            `}
                    >

                        {socials.map((social) => {
                            const Icon = social.icon;

                            return (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target={
                                        social.name === "Email"
                                            ? undefined
                                            : "_blank"
                                    }
                                    rel={
                                        social.name === "Email"
                                            ? undefined
                                            : "noopener noreferrer"
                                    }
                                    aria-label={social.name}
                                    className="
                    group
                    flex
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-white/[0.08]
                    bg-white/[0.02]
                    px-4
                    py-2.5
                    font-mono
                    text-xs
                    text-gray-500
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-purple-400/30
                    hover:bg-purple-500/[0.05]
                    hover:text-purple-300
                    hover:shadow-[0_8px_25px_rgba(139,92,246,0.08)]
                  "
                                >
                                    <Icon
                                        size={16}
                                        className="
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                                    />

                                    <span>
                                        {social.name}
                                    </span>
                                </a>
                            );
                        })}

                    </div>

                </div>

                <div
                    className="
                                mt-16
                                flex
                                flex-col
                                items-center
                                justify-between
                                gap-3
                                border-t
                              border-white/[0.06]
            pt-5

            md:flex-row
          "
                >

                    <p
                        className="
              font-mono
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-gray-700
            "
                    >
                        Built with curiosity
                    </p>

                    <p
                        className="
              font-mono
              text-[9px]
              text-gray-700
            "
                    >
                        © 2026 Ngo Nguyen Thanh Lam
                    </p>
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

export default ContactSection;