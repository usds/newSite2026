export type Dispatch = {
  id: string;
  date: string;
  category: "Shipped" | "Deployed" | "Milestone" | "New Faces" | "Field Note";
  agency?: string;
  title: string;
  body: string;
  link?: string;
  metric?: { before?: string; after: string; label: string };
  env?: "Production" | "Pilot" | "All Regions" | "Nationwide";
};

const dispatches: Dispatch[] = [
  {
    id: "passport-nationwide",
    date: "2026-03-28",
    category: "Shipped",
    agency: "Dept. of State",
    title: "Passport renewal goes fully nationwide",
    body: "The online passport renewal system is now available in all 50 states and territories. What started as a pilot with 500 applicants now serves millions. Average renewal time: 6 weeks, down from 11.",
    link: "/impact/passport",
    metric: { before: "11 weeks", after: "6 weeks", label: "Renewal time" },
    env: "Nationwide",
  },
  {
    id: "va-ai-expansion",
    date: "2026-03-21",
    category: "Milestone",
    agency: "Dept. of Veterans Affairs",
    title: "VA AI claims processing hits 1M veterans served",
    body: "The AI-assisted disability claims system has now processed claims for over 1 million veterans. Processing time is 82% faster than the legacy system, with accuracy above 95%.",
    link: "/impact/va-ai",
    metric: { after: "1M+", label: "Veterans served" },
    env: "All Regions",
  },
  {
    id: "new-team-q1",
    date: "2026-03-14",
    category: "New Faces",
    title: "12 new technologists join for spring tours",
    body: "Our newest cohort includes engineers from Google, Stripe, and Datadog, designers from IDEO and Apple, and a procurement specialist from McKinsey. They\u2019re deploying to VA, IRS, and State this month.",
    metric: { after: "12", label: "New team members" },
  },
  {
    id: "irs-direct-file",
    date: "2026-03-07",
    category: "Shipped",
    agency: "Internal Revenue Service",
    title: "Direct File handles 2M+ tax returns in first month",
    body: "The free federal tax filing system launched nationwide for the 2026 filing season. Over 2 million Americans have filed directly with the IRS \u2014 no third-party software, no fees.",
    metric: { after: "2M+", label: "Returns filed" },
    env: "Production",
  },
  {
    id: "fafsa-record",
    date: "2026-02-28",
    category: "Milestone",
    agency: "Dept. of Education",
    title: "FAFSA completion rates hit 10-year high",
    body: "Following the form redesign from 108 to 36 questions, FAFSA completion rates have reached their highest levels in a decade. Mobile completions are up 340%.",
    link: "/impact/fafsa",
    metric: { before: "108 questions", after: "36 questions", label: "Form length" },
    env: "Production",
  },
  {
    id: "cms-pipeline",
    date: "2026-02-14",
    category: "Shipped",
    agency: "Centers for Medicare & Medicaid Services",
    title: "Medicare claims pipeline v2 goes live",
    body: "The rebuilt claims processing pipeline is now handling 100% of Medicare Part B claims. Error rates are down 60% and processing time has been cut from days to hours.",
    metric: { before: "Days", after: "Hours", label: "Processing time" },
    env: "Production",
  },
  {
    id: "dhs-deploy",
    date: "2026-02-07",
    category: "Deployed",
    agency: "Dept. of Homeland Security",
    title: "New team deploys to USCIS for case management",
    body: "An 8-person team is embedding with U.S. Citizenship and Immigration Services to modernize the case management system. Goal: give applicants real-time visibility into their case status.",
    metric: { after: "8", label: "Engineers deployed" },
  },
  {
    id: "fraud-milestone",
    date: "2026-01-31",
    category: "Milestone",
    title: "$4B+ in fraud identified across federal programs",
    body: "Cumulative fraud and waste identified by USDS-built data pipelines has crossed the $4 billion mark. The majority comes from pandemic relief programs, Medicare billing, and tax fraud detection.",
    metric: { after: "$4B+", label: "Fraud identified" },
  },
  {
    id: "dod-cyber",
    date: "2026-01-24",
    category: "Deployed",
    agency: "Dept. of War",
    title: "Defense Digital Service team tackles cybersecurity overhaul",
    body: "A new team is working inside the Pentagon on modernizing the department\u2019s cybersecurity monitoring infrastructure. The systems they\u2019re replacing were designed before cloud computing existed.",
    metric: { after: "6", label: "Engineers deployed" },
  },
  {
    id: "ssa-pilot",
    date: "2026-01-17",
    category: "Shipped",
    agency: "Social Security Administration",
    title: "Online disability application pilot launches",
    body: "The first fully digital disability benefits application is now in pilot with 10,000 users. Early results show 65% completion rate vs. 40% for the paper form. Full rollout planned for Q3.",
    metric: { before: "40%", after: "65%", label: "Completion rate" },
    env: "Pilot",
  },
  {
    id: "new-team-winter",
    date: "2026-01-10",
    category: "New Faces",
    title: "Winter cohort: 8 new engineers and designers",
    body: "Eight new team members started their tours this month, including our first hire from the Peace Corps and a former CTO of a YC startup. They\u2019re heading to Education, VA, and SSA.",
    metric: { after: "8", label: "New team members" },
  },
  {
    id: "visa-recovery",
    date: "2025-12-20",
    category: "Field Note",
    agency: "Dept. of State",
    title: "Visa system stable for 90 consecutive days",
    body: "After the emergency fix that restored 1M daily applications, the State Dept. visa system has been running without incident for 90 days. Monitoring and alerting we built continues to catch issues before users notice.",
    link: "/impact/state-visas",
    metric: { after: "90 days", label: "Uptime streak" },
    env: "Production",
  },
];

export default dispatches;
