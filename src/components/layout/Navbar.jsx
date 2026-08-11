import { FileText, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "../ui/ThemeToggle";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-(--border) bg-(--background)/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* =========================================
              LOGO
          ========================================== */}

          <a
            href="#home"
            onClick={closeMenu}
            className="relative z-50 shrink-0 font-['Orbitron'] text-lg font-bold tracking-[0.15em]"
          >
            <span className="gradient-text">DevDarz</span>
          </a>

          {/* =========================================
              DESKTOP NAVIGATION
          ========================================== */}

          <div className="hidden items-center gap-5 lg:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-2 py-2 text-sm font-medium text-(--text-secondary) transition-colors duration-300 hover:text-(--primary)"
              >
                {link.name}
              </a>
            ))}

            {/* Resume */}
            <a
              href="/documents/Darwin-Catbagan-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-(--primary) px-4 py-2 text-sm font-medium text-(--primary) transition-all duration-300 hover:-translate-y-0.5 hover:bg-(--primary) hover:text-slate-950 hover:shadow-(--shadow-hover)"
            >
              <FileText size={16} aria-hidden="true" />

              <span>Resume</span>
            </a>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* =========================================
              MOBILE CONTROLS
          ========================================== */}

          <div className="relative z-50 flex items-center gap-2 lg:hidden">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-(--border) bg-(--surface) text-(--text-secondary) transition-all duration-300 hover:border-(--border-hover) hover:text-(--primary) focus:outline-none focus:ring-2 focus:ring-(--primary)"
            >
              {isMenuOpen ? (
                <X size={20} strokeWidth={2} aria-hidden="true" />
              ) : (
                <Menu size={20} strokeWidth={2} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* =========================================
            MOBILE NAVIGATION
        ========================================== */}

        <div
          id="mobile-navigation"
          className={`lg:hidden ${
            isMenuOpen
              ? "pointer-events-auto visible opacity-100"
              : "pointer-events-none invisible opacity-0"
          }`}
        >
          <div
            className={`absolute left-4 right-4 top-[calc(100%+0.5rem)] rounded-2xl border border-(--border) bg-(--surface)/95 p-4 shadow-(--shadow-hover) backdrop-blur-xl transition-all duration-300 ${
              isMenuOpen ? "translate-y-0" : "-translate-y-3"
            }`}
          >
            <div className="flex flex-col">
              {/* Navigation Links */}
              {links.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="mobile-nav-link"
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 40}ms` : "0ms",
                  }}
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile Resume */}
              <a
                href="/documents/Darwin-Catbagan-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg border border-(--primary) px-4 py-3 text-sm font-medium text-(--primary) transition-all duration-300 hover:bg-(--primary) hover:text-slate-950"
              >
                <FileText size={17} aria-hidden="true" />

                <span>View Resume</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
