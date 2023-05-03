import React from "react";
import Image from "next/image";
import { kebabCase } from "@/utils/utils";
import Link from "next/link";

function ProjectCard({ project }) {
  return (
    <div className="max-w-sm mx-auto flex flex-col projects-center md:projects-start md:justify-center" key={project.id}>
      <a href={project.link || project.github} target="_blank" className={`w-full relative rounded-xl border-fun-gray border p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink will-change-projectCard`}>
        <img className="w-full rounded-md" src={project.img} />
      </a>
      <div className="w-full mt-5">
        <div className="flex projects-center justify-between">
          <a href={project.link || project.github} target="_blank">
            <h3 className="text-lg font-bold">{project.title}</h3>
          </a>
          <div className="space-x-2">
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="cursor-pointer">
                <Image src="/static/icons/external-link.svg" width={16} height={16} alt="Link Icon" />
              </a>
            )}
            {project.github && (
              <a href={project.github} className="group cursor-pointer" target="_blank" rel="noreferrer">
                <Image src="/static/icons/github.svg" width={16} height={16} alt="Github Icon" />
                <span className="hidden group-hover:block absolute bg-gray-800 text-white px-2 py-1 rounded-md text-xs mt-2">Github</span>
              </a>
            )}
            {project.behance && (
              <a href={project.behance} className="group cursor-pointer" target="_blank" rel="noreferrer">
                <Image src="/static/icons/behance.svg" width={16} height={16} alt="Behance Icon" />
                <span className="hidden group-hover:block absolute bg-gray-800 text-white px-2 py-1 rounded-md text-xs mt-2">Behance</span>
              </a>
            )}
            {project.id == 0 && (
              <a href="https://www.instagram.com/reel/Cqs5IvrObKQ/" target="_blank" rel="noreferrer" className="group cursor-pointer">
                <Image src="/static/icons/award.svg" className="text-white" width={20} height={20} alt="Award Icon" />
                <span className="hidden group-hover:block absolute bg-gray-800 text-white px-2 py-1 rounded-md text-xs mt-2">La Roche Awards</span>
              </a>
            )}
          </div>
        </div>
        <p className="text-fun-gray text-left text-sm">{project.desc}</p>
        <ul className="flex flex-wrap items-center mt-2 -ml-2 list-none">
          {project.tags.map((tag, index) => {
            return (
              <li key={tag}>
                <Link href={`/projects/tag/${kebabCase(tag)}`}>
                  <div className="m-1 rounded-lg text-sm bg-fun-pink-dark py-1 px-2 cursor-pointer hover:opacity-75">{tag}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
