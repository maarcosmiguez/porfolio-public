type Route = {
  title: string;
  path: string;
};

type FooterCol = {
  title: string;
  links: {
    name: string;
    link: string;
    icon?: string;
    leavesWebsite: boolean;
  }[];
};

type Footer = {
  columns: FooterCol[];
  support: {
    buymeacoffee: string;
    paypal: string;
    message: string;
  };
};

export const routes: Route[] = [
  {
    title: "Home",
    path: "/",
  },
  // {
  //   title: "Blog",
  //   path: "/blog",
  // },
  {
    title: "Proyectos",
    path: "/projects",
  },
  {
    title: "Diseños",
    path: "/designs",
  },
];

export const footer: Footer = {
  columns: [
    {
      title: "Secciones",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },
        // {
        //   name: "Blog",
        //   link: "/blog",
        //   leavesWebsite: false,
        // },
        {
          name: "Proyectos",
          link: "/projects",
          leavesWebsite: false,
        },
        {
          name: "Diseños",
          link: "/designs",
          leavesWebsite: false,
        },
      ],
    },
    {
      title: "Redes soociales",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/maarcosmiguez",
          icon: "/static/icons/github-f.svg",
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/marcosmiguez/",
          icon: "/static/icons/linkedin-f.svg",
          leavesWebsite: true,
        },
        {
          name: "Behance",
          link: "https://www.behance.net/marcosmiguez",
          icon: "/static/icons/behance-f.svg",
          leavesWebsite: true,
        },
        {
          name: "Email",
          link: "mailto:maarcoscasas@gmail.com",
          icon: "/static/icons/mail-f.svg",
          leavesWebsite: true,
        },
      ],
    },
  ],
  support: {
    buymeacoffee: "marcosmiguez",
    paypal: "marcosmiguez",
    message: "I appreciate your support very much! 💙",
  },
};
