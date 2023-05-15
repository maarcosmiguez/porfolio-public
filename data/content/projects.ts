import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Juntas APP",
    desc: "Una aplicación móvil para el seguimiento de pacientes oncológicas. Por razones comerciales no se comparte el código.",
    img: "/static/projects/juntas.png",
    behance: "https://www.behance.net/gallery/154235613/Juntas-APP-Presentacion-del-proyecto",
    link: "https://www.behance.net/gallery/154235613/Juntas-APP-Presentacion-del-proyecto",
    tags: ["ReactNative", "Firebase", "TailwindCSS"],
  },
  {
    id: 1,
    title: "¿Cuándo acampar?",
    desc: "Una aplicación web que te aconseja si deberías ir a acampar la próxima semana en cualquier ciudad del mundo",
    img: "/static/projects/acampar.png",
    link: "https://maarcoscasas.github.io/app-clima/",
    github: "https://github.com/maarcoscasas/app-clima",
    behance: "https://www.behance.net/gallery/145170545/Cuando-acampar-App-%28incluye-codigo%29",
    tags: ["HTML", "CSS", "Javascript", "Bootstrap", "API"],
  },
  {
    id: 2,
    title: "Crypto conversor",
    desc: "Conversor de moneda corriente a criptomoneda. Sitio en mantenimiento por modificación de términos de uso de la API.",
    img: "/static/projects/cripto.png",
    link: "https://maarcoscasas.github.io/cripto-converter/",
    tags: ["Javascript", "Bootstrap", "API"],
  },
  {
    id: 3,
    title: "Pilsen store",
    desc: "Webapp para dispositivos móviles con los principales productos de la store de Pilsen en Mercado Libre.",
    img: "/static/projects/pilsen.png",
    link: "https://maarcoscasas.github.io/pilsen-store/",
    github: "https://github.com/maarcoscasas/pilsen-store",
    behance: "https://www.behance.net/gallery/148971737/Pilsen-store-app-mobile-%28code-design%29",
    tags: ["Ionic", "Capacitor", "Bootstrap", "API"],
  },
  {
    id: 4,
    title: "Free games app",
    desc: "Listado de juegos gratuitos en linea y dónde descargarlos",
    img: "/static/projects/games-app.png",
    behance: "https://www.behance.net/gallery/168535455/Free-games-app",
    github: "https://github.com/maarcoscasas/games-app",
    link: "https://maarcoscasas.github.io/games-app/",
    tags: ["Node", "Javascript", "Bootstrap", "MongoDB"],
  },
  {
    id: 5,
    title: "Marvel characters",
    desc: "Personajes de marvel, sus historias y eventos. Desarrollado con react.",
    img: "/static/projects/marvel-cover.png",
    github: "https://github.com/maarcoscasas/marvel",
    link: "https://github.com/maarcoscasas/marvel",
    tags: ["React", "API", "Bootstrap"],
  },
];

export const allTags = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
