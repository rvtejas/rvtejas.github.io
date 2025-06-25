/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Venkat Tejas' Portfolio",
  description:
    "Experienced Frontend Developer with around 6 years of hands-on experience in building performant and scalable web applications using React.js, Next.js, TypeScript, and modern state management tools like Redux and Zustand. Passionate about writing clean, testable code, leading frontend architecture, and mentoring junior developers.",
  og: {
    title: "Venkat Tejas' Portfolio",
    type: "website",
  },
};

//Home Page
const greeting = {
  title: "Venkat Tejas R",
  logo_name: "VTR",
  nickname: "",
  subTitle:
    "A passionate frontend developer dedicated to building scalable, high-performance applications with a strong focus on delivering seamless and engaging user experiences.",
  resumeLink:
    "https://drive.google.com/file/d/1iSeiO48SvonmX9ULhmcjz7h9eGZG__II/view?usp=drive_link",
  portfolio_repository: "",
  githubProfile: "",
};

const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/venkat-tejas-b85993135",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:venkattejas1996@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //     {
    //       skillName: "Deeplearning",
    //       imageSrc: "deeplearning_ai_logo.png",
    //     },
    //   ],
    // },
    {
      title: "Front End Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Lead and mentor junior developers and upskilling their knowledge",
        "⚡ Interact and engage with Product managers in gathering and enhancing requirements",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NextJs",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "React Query",
          fontAwesomeClassname: "simple-icons:reactquery",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {};

const degrees = {
  degrees: [
    {
      title: "Amrita School of Engineering",
      subtitle: "M.Tech. in Embedded Systems",
      logo_path: "amrita.jpeg",
      alt_name: "Amrita Blr",
      duration: "2017-2019",
      descriptions: [],
      website_link: "",
    },
    {
      title: "GITAM University",
      subtitle: "B.Tech in Electronics and Communication Engineering",
      logo_path: "gitam.jpeg",
      alt_name: "Gitam Hyd",
      duration: "2013 - 2017",
      descriptions: [],
      website_link: "",
    },
  ],
};

const certifications = {};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "",
  description:
    "Experienced Frontend Developer with around 6 years of hands-on experience in building performant and scalable web applications using React.js, Next.js, TypeScript, and modern state management tools like Redux and Zustand. Passionate about writing clean, testable code, leading frontend architecture, and mentoring junior developers.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Senior Software Engineer 1 ",
          company: "Gupshup",
          company_url: "https://www.gupshup.io/",
          logo_path: "gupshup.png",
          duration: "Feb 2023 - Present",
          location: "Bangalore, Karnataka",
          description: `Developed and enhanced customer journey builder using React, Next.js, and TypeScript, improving UI performance and maintainability. \n
            Refactored legacy codebase to TypeScript, increasing type safety and reducing runtime errors by 25%.
            Improve page performance by leveraging server components and server side rendering for initial pages which improved performance for 30%.
            Maintained comprehensive documentation of development work, facilitating knowledge sharing among team members.
            Wrote robust unit tests with Jest and Cucumber, achieving 90% test coverage
            Led cross-functional initiatives and mentored junior developers through regular code reviews
            Leverage micro-frontends using webpack module federation`,
          color: "#000000",
        },
        {
          title: "Software Engineer 2",
          company: "Archer",
          company_url: "https://www.archerirm.com/",
          logo_path: "archer.png",
          duration: "Sep 2019 - Feb 2023",
          location: "Bangalore, Karnataka",
          description: `Design and develop interactive dashboards and flexible layouts, enabling users to drag and drop elements for a fully customizable experience.
Migrate and modernize legacy pages by rebuilding them with React, improving maintainability, and user experience.
Mentor and guide interns, through regular code reviews and feedback.`,
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {};

const publications = {};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "tejas_ghibli.jpeg",
    description:
      "I am open to exciting opportunities and challenges. If you have any, you can always reach out to me on Linkedin and Gmail ",
  },
  // blogSection: {
  //   title: "",
  //   subtitle: "",
  //   // link: "https://blogs.ashutoshhathidara.com/",
  //   // avatar_image_path: "blogs_image.svg",
  // },
  // addressSection: {
  //   title: "",
  //   subtitle: "",
  //   // locality: "San Jose",
  //   // country: "USA",
  //   // region: "California",
  //   // postalCode: "95129",
  //   // streetAddress: "Saratoga Avenue",
  //   // avatar_image_path: "address_image.svg",
  //   // location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  // },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
