export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-foreground/90">
      {children}
    </span>
  );
}
