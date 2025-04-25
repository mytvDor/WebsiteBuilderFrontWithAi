import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import HoverBorderGradient from "../../components/ui/hover-border-gradient";
// import { cn } from "./lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
// import { Button } from "./components/ui/button";
// import { RainbowButton } from "./components/ui/rainbow-button";
import SplashCursor from "../../font-ui/Animations/SplashCursor/SplashCursor";

export function Hero() {
  return (
    <div className="flex flex-col overflow-hidden mb-20 relative">
      {/* <SplashCursor /> */}
      <AnimatedGridPattern className="" />
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white dark:text-white">
              Unleash the power of
              <button className="ml-4 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Border Magic
                </span>
              </button>
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                WEBCRAFT <br /> WEB-BUILDER
              </span>
            </h1>
          </>
        }
      >
        <HoverBorderGradient
          className="relative flex p-0 h-full w-full flex-col items-center justify-center overflow-hidden rounded-xl bg-background md:shadow-xl"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <img
            src="/DBSC3.png"
            alt="hero"
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
            style={{ width: "100%" }}
          />
        </HoverBorderGradient>
      </ContainerScroll>
    </div>
  );
}
