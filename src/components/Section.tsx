import React from "react";

export function Section({
  title,
  eyebrow,
  children,
  id,
  className,
}: {
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`py-12 ${className ?? ""}`}>
      <div className="mx-auto w-full max-w-5xl px-4">
        {eyebrow ? (
          <p className="text-sm font-medium text-muted-foreground">{eyebrow}</p>
        ) : null}
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
