import { cn } from "@/lib/utils";
import { MotionValue, motion, useSpring, useTransform } from "framer-motion";

interface AlternateSlidingTextsProps {
  scrollYProgress: MotionValue<number>;
  textsData: string[][];
  className?: string;
}

export default function AlternateSlidingTexts({
  scrollYProgress,
  textsData,
  className,
}: AlternateSlidingTextsProps) {
  const forwardText = useTransform(
    useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 25,
      restDelta: 0.001,
    }),
    [0.15, 1],
    ["0%", "100%"]
  );
  const reverseText = useTransform(
    useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 25,
      restDelta: 0.001,
    }),
    [0.15, 1],
    ["0%", "-100%"]
  );

  return (
    <div
      className={cn(
        "flex flex-col gap-3 justify-center font-extralight text-5xl my-3 text-white overflow-clip uppercase tracking-wider",
        className
      )}
    >
      {textsData.map((texts, i) => (
        <motion.div
          style={{ x: i % 2 == 0 ? reverseText : forwardText }}
          className="flex flex-row gap-2 text-gray items-center w-max relative"
          key={i}
        >
          {texts.map((text, j) => (
            <>
              <p
                className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out"
                key={j}
              >
                {text}
              </p>
              <p className="text-lg font-extralight">•</p>
            </>
          ))}
          <div
            className={cn(
              "absolute flex flex-row gap-2 items-center",
              i % 2 == 0
                ? "right-[calc(-100%-1rem)]"
                : "left-[calc(-100%-0.5rem)]"
            )}
          >
            {texts.map((text, i) => (
              <>
                <p
                  className="hover:text-primary hover:scale-105 transition duration-100 ease-in-out"
                  key={i}
                >
                  {text}
                </p>
                <p className="text-lg font-extralight">•</p>
              </>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
