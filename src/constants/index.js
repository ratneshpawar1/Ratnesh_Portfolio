import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    shopify,
    tesla,
    carrent,
    jobit,
    tripguide,
    threejs,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Full-Stack Developer",
      icon: mobile,
    },
    {
      title: "Machine Learning Engineer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "python",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Sofware Developer Intern",
      company_name: "iBase Electrosoft",
      icon: tesla,
      iconBg: "#383E56",
      date: "Jan 2022 - July 2022",
      points: [
        "Developing and maintaining projects using JavaScript/Css and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Migrated legacy applications from AngularJS to React and used AWS EC2 instances for deployment.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Student Assistant",
      company_name: "California State University, Dominguez Hills",
      icon: starbucks,
      iconBg: "#383E56",
      date: "August 2023 - Present",
      points: [
        " Achieved a 95% resolution rate for IT-related issues, ensuring professors and students experienced minimal disruptions in classroom activities.",
        "Improved website user engagement by 30% through regular updates, resulting in increased access to course materials and resources.",
        " Contributed to a 25% increase in event attendance through effective digital content creation and online registration management, enhancing departmental event outcomes.",
        "Automated 50% of the Departmental tasks like Workshop Registration, Student Checklist, Class Schedule, etc.",
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "I had the pleasure of having Ratnesh as a Software Developer Intern at iBase. His frontend development skills improved user engagement, and his role in migrating legacy applications to React and deploying on AWS was impressive. Ratnesh is a talented and dedicated software developer.",
      name: "Nakul Deshmukh",
      designation: "CEO",
      company: "iBase Electrosoft",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
//    {
//      testimonial:
//        "I've never met a web developer who truly cares about their clients' success like Rick does.",
//      name: "Chris Brown",
//      designation: "COO",
 //     company: "DEF Corp",
 //     image: "https://randomuser.me/api/portraits/men/5.jpg",
//    },
//    {
//      testimonial:
 //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//      name: "Lisa Wang",
 //     designation: "CTO",
 //     company: "456 Enterprises",
 //     image: "https://randomuser.me/api/portraits/women/6.jpg",
 //   },
  ];
  
  const projects = [
    {
      name: "Colosseum",
      description:
        "Web-based platform that allows users to watch youtube videos and videos from the internet together, with features like text and audio/video chat.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "typescript",
          color: "blue",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/ratneshpawar1/colosseum",
    },
    {
      name: "CyberBullying Detection In Social Media.",
      description:
        "A machine Learning Model Which can detect Cyber-Bullying Content with accuracy of 90%. It allows to divide the dataset in percentage and shows the result in graphical format.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "nlp",
          color: "green-text-gradient",
        },
        {
          name: "machinlearning",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/ratneshpawar1/Cyber-bullying-detection-",
    },
    {
      name: "Gesture Controlled Car Game",
      description:
        "Successfully created an interactive gesture-based video game using Python, comprising three main phases: developed a hand pose recognition program, designed an engaging car game, and seamlessly integrated both programs to deliver an immersive gaming experience. This project showcased a practical application of Python programming skills and a passion for innovative game development.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "numpy",
          color: "green-text-gradient",
        },
        {
          name: "opencv",
          color: "pink-text-gradient",
        },
      ], 
      image: tripguide,
      source_code_link: "https://github.com/ratneshpawar1/Gesture-conrtolled-car-game",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };