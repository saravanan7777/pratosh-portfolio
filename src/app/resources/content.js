import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Pratosh",
  lastName: "R",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "UI UX Designer",
  avatar: "/images/avatar.jpg",
  email: "pratosh2198@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Tamil"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/pratosh-r-009798217/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>When aesthetics meet logic, that’s where I design.</>,
  featured: {
    display: true,
    title: <>Recent project</>,
    href: "https://www.figma.com/proto/FnTlvENQhruuZHim5xEmnq/Workfiles?content-scaling=fixed&kind=proto&node-id=465-15&page-id=465%3A14&scaling=scale-down-width",
  },
  subline: (
    <>
      I'm Pratosh — a UX Designer, Digital & Wall Artist.
      <br /> I craft engaging experiences that bridge the digital and physical worlds.


    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Pratosh R, a creative and task-oriented designer with a passion for human psychology and design. I thrive in collaborative, fast-paced environments, always seeking to deliver impactful and revolutionary experiences. Inspired by Don Norman's approach to design thinking, I aim to create solutions that address root problems for meaningful social impact.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Ingeniator Software",
        timeframe: "2023 - Present",
        role: "UX UI Designer",
        achievements: [
         <>
         Working on Jira to create and manage
          project tasks, ensuring timely completion
          and efficient workflow tracking
          </>,
          <>
          Develop and execute usability tests,
          analyzing results to identify pain points
          and areas for improvement
          </>,
          <>
          Improved product usability by 25% through
          targeted research and iterative testing.
         </>
        ],
        images: [],
      },
      {
        company: "Gp Global",
        timeframe: "2021 - 2023",
        role: "UX UI Designer",
        achievements: [
          <>
            3D object making and graphical
            designing for the required project.
          </>,
          <>
             Development of Mobile app designs and
            website pages through understanding the
            user experience and presenting case study.
          </>,
          <>Transition of consumer inclined data to
            application.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Kumaraguru College of Technology",
        description: <>Bachelor of Engineering - BE, Aeronautical/Aerospace Engineering Technology
        <br/>
        Aug 2016 - Jul 2020</>,
      },
      


    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        images: [],
      },
      {
        title: "3D Animations",
        description: <>Bringing ideas to life with dynamic 3D motion and visual storytelling.</>,
        images: [],
      },
      
      {
        title: "Interface Designs",
        description: <>Designing intuitive, user-centric interfaces that balance form and function.</>,
        images: [],
      },
      {
        title: "Wireframe Tools",
        description: <>Efficient in creating wireframes and user flows for streamlined UX planning.</>,
        images: [],
      },
      {
        title: "Adobe Photoshop",
        description: <>Editing and composing visuals with precision for impactful designs.</>,
        images: [],
      },
      
      {
        title: "Adobe Illustrator",
        description: <>Creating scalable vector graphics and detailed illustrations for web and print.</>,
        images: [],
      },
      {
        title: "Adobe XD",
        description: <>Prototyping and designing user interfaces with interactive flows and consistency.</>,
        images: [],
      },
      {
        title: "Adobe Dimensions",
        description: <>Visualizing 3D mockups and packaging with realistic lighting and angles.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};
const BlenderModels= {
  path: "/BlenderModels",
  label: "Blender Models",
  title: `BlenderModels – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};
const wallart = {
  path: "/wallart",
  label: "Art",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};
const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    
    {
      src: "/images/gallery/1.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    
    {
      src: "/images/gallery/2.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/3-cropped.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/4-cropped.jpg",
      alt: "image",
      orientation: "vertical",
    },
    
    {
      src: "/images/gallery/5.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/6-cropped.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/7-cropped.jpg",
      alt: "image",
      orientation: "vertical",
    },
    
    {
      src: "/images/gallery/8-cropped.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/9-cropped.jpg",
      alt: "image",
      orientation: "vertical",
    },
    
    
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery,wallart ,BlenderModels};
