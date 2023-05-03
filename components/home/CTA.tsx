import React from "react";

function CTA() {
  return (
    <div className="pt-36 relative w-full">
      <img className="w-30 m-auto mb-2" src="/static/doodles/lineBreak.svg" />
      <div className="pt-14 pb-40">
        <h2 className="text-3xl md:text-5xl sm:text-6xl font-bold mb-10">¿Te interesa trabajar juntos?</h2>
        <a
          href="https://www.linkedin.com/in/marcos-c-5829369b/"
          target="_blank"
          className="cursor-pointer font-bold whitespace-nowrap 
        mt-6 px-8 py-3 text-white border-2 rounded-full border-white hover:bg-fun-pink hover:border-fun-pink transition-colors"
        >
          Contactame
        </a>
      </div>

      <img className="sqD min-w-[800px] bottom-[-100px] left-1/2 sm:bottom-[-150px] -translate-x-1/2 object-cover sm:min-w-[1100px]" style={{ zIndex: "-10" }} src="/static/doodles/hero/fancyLines.svg" />
    </div>
  );
}

export default CTA;
