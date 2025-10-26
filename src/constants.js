// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';

// Experience Section Logo's
import meandersoftware from './assets/company_logo/meandersoftware_logo.jpg';

// Education Section Logo's
import IIMT from './assets/education_logo/IIMT_logo.jpg';
import Shri_Ram_college from './assets/education_logo/Shri_Ram_College_logo.avif';

// Project Section Logo's
import fashionstore from './assets/work_logo/fashion_logo.png';
// import csprepLogo from './assets/work_logo/cs_prep.png';
// import movierecLogo from './assets/work_logo/movie_rec.png';
// import taskremLogo from './assets/work_logo/task_rem.png';
// import npmLogo from './assets/work_logo/npm.png';
// import webverLogo from './assets/work_logo/web_dig.png';
// import cmLogo from './assets/work_logo/cm.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
    ],
  },
];

  export const experiences = [
  
    {
      id: 0,
      img: meandersoftware,
      role: "Industrial Training (MERN Stack Develepment )",
      company: "Meander Software Pvt. Ltd.",
      date: "Feb 2025 – Sep 2025",
      desc: "I worked on full-stack web development using MongoDB, Express.js, React.js, and Node.js. I developed and optimized responsive web applications following modern UI/UX principles, integrated RESTful APIs, and implemented CRUD operations to enhance functionality. Throughout the internship, I collaborated closely with the development team using Git and GitHub for version control and gained valuable hands-on experience in frontend frameworks, backend APIs, and database management.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "React Js",
        "Node Js",
        "Express Js",
        "MongoDB",
      ],
    },
  ];
  
  export const education = [
    {
      id: 1,
      img: IIMT,
      school: "IIMT UNIVERSITY",
      date: "Sept 2023 - July 2025",
      grade: "Pending",
      desc: "I have completed my Master's degree (MCA) in Computer Applications from IIMT University, Meerut. During my time at IIMT , I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops , which enhanced my skills and knowledge. My experience at IIMT University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: Shri_Ram_college,
      school: "Shree Ram College, Muzaffarnagar",
      date: "Sept 2020 - Aug 2023",
      grade: "64.2%",
      desc: "I completed my Bachelor's degree in Computer Science (BCA) from Shree Ram College, Muzaffarnagar. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Shree Ram College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Computer Science - BCA",
    },
   
  ];
  
  export const projects = [
    {
      id: 0,
      title: "fashion-store",
      description:
        "A modern and responsive React.js e-commerce website showcasing men’s and women’s fashion collections. It offers smooth browsing, detailed product pages, and a clean, user-friendly shopping experience.",
      image: fashionstore,
      tags: ["HTML", "CSS", "JavaScript", "React JS"],
      github: "https://github.com/mukulrajput0/fashion-store",
      // webapp: "https://githubprofiledetective.netlify.app/",
    },
    // {
    //   id: 8,
    //   title: "Image Background Remover",
    //   description:
    //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    //   image: removebgLogo,
    //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Background-Remover",
    //   webapp: "https://removeyourbg.netlify.app/",
    // },
  ];  