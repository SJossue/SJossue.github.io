export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/[0.08] px-3 py-1 text-xs font-medium text-[#737373]">
      {children}
    </span>
  );
}
