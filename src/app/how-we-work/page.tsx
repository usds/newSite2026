import type { Metadata } from "next";
import styles from "./howWeWork.module.css";
import DividerStars from "@/ui/DividerStars";
import SectionHeader from "@/components/general/SectionHeader";
import CTA from "@/components/buttons/CTA";
import ColorImageBlock from "@/components/general/ColorImageBlock";
import Link from "next/link";
import { type Card } from "@/components/cards/ContentCard";
import HorizontalCards from "@/components/sections/HorizontalCards";

type Discipline = {
  title: string;
  summary: string;
  skills: string;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.usds.gov";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Learn how U.S. DOGE Service (USDS) collaborates with agencies through short tours of service, cross-functional teams, and measurable delivery.",
  keywords: [
    "How USDS works",
    "U.S. DOGE Service hiring",
    "U.S. Digital Service disciplines",
    "federal digital service delivery",
    "government modernization approach",
  ],
  alternates: {
    canonical: "/how-we-work",
  },
  openGraph: {
    url: `${siteUrl}/how-we-work`,
    title: "How We Work | U.S. DOGE Service (USDS)",
    description:
      "See how USDS deploys mission-driven teams to improve critical government services with engineering, design, product, data, and procurement expertise.",
    images: [
      {
        url: "/usds-logo-cropped.svg",
        alt: "U.S. DOGE Service logo",
      },
    ],
  },
  twitter: {
    title: "How We Work | U.S. DOGE Service (USDS)",
    description:
      "See how USDS deploys mission-driven teams to improve critical government services with modern delivery practices.",
    images: ["/usds-logo-cropped.svg"],
  },
};

const VALUES: Card[] = [
  {
    title: "Hire and empower great people.",
    body: "We work to address some of our nation's most critical needs. We hire people with the experience, skills, compassion, curiosity, and tenacity to find new paths forward.",
  },
  {
    title: "Design with users, not for them.",
    body: "We build better solutions when our team reflects the people we serve, including people from communities that are traditionally underserved.",
  },
  {
    title: "Go where the work is.",
    body: "We prioritize based on where we are needed most and where we can do the greatest good for the greatest number of people in the greatest need.",
  },
];

const DISCIPLINES: Discipline[] = [
  {
    title: "Engineering",
    summary:
      "Engineers will rarely find systems more mission-critical than those at USDS, where we build, scale, and troubleshoot systems of huge reach. We are most successful advocating for modern software practices when we work alongside product managers, UX designers, and acquisition specialists.",
    skills:
      "Skills you might bring to the engineering community: programming, modern architecture, incident response, technical communication, project and team management, or collaborative engineering practices.",
  },
  {
    title: "Design and user experience",
    summary:
      "USDS designers know government users come from many backgrounds and contexts, so we design alongside them to make experiences simple, consistent, and useful. We often introduce human-centered design practices across government.",
    skills:
      "Skills you might bring to the design community: design process, systems thinking, leadership, user research, interaction design, service design, design operations, content strategy, visual design, front-end development, or art direction.",
  },
  {
    title: "Data science",
    summary:
      "USDS data scientists tap deep reservoirs of government data to find insights that improve delivery, predict policy effects, and identify inequities in services. We do our best work in collaboration with researchers and subject matter experts.",
    skills:
      "Skills you might bring to the data community: statistical analysis, machine learning and AI, data engineering, data visualization and communication, data ethics, or public policy analysis.",
  },
  {
    title: "Product, strategy, and operations",
    summary:
      "Product and operations staff focus on data to make decisions based on reality, not politics. We identify paths to success through user research and technical feasibility, then deliver the best solution together.",
    skills:
      "Skills you might bring to the product community: execution, communication, leadership, user focus, grit, product delivery, product strategy, capacity building, government expertise, or data analysis.",
  },
  {
    title: "Procurement",
    summary:
      "USDS acquisition strategists make buying digital services more effective through market intelligence, modern evaluation methods, and contracts focused on outcomes over requirements.",
    skills:
      "Skills you might bring to the procurement community: digital market knowledge, federal procurement process, strategic advice, or technical acumen.",
  },
];

