export type Article = {
  publication: string;
  headline: string;
  date: string;
  excerpt: string;
  url: string;
  tag: string;
};

export const featuredCoverage: Article[] = [
  {
    publication: "The Washington Post",
    headline: "Inside the elite tech team that\u2019s quietly transforming government",
    date: "March 2026",
    excerpt: "A small cadre of Silicon Valley engineers and designers has been embedded across federal agencies, shipping fixes to systems that serve millions of Americans daily.",
    url: "#",
    tag: "Profile",
  },
  {
    publication: "Wired",
    headline: "How USDS saved the FAFSA \u2014 and changed how government builds software",
    date: "February 2026",
    excerpt: "The team that cut the federal student aid application from 108 questions to 36 didn\u2019t just simplify a form. They proved that government technology doesn\u2019t have to be terrible.",
    url: "#",
    tag: "Impact",
  },
  {
    publication: "Federal News Network",
    headline: "VA\u2019s AI rollout is the model for responsible government adoption",
    date: "January 2026",
    excerpt: "The Dept. of Veterans Affairs\u2019 AI-assisted claims processing, built with USDS support, has cut processing time by 82% while maintaining accuracy above 95%.",
    url: "#",
    tag: "AI",
  },
];

const coverage: Article[] = [
  { publication: "The New York Times", headline: "The government\u2019s best-kept secret: a team of technologists who actually ship", date: "December 2025", excerpt: "After a decade of quiet impact, USDS has delivered results across 30+ agencies \u2014 from rescuing HealthCare.gov to modernizing how veterans receive benefits.", url: "#", tag: "Profile" },
  { publication: "TechCrunch", headline: "Why top engineers are leaving Big Tech for government service", date: "November 2025", excerpt: "A growing number of senior engineers from Google, Meta, and Stripe are signing up for tours of duty at USDS, drawn by the scale of impact and the challenge of legacy systems.", url: "#", tag: "Recruiting" },
  { publication: "Government Executive", headline: "State Dept. visa system restored after USDS intervention", date: "October 2025", excerpt: "A silent timeout bug was dropping a million daily visa applications. A USDS team found and fixed it in weeks, restoring service to applicants worldwide.", url: "#", tag: "Impact" },
  { publication: "Bloomberg Government", headline: "USDS identifies $4 billion in fraudulent federal spending", date: "September 2025", excerpt: "Data-driven oversight tools built by USDS teams have surfaced billions in fraud, waste, and abuse across federal programs.", url: "#", tag: "Efficiency" },
  { publication: "Fast Company", headline: "The most innovative team in government you\u2019ve never heard of", date: "August 2025", excerpt: "USDS brings user-centered design to federal services \u2014 an approach that sounds obvious but has been transformative in an environment built on compliance, not usability.", url: "#", tag: "Innovation" },
  { publication: "Axios", headline: "Inside the White House tech team modernizing Medicare claims", date: "July 2025", excerpt: "CMS processes over 40 million claims through a pipeline rebuilt by USDS engineers \u2014 replacing decades-old batch processing with modern, real-time infrastructure.", url: "#", tag: "Modernization" },
  { publication: "MIT Technology Review", headline: "How the federal government is actually getting AI right", date: "June 2025", excerpt: "While the private sector races ahead with AI, a team inside the VA is showing what responsible, effective government AI deployment looks like.", url: "#", tag: "AI" },
  { publication: "Politico", headline: "Congress codified USDS into law. Here\u2019s what they\u2019ve done since.", date: "May 2025", excerpt: "Since being permanently authorized by Congress in 2022, USDS has expanded its footprint across agencies and delivered measurable results on government efficiency.", url: "#", tag: "Policy" },
];

export default coverage;
