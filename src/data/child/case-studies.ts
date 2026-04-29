export type CaseStudy = {
  slug: string | null;
  title: string;
  agency: string;
  domain: string;
  result: string;
  before: string;
  after: string;
  metricLabel: string;
  featured: boolean;
  image: string;
  detail?: string;
};

const caseStudies: CaseStudy[] = [
  {
    slug: "fafsa",
    title: "FAFSA Modernization",
    agency: "Dept. of Education",
    domain: "Education & Finance",
    result: "Cut the form from 108 to 36 questions — millions more applications completed",
    before: "108 questions",
    after: "36 questions",
    metricLabel: "Form length",
    featured: true,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
  },
  {
    slug: "va-ai",
    title: "VA AI Claims Processing",
    agency: "Dept. of Veterans Affairs",
    domain: "Veterans",
    result: "AI-assisted claims processing reduced backlog by months with 95%+ accuracy",
    before: "125 days",
    after: "< 30 days",
    metricLabel: "Processing time",
    featured: true,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
  },
  {
    slug: "state-visas",
    title: "Visa System Recovery",
    agency: "Dept. of State",
    domain: "Immigration & State",
    result: "Restored 1M daily visa applications lost to silent system timeouts",
    before: "0 (down)",
    after: "1M daily",
    metricLabel: "Applications processed",
    featured: true,
    image: "https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=800&q=80",
  },
  {
    slug: "passport",
    title: "Passport Renewal System",
    agency: "Dept. of State",
    domain: "Immigration & State",
    result: "Built an end-to-end digital renewal system — cut wait times from 11 weeks to 6",
    before: "11 weeks",
    after: "6 weeks",
    metricLabel: "Renewal time",
    featured: true,
    image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=800&q=80",
  },
  {
    slug: null,
    title: "Medicare Claims Modernization",
    agency: "Centers for Medicare & Medicaid Services",
    domain: "Healthcare",
    result: "Rebuilt the claims processing pipeline from batch to real-time. Error rates down 60%, processing from days to hours.",
    before: "Days",
    after: "Hours",
    metricLabel: "Processing time",
    featured: false,
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80",
    detail: "CMS processes over 40 million Medicare Part B claims through a pipeline rebuilt by USDS engineers. The legacy system relied on batch processing from the 1990s \u2014 jobs ran overnight, errors weren\u2019t caught until morning, and fixes took days. The new architecture processes claims in real time with automated validation, cutting error rates by 60%.",
  },
  {
    slug: null,
    title: "VA Disability Claims Pipeline",
    agency: "Dept. of Veterans Affairs",
    domain: "Veterans",
    result: "82% faster disability claims with intelligent automation and modern infrastructure",
    before: "Months",
    after: "Weeks",
    metricLabel: "Backlog reduction",
    featured: false,
    image: "https://images.unsplash.com/photo-1604079628040-94301bb21b91?w=800&q=80",
    detail: "The VA disability claims system had a backlog that stretched to years. USDS rebuilt the intake and processing pipeline, replacing COBOL batch jobs with a streaming architecture. Combined with AI-assisted adjudication, the system now processes claims 82% faster while maintaining accuracy above 95%.",
  },
  {
    slug: null,
    title: "ATF NFA eForms",
    agency: "Bureau of Alcohol, Tobacco, Firearms and Explosives",
    domain: "Defense & Security",
    result: "Digitized decades-old paper registration — processing time from months to hours",
    before: "Months",
    after: "12 hours",
    metricLabel: "Processing time",
    featured: false,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    detail: "The National Firearms Act registration process hadn\u2019t changed in decades \u2014 paper forms, manual processing, months-long waits. USDS digitized the entire workflow, building a modern web application that reduced processing time from months to approximately 12 hours.",
  },
  {
    slug: null,
    title: "Healthcare.gov Stabilization",
    agency: "Centers for Medicare & Medicaid Services",
    domain: "Healthcare",
    result: "Rescued the health insurance marketplace — now serves 20M+ enrollees annually",
    before: "Crashed",
    after: "20M+ served",
    metricLabel: "Annual enrollees",
    featured: false,
    image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&q=80",
    detail: "When Healthcare.gov launched in 2013, it crashed under load and couldn\u2019t process applications. USDS was founded in the wake of this failure. The team stabilized the platform, rebuilt critical components, and established the engineering practices that keep it running for 20M+ enrollees during open enrollment every year.",
  },
  {
    slug: null,
    title: "IRS Direct File",
    agency: "Internal Revenue Service",
    domain: "Education & Finance",
    result: "Built a free federal tax filing system — 2M+ returns in the first month",
    before: "$0 free options",
    after: "2M+ returns",
    metricLabel: "First month",
    featured: false,
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
    detail: "For decades, Americans had no free option to file taxes directly with the IRS. USDS built Direct File \u2014 a simple, free federal tax filing system. In its first month of nationwide availability, over 2 million Americans used it to file their taxes without paying for third-party software.",
  },
];

export default caseStudies;
