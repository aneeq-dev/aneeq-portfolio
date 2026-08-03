export const profile = {
  name: "Aneeq Ahmad",
  firstName: "Aneeq",
  lastName: "Ahmad",
  role: "Senior Full-Stack Engineer",
  location: "Lahore, Punjab, Pakistan",
  years: 6,
  email: "aneeqahmad826@gmail.com",
  phone: "+92 313 7390852",
  resumeUrl: "#",
  resumes: [
    {
      label: "Full-Stack Engineer",
      description: "End-to-end web, APIs & SaaS platforms",
      href: "/resumes/FULLSTACK ENGINEER.pdf",
    },
    {
      label: "Frontend & Next.js Specialist",
      description: "React, Next.js & UI architecture focus",
      href: "/resumes/Frontend & Next.js Specialist.pdf",
    },
    {
      label: "Mobile & Full-Stack",
      description: "React Native + web apps & games",
      href: "/resumes/Mobile & Full-Stack(React Native + Web).pdf",
    },
  ],
  heroIntro: "HELLO, I'M",
  heroBio:
    "Senior Full-Stack & Mobile Engineer with over 6 years of experience architecting high-performance web and cross-platform apps across Fintech, Healthcare, and EdTech. Specialized in TypeScript, Next.js, React, React Native, Node.js, and NestJS — delivering multi-tenant SaaS, mobile games, and payment workflows from product vision to production.",
  aboutTitle: "Full-Stack, Frontend & Mobile Engineer",
  aboutBody:
    "I build end-to-end products — from SSR-optimized Next.js portals and design systems to NestJS/Node APIs, Neon/Postgres data layers, and React Native apps and games published on Google Play. Proven at transforming product vision into maintainable, scalable, and WCAG-compliant software while leading Agile teams.",
  aboutPoints: [
    "TypeScript full-stack with Next.js 15 App Router, React, Tailwind, shadcn/ui, and motion/animations",
    "Type-safe APIs with tRPC + Zod; Drizzle ORM on Neon Postgres with pgvector",
    "Mobile game development with React Native — puzzles, arcade modes, streaks, and Play Store releases",
    "Clerk auth, Stripe Connect, SaaS billing (Dodo), and Calendly booking for multi-tenant products",
    "Cross-platform React Native + Android apps with offline storage and push notifications",
    "Structured logging, rate-limit-safe integrations, Vitest/Playwright, and GitHub Actions / Vercel CI/CD",
  ],
  socials: [
    {
      name: "GitHub",
      href: "https://github.com/aneeq-dev",
      icon: "github" as const,
      tooltip: "View my code & open-source work on GitHub",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/aneeqahmad826",
      icon: "linkedin" as const,
      tooltip: "Connect with me on LinkedIn",
    },
    {
      name: "Play Store",
      href: "https://play.google.com/store/apps/developer?id=ManXen&hl=en",
      icon: "playstore" as const,
      tooltip: "Browse my apps & games on Google Play (ManXen)",
    },
    {
      name: "Calendly",
      href: "https://calendly.com/aneeqahmad826/30min",
      icon: "calendly" as const,
      tooltip: "Book a 30-minute call on Calendly",
    },
    {
      name: "Phone",
      href: "tel:+923137390852",
      icon: "phone" as const,
      tooltip: "Call +92 313 7390852",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/923137390852",
      icon: "whatsapp" as const,
      tooltip: "Chat on WhatsApp",
    },
    {
      name: "Upwork",
      href: "https://www.upwork.com/freelancers/~017f1bfe846f041369",
      icon: "upwork" as const,
      tooltip: "Hire me on Upwork",
    },
    {
      name: "Email",
      href: "mailto:aneeqahmad826@gmail.com",
      icon: "mail" as const,
      tooltip: "Email me at aneeqahmad826@gmail.com",
    },
  ],
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Resume", href: "#resume" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "End-to-end platforms with Next.js, NestJS, Node.js, and PostgreSQL/MongoDB — multi-tenant SaaS, admin portals, and high-uptime production systems.",
    icon: "code" as const,
  },
  {
    title: "Frontend & Next.js",
    description:
      "SSR/SSG-optimized React and Next.js 14+ apps with Tailwind, Shadcn, Material UI, Zustand/Redux, and WCAG-compliant design systems.",
    icon: "palette" as const,
  },
  {
    title: "React Native Apps & Games",
    description:
      "Cross-platform utility apps and mobile games — React Navigation, offline saves, push notifications, gameplay loops, and Google Play publishing.",
    icon: "smartphone" as const,
  },
  {
    title: "API & Microservices",
    description:
      "Secure, scalable REST and GraphQL APIs, Socket.io realtime channels, JWT auth, and containerized microservice architectures.",
    icon: "network" as const,
  },
  {
    title: "Payments & Fintech",
    description:
      "Stripe and PayFast integrations for multi-currency checkout, recurring billing, and transaction dashboards for fintech products.",
    icon: "creditcard" as const,
  },
  {
    title: "Team Leadership",
    description:
      "Agile/Scrum sprint ownership — standups, PR reviews, mentoring, and shipping on 2-week cycles with cross-functional collaboration.",
    icon: "users" as const,
  },
];

