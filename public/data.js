// Shared content for both themes. Edit here once, both designs update.
const RG = "https://www.researchgate.net/search/publication?q=";

window.SITE = {
  name: "Tatenda Chitanda",
  handle: "tatenda",
  hero: "Building secure intelligence for the future",
  roles: ["AI Governance", "Cybersecurity", "GRC & Compliance", "Systems Builder"],
  intro:
    "I design governance systems and build the software that runs them. Ten years auditing high risk industrial sites in South Africa taught me how compliance actually fails on the ground. Today I turn that into AI governance frameworks, security tooling and compliance platforms for small and medium businesses across the US and Africa.",
  location: "South Carolina, USA · working across the US and Africa",
  email: "tchitanda6@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/tatenda-chitanda",
    github: "https://github.com/Ch13f007",
    company: "https://www.sentracorellc.com",
  },
  cvs: [
    { label: "CV · AI Governance & GRC", file: "cv/Chitanda_AI_Governance_CV.pdf" },
    { label: "CV · Compliance, AML & KYC", file: "cv/Chitanda_Compliance_CV.pdf" },
  ],
  stats: [
    { value: "10+", label: "years in compliance & audit" },
    { value: "10", label: "research publications" },
    { value: "6", label: "platforms built & shipped" },
    { value: "2", label: "published books" },
  ],

  systems: [
    {
      code: "SYS-01",
      name: "Compliance Engines",
      desc: "Regulation encoded into software. Legislation becomes checklists, scoring, evidence trails and close out tracking.",
      nodes: ["Regulatory library", "Scored audits", "Evidence", "AI review"],
    },
    {
      code: "SYS-02",
      name: "Governance Management Systems",
      desc: "Integrated ISO 27001, ISO 42001, NIST AI RMF and POPIA programmes built as one auditable structure.",
      nodes: ["Risk register", "SoA", "Internal audit", "Mgmt review"],
    },
    {
      code: "SYS-03",
      name: "Security & Awareness Tools",
      desc: "Phishing simulation, email analysis and AI safety evaluation built for African SMEs and languages.",
      nodes: ["Simulation", "Detection", "Risk scoring", "Evaluation"],
    },
    {
      code: "SYS-04",
      name: "Operations Platforms",
      desc: "Business and field operations software: ERP, project management and security operations control rooms.",
      nodes: ["CRM & finance", "Projects", "Field apps", "Dashboards"],
    },
  ],

  projects: [
    {
      code: "PRJ-01",
      name: "SHEQ Sentinel",
      type: "AI compliance platform",
      status: "Live",
      summary:
        "A South Africa first AI compliance engine for Safety, Health, Environment and Quality. It embeds the OHS Act, COIDA, NEMA, MHSA and POPIA, with scored audit standards, root cause analysis and an AI copilot.",
      stack: ["Python", "FastAPI", "PostgreSQL", "AI"],
      cs: {
        problem: "South African SHEQ teams prove compliance on paper. Global HSE tools do not know the OHS Act, and consultants spend days writing audit reports by hand.",
        build: "A clause level legal register mapped from each site profile, scored audits grounded in the Acts, automatic findings with corrective actions and due dates, contractor close out through a secure link with no account needed, and AI that checks close out photos against the findings.",
        result: "Live with client and partner instances, each isolated on its own subdomain. The Audit tier was validated by three working consultants in its first week.",
      },
      links: [{ label: "sentinelsheq.com", url: "https://sentinelsheq.com" }],
    },
    {
      code: "PRJ-02",
      name: "Sentinel Project Management",
      type: "Construction PM SaaS",
      status: "Live",
      summary:
        "A standalone project management product for construction teams. Lighter than MS Project or Procore, with intelligence built in. Validated with working project managers before launch.",
      stack: ["Python", "PostgreSQL", "SaaS"],
      cs: {
        problem: "Small built environment firms either juggle spreadsheets or pay for tools like MS Project and Procore that are far heavier than they need.",
        build: "A stage driven tool that follows the standard six stage built environment lifecycle, with Gantt timelines, contractor registers, budgets with payment certificates and variations, time and billing, and separate owner and manager views.",
        result: "Live at projects.sentinelsheq.com. Shaped by practising project managers, whose requests went into the build before launch.",
      },
      links: [],
    },
    {
      code: "PRJ-03",
      name: "SentraCore OS & AI Governance",
      type: "Production governance software",
      status: "In use",
      summary:
        "An AI system register with EU AI Act aligned risk tiers, POPIA processing flags, automatic escalation for high risk systems, an incident timeline and a model card generator. Part of SentraCore OS, the internal ERP I built for the company.",
      stack: ["FastAPI", "SQLModel", "PostgreSQL"],
      cs: {
        problem: "Most SMEs using AI have no record of which systems they run, how risky each one is, or who signs them off.",
        build: "A register that classifies each AI system into EU AI Act risk tiers, flags POPIA personal data processing, escalates high risk systems for review, logs incidents on a timeline and generates model cards on the company letterhead.",
        result: "In daily use inside SentraCore OS and used as the reference implementation in client governance work.",
      },
      links: [],
    },
    {
      code: "PRJ-04",
      name: "Integrated AI Governance Management System",
      type: "ISO 27001 + 42001 + NIST AI RMF + POPIA",
      status: "Cert ready",
      summary:
        "One governance framework in place of four parallel compliance tracks. All eight steps completed, from scope and asset inventory through risk assessment, Statement of Applicability, internal audit and corrective action.",
      stack: ["ISO 27001", "ISO 42001", "NIST AI RMF", "POPIA"],
      cs: {
        problem: "Running ISO 27001, ISO 42001, NIST AI RMF and POPIA as four separate programmes means four sets of evidence for a small team.",
        build: "One integrated system with a single risk method, one Statement of Applicability and a shared audit and management review cycle.",
        result: "All eight implementation steps complete and certification ready. It is the basis of SentraCore client engagements.",
      },
      links: [],
    },
    {
      code: "PRJ-05",
      name: "Security Operations Platform",
      type: "Client build · Zimbabwe",
      status: "Client project",
      summary:
        "A security operations platform built for a guarding company. A mobile guard app in the field feeds a live control room. The product belongs to the client, so code and demo are private.",
      stack: ["Flutter", "React", "Supabase"],
      cs: {
        problem: "Guarding companies lose track of patrols and incidents between the field and the office.",
        build: "A mobile guard app for patrols and incident reporting that feeds a live control room dashboard.",
        result: "Phase one delivered to the client as a working build.",
      },
      links: [],
    },
    {
      code: "PRJ-06",
      name: "PhishMind AI",
      type: "Adaptive phishing awareness",
      status: "Hackathon",
      summary:
        "AI generated phishing simulations personalised by employee role, behavioural risk scoring and an admin reporting dashboard, designed for African SMEs.",
      stack: ["Python", "AI"],
      links: [{ label: "GitHub", url: "https://github.com/Ch13f007/PhishMind--AI" }],
    },
    {
      code: "PRJ-07",
      name: "PhishMind Eval",
      type: "AI safety research",
      status: "Pilot",
      summary:
        "Do AI fraud guardrails hold up in African languages? An open study testing whether language models refuse scam requests as reliably in Shona, isiNdebele and isiZulu as they do in English.",
      stack: ["Python", "LLM evaluation"],
      cs: {
        problem: "AI safety testing is English first. If fraud guardrails fail in African languages, millions of people get weaker protection.",
        build: "A reproducible harness that sends matched scam and legitimate business requests to language models in English, Shona, isiNdebele and isiZulu and compares refusal rates.",
        result: "Study design and pilot harness complete, grant application submitted, pilot results pending.",
      },
      links: [{ label: "GitHub", url: "https://github.com/Ch13f007/Phishmind-Africa" }],
    },
    {
      code: "PRJ-08",
      name: "Phishcheck Analyzer",
      type: "Email forensics tool",
      status: "Open source",
      summary:
        "A lightweight Python tool that parses .eml files and pulls out phishing indicators: headers, reply to mismatches, embedded links and attachments.",
      stack: ["Python"],
      links: [{ label: "GitHub", url: "https://github.com/Ch13f007/Phishcheck-Analyzer" }],
    },
    {
      code: "PRJ-09",
      name: "SentraCore Website",
      type: "Company website",
      status: "Live",
      summary:
        "The public site for SentraCore LLC, the cybersecurity and AI governance consultancy I founded.",
      stack: ["Web", "Netlify"],
      links: [{ label: "sentracorellc.com", url: "https://www.sentracorellc.com" }],
    },
    {
      code: "PRJ-10",
      name: "SentraCore Cleaning Website",
      type: "Small business website",
      status: "Live",
      summary:
        "A service business website for a cleaning company, built to win local bookings on a small budget.",
      stack: ["Web", "Netlify"],
      links: [{ label: "sentracorecleaning.com", url: "https://sentracorecleaning.com" }],
    },
    {
      code: "PRJ-11",
      name: "Retail Brand Website",
      type: "Spec design · wine & spirits retailer",
      status: "Concept",
      summary:
        "A spec website pitched to a four location wine and spirits retailer: product ranges, promotions, store locations and event enquiries, designed to show the owner what a modern online presence could do for the business.",
      stack: ["HTML", "CSS", "JavaScript"],
      links: [],
    },
  ],

  experience: [
    {
      role: "Founder & CEO",
      org: "SentraCore LLC",
      when: "2025 to present",
      where: "South Carolina, USA",
      points: [
        "Lead a boutique cybersecurity and AI governance consultancy serving SMEs in the US and Africa.",
        "Designed an integrated management system combining ISO 27001, ISO 42001, NIST AI RMF and POPIA.",
        "Built and shipped the SentraCore platform and the Sentinel product family.",
        "Deliver AI risk assessments, gap analyses and remediation roadmaps, plus awareness training for non technical teams.",
      ],
    },
    {
      role: "Cybersecurity Analyst",
      org: "CodeAlpha",
      when: "Mar 2026 to Aug 2026",
      where: "Remote",
      points: [
        "Threat assessments, vulnerability evaluations and incident analysis across assigned cases.",
        "Monitored logs for anomalous activity, triaged findings and escalated through structured review.",
      ],
    },
    {
      role: "AI Data Analyst & Quality Reviewer",
      org: "Outlier AI (Aether Project)",
      when: "Jun 2025 to Mar 2026",
      where: "Remote",
      points: [
        "Evaluated AI model outputs across text, image, audio and video with 98% accuracy.",
        "Flagged bias, inconsistencies and governance red flags, and helped refine annotation guidelines.",
      ],
    },
    {
      role: "HSSE Auditor",
      org: "Industrial organisations",
      when: "2016 to 2025",
      where: "South Africa",
      points: [
        "Nine years of compliance audits and risk control evaluations in mining, construction and energy.",
        "Built audit tools, checklists and reporting frameworks used across multiple sites.",
      ],
    },
  ],

  publications: [
    {
      title:
        "Thermodynamic Limits as Governance Criteria: Quantum Thermodynamics, Cryptographic Risk and Energy Bounded AI in Small and Medium Enterprise",
      venue: "ResearchGate Preprint",
      year: 2026,
      url: "https://www.researchgate.net/publication/416981435_Chitanda_Thermodynamic_Limits_as_Governance_Criteria_Preprint_Thermodynamic_Limits_as_Governance_Criteria_Quantum_Thermodynamics_Cryptographic_Risk_and_Energy-Bounded_AI_in_Small_and_Medium_Enterprise",
    },
    {
      title:
        "Beyond Cards: Governance Gaps in Mobile Money and SME Payment Security in Africa. Toward a Wallet Layer Governance Framework for SME Merchants",
      venue: "ResearchGate",
      year: 2026,
      url: "https://www.researchgate.net/publication/414975986_Beyond_Cards_Governance_Gaps_in_Mobile_Money_and_SME_Payment_Security_in_Africa_Toward_a_Wallet-Layer_Governance_Framework_for_Small_and_Medium_Enterprise_Merchants",
    },
    { title: "Integrating ISO/IEC 27001 with Emerging AI Governance Frameworks: Toward a Unified Security and AI Risk Management Model", venue: "ResearchGate Preprint", year: 2026 },
    { title: "Same Model, Different Intent: Confronting Dual Use AI Capability in Cybersecurity Governance", venue: "ResearchGate Preprint", year: 2026 },
    { title: "Governing AI in Cybersecurity: Why SMEs Need Integrated Policy Frameworks for AI Driven Threat Environments", venue: "ResearchGate Preprint", year: 2026 },
    { title: "Artificial Intelligence Works Better With Human Intelligence: The Case for Domain Grounded AI", venue: "ResearchGate", year: 2026 },
    { title: "Digital Forensics Readiness in the Age of AI Driven Cyber Threats: A Governance and Policy Perspective", venue: "ResearchGate Preprint", year: 2026 },
    { title: "AI Governance Challenges for Small and Medium Enterprises", venue: "ResearchGate", year: 2026 },
    { title: "The Hidden Compliance Gap: Why Small Businesses Fail at Cybersecurity Before They Even Start", venue: "ResearchGate", year: 2026 },
    { title: "Do Small and Medium Enterprises Need an AI Safety Officer?", venue: "ResearchGate", year: 2026 },
  ].map((p) => ({ ...p, url: p.url || RG + encodeURIComponent(p.title) })),

  books: [
    {
      title: "Governing Intelligence",
      blurb: "A practical guide to governing AI in real organisations.",
      links: [{ label: "Amazon", url: "https://www.amazon.com/dp/B0HNF2BF93" }],
    },
    {
      title: "Building the Site Twice",
      blurb: "Construction, compliance and the lessons behind building Sentinel.",
      links: [
        { label: "Amazon", url: "https://www.amazon.com/dp/B0HLNSD7KW" },
      ],
    },
  ],

  education: [
    { what: "MSc Cybersecurity with Artificial Intelligence", where: "University of Central Lancashire", note: "Research focus: AI governance for SMEs" },
    { what: "Engineering Studies N4 to N6", where: "South Africa", note: "" },
  ],

  certifications: [
    "ISO/IEC 27001:2022 Lead Auditor",
    "Google Cybersecurity Professional Certificate",
    "Cybersecurity Management & Leadership · Macquarie",
    "AI for Cybersecurity · Macquarie",
    "EC-Council Essentials: Network Defense, Ethical Hacking, Digital Forensics",
    "Computer Networks Security · EC-Council",
    "Google AI Essentials",
    "AWS Certified Cloud Practitioner",
    "Cyberlaw",
    "Safety Management Training",
  ],

  skills: {
    "AI Governance": ["NIST AI RMF", "ISO/IEC 42001", "EU AI Act", "OECD AI Principles", "Model cards"],
    "Security & GRC": ["ISO/IEC 27001", "ISO/IEC 27005", "NIST CSF", "CIS Controls", "GDPR", "POPIA"],
    "Security Ops": ["Splunk", "Chronicle", "Incident response", "Digital forensics", "Linux"],
    Build: ["Python", "FastAPI", "PostgreSQL", "SQL", "React", "Flutter"],
  },
};
