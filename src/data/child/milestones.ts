export type Milestone = {
  year: string;
  event: string;
  image?: string;
};

const milestones: Milestone[] = [
  { year: "2008", event: "Federal government begins exploring new ways to bring technical talent into public service" },
  { year: "2013", event: "HealthCare.gov crashes on launch \u2014 millions can\u2019t enroll in health insurance. The crisis becomes the catalyst.", image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&q=80" },
  { year: "2014", event: "President Obama founds USDS in August. The original plan: hire ten people to fix three things \u2014 immigration, Veterans\u2019 benefits, and HealthCare.gov.", image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&q=80" },
  { year: "2015", event: "USDS is announced at the State of the Union. Expected ten applicants. Got 1,000. First full class deploys across 8 agencies.", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80" },
  { year: "2016", event: "Launched the Defense Digital Service inside the Pentagon. Teams now span from healthcare to national security.", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80" },
  { year: "2017", event: "Expanded to over 200 mission-driven professionals from more than 20 states and territories.", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80" },
  { year: "2020", event: "Led pandemic response technology \u2014 vaccines.gov, testing site locators, relief fund distribution. When the country needed fast, working tech, USDS delivered.", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80" },
  { year: "2022", event: "Codified into permanent law by Congress. No longer a temporary initiative \u2014 a permanent part of how the government delivers.", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80" },
  { year: "2024", event: "10th anniversary. Over 1,000 alumni now leading at Google, Apple, Stripe, and dozens of startups and nonprofits.", image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=600&q=80" },
];

export default milestones;