export const experiences = [
  {
    company: "InvoZone",
    role: "Senior Full-Stack Engineer",
    period: "Sep 2021 – Present",
    bullets: [
      "Architecting scalable multi-tenant platforms (Phynd TV, Alnayzak, MilTech LMS) with Next.js, NestJS, and Node.js — cutting core response times by 30%.",
      "Engineering e-commerce and fintech apps (Gul-e-Raana, Orenda) with Next.js 14, PERN stack, and PayFast/Stripe payments for sub-second page transitions.",
      "Designing microservices and REST/GraphQL APIs with 99.9% uptime and WCAG-compliant web interfaces.",
      "Optimizing frontend bundles and MongoDB/PostgreSQL queries, improving performance scores by 40%.",
      "Leading Agile/Scrum sprint workflows with product managers and engineers on 2-week delivery cycles.",
    ],
  },
  {
    company: "Eritheia Labs",
    role: "React & React Native Developer",
    period: "May 2021 – Aug 2021",
    bullets: [
      "Delivered commercial web and cross-platform mobile apps with React, React Native, and JavaScript within strict 4-month client deadlines.",
      "Built reusable UI component libraries and REST API integrations, reducing UI bug reports by 25%.",
      "Optimized navigation and state with React Navigation and Redux, achieving smooth 60 FPS on iOS and Android.",
      "Translated UI/UX wireframes into pixel-perfect, responsive client interfaces.",
    ],
  },
  {
    company: "Wakandha",
    role: "Full-Stack MERN Developer",
    period: "Dec 2020 – Mar 2021",
    bullets: [
      "Spearheaded full-stack development for a social networking mobile platform using MongoDB, Express, React Native, and Node.js.",
      "Managed a developer team via daily standups, sprint task delegation, and pull-request reviews.",
      "Implemented realtime messaging, notifications, and JWT auth with WebSockets/Socket.io.",
      "Optimized MongoDB aggregation pipelines, cutting media feed load times by 35%.",
    ],
  },
];

export const education = [
  {
    school: "COMSATS University, Islamabad",
    degree: "Bachelor of Science in Computer Science (BSCS Hons.)",
    period: "2017 – 2021",
    details:
      "Computer science fundamentals, software engineering, and full-stack application development.",
  },
  {
    school: "Superior Group of Colleges",
    degree: "Intermediate in Computer Science (ICS)",
    period: "2014 – 2016",
    details:
      "Pre-university computer science track covering programming foundations and computing concepts.",
  },
];

export const skillCategories = [
  "All",
  "Frontend",
  "Backend",
  "Mobile",
  "Data",
  "Cloud",
  "Auth & Billing",
  "Testing & Ops",
  "Architecture",
] as const;

export type SkillCategory = (typeof skillCategories)[number];

