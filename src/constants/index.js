
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
    nextjs,
    meta,
    starbucks,
    shopify,
    tesla,
    carrent,
    jobit,
    tripguide,
    threejs,
    thivstan,
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
    {
      id:"resume",
      title: "Resume",
      url:"https://drive.google.com/file/d/1X7BEIhjLfnpnEwcBZIXbNsD1V5DIS989/view?usp=sharing",
    },
    {
      id:"linkedin",
      title:"Linkedin",
      url:"https://www.linkedin.com/in/ratnesh-pawar/",
    },
  ];
  
  const services = [
    {
      title: "Software Engineer",
      icon: web,
    },
    {
      title: "Full-Stack Developer",
      icon: mobile,
    },
    {
      title: "Problem Solver",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
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
    {
      name: "nextjs",
      icon: nextjs,
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
      title: "Teaching Assistant",
      company_name: "California State University, Dominguez Hills",
      icon: starbucks,
      iconBg: "#383E56",
      date: "January 2024 - May 2024",
      points: [
        " Enhance graduate students’ knowledge and encourage critical thinking by developing assignments for the application of software engineering, QA and testing best practices for 70+ graduate students.",
        "Assess and analyze student performance by developing 7+ comprehensive tests and assignments and grading tests.",
        "Prepare students to apply QA and testing in real-world scenarios by developing and guiding collaborative projects.",
      ],
    },
    {
      title: "Student Assistant",
      company_name: "California State University, Dominguez Hills",
      icon: starbucks,
      iconBg: "#383E56",
      date: "January 2023 - Present",
      points: [
        " Increase user engagement with website 25% by redesigning user interface for 5+ web pages and debugging links to ensure functionality and enhance user experience",
        " Reduce manual workload for equipment loans and registration 18% by implementing automation tools, integrations with external tools for inventory management, and identifying solutions to inventory management issues",
        "  Boosted efficiency of classroom management system 15% by developing algorithm to analyze classroom availability data, implementing notion tables to display real-time information, and implementing solutions to availability problems",
      ],
    },
    {
      title: "Software Engineering Fellow",
      company_name: "Headstarter AI",
      icon: meta,
      iconBg: "#383E56",
      date: "July 2024 - Present",
      points: [
        " Building 5 AI projects in 7 weeks and shipping them to 1000+ users, Utilizing Technologies like NextJs, Open AI, Pinecone, StripeAPI",
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
    {
      testimonial:
        "Ratnesh not only demonstrated technical excellence but also showcased outstanding leadership qualities during our Colosseum project at CSUDH. His adept project management skills, combined with a versatile working knowledge of multiple languages such as TypeScript and React, as well as proficient API handling, made him an invaluable leader. Ratnesh's ability to navigate diverse technical aspects while steering the project with precision highlighted his leadership in orchestrating a cohesive and successful team effort.",
      name: "Thivstan Vishal James",
      designation: "Software Engineer",
      image: thivstan,
    },
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
      name: "RapidRecap-AI Summarizer",
      description:
        "RapidRecap is a fast and efficient open-source AI summarization web app. It swiftly condenses lengthy texts into concise and insightful summaries using advanced natural language processing.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "ReactJs",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ], 
      image: shopify,
      source_code_link: "https://github.com/ratneshpawar1/AI-Summarizer",
    },

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