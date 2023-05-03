import React from "react";
import { designs } from "@/data/content/designs";
import Image from "next/image";

function Designs() {
  return (
    <div className="m-10 md:m-5 grid grid-cols-1 gap-8 md:grid-cols-2 items-start">
      {designs.map((item, index) => {
        return (
          <div className="w-full relative hover:scale-105 transition-all ease-in-out" key={index}>
            <a href={item.link} target="_blank" className="w-full">
              <img className="w-full h-96 hover:opacity-75 transition-opacity object-cover" src={item.img} />

              <div className="absolute bg-bg bg-opacity-70 top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity transition-all ease">
                <div className="flex items-center flex-col gap-3">
                  <p className="text-white text-center text-lg">{item.label}</p>

                  <div className="flex gap-3 items-center">
                    {item.figma && (
                      <a href={item.figma} target="_blank" rel="noreferrer" className="hover:cursor-pointer hover:scale-110 transition-all ease-in-out">
                        <Image src="/static/icons/figma.svg" width={25} height={25} alt="Figma Icon" />
                      </a>
                    )}
                    <a href={item.link} target="_blank" rel="noreferrer" className="cursor-pointer hover:scale-110 transition-all ease-in-out">
                      <Image src="/static/icons/behance.svg" width={25} height={25} alt="Link Icon" />
                    </a>
                  </div>
                </div>
              </div>
            </a>
          </div>
        );
      })}
      <img className="sqD min-w-[800px] bottom-[-100px] left-1/2 sm:bottom-[-150px] -translate-x-1/2 object-cover sm:min-w-[1100px]" style={{ zIndex: "-10" }} src="/static/doodles/hero/fancyLines.svg" />
    </div>
  );
}

export default Designs;
