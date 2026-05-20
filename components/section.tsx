import { ReactNode } from "react";

interface Props {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, description, children }: Props) {
  return (
    <section id={id} className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14 max-w-3xl">
          <div className="font-mono text-xs text-accent uppercase tracking-[0.2em] mb-4">
            {eyebrow}
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-5 text-lg text-slate-400 leading-relaxed">{description}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}