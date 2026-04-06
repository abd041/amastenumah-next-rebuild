/**
 * Let's Talk — developer brief `content/talk.js`.
 * `seo`, `successTitle`, `successBody`, `errorMessage`, `submittingLabel` satisfy page spec (thank-you / errors) while keeping all copy in content.
 * `eventTypeLabel` / `eventTypePlaceholder`: accessible select (brief `formFields` lists `eventTypes` only).
 */

export const talk = {
  seo: {
    title: "Let's Talk — Amas Tenumah",
    description: "Reach out about keynotes, media, and programs.",
  },

  headline: "Let's Talk",
  subheadline: "Customer service isn't broken. It's working exactly as designed. Let's redesign what your audience rewards.",
  trustIndicators: "Featured on NPR, NBC, FOX",

  formFields: {
    namePlaceholder: "Your name",
    orgPlaceholder: "Your organization",
    eventTypeLabel: "Event type",
    eventTypePlaceholder: "Choose your event type",
    eventTypes: ["Conference", "Association Meeting", "Corporate Event", "Other"],
    messagePlaceholder: "Tell me about your event",
    submitLabel: "Start the Conversation",
  },
  reassuranceText: "No sales pitch. Just clarity.",
  responseTimeText: "Typical response within 24–48 hours.",

  submissionEmail: "amas@amastenumah.com",

  successTitle: "Thank you!",
  successBody: "We'll get back to you shortly.",
  errorMessage: "Something went wrong. Please try again or email us directly.",
  submittingLabel: "Sending…",
};
