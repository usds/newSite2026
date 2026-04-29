export type Value = { title: string; desc: string };
export type Objective = { title: string; desc: string; stat: string };

export const values: Value[] = [
  { title: "Hire and empower great people", desc: "Humans drive the mission forward. Empathy and tenacity matter as much as technical skill. We recruit the best and give them the autonomy to deliver." },
  { title: "Find the truth, tell the truth", desc: "We do user research, look at data, and report what we find \u2014 even when it\u2019s uncomfortable. Humility to question. Confidence to forge new paths." },
  { title: "Optimize for results, not optics", desc: "We work for the people \u2014 not attention, status, or headlines. Success is measured by whether real people got better service from their government." },
  { title: "Go where the work is", desc: "We embed inside agencies, sit alongside civil servants, and ship from within their environment. That\u2019s how lasting change happens." },
  { title: "Create momentum", desc: "People urgently need better digital services. We build velocity to deliver greater value faster \u2014 because the problems aren\u2019t waiting." },
  { title: "Design with users, not for them", desc: "Every product decision is informed by real people using real services. Empathy and curiosity over assumptions. We test with veterans, students, and families \u2014 not focus groups." },
];

export const objectives: Objective[] = [
  { title: "Fix the systems that can\u2019t fail", desc: "Healthcare enrollment for 20M people. Benefits for 9M veterans. Tax filing for the entire nation. These systems don\u2019t get second chances. We make sure they work.", stat: "30+" },
  { title: "Deploy the best talent in the country", desc: "We recruit engineers who built at Google, designers who shipped at Apple, PMs who scaled at Stripe \u2014 and put them on the missions where they\u2019ll have the most impact.", stat: "1,000+" },
  { title: "Embed and deliver alongside agencies", desc: "We don\u2019t advise from the outside. We sit with career civil servants, understand their constraints, and ship from within. When we leave, the systems \u2014 and the teams \u2014 are stronger.", stat: "70+" },
  { title: "Protect every taxpayer dollar", desc: "Our data pipelines have identified over $4 billion in fraud and waste. When we find it, we stop it \u2014 and build the systems that prevent it from happening again.", stat: "$4B+" },
];