const PRINCIPLES: Card[] = [
  {
    title: "Put users first",
    body: "Good design works for everyone. We want users to feel informed, empowered, prepared, and in control.",
    image: <ColorImageBlock tone="ocean" micro />,
  },
  {
    title: "Build iteratively",
    body: "We release frequently with modern infrastructure and automation to improve services quickly with minimal risk.",
    image: <ColorImageBlock tone="teal" micro />,
  },
  {
    title: "Let data drive decisions",
    body: "Data-centered decisions help us reflect reality, minimize bias, and focus on measurable outcomes over politics.",
    image: <ColorImageBlock tone="amber" micro />,
  },
];

const SPOTLIGHTS: Card[] = [
  {
    eyebrow: "Centers for Medicare and Medicaid Services",
    title: "Modernizing Medicare and Medicaid",
    body: "Working with CMS to modernize critical healthcare systems by reducing waste, fraud, and abuse while improving secure, user-friendly tools for patients and providers.",
    image: <ColorImageBlock tone="ocean" micro />,
    footer: <Link href="/projects">Learn more</Link>,
  },
  {
    eyebrow: "Department of Veterans Affairs",
    title: "Transforming Veteran care",
    body: "Partnering with VA teams to modernize legacy systems and deliver faster, more secure digital benefits and services for Veterans and their families.",
    image: <ColorImageBlock tone="teal" micro />,
    footer: <Link href="/projects">Learn more</Link>,
  },
  {
    eyebrow: "Department of Education",
    title: "Modernizing FAFSA and student aid",
    body: "Collaborating with Education to modernize FAFSA and student aid systems so millions of students can apply for and receive support without disruption.",
    image: <ColorImageBlock tone="amber" micro />,
    footer: <Link href="/projects">Learn more</Link>,
  },
  {
    eyebrow: "Office of Personnel Management",
    title: "Modernizing federal recruitment",
    body: "Strengthening hiring systems and safeguards while improving speed, quality, and access in federal talent acquisition.",
    image: <ColorImageBlock tone="ocean" micro />,
    footer: <Link href="/projects">Learn more</Link>,
  },
  {
    eyebrow: "Cross-agency",
    title: "Changing how government hires technical talent",
    body: "We helped build hiring processes that use subject-matter experts to evaluate specialized candidates, restoring fair access while shortening timelines and improving qualification quality.",
    image: <ColorImageBlock tone="teal" micro />,
    footer: <Link href="/projects">Learn more</Link>,
  },
  {
    eyebrow: "Veterans Affairs",
    title: "Simplifying Veteran-facing services through VA.gov",
    body: "With over 10 million monthly users, VA modernization focused on improving content clarity, findability, and user experience so Veterans can complete key tasks with less friction.",
    image: <ColorImageBlock tone="amber" micro />,
    footer: <Link href="/projects">Learn more</Link>,
  },
];


