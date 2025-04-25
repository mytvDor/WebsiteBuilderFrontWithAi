import HoverBorderGradient from "@/components/ui/hover-border-gradient";

export function BorderBeamDemo() {
  return (
    <div className="flex justify-center items-center">
      {" "}
      <HoverBorderGradient
        className="relative flex h-[500px] w-[70%] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-100/100 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Shine Border
        </span>
      </HoverBorderGradient>
    </div>
  );
}