export const skills: {
  name: string;
  icon: string;
  category: Exclude<SkillCategory, "All">;
  description: string;
  keywords?: string[];
}[] = [
  {
    name: "TypeScript (Full-Stack)",
    icon: "/img/icons/ts-brand.svg",
    category: "Frontend",
    description: "End-to-end typed applications — shared types from UI to APIs, fewer runtime bugs, and safer refactors across the stack.",
    keywords: ["typescript", "ts", "full-stack"],
  },
  {
    name: "JavaScript",
    icon: "/img/icons/js-brand.svg",
    category: "Frontend",
    description: "Modern ES6+ for interactive UIs, async flows, and browser APIs — the foundation of every web and React Native project.",
    keywords: ["js", "es6"],
  },
  {
    name: "Next.js 15 (App Router)",
    icon: "/img/icons/next-brand.svg",
    category: "Frontend",
    description: "Server Components, streaming, SSR/SSG, and route handlers to ship fast, SEO-friendly apps with App Router patterns.",
    keywords: ["next", "ssr", "app router"],
  },
  {
    name: "React",
    icon: "/img/icons/react-brand.svg",
    category: "Frontend",
    description: "Composable component architecture, hooks, and client state for polished, accessible product interfaces.",
    keywords: ["react", "ui"],
  },
  {
    name: "Tailwind CSS",
    icon: "/img/icons/tailwind-brand.svg",
    category: "Frontend",
    description: "Utility-first styling for rapid, consistent design systems without fighting CSS specificity.",
    keywords: ["tailwind", "css"],
  },
  {
    name: "shadcn/ui",
    icon: "/img/icons/shadcn.svg",
    category: "Frontend",
    description: "Accessible, copy-paste component primitives built on Radix — production UI without reinventing the wheel.",
    keywords: ["shadcn", "design system", "components"],
  },
  {
    name: "Animations",
    icon: "/img/icons/animation.svg",
    category: "Frontend",
    description: "Motion that guides attention — micro-interactions, page transitions, and presence without noisy effects.",
    keywords: ["motion", "framer", "animation"],
  },
  {
    name: "Bootstrap",
    icon: "/img/icons/bootstrap-brand.svg",
    category: "Frontend",
    description: "Responsive layout toolkit for quick, consistent admin portals and legacy-friendly UIs.",
  },
  {
    name: "HTML5",
    icon: "/img/icons/html-brand.svg",
    category: "Frontend",
    description: "Semantic markup and modern browser APIs for accessible, crawlable document structure.",
  },
  {
    name: "CSS3 / SCSS",
    icon: "/img/icons/css-brand.svg",
    category: "Frontend",
    description: "Layouts, responsive design, and maintainable stylesheets with variables, nesting, and modular SCSS.",
  },
  {
    name: "Redux",
    icon: "/img/icons/redux-brand.svg",
    category: "Frontend",
    description: "Predictable global state for complex client apps — actions, reducers, and clear data flow.",
    keywords: ["state"],
  },
  {
    name: "Zustand",
    icon: "/img/icons/zustand.svg",
    category: "Frontend",
    description: "Lightweight store for local and shared client state without boilerplate ceremony.",
    keywords: ["state"],
  },
  {
    name: "Figma",
    icon: "/img/icons/figma-brand.svg",
    category: "Frontend",
    description: "Design-to-code collaboration — wireframes, component specs, and pixel-accurate handoff.",
    keywords: ["design", "uiux"],
  },
  {
    name: "tRPC",
    icon: "/img/icons/trpc-brand.svg",
    category: "Backend",
    description: "End-to-end type-safe APIs — procedures and inputs inferred from server to client with zero codegen friction.",
    keywords: ["api", "type-safe"],
  },
  {
    name: "Zod",
    icon: "/img/icons/zod-brand.svg",
    category: "Backend",
    description: "Runtime schema validation that mirrors TypeScript types — safe parsing for forms, APIs, and env configs.",
    keywords: ["validation", "schema"],
  },
  {
    name: "Node.js",
    icon: "/img/icons/node-brand.svg",
    category: "Backend",
    description: "Event-driven server runtime for REST/GraphQL APIs, workers, and realtime backends.",
  },
  {
    name: "NestJS",
    icon: "/img/icons/nest-brand.svg",
    category: "Backend",
    description: "Modular, opinionated Node framework for scalable APIs, DI, and enterprise service structure.",
  },
  {
    name: "Express.js",
    icon: "/img/icons/express-brand.svg",
    category: "Backend",
    description: "Minimal HTTP layer for REST endpoints, middleware, and service gateways.",
  },
  {
    name: "GraphQL",
    icon: "/img/icons/graphql-brand.svg",
    category: "Backend",
    description: "Flexible query APIs so clients fetch exactly the data they need across product surfaces.",
    keywords: ["api"],
  },
  {
    name: "Socket.io",
    icon: "/img/icons/socket-brand.svg",
    category: "Backend",
    description: "Realtime channels for chat, notifications, and live dashboards over WebSockets.",
    keywords: ["realtime", "websocket"],
  },
  {
    name: "Structured Logging",
    icon: "/img/icons/logging.svg",
    category: "Backend",
    description: "Typed, sanitized logs with service tags — debuggable production incidents without leaking secrets.",
    keywords: ["logger", "errors"],
  },
  {
    name: "Rate-Limit Safe APIs",
    icon: "/img/icons/ratelimit.svg",
    category: "Backend",
    description: "Proactive backoff, header parsing, and concurrency caps so Meta/OpenAI/Stripe calls stay healthy.",
    keywords: ["rate limit", "external apis"],
  },
  {
    name: "React Native",
    icon: "/img/icons/react-brand.svg",
    category: "Mobile",
    description: "Cross-platform iOS/Android apps with shared React skills — navigation, offline storage, and native modules.",
    keywords: ["ios", "android", "mobile"],
  },
  {
    name: "Android Development",
    icon: "/img/icons/android-brand.svg",
    category: "Mobile",
    description: "Play Store delivery, release pipelines, and Android-specific performance and notification patterns.",
    keywords: ["android", "play store"],
  },
  {
    name: "Mobile Game Development",
    icon: "/img/icons/game.svg",
    category: "Mobile",
    description:
      "React Native puzzle and arcade games — levels, daily challenges, streaks, power-ups, local saves, and crash-free Play Store releases.",
    keywords: ["games", "puzzle", "arcade", "gameplay", "play store"],
  },
  {
    name: "Drizzle ORM",
    icon: "/img/icons/drizzle-brand.svg",
    category: "Data",
    description: "Type-safe SQL-first ORM — schemas that feel like TypeScript, migrations that stay trustworthy.",
    keywords: ["orm", "sql"],
  },
  {
    name: "PostgreSQL / Neon",
    icon: "/img/icons/postgres-brand.svg",
    category: "Data",
    description: "Relational data on serverless Postgres — high availability, branching, and production-grade queries.",
    keywords: ["postgres", "neon", "sql"],
  },
  {
    name: "pgvector",
    icon: "/img/icons/pgvector.svg",
    category: "Data",
    description: "Vector similarity search in Postgres for embeddings, recommendations, and AI-assisted features.",
    keywords: ["vector", "embeddings", "ai"],
  },
  {
    name: "MongoDB",
    icon: "/img/icons/mongodb-brand.svg",
    category: "Data",
    description: "Flexible document storage for feeds, media metadata, and rapidly evolving product models.",
  },
  {
    name: "MySQL",
    icon: "/img/icons/mysql-brand.svg",
    category: "Data",
    description: "Reliable relational storage for classic web apps and reporting workloads.",
  },
  {
    name: "Supabase",
    icon: "/img/icons/supabase-brand.svg",
    category: "Data",
    description: "Auth, database, and realtime BaaS primitives to accelerate MVPs and data layers.",
    keywords: ["baas", "auth"],
  },
  {
    name: "Neon Branching",
    icon: "/img/icons/neon.svg",
    category: "Data",
    description: "Ephemeral DB branches for PRs and previews — schema experiments without risking production.",
    keywords: ["preview", "ephemeral", "branches"],
  },
  {
    name: "Docker",
    icon: "/img/icons/docker-brand.svg",
    category: "Cloud",
    description:
      "Containerized services for consistent local, CI, and production environments — build once, run anywhere.",
    keywords: ["containers", "docker", "devops"],
  },
  {
    name: "Vercel",
    icon: "/img/icons/vercel-brand.svg",
    category: "Cloud",
    description: "Frontend deploys with preview URLs, edge/network delivery, and Git-connected shipping.",
    keywords: ["deploy", "hosting"],
  },
  {
    name: "GitHub Actions",
    icon: "/img/icons/gha-brand.svg",
    category: "Cloud",
    description: "CI/CD workflows for tests, builds, and Vercel deploys on every pull request.",
    keywords: ["ci", "cd"],
  },
  {
    name: "Git / CI/CD",
    icon: "/img/icons/git-brand.svg",
    category: "Cloud",
    description: "Branching, reviews, and automated pipelines that keep releases repeatable and auditable.",
  },
  {
    name: "Clerk Auth",
    icon: "/img/icons/clerk-brand.svg",
    category: "Auth & Billing",
    description: "Production auth — sessions, organizations, and user management wired into Next.js apps.",
    keywords: ["auth", "authentication"],
  },
  {
    name: "Stripe Connect",
    icon: "/img/icons/stripe-brand.svg",
    category: "Auth & Billing",
    description: "Marketplace and platform payments — connected accounts, payouts, and compliant money movement.",
    keywords: ["payments", "stripe"],
  },
  {
    name: "SaaS Billing (Dodo)",
    icon: "/img/icons/dodo.svg",
    category: "Auth & Billing",
    description: "Subscription billing flows for SaaS products — plans, invoices, and customer lifecycle.",
    keywords: ["billing", "subscriptions", "dodo"],
  },
  {
    name: "Vitest",
    icon: "/img/icons/vitest-brand.svg",
    category: "Testing & Ops",
    description: "Fast unit and integration tests with a Vite-native runner for confident refactors.",
    keywords: ["unit", "testing"],
  },
  {
    name: "Playwright",
    icon: "/img/icons/playwright-brand.svg",
    category: "Testing & Ops",
    description: "Reliable end-to-end browser tests across Chromium, Firefox, and WebKit.",
    keywords: ["e2e", "testing"],
  },
  {
    name: "Multi-Tenant Design",
    icon: "/img/icons/multitenant.svg",
    category: "Architecture",
    description: "Workspace-scoped data, auth, and features — isolation that scales for SaaS tenants.",
    keywords: ["saas", "workspace", "tenancy"],
  },
];

