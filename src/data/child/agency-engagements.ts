export type AgencyEngagement = {
  name: string;
  domain: string;
  teams: number;
  people: number;
  status: "active" | "completed";
  highlights: string[];
};

const agencyEngagements: AgencyEngagement[] = [
  { name: "Dept. of Veterans Affairs", domain: "Healthcare", teams: 4, people: 18, status: "active", highlights: ["Claims automation (AI)", "VA.gov redesign", "Health records modernization", "Benefits delivery"] },
  { name: "Centers for Medicare & Medicaid Services", domain: "Healthcare", teams: 3, people: 14, status: "active", highlights: ["Healthcare.gov marketplace", "Medicare claims pipeline", "Quality Payment Program"] },
  { name: "Dept. of Health & Human Services", domain: "Healthcare", teams: 1, people: 5, status: "active", highlights: ["Pandemic preparedness data", "Public health surveillance"] },
  { name: "Dept. of War", domain: "Defense & Security", teams: 3, people: 12, status: "active", highlights: ["Defense Digital Service", "Logistics modernization", "Cybersecurity infrastructure"] },
  { name: "Dept. of Homeland Security", domain: "Defense & Security", teams: 2, people: 8, status: "active", highlights: ["USCIS case management", "FEMA disaster response", "Border systems"] },
  { name: "Bureau of Alcohol, Tobacco, Firearms & Explosives", domain: "Defense & Security", teams: 1, people: 3, status: "completed", highlights: ["NFA eForms digitization"] },
  { name: "Internal Revenue Service", domain: "Finance & Tax", teams: 2, people: 10, status: "active", highlights: ["Direct File system", "Fraud detection models", "Taxpayer experience"] },
  { name: "Social Security Administration", domain: "Benefits & Services", teams: 2, people: 7, status: "active", highlights: ["Benefits platform modernization", "Disability claims"] },
  { name: "Small Business Administration", domain: "Finance & Tax", teams: 1, people: 4, status: "completed", highlights: ["PPP loan processing", "Disaster loan systems"] },
  { name: "Dept. of State", domain: "Immigration & State", teams: 2, people: 9, status: "active", highlights: ["Passport renewal system", "Visa processing infrastructure"] },
  { name: "U.S. Citizenship & Immigration Services", domain: "Immigration & State", teams: 2, people: 8, status: "active", highlights: ["Case management", "Forms digitization", "Processing optimization"] },
  { name: "Dept. of Education", domain: "Benefits & Services", teams: 1, people: 6, status: "active", highlights: ["FAFSA modernization", "Student aid systems"] },
  { name: "General Services Administration", domain: "Benefits & Services", teams: 1, people: 4, status: "completed", highlights: ["IT marketplace modernization", "Cloud procurement"] },
  { name: "Office of Personnel Management", domain: "Benefits & Services", teams: 1, people: 3, status: "completed", highlights: ["Federal hiring system", "Benefits enrollment"] },
  { name: "Dept. of Agriculture", domain: "Benefits & Services", teams: 1, people: 4, status: "completed", highlights: ["SNAP benefits modernization", "Farm loan systems"] },
  { name: "Dept. of Labor", domain: "Benefits & Services", teams: 1, people: 3, status: "completed", highlights: ["Unemployment insurance tech", "Worker safety reporting"] },
];

export default agencyEngagements;
