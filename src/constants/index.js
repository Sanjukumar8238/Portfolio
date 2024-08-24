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
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  amazon,
  empmanage,
  SDG,
  chat,
  stock,
  seizure,
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
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Data Engineer",
    icon: backend,
  },
  {
    title: "Machine Learning Engineer",
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
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
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
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Development Engineer Intern",
    company_name: "Amazon",
    icon: amazon,
    iconBg: "#E6DEDD",
    date: "May 2023 - July 2023",
    points: [
      "Implemented feature toggling using react-feature-flags to manage feature visibility during runtime, enabling testing and gradual rollouts of new features.",
      "Utilized FlagsProvider and React context to efficiently pass and manage feature flags across the application, enhancing flexibility and control over feature deployment.",
      "Integrated feature toggles with existing CI/CD pipelines, ensuring smooth and controlled feature activation and deactivation based on authorized user roles and conditions.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Real Time Chat App",
    description:
      "A real-time chat application that facilitates instant messaging and online user status management. The app features robust authentication and authorization using JWT, real-time communication with Socket.io, and a responsive design powered by TailwindCSS and Daisy UI, ensuring a seamless and secure user experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "text-yellow-500",
      },
    ],
    image: chat,
    source_code_link: "https://github.com/Sanjukumar8238/ChatApp",
  },
  {
    name: "Employee Management System",
    description:
      "The Employee Management System is a comprehensive solution designed to streamline HR operations by tracking attendance, automating salary and bonus calculations, assigning tasks, and publishing notices online, enhancing overall workplace efficiency and communication.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap 5.0",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "text-yellow-500",
      },
    ],
    image: empmanage,
    source_code_link:
      "https://github.com/Sanjukumar8238/Employee_Management_system",
  },
  {
    name: "SDG-Progress-Predictor",
    description:
      "A data-driven analysis framework to assess progress towards Sustainable Development Goals (SDGs) by aggregating and analyzing datasets from NITI Aayog, offering insights into current trends, predicting future outcomes, and identifying key factors influencing the achievement of these global objectives.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "pink-text-gradient",
      },
    ],
    image: SDG,
    source_code_link:
      "https://github.com/Sanjukumar8238/SDG-Progress-Predictor",
  },
  {
    name: "Stock Price Predictor",
    description:
      "This project focuses on forecasting the stock prices of 'The State Bank of India' using an array of cutting-edge machine learning regression algorithms. By integrating techniques such as Linear Regression, SVR, Random Forest, and LSTM, the project strives to enhance prediction precision and deliver insightful analyses that can drive informed investment decisions.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Jupyter",
        color: "green-text-gradient",
      },
    ],
    image: stock,
    source_code_link: "https://github.com/Sanjukumar8238/Stock-Price-Predictor",
  },
  {
    name: "Seizure Detection",
    description:
      "This project applies the Empirical Wavelet Transform (EWT) method to EEG signal data to detect and classify epileptic seizures. The EWT method is an adaptive signal decomposition technique that is particularly effective for analyzing nonlinear and non-stationary signals, such as EEG data.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],
    image: seizure,
    source_code_link: "https://github.com/Sanjukumar8238/Stock-Price-Predictor",
  },
  {
    name: "CNC Plotter",
    description:
      "A computer-controlled device used for drawing or plotting complex designs or patterns on various surfaces such as paper, fabric, and other materials. The system integrates with digital design software to translate digital patterns into physical outputs, enhancing creative possibilities and production efficiency.",
    tags: [
      {
        name: "Arduino",
        color: "blue-text-gradient",
      },
      {
        name: "Universal Gcode Sender",
        color: "green-text-gradient",
      },
    ],
    image: SDG,
    source_code_link:
      "https://github.com/Sanjukumar8238/SDG-Progress-Predictor",
  },
];

export { services, technologies, experiences, testimonials, projects };
