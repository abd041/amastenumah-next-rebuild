/**
 * The Work — developer brief `content/work.js`.
 * Extra keys: `seo`, section headings, `filters`, and link labels (brief page spec implies UI; template is abbreviated).
 */

export const work = {
  seo: {
    title: "The Work — Amas Tenumah",
    description: "Keynotes, media, and video library.",
  },

  headline: "The Work",
  intro:
    "Keynotes, media, and programs that expose how customer service is designed — and what leaders must do next.",

  sectionAppearancesTitle: "Media appearances",
  sectionVideosTitle: "Video library",
  sectionConferenceTitle: "Selected talks",
  sectionConferenceIntro:
    "A few full-length clips to watch before you book the room. Stage stills below.",
  /** Shown in “Selected talks”; remainder of `conferenceVideos` is optional for future use. */
  selectedTalksCount: 3,
  stageGallery: {
    defaultTag: "ON STAGE",
    closeLabel: "Close gallery",
    prevLabel: "Previous image",
    nextLabel: "Next image",
  },
  filters: {
    all: "All",
    keynote: "Keynote",
    media: "Media",
    panel: "Panel",
  },
  emptyCategoryMessage: "No videos in this category yet.",
  viewLinkLabel: "View →",
  watchOnYoutubeLabel: "Watch on YouTube",
  /** Non-YouTube video pages (e.g. station-hosted players). */
  watchExternalVideoLabel: "Watch video",

  appearances: [
    {
      outlet: "CBC Marketplace",
      date: "March 2026",
      title: "The System Is Designed to Frustrate You",
      description:
        "Named expert in Canada's national investigation into Rogers, Bell, and Telus. Explained on camera why these systems are engineered to outlast your patience — not resolve your problem. Bell denied it. The evidence disagreed.",
      emphasis: ["Rogers, Bell, and Telus", "engineered to outlast your patience"],
      link: "https://www.youtube.com/watch?v=CGrdMdCD18w",
      logo: "/images/cbc-logo.svg",
    },
    {
      outlet: "The Atlantic",
      date: "2025",
      title: "The Deliberate Friction in Every Interaction",
      description:
        "Featured in a reported piece on the friction companies deliberately build into every customer interaction. Provided the inside account of why it isn't accidental — and who benefits when you give up.",
      emphasis: ["deliberately build", "who benefits when you give up"],
      link: "https://www.theatlantic.com/ideas/archive/2025/06/customer-service-sludge/683340/",
      logo: "/images/The-Atlantic.png",
    },
    {
      outlet: "Fortune",
      date: "February 2024",
      title: "Where Trust Goes to Die",
      description:
        "Fortune investigated why 61% of consumers leave customer service interactions unsatisfied. The answer: it may be working exactly as intended.",
      emphasis: ["61%", "working exactly as intended"],
      link: "https://fortune.com/2024/02/02/bad-customer-service-breaking-trust/",
      logo: "/images/fox.webp",
    },
    {
      outlet: "OPB (Oregon Public Broadcasting)",
      date: "August 2024",
      title: "Sick of Bots and Subscription Traps? Here's Why It's Built That Way.",
      description:
        "Quoted in a public radio investigation into customer service bots and subscription headaches — explaining why the consumer frustration isn't a flaw in the system. It is the system.",
      emphasis: ["isn't a flaw in the system", "It is the system"],
      link: "https://www.opb.org/article/2024/08/13/sick-of-customer-service-bots-and-subscription-headaches-there-s-a-plan-for-that/",
      logo: "/images/opb-logo-white.svg",
    },
    {
      outlet: "NPR",
      date: "2023",
      title: "Why Customer Service Keeps Getting Worse",
      description:
        "Explained why satisfaction scores keep falling despite record corporate investment in service technology — and what companies are actually optimizing for instead.",
      emphasis: ["what companies are actually optimizing for instead"],
      link: "https://www.npr.org/2023/03/15/1163733421/why-customer-service-ratings-are-getting-worse",
      logo: "/images/npr-logo.webp",
    },
    {
      outlet: "NBC News",
      date: "2023",
      title: "Automation Is Not the Answer You Think It Is",
      description:
        "Evening news segment on the rise of automation in customer service. Made the case that AI is being deployed to deflect customers, not help them.",
      emphasis: ["deflect customers, not help them"],
      link: "https://www.nbcnews.com/nightly-news/video/consumer-frustration-grows-as-customer-service-becomes-more-automated-193128517587",
      logo: "/images/nbc-logo.webp",
    },
    {
      outlet: "Fox DC",
      date: "2023",
      title: "This Problem Started in 1750 BC",
      description:
        "Traced bad customer service to a clay tablet complaint carved 3,700 years ago — the world's first recorded customer complaint. The problem isn't new. The scale is.",
      emphasis: ["3,700 years ago", "The scale is"],
      link: "https://www.fox5dc.com/video/fmc-2023mgu745sdu9ts",
      logo: "/images/fts-washington-dc-a.svg",
    },
  ],

  conferenceVideos: [
    {
      title: "Speaker Reel",
      description: "Three minutes. Every stage. One thesis that hasn't changed in 25 years.",
      link: "https://youtu.be/SqaHblCgkLc",
    },
    {
      title: "Five9 CX Summit 2023",
      description: "Automation in service.",
      link: "https://youtu.be/5uHQDhf_RZA?si=U0ygcXgnvSqSgmSp",
    },
    {
      title: "The Relationship Is Broken. Here's How We Fix It.",
      description:
        "Customer service isn't a department — it's a relationship. And right now, it's toxic. Why more AI isn't the answer — and what it takes to rebuild trust.",
      link: "https://youtu.be/UUoMG7BsybU",
    },
  ],

  stageStills: [
    { src: "/images/Amas on fox tv still.png", alt: "Amas on stage at FOX TV segment", tag: "FOX TV" },
    { src: "/images/Amas stage red background.png", alt: "Amas on stage with red background", tag: "ON STAGE" },
    { src: "/images/CBC interview stills.png", alt: "Amas in CBC interview", tag: "CBC INTERVIEW" },
    { src: "/images/Amas on panel 22.png", alt: "Amas speaking on a conference panel", tag: "PANEL" },
    { src: "/images/Amas on panel 2022.png", alt: "Amas speaking at 2022 panel event", tag: "PANEL" },
    { src: "/images/Amas still on stage 2013.png", alt: "Amas delivering a keynote on stage", tag: "KEYNOTE" },
    { src: "/images/Amas still on stage pink blazer and white pants.png", alt: "Amas speaking on stage in pink blazer and white pants", tag: "ON STAGE" },
    { src: "/images/Amas still on stage pink blazer.png", alt: "Amas speaking on stage in pink blazer", tag: "ON STAGE" },
    { src: "/images/Amas still on stage white shirt and jeans.png", alt: "Amas speaking on stage in white shirt and jeans", tag: "KEYNOTE" },
    { src: "/images/Amas still on stage white shirt and jeans2.png", alt: "Amas speaking on stage in white shirt and jeans close-up", tag: "ON STAGE" },
    { src: "/images/CBC interview still.png", alt: "Amas during CBC interview", tag: "CBC INTERVIEW" },
  ],

  /**
   * Video library filters: panel | media | keynote.
   * "The Moment That Changes the Room" uses `youtubeId` as the site hero reel until a dedicated 90s clip ID is provided.
   */
  videos: [
    {
      title: "Panel — Five9 CX Summit 2023",
      description: "Automation in service.",
      youtubeId: "5uHQDhf_RZA",
      category: "panel",
    },
    {
      title: "CBC Marketplace — The System Is Designed to Frustrate You",
      description:
        "Named expert in Canada's national investigation into Rogers, Bell, and Telus. On camera: why these companies are engineered to outlast your patience.",
      youtubeId: "CGrdMdCD18w",
      category: "media",
    },
    {
      title: "Bad Customer Service Started in 1750 BC",
      description:
        "Fox DC segment tracing the world's first customer complaint — a clay tablet carved 3,700 years ago. The problem isn't new. The scale is.",
      externalUrl: "https://www.fox5dc.com/video/fmc-2023mgu745sdu9ts",
      thumbnailSrc: "/images/Amas on fox tv still.png",
      category: "media",
    },
    {
      title: "The Moment That Changes the Room",
      description:
        "The 90-second clip that started it all. Bad customer service isn't broken — it was built this way.",
      youtubeId: "SqaHblCgkLc",
      category: "keynote",
    },
    {
      title: "Speaker Reel",
      description: "Three minutes. Every stage. One thesis that hasn't changed in 25 years.",
      youtubeId: "SqaHblCgkLc",
      category: "keynote",
    },
    {
      title: "The Relationship Is Broken. Here's How We Fix It.",
      description:
        "Customer service isn't a department — it's a relationship. And right now, it's toxic. In this keynote, Amas Tenumah unpacks why companies keep making the problem worse (hint: more AI isn't the answer) and what it actually takes to rebuild trust with the people who keep your business alive.",
      youtubeId: "UUoMG7BsybU",
      category: "keynote",
    },
  ],
};
