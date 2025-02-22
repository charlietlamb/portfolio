import { Icons } from "@/components/icons";
import { Brain, HomeIcon, Rabbit, Terminal, Webhook } from "lucide-react";

export const DATA = {
  name: "Charlie Lamb",
  initials: "CL",
  url: "https://charlielamb.dev",
  location: "London, UK",
  locationLink: "https://www.google.com/maps/place/london",
  description: "Software Engineer with a passion for building things.",
  summary:
    "I'm currently working as a Product Engineer at LightWork, an innovative startup focusing on integrating AI & agents into the property sector.",
  avatarUrl: `${process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_URL}/public/portfolio/charlie.JPEG`,
  skills: [
    "Typescript",
    "C#",
    "AWS",
    "Docker",
    "Jenkins CI/CD",
    "React",
    "Node.js",
    "Python",
    "Rust",
    "Unix",
    "Vim",
    "Git",
    "SQL",
  ],
  tech: [
    "Neovim",
    "Cursor",
    "Next.js",
    "Hono",
    "Drizzle",
    "Shadcn",
    "Cloudflare workers",
    "PostgreSQL",
    "TailwindCSS",
    "Better Auth",
    "Vercel",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "charlie@charlielamb.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/charlie-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/charlie-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "LightWork",
      href: "https://lightwork.blue/",
      badges: [],
      location: "London, UK",
      title: "Product Engineer",
      logoUrl: "/lw.avif",
      start: "Feb 2025",
      end: "Present",
      description:
        "Starting Febuary 2025...",
    },
    {
      company: "Spark Finance",
      href: "https://www.sparkfinance.co.uk/",
      badges: [],
      location: "London, UK",
      title: "Graduate Software Engineer",
      logoUrl: "/spark.jpeg",
      start: "Sept 2024",
      end: "Feb 2025",
      description:
        "At Spark, I've been involved in building several .NET microservices, with the PreQualification.Check service being my most significant contribution. This service orchestrates multiple systems to evaluate client loan eligibility and has become an essential part of the internal sales process, triggered for every new lead. I've thoroughly enjoyed tackling backend challenges, honing my C# skills, and delivering a solutions that directly impact the business.",
    },
    {
      company: "Cisco - Ensoft",
      badges: [],
      href: "https://www.cisco.com",
      location: "Harpenden, UK",
      title: "Internship",
      logoUrl: "/cisco.webp",
      start: "Aug 2023",
      end: "Sept 2023",
      description:
        "During my internship at Cisco, I created a Python tool that monitors the performance and progress of various teams and leaders across the organisation. Meeting Cisco's internal standards was a challenging but rewarding experience that significantly improved my engineering skills. The tool remains in active use by the Ensoft team, which is something I'm proud of.",
    },
  ],
  education: [
    {
      school: "University of Leeds",
      href: "https://leeds.ac.uk",
      degree: "Bachelor's Degree of Computer Science & Mathematics",
      logoUrl: "/leeds.png",
      start: "2021",
      end: "2024",
    },
    {
      school: "Roundwood Park School",
      href: "https://roundwoodpark.co.uk/",
      degree:
        "A-Levels: A* Computer Science, Mathematics, Further Mathematics, Economics",
      logoUrl: "/rps.svg",
      start: "2014",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Review Rabbit",
      href: "https://www.reviewrabbit.uk",
      dates: "December 2024 - Present",
      active: true,
      description:
        "Engineered a comprehensive Google Review management platform that enables local businesses to streamline their customer feedback process. The solution allows organisations to import customer data and identify those who have yet to leave reviews. Features include automated multi-channel outreach via email, WhatsApp and SMS, alongside sophisticated review analytics and response management tools to help businesses maintain their online reputation. This project is currently in development and being migrated to cloudflare workers - hence only the landing page is currently working.",
      technologies: [
        "Next.js",
        "React",
        "Typescript",
        "Turborepo",
        "PostgreSQL",
        "DrizzleORM",
        "Hono",
        "TailwindCSS",
        "Trigger.dev",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.reviewrabbit.uk",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/charlietlamb/review-rabbit",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
      icon: <Rabbit className="size-10" />,
    },
    {
      title: "Remio",
      href: "https://remio.xyz",
      dates: "September 2024 - December 2024",
      active: true,
      description:
        "Developed a full-stack CRM system tailored for mediators, featuring client management, scheduling, and invoicing capabilities. Designed a robust backend API using TypeScript with Hono for routing and OpenAPI for documentation. Integrated a responsive front-end built with React, Next.js, and TailwindCSS.",
      technologies: [
        "Next.js",
        "React",
        "Typescript",
        "Turborepo",
        "PostgreSQL",
        "DrizzleORM",
        "Hono",
        "Cloudflare Workers",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://remio.xyz",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/charlietlamb/remio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: `${process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_URL}/public/portfolio/remio.mov`,
      icon: null,
    },
    {
      title: "Calendar",
      href: "https://calendar-shadcn.vercel.app/",
      dates: "October 2024",
      active: true,
      description:
        "When I was developing Remio I needed a full calendar component. I couldn't find an adequate open source solution which displayed days, weeks and months. I decided to build my own. My solution is now used in hundreds of projects.",
      technologies: [
        "Next.js",
        "React",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://calendar-shadcn.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/charlietlamb/calendar",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: `${process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_URL}/public/portfolio/calendar.mov`,
      icon: null,
    },
    {
      title: "Tracta",
      href: "https://github.com/charlietlamb/tracta",
      dates: "July 2024 - August 2024",
      active: true,
      description:
        "Built a document creation platform inspired by Webflow, using React, TailwindCSS, and Node.js. Focused on delivering a seamless user experience for document generation, enabling users to efficiently design documents.",
      technologies: [
        "Next.js",
        "React",
        "Typescript",
        "Supabase",
        "PostgreSQL",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/charlietlamb/tracta",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: `${process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_URL}/public/portfolio/tracta.png`,
      video: "",
      icon: null,
    },
    {
      title: "Command Line Interface",
      href: "https://github.com/charlietlamb/cli-utils",
      dates: "July 2024 - August 2024",
      active: true,
      description:
        "Created a custom CLI in Rust to deepen my understanding of shell commands like grep and find. The project provided hands-on experience in systems programming and enhanced my proficiency with Rust while reinforcing key concepts from The Rust Programming Language book.",
      technologies: ["Rust", "CLI", "Unix", "Systems Programming"],
      links: [
        {
          type: "Source",
          href: "https://github.com/charlietlamb/cli-utils",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
      icon: <Terminal className="size-10" />,
    },
    {
      title: "Neural Network Implementation",
      href: "https://github.com/charlietlamb/rust_neuro",
      dates: "June 2024 - July 2024",
      active: true,
      description:
        "Implemented a neural network from scratch in Rust after studying Andrej Karpathy's educational videos on deep learning. This project served as a natural progression from my CLI tool and provided practical experience with core concepts in machine learning, including backpropagation.",
      technologies: [
        "Rust",
        "Machine Learning",
        "Neural Networks",
        "Backpropagation",
        "AI Optimisation",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/charlietlamb/rust_neuro",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
      icon: <Brain className="size-10" />,
    },
    {
      title: "Dissertation",
      href: "https://github.com/charlietlamb/diss",
      dates: "January 2024 - June 2024",
      active: true,
      description:
        "Conducted an in-depth study on Next.js, comparing the performance and user experience benefits of client-side rendering versus server-side rendering. Analysed various web analytics metrics and their impact on rendering strategies. Achieved a grade of 75%.",
      technologies: [
        "Next.js",
        "Web Analytics",
        "Performance Optimisation",
        "React",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/charlietlamb/diss",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
      icon: <Webhook className="size-10" />,
    },
  ],
} as const;
