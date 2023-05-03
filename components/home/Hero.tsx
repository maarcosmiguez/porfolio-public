import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <>
      <div className="relative heroElem w-full pt-20 pb-10 m-auto flex justify-center text-center flex-col items-center z-1" style={{ maxWidth: "1200px" }}>
        <p className="text-xl mb-5">Marcos Casas</p>
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-4xl lg:text-6xl tracking-tighter mb-10 font-bold heroShinyBg">
          Desarrollador de<span className="heroShiny1 text-fun-pink"> aplicaciones</span> y <span className="heroShiny2 text-fun-pink">diseñador web</span>
          {/* <img className="sqD squiggle-hero-html w-16 top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px]" style={{ animationDelay: "0.1s" }} src="/static/doodles/hero/html.svg" /> */}
          <img className="sqD squiggle-hero-nextjs hidden top-[75px] right-0 w-11" style={{ animationDelay: "0.2s" }} src="/static/doodles/hero/nextjs.svg" />
          {/* <img className="sqD bottom-[-200px] -right-1/4 sm:right-[-10%] lg:bottom-[-120px] lg:right-[-20px] w-[120px]" style={{ animationDelay: "0.3s" }} src="/static/doodles/hero/marcoslogo.svg" /> */}
          {/* <img className="sqD hidden w-[200px] sm:block bottom-[-340px] left-[-180px]" style={{ animationDelay: "0.4s" }} src="/static/doodles/hero/dino.svg" /> */}
          {/* <img className="sqD hidden sm:block left-[110px] w-[150px] lg:left-1/3 bottom-[-220px]" style={{ animationDelay: "0.5s" }} src="/static/doodles/hero/coder.svg" /> */}
          {/* <img className="sqD bottom-[-320px] w-[250px] right-[65%] sm:right-[45%]" style={{ animationDelay: "0.6s" }} src="/static/doodles/hero/logo-texto.svg" /> */}
          {/* <img className="sqD right-[-30px] sm:right-40 w-[150px] bottom-[-180px] lg:[5%]" style={{ animationDelay: "0.7s" }} src="/static/doodles/hero/paintbrush.svg" /> */}
          <img className="sqD squiggle-hero-pop1 opacity-100 hidden sm:block sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[120px]" src="/static/doodles/hero/pop1.svg" style={{ animationDelay: "0.9s" }} />
          {/* <img className="sqD left-[-35px] w-[150px] bottom-[-100px] sm:bottom-[-150px] sm:left-25" style={{ animationDelay: "0.9s" }} src="/static/doodles/hero/code.svg" /> */}
        </h1>
        {/* <img className="sqD w-[150px] top-[-50px]" style={{ animationDelay: "0.5s" }} src="/static/doodles/hero/coder.svg" /> */}
        <ScrollLink activeClass="active" to="learnmore" spy={true} offset={-30} smooth={true} duration={500}>
          <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors">Ver proyectos</div>
        </ScrollLink>
      </div>
    </>
  );
}

export default Hero;
