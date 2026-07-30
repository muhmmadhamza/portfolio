export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  features: string[];
  challenges: { problem: string; solution: string }[];
  year: string;
}

export const projects: Project[] = [
   {
    slug: "onevision",
    title: "onevision",
    description:
      " Founded with a mission to simplify workforce management, OneVision brings together scheduling, HR, analytics, learning, communication, and feedback into one unified platform.",
    longDescription:
      "onevision is a Figma-inspired canvas editor built to explore real-time collaboration at scale. Multiple users can edit the same canvas simultaneously with conflict-free replicated data types (CRDTs).",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1600&auto=format&fit=crop",
    tags: ["React", "TypeScript", "WebSockets", "Yjs", "Canvas API", "Node.js"],
    liveUrl: "https://onevision.io/",
    githubUrl: "https://github.com/muhmmadhamza?tab=repositories",
    featured: true,
    year: "2024",
    features: [
      "Real-time multiplayer editing with live cursors and presence",
      "CRDT-based conflict-free document synchronization",
      "Reusable component library with variant support",
      "Full undo/redo history with time-travel snapshots",
      "Exportable to SVG, PNG, and React component code",
    ],
    challenges: [
      {
        problem: "Maintaining consistent canvas state across clients with unreliable network conditions.",
        solution:
          "Adopted Yjs CRDTs over a WebSocket relay with offline persistence, so edits merge deterministically once connectivity is restored.",
      },
      {
        problem: "Canvas rendering performance degraded with thousands of nested layers.",
        solution:
          "Built a custom quad-tree spatial index to only render nodes within the visible viewport, improving frame rate from 22fps to a steady 60fps.",
      },
    ],
  },
  {
    slug: "Promptprivacy",
    title: "Promptprivacy AI",
    description:
      "An AI-powered SaaS platform that turns raw meeting transcripts into structured action items, summaries, and searchable knowledge bases.",
    longDescription:
      "Nimbus AI is a full-stack SaaS product built for remote teams to eliminate meeting fatigue. It ingests audio/video recordings, transcribes them, and uses a fine-tuned LLM pipeline to extract decisions, owners, and deadlines. Teams can search across every meeting they've ever had in natural language.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI API", "Stripe", "tRPC"],
    liveUrl: " https://www.promptprivacy.com/",
    githubUrl: " https://github.com/muhmmadhamza?tab=repositories",
    featured: true,
    year: "2025",
    features: [
      "Real-time transcription with speaker diarization",
      "LLM-powered action item and summary extraction",
      "Full-text semantic search across meeting history",
      "Stripe-based subscription billing with usage metering",
      "Slack and Notion two-way integrations",
    ],
    challenges: [
      {
        problem:
          "Streaming large audio files for transcription without blocking the main request thread or exceeding serverless timeouts.",
        solution:
          "Built a queue-based ingestion pipeline using background workers, chunked audio uploads, and webhook callbacks to update job status in real time via Server-Sent Events.",
      },
      {
        problem: "Keeping vector search fast and cheap as the knowledge base scaled past millions of embeddings.",
        solution:
          "Introduced a hybrid retrieval strategy combining pgvector with metadata pre-filtering, cutting average query latency by 68%.",
      },
    ],
  },
  {
    slug: "overpower",
    title: "Overpower",
    description:
      "A modern finance dashboard for freelancers to track invoices, expenses, and taxes with real-time analytics.",
    longDescription:
      "Overpower replaces spreadsheets for independent contractors with a clean, automated finance dashboard. It connects to bank accounts via Plaid, auto-categorizes transactions, and generates quarterly tax estimates.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop",
    tags: ["React", "Next.js", "Tailwind CSS", "Prisma", "Plaid API", "Recharts"],
    liveUrl: "https://overpower.ai/",
    githubUrl: "https://github.com/muhmmadhamza?tab=repositories",
    featured: true,
    year: "2024",
    features: [
      "Bank account sync via Plaid with automatic transaction categorization",
      "Interactive cash flow and expense breakdown charts",
      "Automated quarterly tax estimation engine",
      "PDF invoice generation and client tracking",
      "Role-based access for accountants and collaborators",
    ],
    challenges: [
      {
        problem: "Reconciling inconsistent transaction data formats returned by different bank connectors.",
        solution:
          "Designed a normalization layer with a rules engine that maps raw Plaid categories to a consistent internal taxonomy, with manual override support.",
      },
      {
        problem: "Rendering large historical datasets in charts without jank on lower-end devices.",
        solution:
          "Implemented data downsampling on the server and virtualized rendering on the client, keeping chart interactions under 16ms per frame.",
      },
    ],
  },
 
  {
    slug: "devradar",
    title: "DevRadar",
    description:
      "A developer job aggregator that scrapes, ranks, and personalizes remote engineering roles using ML-based matching.",
    longDescription:
      "DevRadar aggregates thousands of job postings daily from multiple sources, deduplicates them, and ranks relevance for each user based on their resume and preferences using an embeddings-based matching model.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
    tags: ["Next.js", "Python", "FastAPI", "Redis", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/ayaanraza/devradar",
    featured: false,
    year: "2023",
    features: [
      "Automated multi-source job scraping pipeline with deduplication",
      "Resume-to-job embedding similarity ranking",
      "Daily personalized email digests",
      "Salary range normalization across currencies",
    ],
    challenges: [
      {
        problem: "Different job boards returned wildly inconsistent salary and location formats.",
        solution:
          "Built a normalization service using regex heuristics plus a lightweight classification model to standardize fields before storage.",
      },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
