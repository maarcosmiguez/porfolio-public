import Heading from "components/projects/Heading";
import More from "components/projects/More";
import Page from "components/utility/Page";
import Projects from "components/projects/Projects";
import React from "react";

function projects() {
  return (
    <Page currentPage="Proyectos" meta={{ title: "Proyectos", desc: "Las soluciones tecnicas que elijo para mis proyectos buscan ser diversas." }}>
      <Heading />
      <Projects />
      <More />
    </Page>
  );
}

export default projects;
