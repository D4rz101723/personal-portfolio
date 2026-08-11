function Button({ children, href, variant = "primary", className = "" }) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2";

  const variants = {
    primary:
      "bg-[var(--primary)] text-slate-950 hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]",

    secondary:
      "border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:-translate-y-1 hover:border-[var(--border-hover)]",

    outline:
      "border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-slate-950",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return <button className={styles}>{children}</button>;
}

export default Button;
