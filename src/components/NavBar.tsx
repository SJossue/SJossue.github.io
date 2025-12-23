export function NavBar() {
  return (
    <header className="relative z-10 flex items-center justify-between px-2 py-1 text-slate-300/80">
      <span className="text-base font-semibold">Jossue Sarango - MechE & EE</span>
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/SJossue"
          target="_blank"
          rel="noreferrer"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white shadow-md shadow-white/10 backdrop-blur hover:border-white/35 hover:bg-white/15"
        >
          <span className="sr-only">GitHub</span>
          <svg
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.5 1.1 3.1.8.1-.7.4-1.1.7-1.3-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.7-2.8 5.6-5.4 5.9.4.3.8 1 .8 2.1v3.1c0 .3.2.6.8.5A10.9 10.9 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
          </svg>
        </a>
        <a
          href="#contact"
          className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-white/10 backdrop-blur hover:border-white/40 hover:bg-white/15"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
}