export const projects = [
  {
    title: "Orenda Financial Services",
    type: "website" as const,
    category: "Website / Fintech",
    description:
      "Enterprise fintech platform with core banking modules and transaction dashboards for European and NZ markets. Stripe multi-currency payments, recurring billing, and microservices refactor.",
    image: "/projects/orenda.png",
    href: "https://orenda.finance/",
  },
  {
    title: "Phynd TV",
    type: "website" as const,
    category: "Website / Games Platform",
    description:
      "Next.js game developer portal and publisher platform — lifecycle tools from setup and cloud config to store presence, media assets, and analytics. Auth with RBAC, org management, build uploads, cloud saves, quests, DLC, financial tracking, SDK docs, and realtime dashboards (React 19, Redux, Recharts).",
    image: "/projects/phyndtv.png",
  },
  {
    title: "Gul-e-Raana",
    type: "website" as const,
    category: "Website / E-Commerce",
    description:
      "High-volume storefront and admin portal with role-based inventory, order tracking, and sales analytics. Next.js 14 + PERN (Neon Postgres) with Stripe payments.",
    image: "/projects/guleraana.png",
    href: "https://guleraana.shop",
  },
  {
    title: "Alnayzak – Horizons Academy",
    type: "website" as const,
    category: "Website / EdTech",
    description:
      "Multi-role educational administration suite for admins, teachers, staff, and students — built with Next.js, TypeScript, Tailwind, and Zustand state management.",
    image: "/projects/alnayzak.png",
    href: "https://fportal.horizons-pal.net",
  },
  {
    title: "AppWork",
    type: "website" as const,
    category: "Website / Property",
    description:
      "Maintenance management platform for property managers, technicians, and residents — work orders, make-ready boards, and realtime operational workflows.",
    image: "/projects/appwork.png",
    href: "https://appworkco.com/",
  },
  {
    title: "Namaz Tracker Assistant",
    type: "mobile" as const,
    category: "Mobile / React Native",
    description:
      "Google Play utility app with offline-first AsyncStorage, location-based prayer scheduling, Notifee push notifications, and dark/light themes via Zustand.",
    image: "/projects/namaztracker.png",
    href: "https://play.google.com/store/apps/details?id=com.namazcounterapp&hl=en",
  },
  {
    title: "Films Plex",
    type: "mobile" as const,
    category: "Mobile / Media",
    description:
      "Media discovery app with floating YouTube trailer playback, client-side caching, dynamic search, and lag-free browsing across thousands of titles.",
    image: "/projects/filmsplex.png",
    href: "https://play.google.com/store/apps/details?id=com.awesomeprojecfw&hl=en",
  },
  {
    title: "Word Matcher",
    type: "mobile" as const,
    category: "Mobile / Games",
    description:
      "Published word puzzle game with hundreds of levels, daily challenges, Timelapse Mode, streaks, power-ups, and 99.9% crash-free Android sessions.",
    image: "/projects/wordsmatcher.png",
    href: "https://play.google.com/store/apps/details?id=com.wordmatcher&hl=en",
  },
  {
    title: "Mystic Secrets",
    type: "mobile" as const,
    category: "Mobile / Games",
    description:
      "Arcade puzzle game on Google Play with multiple modes, daily challenge reminders, wildlife collectibles, and persistent high-score sync.",
    image: "/projects/mystic-secrets.png",
    href: "https://play.google.com/store/apps/details?id=com.mysticsecrets.game&hl=en",
  },
];

export const contactHighlights = [
  "6+ Years of Experience",
  "Next.js 15 + tRPC + Drizzle",
  "Mobile Game Development",
  "React Native + Android",
  "Multi-Tenant SaaS Architecture",
];
