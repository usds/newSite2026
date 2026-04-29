export type TeamMember = {
  initials: string;
  name: string;
  role: string;
  discipline: string;
  from: string;
  leadership?: boolean;
};

const teamMembers: TeamMember[] = [
  { initials: "AD", name: "TBD", role: "Administrator", discipline: "Product", from: "TBD", leadership: true },
  { initials: "DA", name: "TBD", role: "Deputy Administrator", discipline: "Engineering", from: "TBD", leadership: true },
  { initials: "CS", name: "TBD", role: "Chief of Staff", discipline: "Product", from: "TBD", leadership: true },
  { initials: "SE", name: "Seth Eheart", role: "Product Strategist", discipline: "Product", from: "Private Sector", leadership: true },
  { initials: "AK", name: "Ana Kim", role: "Site Reliability Engineer", discipline: "Engineering", from: "Amazon" },
  { initials: "JR", name: "James Rodriguez", role: "Content Strategist", discipline: "Design", from: "The New York Times" },
  { initials: "SP", name: "Sarah Patel", role: "Senior Software Engineer", discipline: "Engineering", from: "Google" },
  { initials: "MW", name: "Marcus Washington", role: "Product Designer", discipline: "Design", from: "IDEO" },
  { initials: "LC", name: "Lisa Chen", role: "Security Engineer", discipline: "Engineering", from: "CrowdStrike" },
  { initials: "DT", name: "David Torres", role: "Data Engineer", discipline: "Data", from: "Palantir" },
  { initials: "RN", name: "Rachel Nguyen", role: "UX Researcher", discipline: "Design", from: "Meta" },
  { initials: "BJ", name: "Brian Jackson", role: "DevOps Engineer", discipline: "Engineering", from: "Netflix" },
  { initials: "KO", name: "Kira Okafor", role: "Product Manager", discipline: "Product", from: "Stripe" },
  { initials: "TH", name: "Tyler Hayes", role: "Frontend Engineer", discipline: "Engineering", from: "Airbnb" },
  { initials: "NM", name: "Nina Martinez", role: "Service Designer", discipline: "Design", from: "Fjord" },
  { initials: "EW", name: "Ethan Wright", role: "Backend Engineer", discipline: "Engineering", from: "Datadog" },
  { initials: "JL", name: "Jessica Liu", role: "Procurement Specialist", discipline: "Procurement", from: "Deloitte" },
  { initials: "AP", name: "Andre Phillips", role: "Platform Engineer", discipline: "Engineering", from: "Microsoft" },
  { initials: "MK", name: "Maya Kumar", role: "Data Scientist", discipline: "Data", from: "Two Sigma" },
  { initials: "CW", name: "Chris Walker", role: "Design Lead", discipline: "Design", from: "Apple" },
];

export default teamMembers;

export type Profile = {
  name: string;
  role: string;
  initials: string;
  whyJoined: string;
  shipped: string;
};

