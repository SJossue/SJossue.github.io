"use client";

/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { FadeInView } from "@/components/effects/FadeInView";

type ImageBlock = {
  src: string;
  alt: string;
  aspect: string;
  wrapperClass?: string;
  caption?: string;
  textBelow?: {
    title: string;
    body: string[];
  };
};

type TextBlock = {
  eyebrow: string;
  title: string;
  body: string[];
  wrapperClass?: string;
};

type StoryRow = {
  id: string;
  left: ImageBlock;
  right: {
    text: TextBlock;
    image: ImageBlock;
    wrapperClass?: string;
  };
  rowClass?: string;
};

const cardBase =
  "relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0b0b0b] shadow-[0_24px_70px_rgba(0,0,0,0.55)]";

const heroContent = {
  label: "About Me",
  title: "I’m passionate about building things that",
  accent: "work beautifully.",
  intro: "This is my story - a blend of family and cool cars",
  subtext:
    "A mix of engineering, design, and the moments in between that keep me grounded.",
};

const storyRows: StoryRow[] = [
  {
    id: "row-01",
    rowClass: "",
    left: {
      src: "/social/AccordWork.jpg",
      alt: "Working Together",
      aspect: "aspect-[4/5]",
      wrapperClass: "",
      caption: "Getting my hands dirty.",
      textBelow: {
        title: "Starting from scratch",
        body: [
          "Every skill I have started with curiosity and a willingness to fail. From fixing cars to writing code, the process is the same: break it down, understand it, rebuild it better.",
        ],
      },
    },
    right: {
      wrapperClass: "md:pt-6",
      text: {
        eyebrow: "But, I wanted more.",
        title: "Learning by doing",
        body: [
          "Classroom fundamentals matter, but my real breakthroughs happen in the garage. Wrenching on my Accord or prototyping custom tools is where ideas become instinct.",
          "That hands-on mindset pushed me to build faster, iterate more, and feel the impact of every design decision.",
        ],
        wrapperClass: "",
      },
      image: {
      src: "/social/Suspension.jpg",
      alt: "Working on suspension",
      aspect: "aspect-[4/5]",
      wrapperClass: "",
      caption: "Hands on, always.",
      },
    },
  },
  {
    id: "row-02",
    rowClass: "",
    left: {
      src: "/social/Convention25.jpg",
      alt: "National SHPE Convention",
      aspect: "aspect-[4/5]",
      wrapperClass: "",
      caption: "Finding inspiration in competitive spaces.",
      textBelow: {
        title: "Built on fundamentals",
        body: [
          "My time with SHPE has shaped how I think about complex systems and human-centered solutions. College wasn't just about the degree but about learning to ask better questions.",
        ],
      },
    },
    right: {
      wrapperClass: "md:pt-6",
      text: {
        eyebrow: "Making it all happen.",
        title: "Engineering plus design",
        body: [
          "Engineering taught me how systems work. Design taught me how people feel. UX became the bridge between capability and clarity.",
          "I focus on building experiences that feel effortless, where form, function, and flow align.",
        ],
        wrapperClass: "",
      },
      image: {
        src: "/work/PSEGNuclear.jpg",
        alt: "On the field work",
        aspect: "aspect-[3/4]",
        wrapperClass: "",
        caption: "My first engineering role.",
      },
    },
  },
  {
    id: "row-03",
    rowClass: "",
    left: {
      src: "/social/NightCar.jpg",
      alt: "Night car scene",
      aspect: "aspect-[3/4]",
      wrapperClass: "",
      caption: "Late-night drives to recharge.",
      textBelow: {
        title: "Chasing precision",
        body: [
          "Whether it's tuning a suspension setup or refining an interface, the attention to detail matters. Small adjustments compound into something that feels right.",
        ],
      },
    },
    right: {
      wrapperClass: "md:pt-6",
      text: {
        eyebrow: "In my spare time.",
        title: "Staying grounded",
        body: [
          "When I'm not building, I'm outside chasing fresh air, late-night drives, or time with the people who keep me grounded.",
          "The best work comes from a full life. Perspective fuels creativity, and creativity fuels better products.",
        ],
        wrapperClass: "",
      },
      image: {
        src: "/social/CarPortrait.jpg",
        alt: "Owner",
        aspect: "aspect-[4/5]",
        wrapperClass: "",
        caption: "One step at a time.",
      },
    },
  },
];

export function AboutStory() {
  return (
    <div className="relative">
      <section className="spotlight relative pt-32 pb-16 md:pt-40 md:pb-28 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-y-0 left-1/2 w-[1200px] -translate-x-1/2 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <FadeInView className="mb-8">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[#525252] text-xs tracking-[0.3em] uppercase">
                {heroContent.label}
              </span>
            </div>
          </FadeInView>

          <FadeInView>
            <h1 className="text-4xl md:text-6xl font-medium text-[#e5e5e5] leading-[1.1] tracking-tight max-w-4xl">
              {heroContent.title}{" "}
              <em className="font-serif italic text-gradient-warm">
                {heroContent.accent}
              </em>
            </h1>
          </FadeInView>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 text-lg text-[#737373] leading-relaxed max-w-2xl"
          >
            {heroContent.intro}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-base text-[#8a8a8a] leading-relaxed max-w-2xl"
          >
            {heroContent.subtext}
          </motion.p>
        </div>
      </section>

      <section className="relative pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-6 space-y-16 md:space-y-24">
          {storyRows.map((row) => (
            <div
              key={row.id}
              className={`grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start ${
                row.rowClass ?? ""
              }`}
            >
              <div className={`md:col-span-6 space-y-4 ${row.left.wrapperClass ?? ""}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`${cardBase} ${row.left.aspect}`}
                >
                  <img
                    src={row.left.src}
                    alt={row.left.alt}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 rounded-[28px] border border-white/[0.06]" />
                </motion.div>
                {row.left.caption && (
                  <p className="text-xs uppercase tracking-[0.2em] text-[#525252]">
                    {row.left.caption}
                  </p>
                )}
                {row.left.textBelow && (
                  <FadeInView className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-medium text-[#e5e5e5]">
                      {row.left.textBelow.title}
                    </h3>
                    <div className="space-y-3 text-[#a3a3a3] leading-relaxed">
                      {row.left.textBelow.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </FadeInView>
                )}
              </div>

              <div
                className={`md:col-span-6 flex flex-col gap-8 ${
                  row.right.wrapperClass ?? ""
                }`}
              >
                <FadeInView className={row.right.text.wrapperClass ?? ""}>
                  <div className="space-y-4">
                    <div className="text-xs tracking-[0.3em] uppercase text-[#525252]">
                      {row.right.text.eyebrow}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-medium text-[#e5e5e5]">
                      {row.right.text.title}
                    </h2>
                    <div className="space-y-3 text-[#a3a3a3] leading-relaxed">
                      {row.right.text.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </FadeInView>

                <div className={`space-y-4 ${row.right.image.wrapperClass ?? ""}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`${cardBase} ${row.right.image.aspect}`}
                  >
                    <img
                      src={row.right.image.src}
                      alt={row.right.image.alt}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 rounded-[28px] border border-white/[0.06]" />
                  </motion.div>
                  {row.right.image.caption && (
                    <p className="text-xs uppercase tracking-[0.2em] text-[#525252]">
                      {row.right.image.caption}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
