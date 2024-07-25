/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Sachita",
  logo_name: "Sachita.N()",
  nickname: "",
  full_name: "Sachita Nand",
  subTitle:
    "Full Stack Developer, Learning DevOps. Always exploring new technologies.",
  resumeLink:
    "https://drive.google.com/file/d/13IL7u9vzHbiaQiLO_NeuthI-JRrbmz7z/view?usp=sharing",
  mail: "shachitanandk@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Sachita007",
  linkedin: "https://www.linkedin.com/in/sachita-nand-3a7558224",
  gmail: "shachitanandk@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "",
  instagram: "",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS ",
        "⚡ Backend development using NodeJS, ExpressJS and Flask",
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
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
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
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#FFFFFF",
            backgroundColor: "#1D1D1D",
            borderRadius: "50%",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },

        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },

    {
      title: "Learning DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on CI/CD pipelines",
        "⚡ Familiar with infrastructure as code (IaC) tools",
        "⚡ Basic knowledge of containerization and orchestration",
        "⚡ Beginner-level experience with Kubernetes"
      ],
      softwareSkills: [

        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          "skillName": "Git",
          "fontAwesomeClassname": "simple-icons:git",
          "style": {
            "color": "#F05032"
          }
        },
        {
          "skillName": "Jenkins",
          "fontAwesomeClassname": "simple-icons:jenkins",
          "style": {
            "color": "#D24939"
          }
        },

        {
          "skillName": "Kubernetes",
          "fontAwesomeClassname": "simple-icons:kubernetes",
          "style": {
            "color": "#326CE5"
          }
        },
        {
          "skillName": "Prometheus",
          "fontAwesomeClassname": "simple-icons:prometheus",
          "style": {
            "color": "#E6522C"
          }
        }
      ],
    },

  ],
};

const degrees = {
  degrees: [
    {
      title: "Maharaja Agrasen Institute Of Technology",
      subtitle: "B.Tech. in Computer Science & Technology",
      logo_path: "mait.png",
      alt_name: "MAIT",
      duration: "2021 - Present",
      descriptions: [
        "⚡ Studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ Completed various online courses for Machine Learning, Deep Learning, Web Development, Mobile App Development, etc.",
        "⚡ Implemented several projects based on the curriculum of Computer Science & Technology.",
      ],
      website_link: "https://mait.ac.in/",
    },
    {
      title: "Delhi Model Public School, Koilwar",
      subtitle: "PCM | CBSE 10+2",
      logo_path: "dmps.png",
      alt_name: "DMPS",
      duration: "2018 - 2020",
      descriptions: [
        "⚡ Achieved 84.2% in 12th, ranked in the top 10% of the batch.",
      ],
      website_link: "https://dmps.ac.in/",
    },
    {
      title: "Baldwin Academy, Boring Road",
      subtitle: "CBSE 10th",
      logo_path: "baldwin.png",
      alt_name: "Baldwin",
      duration: "2016 - 2018",
      descriptions: [
        "⚡ Achieved 88.8% in 10th grade.",
      ],
      website_link: "https://baldwinacademy.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [


  ],
};

const experience = {
  title: "Experience",
  subtitle: "Work, Internship",
  description: "I've completed internships and have done numerous projects on my own. I'm actively looking for more internships.",
  header_image_path: "experience.svg",
  sections: [

    {
      title: "Internships",
      experiences: [
        {
          title: "Web Developer Intern",
          company: "OkayG.com",
          company_url: "https://www.okayg.com",
          logo_path: "okayg.png",
          duration: "September 2023 - April 2024",
          location: "Remote",
          description: [
            "⚡ Engineered RESTful APIs using Node.js and Express.js, processing 5,000+ daily API requests.",
            "⚡ Executed comprehensive testing with Jest, enhancing API reliability by 20%.",
            "⚡ Utilized Docker and Docker Swarm for containerization and orchestration, reducing deployment time by 30%.",
            "⚡ Integrated NATS for microservices communication, boosting system efficiency by 15%.",
            "⚡ Created and maintained responsive frontend components with React, improving interface load time by 25%.",
            "⚡ Collaborated remotely with cross-functional teams on RESTful API and frontend design and implementation, increasing team productivity by 15%.",
            "⚡ Conducted debugging and troubleshooting, reducing downtime by 20%.",
            "⚡ Produced detailed technical documentation for APIs and frontend components, streamlining integration and reducing onboarding time by 30%.",
          ],
        },
      ],
    },

  ],
};


// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "sachita.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try my best to write a blog about it.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [

    {
      name: "SCART",
      image: "SCART.png",
      github: "https://github.com/Sachita007/SCART",
      link: "https://scart-e.netlify.app",
      description: "SCART is a modern, responsive e-commerce platform built with React.",

      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        }
      ],
    },
    {
      name: "FakeShopAPI",
      image: "fakeshop.png",
      github: "https://github.com/Sachita007/FakeShopAPI",
      link: "https://fake-shopapi.netlify.app/",
      description: "FakeShopAPI is a free online REST API that you can use whenever you need Pseudo-real data for your e-commerce or shopping website without running any server-side code.",

      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "Tailwind",
          iconifyClass: "devicon-tailwindcss",
        },

      ],
    },
    {
      name: "Accredian-Landing-Page",
      image: "alanding.png",
      github: "https://github.com/Sachita007/Accredian-frontend-task",
      link: "https://accredian-frontend-sachita.netlify.app/",
      description: "Refer And Earn Page Built with React and Tailwind",

      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "Tailwind",
          iconifyClass: "devicon-tailwindcss",
        },
      ],
    },
    {
      name: "NOtp-Landing-Page",
      image: "notp.png",
      github: "https://github.com/Sachita007/NOtp",
      link: "https://notpfront.netlify.app/",
      description: "Refer And Earn Page Built with React and Tailwind",

      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Tailwind",
          iconifyClass: "devicon-tailwindcss",
        },
      ],
    },

    {
      name: "Xpense-Bot",
      image: "xpnse.png",
      github: "https://github.com/Binary-Bats/Xpense_Bot",
      link: "https://github.com/Binary-Bats/Xpense_Bot",
      description: "WhatsApp Expense Tracking Bot",

      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },

        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },

      ],
    },
    {
      name: "Data Landing Page",
      image: "data.png",
      github: "https://github.com/Sachita007/Data-Landing-React-Tailwind",
      link: "https://data-front.netlify.app/",
      description: "Landing Page Built With React and Tailwind",

      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Tailwind",
          iconifyClass: "devicon-tailwindcss",
        },


      ],
    },
    {
      name: "Practice Landing Page",
      image: "prac.png",
      github: "https://github.com/Sachita007/Tailwind-React-landing",
      link: "https://peact-learn.netlify.app/",
      description: "Landing Page Built With React and Tailwind",

      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Tailwind",
          iconifyClass: "devicon-tailwindcss",
        },

      ],
    },


  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
