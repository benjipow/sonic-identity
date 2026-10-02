export function SectionLabel({ title, number }: { title: string; number?: string }) {
  return (
    <div className="flex items-center gap-3 text-stone mb-4">
      <svg
        width="12"
        height="15"
        viewBox="0 0 13 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.94753e-05 1.20954V0H12.0661V1.46243L8.94753e-05 1.20954ZM8.94753e-05 14.7904V16H12.0661V14.5375L8.94753e-05 14.7904ZM0 8.73043V7.52255L5.19475 7.52089H5.90313H6.87124L12.066 7.52255V8.73043H0Z"
          fill="currentColor"
        />
      </svg>
      <span className="text-xs font-mono uppercase tracking-[0.25em] text-stone">{title}</span>
      {number && <span className="text-xs font-mono text-stone/60 ml-auto">({number})</span>}
    </div>
  );
}
