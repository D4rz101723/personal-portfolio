function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && (
        <span className="mb-3 block font-mono text-sm uppercase tracking-[0.3em] text-(--primary)">
          {eyebrow}
        </span>
      )}

      <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">{title}</h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-(--text-secondary) sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
