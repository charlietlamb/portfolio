import { Icons } from '@/components/icons'
import { HomeIcon, NotebookIcon } from 'lucide-react'

export const DATA = {
  name: 'Charlie Lamb',
  initials: 'CL',
  url: 'https://charlielamb.dev',
  location: 'London, UK',
  locationLink: 'https://www.google.com/maps/place/london',
  description: 'Software Engineer with a passion for building things.',
  summary:
    "I'm currently a graduate software engineer at Spark Finance, where I work on a variety of .NET microservices. At work I focus on backend development howver I enjoy bringing both the frontend and backend together in my personal projects. I spend my spare time hacking on a variety of open source full stack Typescript projects, my favourites are shown below.",
  avatarUrl: '/charlie.jpeg',
  skills: [
    'C#',
    'AWS',
    'Docker',
    'Jenkins CI/CD',
    'Typescript',
    'React',
    'Node.js',
    'Python',
    'Unix',
    'Vim',
    'SQL',
  ],
  tech: [
    'Neovim',
    'Cursor',
    'Next.js',
    'Hono',
    'Drizzle',
    'Shadcn',
    'Rust',
    'Cloudflare workers',
    'PostgreSQL',
    'TailwindCSS',
    'Better Auth',
    'Vercel',
  ],
  navbar: [{ href: '/', icon: HomeIcon, label: 'Home' }],
  contact: {
    email: 'charlie@charlielamb.com',
    tel: '+123456789',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://dub.sh/charlie-github',
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://dub.sh/charlie-linkedin',
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: '#',
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: 'Spark Finance',
      href: 'https://www.sparkfinance.co.uk/',
      badges: [],
      location: 'London, UK',
      title: 'Graduate Software Engineer',
      logoUrl: '/spark.jpeg',
      start: 'Sept 2024',
      end: 'Present',
      description:
        "So far at Spark, I've worked on a variety of .NET microservices. My most notable contribution has been the PreQualification.Check service. This itself leverages a number of other services to check a client's eligibility for a loan and is now a focal point in the workflow for the internal sales team, with the service being called for each new lead. I've really enjoyed working with C# and improving my backend skills.",
    },
    {
      company: 'Cisco - Ensoft',
      badges: [],
      href: 'https://www.cisco.com',
      location: 'Harpenden, UK',
      title: 'Internship',
      logoUrl: '/cisco.webp',
      start: 'Aug 2023',
      end: 'Sept 2023',
      description:
        'During my internship at Cisco I leveraged my Python experience to build a tool which monitors the progress of other groups, teams, leaders and employees. Meeting the Cisco standards meant I learned a lot during these months and came out a far better software engineer. The tool is still used internally by the Ensoft team.',
    },
  ],
  education: [
    {
      school: 'University of Leeds',
      href: 'https://leeds.ac.uk',
      degree: "Bachelor's Degree of Computer Science & Mathematics (BCS)",
      logoUrl: '/leeds.png',
      start: '2021',
      end: '2024',
    },
    {
      school: 'Roundwood Park School',
      href: 'https://roundwoodpark.co.uk/',
      degree:
        'A-Levels: A* Computer Science, Mathematics, Further Mathematics, Economics',
      logoUrl: '/rps.svg',
      start: '2014',
      end: '2021',
    },
  ],
  projects: [
    {
      title: 'Remio',
      href: 'https://remio.xyz',
      dates: 'Oct 2024 - Dec 2024',
      active: true,
      description:
        'Remio is a CRM for mediators. It allows you to add clients, schdule mediation, track invoices and more. The backend is a hono api, complete with an Open API specification. I used drizzle to communicate with my postgres database. The frontend is a Nextj.js app, using tailwindcss and shadcn ui.',
      technologies: [
        'Next.js',
        'React',
        'Typescript',
        'Neon',
        'PostgreSQL',
        'Drizzle',
        'Hono',
        'Cloudflare Workers',
        'TailwindCSS',
        'Stripe',
        'Shadcn UI',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://remio.xyz',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Source',
          href: 'https://github.com/charlietlamb/remio',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '',
      video: `${process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_URL}/public/portfolio/remio.mov`,
    },
    {
      title: 'Calendar',
      href: 'https://calendar-shadcn.vercel.app/',
      dates: 'Oct 2024 - Dec 2024',
      active: true,
      description:
        "When I was developing Remio I needed a full calendar component. I couldn't find an adequate open source solution which displayed days, weeks and months. I decided to build my own. My solution is now used in over 30+ projects by other developers.",
      technologies: [
        'Next.js',
        'React',
        'Typescript',
        'TailwindCSS',
        'Shadcn UI',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://calendar-shadcn.vercel.app/',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Source',
          href: 'https://github.com/charlietlamb/calendar',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '',
      video: `${process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_URL}/public/portfolio/calendar.mov`,
    },
    {
      title: 'Tracta',
      href: 'https://github.com/charlietlamb/tracta',
      dates: 'July 2024 - August 2024',
      active: true,
      description:
        'I used to make my websites with Webflow and had no idea how it worked under the hood. To challenge myself, I deciede to make a webflow like app to create documents. Although I never launched the application, I learned a lot so much about frontend development and now feel confident taking on any frontend project.',
      technologies: [
        'Next.js',
        'React',
        'Typescript',
        'Supabase',
        'PostgreSQL',
        'TailwindCSS',
        'Shadcn UI',
      ],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/charlietlamb/tracta',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: `${process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_URL}/public/portfolio/tracta.png`,
      video: '',
    },
  ],
} as const
