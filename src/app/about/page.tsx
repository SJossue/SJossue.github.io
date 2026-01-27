"use client";

import { AboutStory } from "@/components/about/AboutStory";
import { ContactSection } from "@/components/ContactSection";

export default function AboutPage() {
  return (
    <div>
      <AboutStory />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