export default function HowWeWorkPage() {
  return (
    <div className={`pageWrapper ${styles.wrapper}`}>
      <div className="pageInnerWrapper">
        <section id="work" className={`sectionFrameBase ${styles.hero}`}>
          <div className={styles.heroLayout}>
            <div className={styles.heroContent}>
              <SectionHeader
                eyebrow="How We Work"
                title="Mission-driven tours of service for high-impact government delivery."
                titleAs="h1"
                titleSize="large"
                titleAlignment="left"
                titleColor="primaryLight"
                titleHighlightColor="primaryColorLight"
                titleHighlightSlice={[36, 47]}
              />

              <p className={styles.heroBody}>
                We collaborate with federal agencies to deploy mission-driven talent on short tours of service
                targeting their toughest operational and programmatic challenges. We partner with public servants to
                bring best practices from our diverse fields and deliver lasting improvements that make government more
                effective, accountable, and helpful for the citizens and families who depend on it.
              </p>
            </div>

            <ColorImageBlock tone="teal" className={styles.heroVisual} />
          </div>
        </section>

        <DividerStars />

        <section
          className={`sectionFrameBase sectionFrameTonePanel ${styles.valuesSection}`}
        >
          <SectionHeader
            eyebrow="Team and Values"
            title="Building a team with a broad range of experiences to transform government."
            titleAs="h2"
            titleSize="medium"
            titleAlignment="left"
            titleColor="primaryLight"
            titleHighlightColor="primaryColorLight"
            titleHighlightSlice={[21, 50]}
          />

          <p className={styles.valuesIntro}>
            With tours of service lasting no more than four years, the U.S. DOGE Service brings fresh perspectives on
            technology and delivery to government. To build the best possible team, we focus on the same values in our
            hiring as we do in our work.
          </p>

          <div className={styles.valuesGrid}>
            <HorizontalCards cards={VALUES} />
          </div>

          <p className={styles.valuesFoot}>
            Learn more about who we hire and how we work below. If you do not find a description that fits you, but
            think you can help push our mission forward, we encourage you to apply.
          </p>
        </section>

        <DividerStars />

        <section className={`sectionFrameBase ${styles.disciplinesSection}`}>
          <SectionHeader
            eyebrow="Communities"
            title="Who we hire"
            titleAs="h2"
            titleSize="medium"
            titleAlignment="left"
            titleColor="primaryLight"
            titleHighlightColor="primaryColorLight"
            linkText="View careers"
            linkHref="/careers"
          />

          <div className={styles.disciplineGrid}>
            {DISCIPLINES.map((discipline) => (
              <article key={discipline.title} className={styles.disciplineCard}>
                <h3 className={styles.disciplineTitle}>{discipline.title}</h3>
                <p className={styles.disciplineSummary}>{discipline.summary}</p>
                <p className={styles.disciplineSkills}>{discipline.skills}</p>
              </article>
            ))}
          </div>
        </section>

        <DividerStars />

        <section
          className={`sectionFrameBase sectionFrameTonePanel ${styles.principlesSection}`}
        >
          <SectionHeader
            eyebrow="Digital Services Playbook"
            title="Bringing private sector best practices to the Federal Government"
            titleAs="h2"
            titleSize="medium"
            titleAlignment="left"
            titleColor="primaryLight"
            titleHighlightColor="primaryColorLight"
            titleHighlightSlice={[46, 64]}
          />

          <p className={styles.principlesIntro}>
            Private industry knows how to move fast, stay lean, and keep the focus on users. Our teams bring those
            practices into public service delivery.
          </p>

          <div className={styles.principlesGrid}>
            <HorizontalCards cards={PRINCIPLES} />
          </div>
        </section>

        <DividerStars />

        <section className={`sectionFrameBase ${styles.spotlightsSection}`}>
          <SectionHeader
            eyebrow="Project Spotlights"
            title="Prioritizing the greatest good for the greatest number of people in the greatest need"
            titleAs="h2"
            titleSize="medium"
            titleAlignment="left"
            titleColor="primaryLight"
            titleHighlightColor="primaryColorLight"
            titleHighlightSlice={[39, 72]}
            linkText="See all projects"
            linkHref="/projects"
          />

          <div className={styles.spotlightGrid}>
            <HorizontalCards cards={SPOTLIGHTS} />
          </div>
        </section>

        <DividerStars />

        <section className={`sectionFrameBase sectionFrameTonePanel ${styles.ctaSection}`}>
          <h2 className={styles.ctaTitle}>
            We need you.
            <br />
            Let&apos;s help millions of people together.
          </h2>
          <div className={styles.ctaAction}>
            <CTA
              text="Apply now"
              href="/mission#applyNow"
              icon="arrowRight"
              backgroundColor="var(--primary-color)"
              textColor="var(--primary-light)"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
