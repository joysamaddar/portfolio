"use client";

import Heading from "@/components/ui/Heading";
import { projects } from "@/constants/projects";
import Lenis from "@studio-freight/lenis";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { notFound, redirect } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Buttons";
import GradientBlocker from "@/components/ui/GradientBlocker";

interface PageProps {
  params: { project_name: string };
}

export default function ProjectPage({ params }: PageProps) {
  const project_name = params.project_name;
  const project_index = projects.findIndex(
    (project) => project.id == project_name
  );
  const project = projects.find((project) => project.id == project_name)!;

  if (!project) {
    redirect("/");
  }

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <section className="relative mx-[10%] sm:mx-[15%] py-[9rem] select-none flex flex-col gap-12">
      <GradientBlocker className="fixed h-[25dvh]" />
      <Link href={"/"} className="text-gray flex flex-row gap-2 items-center">
        <MoveLeft className="w-5" /> Go back to homepage
      </Link>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-4 items-end">
          {project.metadata?.map((meta, i) => (
            <p key={i} className="text-xs font-mono text-darkgray uppercase">
              {meta}
            </p>
          ))}
        </div>
        <Image
          src={project.cover_image as any}
          alt={`${project.title}'s cover image`}
          className="h-[250px] object-cover bg-gradient-to-br from-zinc-800 to-black"
          priority
        ></Image>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-semibold tracking-wide">
          {project.title}
        </h2>
        <div className="flex flex-row gap-2">
          <Link href={project.codeLink} target="_blank">
            <Button type="white">View Code</Button>
          </Link>
          <Link href={project.liveLink} target="_blank">
            <Button>View Link</Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <Heading>OVERVIEW</Heading>
        <p className="text-graytransparent">{project.description}</p>
      </div>
      <div className="flex flex-col gap-8">
        <Heading>FEATURES</Heading>
        <ul className="text-graytransparent list-outside list-disc ml-3.5">
          {project.features.map((feat, i) => (
            <li key={i}>{feat}</li>
          ))}
        </ul>
      </div>
      {project.problem && (
        <div className="flex flex-col gap-8">
          <Heading>PROBLEM</Heading>
          <p className="text-graytransparent">{project.problem}</p>
        </div>
      )}
      {project.solution && (
        <div className="flex flex-col gap-8">
          <Heading>SOLUTION</Heading>
          <p className="text-graytransparent">{project.solution}</p>
        </div>
      )}
      <div className="flex flex-col gap-8">
        <Heading>TECH STACK</Heading>
        <div className="flex flex-col gap-8 md:gap-3">
          {Object.keys(project.skills).map((skill_name, i) => (
            <div
              className="flex flex-row gap-4 text-graytransparent items-start"
              key={i}
            >
              <p className="text-darkgray min-w-[80px]">{skill_name}: </p>
              <ul className="flex flex-row gap-2 flex-wrap text-sm font-mono uppercase">
                {project.skills[skill_name as keyof typeof project.skills]!.map(
                  (skill, j) => (
                    <li key={j}>{skill}</li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <Heading>SCREENSHOT</Heading>
        <div className="flex flex-col gap-5">
          {project.screenshots.map((screenshot, i) => (
            <Image
              key={i}
              src={screenshot as any}
              alt={`${project.title}'s ${i + 1} screenshot`}
              className="object-cover bg-gradient-to-br from-zinc-800 to-black"
              priority
            ></Image>
          ))}
        </div>
      </div>
      <div
        className={cn(
          "flex flex-row items-center justify-between",
          project_index == 0 && "justify-end",
          project_index == projects.length - 1 && "justify-start"
        )}
      >
        {project_index != 0 && (
          <Link
            href={projects[project_index - 1].url}
            className="text-gray flex flex-row gap-2 items-center"
          >
            <MoveLeft className="w-5" /> Previous
          </Link>
        )}
        {project_index != projects.length - 1 && (
          <Link
            href={projects[project_index + 1].url}
            className="text-gray flex flex-row gap-2 items-center"
          >
            Next <MoveRight className="w-5" />
          </Link>
        )}
      </div>
    </section>
  );
}
