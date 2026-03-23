"use client";

import styles from "./missionPage.module.css";
import Hero from "./Hero";
import InfoPanel from "../../components/sections/InfoPanel";
import DividerStars from "@/ui/DividerStars";
import StickyList from "../../components/sections/StickyList";
import WhoWeHelp from "./WhoWeHelp";
import OurValues from "./OurValues";
import OriginStory from "./OriginStory";

const whoCards = [
  {
    header: "Who We Are",
    body: "We are mission-driven professionals who are passionate about applying our work and lived experiences to public service. We come from a range of backgrounds, just like the people we serve. We are curious about understanding the needs of people and are excited to use our short tours of service to make a positive impact.",
  },
  {
    header: "What We Do",
    body: "We collaborate with public servants throughout the government to address some of the most critical needs and ultimately deliver a better government experience to people. We work across multiple agencies and bring best practices from our various disciplines, which include engineering, product, design, procurement, data science, operations, talent, and communications.",
  },
];

const stickyList = {
  header: "Our Objectives",
  items: [
    {
      title: "Improve Critical Services",
      description:
        "Continuously strengthen and modernize essential government systems that serve the American people.",
    },
    {
      title: "Bring Top Technical Talent to Public Service",
      description:
        "Recruit and empower world-class engineers, designers, and operators to work on high-impact federal challenges.",
    },
    {
      title: "Modernize Through Partnership",
      description:
        "Collaborate directly with federal agencies to design, build, and scale modern, reliable solutions.",
    },
    {
      title: "Protect Taxpayer Dollars",
      description:
        "Reduce fraud, waste, and abuse by improving system integrity, oversight, and accountability.",
    },
  ],
};

const whoWeHelpContent = {
  eyebrow: "Public Impact",
  title: "Who We Help",
  titleHighlightSlice: [4, 11] as [number, number],
  link: {
    text: "Explore our partners",
    href: "/projects",
  },
  subTitle:
    "Our products engage real users before launch. We apply user-centered design and iterative development to prioritize user needs and learn what works as quickly as possible.",
};

const whoWeHelpCards = [
  {
    title: "Farmers",
    summary: "Modern, reliable digital tools for agriculture and rural communities.",
    details:
      "We help farmers access benefits faster, reduce paperwork burden, and improve field service coordination through clearer forms, resilient platforms, and better data sharing.",
  },
  {
    title: "Veterans",
    summary: "Faster, clearer access to benefits and service decisions.",
    details:
      "We improve claim workflows, communication touchpoints, and VA product performance so Veterans can complete tasks quicker and get transparent status updates.",
  },
  {
    title: "Medicare beneficiaries",
    summary: "Safer systems that protect care delivery and payment integrity.",
    details:
      "We strengthen identity and eligibility checks, reduce fraud vectors, and streamline beneficiary-facing services so people get trusted access to care.",
  },
  {
    title: "Students",
    summary: "Simpler aid experiences that reduce friction and uncertainty.",
    details:
      "We modernize student aid journeys, improve completion flows, and reduce outages so students can apply, verify, and receive support with less confusion.",
  },
  {
    title: "Military Service Members",
    summary: "Reliable digital pathways for critical military and transition services.",
    details:
      "We support secure, mission-ready systems that improve access to records, benefits, and essential workflows used by Service Members and their families.",
  },
  {
    title: "Small Business Owners",
    summary: "Clearer federal interactions so businesses can grow and compete.",
    details:
      "We simplify complex service touchpoints, modernize application processes, and improve platform trust so owners can spend less time navigating bureaucracy.",
  },
];

const values = [
  {
    title: "Hire and empower great people.",
    body: "Humans move our mission forward. Empathy and tenacity matter as much as technical depth.",
    motif: "triangles" as const,
  },
  {
    title: "Find the truth. Tell the truth.",
    body: "We question assumptions and follow evidence, even when the answer is uncomfortable.",
    motif: "grid" as const,
  },
  {
    title: "Optimize for results, not optics.",
    body: "We focus on practical outcomes for people over vanity metrics, headlines, or noise.",
    motif: "diagonal" as const,
  },
  {
    title: "Go where the work is.",
    body: "We partner directly with civil servants and users where decisions happen.",
    motif: "burst" as const,
  },
  {
    title: "Create momentum.",
    body: "Ship quickly, learn continuously, and build durable systems that compound value.",
    motif: "arcs" as const,
  },
  {
    title: "Design with users, not for them.",
    body: "We involve real people early and often so products fit their needs in practice.",
    motif: "orbit" as const,
  },
];

export default function MissionPage() {
  return (
    <div className={`pageWrapper ${styles.wrapper}`}>
      <div className="pageInnerWrapper">
        <Hero />

        <DividerStars />

        <InfoPanel cards={whoCards} />

        <DividerStars />

        <StickyList header={stickyList.header} list={stickyList.items} />

        <DividerStars />

        <WhoWeHelp cards={whoWeHelpCards} content={whoWeHelpContent} />

        <DividerStars />

        <OurValues items={values} />

        <DividerStars />

        <OriginStory />

      </div>
    </div>
  );
}
