import Heading from "components/designs/Heading";
import More from "components/designs/More";
import Page from "components/utility/Page";
import Projects from "components/designs/Designs";
import React from "react";

function designs() {
  return (
    <Page currentPage="Designs" meta={{ desc: "Aquí estan algunos diseños creados para clientes" }}>
      <Heading />
      <Projects />
      <More />
    </Page>
  );
}

export default designs;
