export type CommunityDiscipline = {
  id: string;
  title: string;
  summary: string;
  roles: readonly string[];
  skills: string;
};

export const COMMUNITY_DISCIPLINES = [
  {
    id: "community-engineering",
    title: "Engineering",
    summary:
      "Engineers at USDS modernize high-impact systems, improve reliability, and ship safer releases for services millions of people use.",
    roles: [
      "Software engineers",
      "Site reliability engineers",
      "Platform and infrastructure engineers",
      "Security-focused engineers",
    ],
    skills:
      "Skills you might bring to the engineering community: programming, modern architecture, incident response, technical communication, project and team management, or collaborative engineering practices.",
  },
  {
    id: "community-design-ux",
    title: "Design and user experience",
    summary:
      "Designers partner with users and agency teams to make critical government services clearer, more accessible, and easier to complete.",
    roles: [
      "Product designers",
      "Content designers",
      "Service designers",
      "User researchers",
    ],
    skills:
      "Skills you might bring to the design community: design process, systems thinking, leadership, user research, interaction design, service design, design operations, content strategy, visual design, front-end development, or art direction.",
  },
  {
    id: "community-data-science",
    title: "Data science",
    summary:
      "Data specialists transform operational data into practical decisions that improve outcomes, reduce fraud risk, and increase service quality.",
    roles: [
      "Data scientists",
      "Data engineers",
      "Applied AI and ML practitioners",
      "Analytics and measurement leads",
    ],
    skills:
      "Skills you might bring to the data community: statistical analysis, machine learning and AI, data engineering, data visualization and communication, data ethics, or public policy analysis.",
  },
  {
    id: "community-product-strategy-operations",
    title: "Product, strategy, and operations",
    summary:
      "Product and operations staff align policy, users, and delivery constraints to move critical initiatives from plan to shipped outcomes.",
    roles: [
      "Product managers",
      "Program and delivery leads",
      "Strategic operations leads",
      "Implementation managers",
    ],
    skills:
      "Skills you might bring to the product community: execution, communication, leadership, user focus, grit, product delivery, product strategy, capacity building, government expertise, or data analysis.",
  },
  {
    id: "community-procurement",
    title: "Procurement",
    summary:
      "Acquisition specialists shape buying strategies and contracts that let agencies deliver modern digital services faster and with better outcomes.",
    roles: [
      "Acquisition strategists",
      "Digital procurement specialists",
      "Contracting advisors",
      "Vendor and market analysts",
    ],
    skills:
      "Skills you might bring to the procurement community: digital market knowledge, federal procurement process, strategic advice, or technical acumen.",
  },
] as const satisfies readonly CommunityDiscipline[];
