import React from "react";
import projects from "@/data/content/projects";
import { Project } from "types";
import { kebabCase } from "@/utils/utils";
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

type ProjectProps = {
  overwriteProjects?: Project[];
};

function Projects({ overwriteProjects }: ProjectProps) {
  const projectsList = overwriteProjects ? overwriteProjects : projects;
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
      {projectsList.map((item) => {
        return <ProjectCard key={item.id} project={item} />;
      })}
      <img className="sqD min-w-[100px] mt-[500px] opacity-100 -translate-x-1/2 object-cover sm:min-w-[50px] opacity-100" style={{ zIndex: "-10" }} src="/static/doodles/hero/right-squiggle.svg" />
      <img className="sqD min-w-[100px] mt-[50px] opacity-100 top-0 right-0 -translate-x-1/2 object-cover sm:min-w-[50px] opacity-100" style={{ zIndex: "-10" }} src="/static/doodles/hero/left-squiggle.svg" />
    </div>
  );
}

export default Projects;
