import Heading from "./ui/Heading";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { RevealingTextContainer, RevealingTextItem } from "./ui/RevealingText";
import { Calendar, Mail, Phone } from "lucide-react";
import { ButtonWithIcon } from "./ui/Buttons";
import Link from "next/link";

export default function Contact() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYProgressRevealingText } = useScroll({
    target: targetRef,
    offset: ["start end", "end center"],
  } as any);

  return (
    <section
      ref={targetRef}
      id="contact"
      className="relative select-none mx-[15%] my-[6rem] pt-[6rem] pb-[6rem]"
    >
      <Heading>CONTACT</Heading>
      <div className="flex flex-col mt-24 items-start justify-center">
        <RevealingTextContainer scrollYProgress={scrollYProgressRevealingText}>
          {["IMPRESSED?", "LET'S HAVE A CHAT!"].map((text, i) => (
            <RevealingTextItem index={i} key={i}>
              {text}
            </RevealingTextItem>
          ))}
        </RevealingTextContainer>
        <div className="w-full flex flex-row items-center justify-start gap-8 flex-wrap mt-16">
          <Link href={"https://calendly.com/joysamaddar/chat"} target="_blank" className="flex-grow">
            <ButtonWithIcon icon={Calendar}>Schedule a meeting</ButtonWithIcon>
          </Link>
          <a href="mailto:joysamaddar123@gmail.com" className="flex-grow">
            <ButtonWithIcon icon={Mail}>
              joysamaddar123@gmail.com
            </ButtonWithIcon>
          </a>
          <a href="tel:+917980061385" className="flex-grow">
            <ButtonWithIcon icon={Phone}>+917980061385</ButtonWithIcon>
          </a>
        </div>
      </div>
    </section>
  );
}
