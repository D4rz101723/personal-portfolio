import { useState } from "react";
import { Mail, MapPin, Send, ArrowUpRight, MessageSquare } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { toast } from "sonner";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name.trim()) return toast.error("Please enter your name.");
    if (!formData.email.trim())
      return toast.error("Please enter your email address.");
    if (!formData.message.trim())
      return toast.error("Please enter your message.");

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      toast.error("Web3Forms access key is missing.", {
        description:
          "Please check your .env file and restart the Vite development server.",
      });
      console.error("Missing VITE_WEB3FORMS_ACCESS_KEY environment variable.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
          from_name: "Darwin Catbagan Portfolio",
        }),
      });

      const result = await response.json();
      console.log("Web3Forms response:", result);

      if (result.success) {
        toast.success("Message sent successfully!", {
          description:
            "Thank you for reaching out. I'll get back to you as soon as possible.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message.", {
          description:
            result.message || "Web3Forms could not process your message.",
        });
      }
    } catch (error) {
      console.error("Web3Forms error:", error);
      toast.error("Something went wrong.", {
        description:
          "Unable to connect to the email service. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "darwincatbagan23@gmail.com",
      href: "mailto:darwincatbagan23@gmail.com",
    },
    { icon: MapPin, label: "Location", value: "Philippines", href: "#" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: FaGithub, href: "https://github.com/D4rz101723" },
    { name: "LinkedIn", icon: FaLinkedinIn, href: "#" },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden py-24 sm:py-28"
    >
      <div className="container-custom">
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <div className="mb-4 flex items-center justify-center gap-3 font-['Orbitron'] text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
            <span className="h-px w-8 bg-linear-to-r from-transparent to-(--primary)" />
            <span>Get In Touch</span>
            <span className="h-px w-8 bg-linear-to-l from-transparent to-(--primary)" />
          </div>

          <h2 className="font-['Orbitron'] text-4xl font-bold leading-tight tracking-tight text-(--text) sm:text-5xl lg:text-6xl">
            Let's <span className="gradient-text">Connect</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-(--text-secondary) sm:text-base">
            Have a project in mind, a question, or simply want to connect? Feel
            free to send me a message. I'd be happy to hear from you.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <div className="group relative overflow-hidden rounded-(--radius-lg) border border-(--border) bg-(--surface)/60 p-6 backdrop-blur-md transition-all duration-500 hover:border-(--border-hover) hover:shadow-(--shadow-hover) sm:p-8">
            <div className="pointer-events-none absolute -left-24 -top-24 h-48 w-48 rounded-full bg-(--primary)/5 blur-3xl transition-all duration-500 group-hover:bg-(--primary)/10" />

            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-(--border) bg-(--surface-light)/60 text-(--primary) transition-all duration-300 group-hover:border-(--border-hover) group-hover:bg-(--primary)/10">
                <MessageSquare size={25} aria-hidden="true" />
              </div>

              <h3 className="font-['Orbitron'] text-xl font-semibold text-(--text)">
                Let's Talk
              </h3>

              <p className="mt-3 text-sm leading-7 text-(--text-secondary)">
                I'm always open to discussing new projects, opportunities,
                ideas, or ways we can work together.
              </p>

              <div className="mt-7 flex items-center gap-3 rounded-xl border border-(--border) bg-(--background)/40 px-4 py-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-(--primary) opacity-50" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-(--primary)" />
                </span>

                <div>
                  <p className="text-xs font-semibold text-(--text)">
                    Available for opportunities
                  </p>
                  <p className="mt-0.5 text-[10px] text-(--text-muted)">
                    Open to interesting projects and collaborations
                  </p>
                </div>
              </div>

              <div className="mt-7 space-y-3">
                {contactDetails.map((contact) => {
                  const Icon = contact.icon;

                  return (
                    <a
                      key={contact.label}
                      href={contact.href}
                      className="group/contact flex items-center gap-4 rounded-xl border border-(--border) bg-(--background)/30 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-(--border-hover) hover:bg-(--primary)/5"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-(--border) bg-(--surface-light)/50 text-(--primary)">
                        <Icon size={18} aria-hidden="true" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-(--text-muted)">
                          {contact.label}
                        </p>
                        <p className="mt-1 truncate text-xs font-medium text-(--text-secondary) transition-colors duration-300 group-hover/contact:text-(--primary)">
                          {contact.value}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={16}
                        className="shrink-0 text-(--text-muted) transition-all duration-300 group-hover/contact:-translate-y-0.5 group-hover/contact:translate-x-0.5 group-hover/contact:text-(--primary)"
                        aria-hidden="true"
                      />
                    </a>
                  );
                })}
              </div>

              <div className="mt-8">
                <p className="mb-3 font-['Orbitron'] text-[10px] font-semibold uppercase tracking-[0.15em] text-(--text-muted)">
                  Connect With Me
                </p>

                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-(--border) bg-(--surface-light)/40 text-(--text-secondary) transition-all duration-300 hover:-translate-y-1 hover:border-(--border-hover) hover:bg-(--primary)/10 hover:text-(--primary) hover:shadow-(--shadow)"
                      >
                        <Icon size={18} aria-hidden="true" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-(--radius-lg) border border-(--border) bg-(--surface)/60 p-6 backdrop-blur-md sm:p-8">
            <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-(--primary) to-transparent opacity-50" />

            <div className="mb-7">
              <p className="font-['Orbitron'] text-xs font-semibold uppercase tracking-[0.15em] text-(--primary)">
                Send a Message
              </p>

              <h3 className="mt-2 font-['Orbitron'] text-xl font-semibold text-(--text) sm:text-2xl">
                Start a Conversation
              </h3>

              <p className="mt-2 text-xs leading-6 text-(--text-muted)">
                Fill out the form below and I'll get back to you as soon as
                possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-semibold text-(--text-secondary)"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  autoComplete="name"
                  required
                  className="w-full rounded-xl border border-(--border) bg-(--background)/50 px-4 py-3 text-sm text-(--text) outline-none placeholder:text-(--text-muted) transition-all duration-300 focus:border-(--border-hover) focus:bg-(--surface-light)/30 focus:ring-2 focus:ring-(--primary)/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-semibold text-(--text-secondary)"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-(--border) bg-(--background)/50 px-4 py-3 text-sm text-(--text) outline-none placeholder:text-(--text-muted) transition-all duration-300 focus:border-(--border-hover) focus:bg-(--surface-light)/30 focus:ring-2 focus:ring-(--primary)/10"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold text-(--text-secondary)"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  required
                  className="w-full resize-none rounded-xl border border-(--border) bg-(--background)/50 px-4 py-3 text-sm leading-6 text-(--text) outline-none placeholder:text-(--text-muted) transition-all duration-300 focus:border-(--border-hover) focus:bg-(--surface-light)/30 focus:ring-2 focus:ring-(--primary)/10"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-(--primary) px-6 py-3.5 text-sm font-bold text-slate-950 shadow-(--shadow) transition-all duration-300 hover:-translate-y-1 hover:shadow-(--shadow-hover) disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950/30 border-t-slate-950" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div
          className="mt-16 flex items-center justify-center gap-2"
          aria-hidden="true"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-(--primary) opacity-45 shadow-[0_0_10px_var(--primary)]" />
          <span className="h-1.5 w-10 rounded-full bg-(--primary) opacity-75" />
          <span className="h-1.5 w-1.5 rounded-full bg-(--primary) opacity-45 shadow-[0_0_10px_var(--primary)]" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
