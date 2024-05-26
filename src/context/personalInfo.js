// English Layout, projects and personal info.

const personalEN = {
  personal: {
    name: "Camilo Mora",
    role: "Front-end Developer",
    career: "Systems engineering student",
    semester: "currently in 8th semester",
  },
  contact: {
    github: "https://github.com/mylo2003",
    linkedIn: "https://www.linkedin.com/in/camilomora23/",
    instagram: "https://www.instagram.com/mylo_23/",
    email: "camiloalf23@gmail.com",
    cv: 'https://drive.google.com/file/d/10S9aD9z_S-n_xrbLKGHbgO_Rw1t-Nx23/view?usp=drive_link',
  },
};

const layoutEN = {
  navBar: {
    about: "about",
    projects: "projects",
    skills: "skills",
    contact: "contact",
  },
  home: {
    welcome: "Hey there, I am",
    button: "See Curriculum",
    lang: 'Ahora es español!'
  },
  aboutMe: {
    title: "About me",
    1: "Focused on",
    2: "frontend development",
    3: "Code as",
    4: "clean",
    5: "as possible",
    6: "Also an",
    7: "exceptional",
    8: "teammate",
    hobbies: ['GYM', 'Read', 'Play PC video games', 'Listen music'],
  },
  projects: "Some of my projects",
  skills: {
    title: "Skills",
    1: "and tools",
  },
  contact: {
    title: "Get in touch with me",
    1: "Let's work together",
    2: "I am open to new",
    3: "opportunities",
    button: "Send me an Email",
    copy: "Click to copy",
    copied: "Check clipboard!",
  },
  footer: "Made with love by Mylo",
};

const projectsEN = [
  {
    id: 1,
    title: "Mylommerce",
    overview: `Mylommerce was a project done for a university course.
              My role was to do all the design in figma and code it.
              It is built in React.js and TailwindCss,
              plus I used Vite for a better programming experience. 
              Applied best practices, including component reusability and performance optimization.`,
    url: "https://mylo-ecommerce.vercel.app/",
    screenshot: "https://res.cloudinary.com/dexrzjquz/image/upload/v1716746275/MylommerceSS_rlgq66.webp",
    techs: [{id: 1, tech: "react"},{id: 2, tech: "tailwindcss"},{id: 3, tech: "vite"}],
  },
  {
    id: 2,
    title: "Mylo Movies",
    overview: ` Mylo Movies was a vanilla javascript project.
                It was interesting to consume theMovieDB API with the Axios library.
                Besides I worked all its styles with TailwindCSS.
                I'm proud of the creativity that went into creating this site.`,
    url: "https://mylo-movie-api-project.vercel.app/",
    screenshot: "https://res.cloudinary.com/dexrzjquz/image/upload/v1716746276/MylomoviesSS_blrqxr.webp",
    techs: [{id: 1, tech: "javascript"},{id: 2, tech: "tailwindcss"},{id: 3, tech: "axios"}],
  },
  {
    id: 3,
    title: "Todo Mylo",
    overview: `Developed a TO-DO application using React.js, Tailwind CSS, and Vite.
              Implemented various React hooks for state management and component lifecycle.
              `,
    url: "https://todo-react-app-zeta-two.vercel.app/",
    screenshot: "https://res.cloudinary.com/dexrzjquz/image/upload/v1716746275/TodomyloSS_oaelxb.webp",
    techs: [{id: 1, tech: "react"},{id: 2, tech: "tailwindcss"}, {id: 3, tech: "vite"}],
  },
  {
    id: 4,
    title: "Rick Generator",
    overview: `Rick generator was a project made for the purpose of learning how to consume APIs. It was fun because I love Rick and Morty.`,
    url: "https://api-rick-and-morty-project.vercel.app/",
    screenshot: "https://res.cloudinary.com/dexrzjquz/image/upload/v1716746275/RickAndMortyApiSS_bohktm.webp",
    techs: [{id: 1, tech: "javascript"},{id: 2, tech: "tailwindcss"}, {id: 3, tech: "html"}],
  },
  {
    id: 5,
    title: "Random Kittens",
    overview: `Random kittens I developed it as a project to pass the platzi course on APIs use. I learned the use of requests like GET, PUT, PATCH.`,
    url: "https://api-gatitos-project.vercel.app/",
    screenshot: "https://res.cloudinary.com/dexrzjquz/image/upload/v1716746275/GatitosApiSS_silqij.webp",
    techs: [{id: 1, tech: "javascript"},{id: 2, tech: "tailwindcss"}, {id: 3, tech: "html"}],
  },
  {
    id: 6,
    title: "Rick Sanchez Landing",
    overview: `I made this landing to learn the use of asynchronism in JavaScript. Plus it's about Rick Sanchez, cool, right?`,
    url: "https://mylo2003.github.io/async-landing/",
    screenshot: "https://res.cloudinary.com/dexrzjquz/image/upload/v1716746275/RickLandingSS_jc6kjd.webp",
    techs: [{id: 1, tech: "html"},{id: 2, tech: "tailwindcss"}, {id: 3, tech: "javascript"}],
  },
];

// Spanish Layout, projects and personal info.

