"use client";

import { useScroll } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import dooit from "@/public/dooit.png";
import joey_jumps from "@/public/joey_jumps.png";

export default function Works() {
  const targetElem = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetElem,
    offset: ["start end", "end start"],
  } as any);
  const total_height = 72;
  const height = total_height / 6;

  return (
    <section
      ref={targetElem}
      className="relative select-none mx-[8%] my-[6rem]"
    >
      <h2 className="text-xs text-gray uppercase underline underline-offset-4">
        WORKS
      </h2>
      {/* PROJECTS
Dooit
A kanban application
Xatty
Chat app built using Node.js, Express.js, React and socket.io that allows realtime chat between users.
ClojURL
A url shortener built using Clojure and ClojureScript.
Platformer Game
Platformer game built with Vanilla JS.
Cowin Slot Checker
Telegram bot that notifies upon availability of vaccination slots for 18+ years old in the CoWIN app. */}
      <div
        style={{ height: 6 * height + "vh" }}
        className="relative mt-12 w-full text-graytransparent"
      >
        <div
          style={{ height: 6 * height + "vh" }}
          className="absolute left-[0.5%] w-[33%] p-2 overflow-clip"
        >
          <div className="gradientborder bg-[#111111a2] w-full h-full p-8">
            <div className="flex flex-col gap-8">
              <div className="flex items-center justify-between">
                <h2 className="tracking-wide text-white text-xl">Dooit</h2>
                <div className="flex flex-row gap-2 flex-wrap items-center justify-start">
                  <Link
                    href={"https://dooit.vercel.app/"}
                    target="_blank"
                    className="text-graytransparent p-1.5 text-xs bg-gradient-to-br from-darkgray to-darkgray gradientborder"
                  >
                    View live
                  </Link>
                  <Link
                    href={"https://github.com/joysamaddar/dooit"}
                    target="_blank"
                    className="text-graytransparent p-1.5 text-xs bg-gradient-to-br from-darkgray to-darkgray gradientborder"
                  >
                    View code
                  </Link>
                </div>
              </div>
              <p className="text-sm">
                A <span className="text-white">kanban board</span> with a sleek
                design and intuitive UX.
              </p>
              <div className="text-xs flex flex-col gap-1">
                <p>- Create and manage multiple projects</p>
                <p>- Add/Remove users from projects on the fly</p>
                <p>- Get tasks progress and other statistics</p>
              </div>
              <div className="flex flex-row gap-2 flex-wrap items-center justify-start text-white font-light">
                <p className="p-1 text-[11px] gradientborder shadow-2xl">
                  NestJS
                </p>
                <p className="p-1 text-[11px] gradientborder shadow-2xl">
                  TypeScript
                </p>
                <p className="p-1 text-[11px] gradientborder shadow-2xl">
                  Apollo GraphQL
                </p>
                <p className="p-1 text-[11px] gradientborder shadow-2xl">
                  TypeORM
                </p>
                <p className="p-1 text-[11px] gradientborder shadow-2xl">
                  MongoDB
                </p>
                <p className="p-1 text-[11px] gradientborder shadow-2xl">
                  NextJS
                </p>
                <p className="p-1 text-[11px] gradientborder shadow-2xl">
                  TypeScript
                </p>
                <p className="p-1 text-[11px] gradientborder shadow-2xl">
                  Apollo Client
                </p>
                <p className="p-1 text-[11px] gradientborder shadow-2xl">
                  Tailwind CSS
                </p>
                <p className="p-1 text-[11px] gradientborder shadow-2xl">
                  SASS
                </p>
                <p className="p-1 text-[11px] gradientborder shadow-2xl">
                  Daisy UI
                </p>
              </div>
              <div className="w-full">
                <Image
                  src={dooit}
                  alt="Dooit screenshot"
                  className="w-full h-auto object-cover"
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ height: 2.5 * height + "vh" }}
          className="absolute left-[33.5%] w-[33%] p-2 overflow-clip"
        >
          <div className="gradientborder bg-[#111111a2] w-full h-full p-8">
            <div className="flex flex-col gap-8">
              <div className="flex items-center justify-between">
                <h2 className="tracking-wide text-white text-xl">Xatty</h2>
                <div className="flex flex-row gap-2 flex-wrap items-center justify-start">
                  <Link
                    href={"https://xatty.netlify.app/"}
                    target="_blank"
                    className="text-graytransparent p-1.5 text-xs bg-gradient-to-br from-darkgray to-darkgray gradientborder"
                  >
                    View live
                  </Link>
                  <Link
                    href={"https://github.com/joysamaddar/Xatty"}
                    target="_blank"
                    className="text-graytransparent p-1.5 text-xs bg-gradient-to-br from-darkgray to-darkgray gradientborder"
                  >
                    View code
                  </Link>
                </div>
              </div>
              <p className="text-sm">
                A <span className="text-white">chat app</span> built using
                Node.js, Express.js, React and socket.io that allows realtime
                chat between users.
              </p>
              <div className="flex flex-row gap-2 flex-wrap items-center justify-start text-white font-light">
                <p className="p-1 text-[11px] gradientborder shadow-2xl">
                  NestJS
                </p>
                <p className="p-1 text-[11px] gradientborder shadow-2xl">
                  TypeScript
                </p>
                <p className="p-1 text-[11px] gradientborder shadow-2xl">
                  Apollo GraphQL
                </p>
                <p className="p-1 text-[11px] gradientborder shadow-2xl">
                  TypeORM
                </p>
                <p className="p-1 text-[11px] gradientborder shadow-2xl">
                  MongoDB
                </p>
                <p className="p-1 text-[11px] gradientborder shadow-2xl">
                  NextJS
                </p>
                <p className="p-1 text-[11px] gradientborder shadow-2xl">
                  TypeScript
                </p>
                <p className="p-1 text-[11px] gradientborder shadow-2xl">
                  Apollo Client
                </p>
                <p className="p-1 text-[11px] gradientborder shadow-2xl">
                  Tailwind CSS
                </p>
                <p className="p-1 text-[11px] gradientborder shadow-2xl">
                  SASS
                </p>
                <p className="p-1 text-[11px] gradientborder shadow-2xl">
                  Daisy UI
                </p>
              </div>
              <div className="w-full">
                <Image
                  src={dooit}
                  alt="Dooit screenshot"
                  className="w-full h-auto object-cover"
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ height: 4 * height + "vh" }}
          className="absolute left-[66.5%] w-[33%] p-2 overflow-clip"
        >
          <div className="gradientborder bg-[#111111a2] w-full h-full p-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h2 className="tracking-wide text-white text-xl">Joey Jumps</h2>
                <div className="flex flex-row gap-2 flex-wrap items-center justify-start">
                  <Link
                    href={"https://joysamaddar.github.io/Joey-Jumps/"}
                    target="_blank"
                    className="text-graytransparent p-1.5 text-xs bg-gradient-to-br from-darkgray to-darkgray gradientborder"
                  >
                    View live
                  </Link>
                  <Link
                    href={"https://github.com/joysamaddar/Joey-Jumps"}
                    target="_blank"
                    className="text-graytransparent p-1.5 text-xs bg-gradient-to-br from-darkgray to-darkgray gradientborder"
                  >
                    View code
                  </Link>
                </div>
              </div>
              <p className="text-sm">
                A <span className="text-white">platformer game</span> for fun and lols.
              </p>
              <div className="flex flex-row gap-2 flex-wrap items-center justify-start text-white font-light">
                <p className="p-1 text-[11px] gradientborder shadow-2xl">
                  Vanilla Javascript
                </p>
              </div>
              <div className="w-full">
                <Image
                  src={joey_jumps}
                  alt="Joey Jumps screenshot"
                  className="w-full h-full object-cover"
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ top: 2.5 * height + "vh", height: height + "vh" }}
          className="absolute left-[33.5%] w-[33%] p-2"
        >
          <Link
            href={"https://github.com/joysamaddar"}
            target="_blank"
            className="w-full h-full p-2 bg-gradient-to-r from-blue-400 to-blue-600 transition-all ease-in-out hover:from-blue-600 hover:to-blue-600  flex gap-2 items-center justify-center text-white"
          >
            <p>More on my github</p>
            <ExternalLink className="w-5" />
          </Link>
        </div>
        <div
          style={{ top: 3.5 * height + "vh", height: 2.5 * height + "vh" }}
          className="absolute left-[33.5%] w-[33%] p-2 overflow-clip"
        >
          <div className="gradientborder bg-[#111111a2] w-full h-full p-8">
            Lorem ipsum
          </div>
        </div>
        <div
          style={{ top: 4 * height + "vh", height: 2 * height + "vh" }}
          className="absolute left-[66.5%] w-[33%] p-2 overflow-clip"
        >
          <div className="gradientborder bg-[#111111a2] w-full h-full p-8">
          Lorem ipsum
          </div>
        </div>
      </div>
    </section>
  );
}
