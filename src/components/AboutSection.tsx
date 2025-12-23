type AboutSectionProps = {
  theme: "dark" | "light";
};

export function AboutSection({ theme }: AboutSectionProps) {
  const tone =
    theme === "dark" ? "bg-slate-900/60 text-slate-100" : "bg-white text-slate-900";

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className={`rounded-3xl border border-white/10 ${tone} p-6 shadow-xl backdrop-blur`}>
        <p className="text-lg font-semibold text-white">Jossue Sarango - Class of 2028</p>
        <p className="mt-2 text-sm text-slate-200/80">
          I’m a Mechanical Engineering student at New Jersey Institute of Technology, pursuing a minor in Electrical Engineering, 
          with a strong interest in automotive systems, robotics, and applied engineering. I enjoy working at the intersection of 
          theory and real-world implementation, where design decisions are tested by physical constraints, safety, and performance.
        </p>
        <p className="mt-3 text-sm text-slate-200/80">
          Outside the classroom, I’m heavily involved in hands-on engineering teams and technical projects, including vehicle 
          systems work and infrastructure-focused engineering through industry internships. I’m especially motivated by 
          environments where collaboration, iteration, and learning from failure are part of the process.
        </p>
        <p className="mt-3 text-sm text-slate-200/80">
          Alongside mechanical engineering, I’ve developed strong skills in software and web technologies, using tools 
          like Next.js, React, and Tailwind to build clean, scalable interfaces. This has allowed me to communicate technical 
          work more effectively and create platforms that support teams and communities.
        </p>
        <p className="mt-3 text-sm text-slate-200/80">
          I’m driven by curiosity, consistency, and a desire to keep pushing beyond what I already know—whether that’s 
          through engineering design, research, or building tools that make complex ideas more accessible.
        </p>
      </div>
      <div className={`rounded-3xl border border-white/10 ${tone} p-4 shadow-xl backdrop-blur`}>
        <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60">
          <object
            data="/project/Jossue_Sarango_Resume.pdf"
            type="application/pdf"
            className="h-full w-full"
          >
            <p className="p-4 text-sm text-slate-200/80">
              Unable to load resume preview.{" "}
              <a
                className="underline"
                href="/project/Jossue_Sarango_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Open resume
              </a>
            </p>
          </object>
        </div>
      </div>
    </div>
  );
}