const personalES = {
  personal: {
    name: "Camilo Mora",
    role: "Desarrollador Front-end",
    career: "Estudiante de Ingeniería en Sistemas",
    semester: "actualmente en octavo semestre",
  },
  contact: {
    github: "https://github.com/mylo2003",
    linkedIn: "https://www.linkedin.com/in/camilomora23/",
    instagram: "https://www.instagram.com/mylo_23/",
    email: "camiloalf23@gmail.com",
    cv: 'https://drive.google.com/file/d/10S9aD9z_S-n_xrbLKGHbgO_Rw1t-Nx23/view?usp=drive_link',
  },
};

const layoutES = {
  navBar: {
    about: "acerca",
    projects: "proyectos",
    skills: "habilidades",
    contact: "contacto",
  },
  home: {
    welcome: "Hey, qué tal, Soy",
    button: "Ver Currículum",
    lang: 'Now is english!'
  },
  aboutMe: {
    title: "Acerca de mi",
    1: "Enfocado en",
    2: "desarrollo frontend",
    3: "Código tan",
    4: "limpio",
    5: "como sea posible",
    6: "Además un",
    7: "excepcional",
    8: "compañero de trabajo",
    hobbies: ['GYM', 'Leer', 'Jugar en el PC', 'Escuchar música'],
  },
  projects: "Algunos de mis proyectos",
  skills: {
    title: "Tecnologías",
    1: "y herramientas",
  },
  contact: {
    title: "Ponte en contacto conmigo",
    1: "Vamos a trabajar juntos",
    2: "Estoy abierto a nuevas",
    3: "oportunidades",
    button: "Envíame un correo",
    copy: "Click para copiar",
    copied: "Revisa el portapeles!",
  },
  footer: "Hecho con amor por Mylo",
};

const projectsES = [
  {
    id: 1,
    title: "Mylommerce",
    overview: `Mylommerce fue un proyecto realizado para un curso universitario.
              Mi rol fue diseñar todo en figma y programarlo.
              Está construido en React.js y TailwindCss,
              además utilicé Vite para una mejor experiencia de programador.`,
    url: "https://mylo-ecommerce.vercel.app/",
    screenshot: "https://res.cloudinary.com/dexrzjquz/image/upload/v1716746275/MylommerceSS_rlgq66.webp",
    techs: [{id: 1, tech: "react"},{id: 2, tech: "tailwindcss"},{id: 3, tech: "vite"}],
  },
  {
    id: 2,
    title: "Mylo Movies",
    overview: ` Mylo Movies fue un proyecto de JavaScript vanilla.
                Fue interesante consumir la API theMovieDB con la biblioteca Axios.
                Además, trabajé todos sus estilos con TailwindCSS.
                Estoy orgulloso de la creatividad que le puse en la creación de este sitio.`,
    url: "https://mylo-movie-api-project.vercel.app/",
    screenshot: "https://res.cloudinary.com/dexrzjquz/image/upload/v1716746276/MylomoviesSS_blrqxr.webp",
    techs: [{id: 1, tech: "javascript"},{id: 2, tech: "tailwindcss"},{id: 3, tech: "axios"}],
  },
  {
    id: 3,
    title: "Todo Mylo",
    overview: `Desarrollé de una aplicación TO-DO usando React.js, Tailwind CSS y Vite.
              Implementado varios hooks de React para la gestión de estados y el ciclo de vida de los componentes.`,
    url: "https://todo-react-app-zeta-two.vercel.app/",
    screenshot: "https://res.cloudinary.com/dexrzjquz/image/upload/v1716746275/TodomyloSS_oaelxb.webp",
    techs: [{id: 1, tech: "react"},{id: 2, tech: "tailwindcss"}, {id: 3, tech: "vite"}],
  },
  {
    id: 4,
    title: "Rick Generador",
    overview: `Rick generador fue un proyecto hecho con el propósito de aprender a consumir APIs. Fue divertido porque me encanta Rick y Morty`,
    url: "https://api-rick-and-morty-project.vercel.app/",
    screenshot: "https://res.cloudinary.com/dexrzjquz/image/upload/v1716746275/RickAndMortyApiSS_bohktm.webp",
    techs: [{id: 1, tech: "javascript"},{id: 2, tech: "tailwindcss"}, {id: 3, tech: "html"}],
  },
  {
    id: 5,
    title: "Gatitos Aleatorios",
    overview: `Gatitos al azar lo desarrolle como proyecto para aprobar el curso en platzi sobre uso de APIs. Aprendí el uso de peticiones como GET, PUT, PATCH.`,
    url: "https://api-gatitos-project.vercel.app/",
    screenshot: "https://res.cloudinary.com/dexrzjquz/image/upload/v1716746275/GatitosApiSS_silqij.webp",
    techs: [{id: 1, tech: "javascript"},{id: 2, tech: "tailwindcss"}, {id: 3, tech: "html"}],
  },
  {
    id: 6,
    title: "Rick Sanchez Landing",
    overview: `Esta landing la hice para aprender el uso de asyncronismo en JavaScript. Además es sobre Rick Sanchez, cool, verdad?`,
    url: "https://mylo2003.github.io/async-landing/",
    screenshot: "https://res.cloudinary.com/dexrzjquz/image/upload/v1716746275/RickLandingSS_jc6kjd.webp",
    techs: [{id: 1, tech: "html"},{id: 2, tech: "tailwindcss"}, {id: 3, tech: "javascript"}],
  },
];

export { personalEN, layoutEN, projectsEN, personalES, layoutES, projectsES };