export const profiles: Profile[] = [
  {
    name: "Sarah Patel",
    role: "Senior Software Engineer",
    initials: "SP",
    whyJoined:
      "I left a principal role at a FAANG company because I wanted my code to matter beyond quarterly earnings. Here, a single deploy can affect millions of veterans.",
    shipped:
      "Led the rebuild of the VA disability claims intake system, cutting processing time from 125 days to under 30.",
  },
  {
    name: "Marcus Washington",
    role: "Product Designer",
    initials: "MW",
    whyJoined:
      "I grew up watching my grandmother struggle with government forms. I came here to make sure no one else has to.",
    shipped:
      "Redesigned the FAFSA application experience, reducing abandonment rates by 40% and unlocking billions in student aid.",
  },
  {
    name: "Kira Okafor",
    role: "Product Manager",
    initials: "KO",
    whyJoined:
      "After a decade in startups, I wanted to work on problems where the scale is real and the stakes are human lives, not engagement metrics.",
    shipped:
      "Managed the rollout of the modernized passport renewal system, serving over 2 million applicants in the first quarter.",
  },
  {
    name: "David Torres",
    role: "Data Engineer",
    initials: "DT",
    whyJoined:
      "The government sits on some of the most consequential datasets in the world. I came to help make sense of them responsibly.",
    shipped:
      "Built the fraud detection pipeline for pandemic relief programs, identifying over $4 billion in potentially fraudulent claims.",
  },
  {
    name: "Ana Kim",
    role: "Site Reliability Engineer",
    initials: "AK",
    whyJoined:
      "I spent years keeping e-commerce sites up during Black Friday. Now I keep systems up that veterans depend on every single day. The pager hits different when lives are on the line.",
    shipped:
      "Rebuilt the monitoring infrastructure for VA.gov, reducing mean time to recovery from 4 hours to under 15 minutes.",
  },
  {
    name: "Rachel Nguyen",
    role: "UX Researcher",
    initials: "RN",
    whyJoined:
      "I was tired of optimizing funnels. I wanted to sit across from real people and hear what government services actually felt like for them.",
    shipped:
      "Ran 200+ user research sessions that directly shaped the FAFSA redesign. Her findings changed the form architecture entirely.",
  },
  {
    name: "Lisa Chen",
    role: "Security Engineer",
    initials: "LC",
    whyJoined:
      "Securing a consumer app is important. Securing systems that hold the personal data of every American is something else entirely.",
    shipped:
      "Led the security overhaul of the State Dept. visa system, closing vulnerabilities that had gone unpatched for years.",
  },
  {
    name: "Jessica Liu",
    role: "Procurement Specialist",
    initials: "JL",
    whyJoined:
      "The government spends $100 billion a year on IT. Most of it is wasted on bad contracts. I came to change how government buys technology.",
    shipped:
      "Restructured $2.3 billion in legacy IT contracts at DHS, saving $400 million and improving vendor accountability.",
  },
];

export type BeforeAfter = {
  name: string;
  before: { title: string; company: string; work: string };
  now: { title: string; agency: string; work: string };
};

export const beforeAfter: BeforeAfter[] = [
  {
    name: "Sarah P.",
    before: { title: "Principal Engineer", company: "Google", work: "Optimized ad delivery serving billions of impressions" },
    now: { title: "Senior Software Engineer", agency: "Dept. of Veterans Affairs", work: "Rebuilt the disability claims pipeline \u2014 a single deploy affects 4M+ veterans" },
  },
  {
    name: "Marcus W.",
    before: { title: "Senior Designer", company: "IDEO", work: "Designed products for Fortune 500 consumer brands" },
    now: { title: "Product Designer", agency: "Dept. of Education", work: "Redesigned FAFSA, unlocking billions in student aid for millions of families" },
  },
  {
    name: "Kira O.",
    before: { title: "Product Lead", company: "Stripe", work: "Managed payments infrastructure for thousands of businesses" },
    now: { title: "Product Manager", agency: "Dept. of State", work: "Shipped the digital passport renewal system serving 2M+ applicants in Q1" },
  },
  {
    name: "David T.",
    before: { title: "Data Engineer", company: "Palantir", work: "Built analytics platforms for enterprise clients" },
    now: { title: "Data Engineer", agency: "Executive Office of the President", work: "Built the fraud detection pipeline that identified $4B+ in fraudulent pandemic claims" },
  },
  {
    name: "Ana K.",
    before: { title: "SRE", company: "Amazon", work: "Kept e-commerce services up during Black Friday" },
    now: { title: "Site Reliability Engineer", agency: "Dept. of Veterans Affairs", work: "Cut VA.gov mean recovery time from 4 hours to 15 minutes \u2014 for systems veterans depend on daily" },
  },
  {
    name: "Jessica L.",
    before: { title: "Senior Consultant", company: "Deloitte", work: "Advised on IT procurement for state governments" },
    now: { title: "Procurement Specialist", agency: "Dept. of Homeland Security", work: "Restructured $2.3B in legacy IT contracts, saving $400M in taxpayer money" },
  },
];

export type AlumniDestination = { company: string; count: number };

export const alumniDestinations: AlumniDestination[] = [
  { company: "Google", count: 45 },
  { company: "Apple", count: 22 },
  { company: "Stripe", count: 18 },
  { company: "Meta", count: 15 },
  { company: "Microsoft", count: 14 },
  { company: "Amazon", count: 12 },
  { company: "Startups (founded)", count: 38 },
  { company: "Nonprofits", count: 24 },
  { company: "Other Gov", count: 30 },
  { company: "VC / Investing", count: 8 },
];
