export interface SubService {
  title: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  role: string;
  contribution: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  stats?: { label: string; value: string }[];
  subServices?: SubService[];
}

const GITHUB_PROFILE = "https://github.com/Zaheer-Hassan";

export const projects: Project[] = [
  {
    id: 1,
    title: "YouTube Engine",
    description:
      "A full-stack SaaS platform that automates end-to-end faceless YouTube video production. The system manages multiple YouTube channels, each with custom settings for voice, tone, and video style. It scans competitor channels to discover viral topics, generates AI-powered scripts using Groq LLM, produces high-quality voiceovers with Microsoft Edge TTS, downloads relevant B-roll footage from Pexels, and assembles polished final videos complete with word-by-word karaoke subtitles and background music using FFmpeg. For cartoon-style content, the platform integrates Remotion (React-based video composition) with AI-generated images via Replicate Flux models, including character reference support for visual consistency across scenes. The platform features real-time progress tracking, scheduled auto-publishing, YouTube Shorts/Reels creation, and a premium dark-mode UI.",
    role: "Full-Stack Developer",
    contribution:
      "Architected the entire platform from scratch. The biggest challenge was synchronizing the video pipeline coordinating AI script generation, TTS audio, B-roll downloads, and FFmpeg rendering into a reliable queue system. Built BullMQ-based job orchestration with real-time progress tracking. Designed the Remotion cartoon engine integration, solving the challenge of maintaining character visual consistency across AI-generated scenes using Replicate Flux reference images.",
    tech: [
      "React 19",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "FFmpeg",
      "Remotion",
      "Groq API",
      "Replicate",
      "Whisper",
    ],
    githubUrl: GITHUB_PROFILE,
    image: "/images/project-1.png",
    stats: [
      { label: "Automation", value: "End-to-End" },
      { label: "Deployment", value: "Hetzner" },
    ],
    subServices: [
      {
        title: "Video Pipeline",
        description:
          "AI script generation, Edge TTS voiceover, Pexels B-roll, FFmpeg assembly with karaoke subtitles.",
      },
      {
        title: "Cartoon Engine",
        description:
          "Remotion-based React video composition with AI-generated images via Replicate Flux.",
      },
      {
        title: "Platform Features",
        description:
          "BullMQ job queue, scheduled auto-publishing, YouTube Shorts, multi-user RBAC, cost tracking.",
      },
    ],
  },
  {
    id: 2,
    title: "Open Banking Platform",
    description:
      "A merchant-centric fintech ecosystem facilitating instant payouts and payins with multi-brand support under a single merchant account. Built scalable APIs integrating with 1,800+ European banks, enabling seamless multi-bank connectivity and high-volume fintech operations. The system features modular multi-tenant backend supporting 10+ client banks, optimized workflows reducing latency by 30%, and comprehensive back-office panels for admins and merchants to track transactions, generate reports, and manage accounts.",
    role: "Backend Developer",
    contribution:
      "Designed and built the microservices architecture from the ground up. The core challenge was integrating with 1,800+ European banks, each with different API standards and response formats. Built a unified abstraction layer that normalized bank APIs into a consistent interface. Optimized database queries and caching strategies that reduced API latency by 30% under high-volume transaction loads.",
    tech: ["Node.js", "Laravel", "Vue.js", "PostgreSQL", "Microservices"],
    githubUrl: GITHUB_PROFILE,
    image: "/images/project-2.png",
    stats: [
      { label: "Daily Transactions", value: "120+" },
      { label: "Monthly Volume", value: "€473K" },
    ],
  },
  {
    id: 3,
    title: "Payment Gateway",
    description:
      "A custom-built payment gateway solution with real-time fraud detection powered by a machine-learning scoring algorithm. The platform provides self-hosted payment processing for merchants, removing dependency on third-party gateways. Features include automated accounting reconciliation, transaction tracking from the back office, integration with multiple payment service providers (Intergiro, WebCheque), and JWT-based authentication with OTP email verification for enhanced security.",
    role: "Full-Stack Developer",
    contribution:
      "Built the custom payment routing engine that dynamically selects the optimal payment provider based on card BIN, country, and transaction history. The main challenge was implementing the ML-based fraud scoring system that learns from transaction patterns the more it processes, the smarter it gets at detecting suspicious activity. Also built the automated reconciliation system that matched transactions across multiple providers.",
    tech: ["Laravel", "Vue.js", "AWS", "REST APIs"],
    githubUrl: GITHUB_PROFILE,
    image: "/images/project-3.png",
    stats: [
      { label: "Monthly Transactions", value: "494" },
      { label: "Monthly Volume", value: "€16K" },
    ],
  },
  {
    id: 4,
    title: "Fintech Back Office",
    description:
      "A transformed payment solution (v2.0) providing instant top-ups for mobile application users, remittance flows integrated with FSB bank for instant dollar settlements, and open banking APIs connecting 200+ banks worldwide. The system supports B2B and B2C flows with hierarchical brand management, allowing multiple brands under one merchant. Features include bulk CSV transaction processing, monthly invoicing, ELK stack log monitoring, and Google 2FA authentication with session timeout security.",
    role: "Full-Stack Developer",
    contribution:
      "Led the v2.0 rewrite of the entire back-office system. The challenge was migrating from a monolithic architecture to a modular system while keeping production running. Designed the hierarchical brand management system where multiple brands operate under one organization with shared settlement but independent transaction flows. Built the remittance integration with FSB bank for instant cross-border dollar settlements.",
    tech: ["Laravel", "Vue.js", "MySQL", "REST APIs"],
    githubUrl: GITHUB_PROFILE,
    image: "/images/project-4.png",
    stats: [
      { label: "Daily Transactions", value: "12" },
      { label: "Monthly Volume", value: "€18.8K" },
    ],
  },
  {
    id: 5,
    title: "Accounting & Chargeback Solution",
    description:
      "A next-gen merchant reporting (MR 2.0) software built for payment aggregators to onboard merchants, agents, and service providers. Handles 50K+ transactions monthly with automated reconciliation that reduced manual effort by 50%. Features dynamic reporting with customizable invoice fields, a data center for managing multiple payment gateway integrations, interactive dashboards providing financial insights for 200+ merchants, and a webshop where companies can connect third-party applications like Xero for seamless accounting.",
    role: "Full-Stack Developer",
    contribution:
      "Architected the dynamic reporting engine that allows merchants to customize invoice and report fields without code changes. The biggest challenge was building the multi-gateway data center aggregating transaction data from different payment providers with varying data formats into a unified view. Built the Xero integration for automated accounting sync and designed the role-based access system supporting complex organizational hierarchies.",
    tech: ["Vue.js", "React.js", "Node.js", "Laravel", "PostgreSQL"],
    githubUrl: GITHUB_PROFILE,
    image: "/images/project-5.png",
    stats: [
      { label: "Daily Transactions", value: "23.9K" },
      { label: "Monthly Volume", value: "€21.3M" },
    ],
  },
  {
    id: 6,
    title: "Blockchain Crypto Wallet",
    description:
      "A blockchain gateway allowing merchants to send, receive, and hold cryptocurrencies with support for BTC, ETH, and 15+ tokens. The platform enables crypto purchases from Quickbit Quantoz and selling through Celoxo back to Nexus. Developed an innovative chargeback solution powered by NFT Flow that reduced transaction delivery time from 5-6 minutes to under 1 minute with a 99% success rate. Features include rate limiting, Slack webhook integrations for monitoring, and comprehensive API request logging.",
    role: "Backend Developer",
    contribution:
      "Developed the NFT Flow-based chargeback solution the core innovation. The previous LTC-based flow was taking 5-6 minutes per transaction. I architected a new approach using NFT transfers to random wallets, bringing delivery time down to under 1 minute. Also built the rate limiting system to handle 100K+ transactions/month and implemented comprehensive logging with Slack alerts for real-time production monitoring.",
    tech: ["Laravel", "PostgreSQL", "Blockchain", "REST APIs"],
    githubUrl: GITHUB_PROFILE,
    image: "/images/project-6.png",
    stats: [
      { label: "Daily Transactions", value: "22K" },
      { label: "Monthly Volume", value: "€30M" },
    ],
  },
  {
    id: 7,
    title: "Crypto & NFT Payment Platform",
    description:
      "A unified platform enabling users to buy cryptocurrency or NFTs with fiat currency, while merchants can receive payments in both crypto and fiat seamlessly. Users can convert fiat to crypto/NFTs directly into their wallets or send payments to merchants via an iframe integration. The platform includes a responsive landing page, user portal, and merchant back-office with role-based access control. Features a real-time crypto/NFT converter, secure OTP login, KYC verification via Scrive and BankID (FTN, NO, SE), and payment processing through CardEye with automated email receipts.",
    role: "Backend Developer",
    contribution:
      "Built the backend across three separate microservices. The main challenge was creating a unified KYC system that works with multiple identity providers (Scrive, BankID for Finland, Norway, Sweden) under a single ledger users verify once and it works across all services. Designed the payment flow architecture ensuring valid transactions are routed to Quantoz for instant crypto delivery with full status tracking.",
    tech: ["Node.js", "Laravel", "PostgreSQL", "Microservices", "REST APIs"],
    githubUrl: GITHUB_PROFILE,
    image: "/images/project-7.png",
    stats: [
      { label: "KYC Providers", value: "3+" },
      { label: "Payment Flows", value: "B2B & B2C" },
    ],
    subServices: [
      {
        title: "Payment Flow",
        description:
          "Built scalable backend for secure transaction processing with external system integrations.",
      },
      {
        title: "KYC Microservice",
        description:
          "Identity verification module supporting multiple KYC vendors under a unified ledger.",
      },
      {
        title: "Back-Office",
        description:
          "Financial accounting, transaction monitoring, and user management modules.",
      },
    ],
  },
  {
    id: 8,
    title: "NFT Marketplace Platform",
    description:
      "A service-based API platform serving as the umbrella backend for multiple NFT reseller brands. The modular architecture allows each affiliate to configure endpoints independently, creating a completely generic and adaptable framework. Resellers can fetch NFTs, manage collections, and facilitate purchases using Fiat currency. Integrated with MagicEden and OpenSea for NFT sourcing, Scrive and Alice for KYC verification, and Elliptic for blockchain compliance. Features Slack webhook alerts, comprehensive activity logging, and web server monitoring via Nginx.",
    role: "Backend Developer",
    contribution:
      "Designed the modular API architecture that serves multiple affiliate brands from a single codebase. The challenge was making endpoints completely generic when an affiliate configures the platform, all API responses automatically adapt to their branding and requirements without code changes. Built the Elliptic integration for blockchain compliance checks and the multi-affiliate configuration system.",
    tech: ["Laravel", "PostgreSQL", "Blockchain", "AWS S3"],
    githubUrl: GITHUB_PROFILE,
    image: "/images/project-8.png",
    stats: [
      { label: "Monthly Transactions", value: "592K" },
      { label: "Monthly Volume", value: "€30M" },
    ],
  },
  {
    id: 9,
    title: "AI Medical Prescription Agent",
    description:
      "An intelligent AI agent designed for healthcare professionals that listens to real-time conversations between doctors and patients using advanced speech-to-text technology (OpenAI Whisper). The agent processes the conversation in real-time and automatically generates complete medical prescriptions including medications with dosages, recommended exercises, lifestyle activities, dietary suggestions, and follow-up instructions. Eliminates manual note-taking during consultations, reduces prescription errors, and allows doctors to focus entirely on patient care while the AI handles documentation.",
    role: "Full-Stack Developer",
    contribution:
      "Built the real-time audio processing pipeline using OpenAI Whisper for speech-to-text. The main challenge was handling medical terminology accurately trained the system to recognize drug names, dosages, and medical conditions from natural conversation. Designed the prescription generation logic that structures unstructured conversation into a formatted medical document with proper sections.",
    tech: ["OpenAI Whisper", "Fantom", "Node.js", "REST APIs", "AI/ML"],
    githubUrl: GITHUB_PROFILE,
    image: "/images/project-9.png",
    stats: [
      { label: "Accuracy", value: "95%+" },
      { label: "Time Saved", value: "70%" },
    ],
  },
  {
    id: 10,
    title: "AI Trading Analysis Agent",
    description:
      "A Chrome extension powered by AI that provides real-time trading analysis and investment suggestions directly in the browser. The agent analyzes candlestick patterns, chart movements, volume indicators, and market trends to recommend optimal entry and exit points. Features include automated investment execution based on AI signals, withdrawal timing alerts, portfolio performance tracking, and smart notifications for market opportunities. Helps traders make data-driven decisions with confidence by combining technical analysis with machine learning predictions.",
    role: "Full-Stack Developer",
    contribution:
      "Developed the Chrome extension architecture that injects AI analysis directly into trading platforms. The challenge was building real-time chart pattern recognition that runs efficiently in the browser without lag. Implemented the auto-investment feature that executes trades based on AI confidence scores, with safety limits and withdrawal timing alerts to protect users from volatile market swings.",
    tech: ["AI/ML", "Chrome Extension", "JavaScript", "REST APIs", "Python"],
    githubUrl: GITHUB_PROFILE,
    image: "/images/project-10.png",
    stats: [
      { label: "Analysis Speed", value: "Real-time" },
      { label: "Features", value: "Auto-Invest" },
    ],
  },
];
