import { experiences, yearsOfExperience } from "@/constants/experiences";
import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";
import Image from "next/image";

interface LogoCarouselProps extends HTMLMotionProps<"div"> {
  className?: string;
}

export default function LogoCarousel({
  className,
  ...props
}: LogoCarouselProps) {
  return (
    <motion.div
      {...props}
      variants={{
        hidden: {
          opacity: 0,
        },
        show: {
          opacity: 1,
          transition: {
            duration: 0.4,
            delay: 0.4,
          },
        },
      }}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: true }}
      className={cn(
        "py-8 overflow-hidden flex flex-col w-full gap-4 sm:gap-2",
        className
      )}
    >
      <p className="w-full text-center text-xs sm:text-sm font-medium uppercase text-gray">
        {Math.round(yearsOfExperience)}+ years of building epic stuff.
      </p>
      <div className="relative flex flex-row gap-8 w-max m-auto overflow-hidden logo_slider_container">
        <div className="flex flex-row justify-center items-center w-max m-auto flex-shrink-0 logo_slider">
          {experiences.map((experience, i) => (
            <Image
              key={i}
              src={experience.companyLogo}
              alt={`${experience.company}'s logo`}
              className="w-[110px] sm:w-[150px] h-[40px] sm:h-[80px] object-contain mx-5 sm:mx-8"
              draggable={false}
            />
          ))}
        </div>
        <div className="absolute left-full flex flex-row justify-center items-center w-max m-auto flex-shrink-0 logo_slider">
          {experiences.map((experience, i) => (
            <Image
              key={i}
              src={experience.companyLogo}
              alt={`${experience.company}'s logo`}
              className="w-[110px] sm:w-[150px] h-[40px] sm:h-[80px] object-contain mx-5 sm:mx-8"
              draggable={false}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
