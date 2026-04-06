import ContactForm from "../../components/ContactForm";
import Reveal from "../../components/Reveal";
import { talk } from "../../content/talk";

export const metadata = {
  title: talk.seo.title,
  description: talk.seo.description,
};

export default function Page() {
  return (
    <main id="content" className="relative min-h-screen bg-gradient-to-b from-brand-dark via-brand-charcoal to-black pb-24 pt-28">
      <div className="noise-layer opacity-[0.05]" aria-hidden />
      <div className="mx-auto max-w-[560px] px-5 md:px-8">
        <Reveal>
          <h1 className="text-center font-display text-[clamp(2.6rem,5.4vw,4rem)] uppercase tracking-widest text-white">{talk.headline}</h1>
        </Reveal>
        <Reveal delayMs={100}>
          <p className="mx-auto mt-5 max-w-[38rem] text-center font-body text-[19px] leading-[1.8] text-brand-light/95">{talk.subheadline}</p>
        </Reveal>
        <Reveal delayMs={160}>
          <p className="mt-6 text-center font-ui text-[12px] font-bold uppercase tracking-[0.2em] text-brand-red">{talk.trustIndicators}</p>
        </Reveal>
        <Reveal delayMs={220}>
          <div className="mt-12 rounded-xl border border-white/20 bg-white/[0.97] p-6 shadow-[0_30px_58px_-28px_rgba(0,0,0,0.75)] backdrop-blur-sm md:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </main>
  );
}
