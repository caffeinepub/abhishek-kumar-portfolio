import {
  Award,
  BookOpen,
  Briefcase,
  ChevronUp,
  Code2,
  ExternalLink,
  GraduationCap,
  Heart,
  Mail,
  Menu,
  Trophy,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { ParticleCanvas } from "./components/ParticleCanvas";
import { useScrollReveal } from "./hooks/useScrollReveal";

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Certifications", href: "#certifications" },
  { label: "Training", href: "#training" },
  { label: "Achievements", href: "#achievements" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const PROJECTS = [
  {
    title: "Todo Task Manager",
    period: "Feb – Mar 2025",
    description:
      "A task-management website with clean UI, CRUD functionality, and responsive design. Built for efficient daily task organization with Local Storage persistence.",
    tags: ["HTML", "CSS", "JavaScript", "Local Storage"],
    github: "https://github.com/AbhishekPatel9305/Todo-Task-Manager",
    icon: "✅",
  },
  {
    title: "Law Guide India",
    period: "Oct – Nov 2025",
    description:
      "Legal awareness website providing simplified information on Indian laws with responsive design and user-friendly interface. Built for a hackathon.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    github: "https://github.com/AbhishekPatel9305/Law-Guide-India",
    icon: "⚖️",
  },
];

const CERTIFICATIONS = [
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google (Coursera)",
    date: "Sept 2024",
    description:
      "Comprehensive understanding of networking fundamentals, protocols, and connectivity principles.",
  },
  {
    title: "Computer Communications (Specialization)",
    issuer: "University of Colorado (Coursera)",
    date: "Nov 2024",
    description:
      "In-depth study of computer communications protocols, networking architecture, and data transmission.",
  },
  {
    title: "Master Generative AI & Generative AI Tools",
    issuer: "Infosys Springboard",
    date: "Aug 2025",
    description:
      "Comprehensive training in generative AI, machine learning models, and practical AI tool implementation.",
  },
  {
    title: "Build Generative AI Apps with No-Code Tools",
    issuer: "Infosys Springboard",
    date: "Aug 2025",
    description:
      "Expertise in developing AI applications without coding using cutting-edge no-code platforms.",
  },
  {
    title: "Computational Theory: Language Principle & Finite Automata",
    issuer: "Infosys Springboard",
    date: "Aug 2025",
    description:
      "Deep understanding of formal languages, computational theory, and automata fundamentals.",
  },
];

const SKILLS = {
  Development: ["Python", "JavaScript", "Java", "C++", "C", "SQL"],
  "Tools & Platforms": ["Git", "GitHub", "VS Code", "Power BI"],
  "Web & Design": ["HTML", "CSS", "Tailwind CSS", "Responsive Design"],
};

// ─── Scroll Reveal Section ────────────────────────────────────────────────────

function Section({
  id,
  className = "",
  children,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <section id={id} ref={ref} className={`section-reveal ${className}`}>
      {children}
    </section>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-deep/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
          aria-label="Back to top"
          data-ocid="nav.link"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple to-port-blue flex items-center justify-center text-sm font-bold text-white glow-purple group-hover:scale-105 transition-transform">
            AK
          </div>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => scrollTo(link.href)}
                className={`nav-link text-sm font-medium pb-1 ${
                  active === link.href ? "active" : ""
                }`}
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Hire Me pill */}
        <button
          type="button"
          onClick={() => scrollTo("#contact")}
          className="hidden md:flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-purple/60 text-purple-light text-sm font-medium hover:bg-purple/10 hover:border-purple transition-all duration-200 hover:shadow-glow"
          data-ocid="nav.primary_button"
        >
          Hire Me
        </button>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-card/95 backdrop-blur-xl border-b border-border">
          <ul className="px-4 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => scrollTo(link.href)}
                  className="w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground py-2 transition-colors"
                  data-ocid="nav.link"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl animate-drift"
        style={{ background: "oklch(0.49 0.26 285)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl animate-drift"
        style={{ background: "oklch(0.60 0.19 240)", animationDelay: "-6s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium text-purple-light animate-fade-in-up"
              style={{
                borderColor: "oklch(0.49 0.26 285 / 0.4)",
                background: "oklch(0.49 0.26 285 / 0.08)",
                animationDelay: "0.1s",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
              Available for opportunities
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display leading-tight animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="text-foreground">Abhishek</span>
              <br />
              <span className="gradient-text">Kumar</span>
            </h1>

            <p
              className="text-xl sm:text-2xl font-medium text-muted-foreground animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Creative Developer &amp; Designer
            </p>

            <p
              className="text-base text-muted-foreground max-w-lg leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              B.Tech AI &amp; ML student at LPU · Marketing Lead at EventViewz ·
              Building intelligent solutions through code &amp; strategy
            </p>
          </div>

          <div
            className="flex flex-wrap gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <button
              type="button"
              onClick={() => scrollTo("#work")}
              className="px-6 py-3 rounded-full font-semibold text-sm text-white transition-all duration-200 hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.49 0.26 285), oklch(0.60 0.19 240))",
              }}
              data-ocid="hero.primary_button"
            >
              View My Work
            </button>
            <button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="px-6 py-3 rounded-full font-semibold text-sm border text-foreground transition-all duration-200 hover:bg-white/5 hover:border-purple/60"
              style={{ borderColor: "oklch(0.25 0.06 265)" }}
              data-ocid="hero.secondary_button"
            >
              Get in Touch
            </button>
          </div>

          {/* Social links */}
          <div
            className="flex items-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="https://github.com/AbhishekPatel9305"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg border border-border hover:border-purple/60 hover:bg-purple/10 text-muted-foreground hover:text-foreground transition-all duration-200"
              aria-label="GitHub"
              data-ocid="hero.link"
            >
              <SiGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishekkumar9305/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg border border-border hover:border-port-blue/60 hover:bg-port-blue/10 text-muted-foreground hover:text-foreground transition-all duration-200"
              aria-label="LinkedIn"
              data-ocid="hero.link"
            >
              <SiLinkedin size={18} />
            </a>
            <a
              href="mailto:abhishek7783patel@gmail.com"
              className="p-2.5 rounded-lg border border-border hover:border-cyan/60 hover:bg-cyan/10 text-muted-foreground hover:text-foreground transition-all duration-200"
              aria-label="Email"
              data-ocid="hero.link"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Right: Particle canvas */}
        <div className="relative hidden lg:flex items-center justify-center">
          <div
            className="w-full h-[500px] rounded-2xl overflow-hidden border border-border/50 relative"
            style={{ background: "oklch(0.10 0.025 265 / 0.5)" }}
          >
            <ParticleCanvas />

            {/* Floating tags */}
            <div
              className="absolute top-6 right-6 px-3 py-1.5 rounded-full text-xs font-semibold border text-cyan animate-float pointer-events-none"
              style={{
                background: "oklch(0.78 0.14 205 / 0.1)",
                borderColor: "oklch(0.78 0.14 205 / 0.4)",
              }}
            >
              AI &amp; ML
            </div>
            <div
              className="absolute top-1/3 left-6 px-3 py-1.5 rounded-full text-xs font-semibold border text-purple-light animate-float pointer-events-none"
              style={{
                background: "oklch(0.49 0.26 285 / 0.1)",
                borderColor: "oklch(0.49 0.26 285 / 0.4)",
                animationDelay: "-2s",
              }}
            >
              Python
            </div>
            <div
              className="absolute bottom-1/3 right-10 px-3 py-1.5 rounded-full text-xs font-semibold border animate-float pointer-events-none"
              style={{
                background: "oklch(0.60 0.19 240 / 0.1)",
                borderColor: "oklch(0.60 0.19 240 / 0.4)",
                color: "oklch(0.78 0.15 240)",
                animationDelay: "-4s",
              }}
            >
              JavaScript
            </div>
            <div
              className="absolute bottom-8 left-1/4 px-3 py-1.5 rounded-full text-xs font-semibold border animate-float pointer-events-none"
              style={{
                background: "oklch(0.63 0.26 290 / 0.1)",
                borderColor: "oklch(0.63 0.26 290 / 0.4)",
                color: "oklch(0.80 0.20 290)",
                animationDelay: "-3s",
              }}
            >
              Java
            </div>

            {/* Profile photo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <img
                src="/assets/uploads/porttt-1.jpeg"
                alt="Abhishek Kumar"
                className="w-32 h-32 rounded-full object-cover border-2"
                style={{ borderColor: "oklch(0.49 0.26 285 / 0.6)" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

const STAT_LIST = [
  { icon: <Code2 size={20} />, value: "2", label: "Projects" },
  { icon: <GraduationCap size={20} />, value: "B.Tech", label: "AI & ML" },
  { icon: <Briefcase size={20} />, value: "7+", label: "Tech Skills" },
];

function About() {
  return (
    <Section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-purple-light">
              <span
                className="w-8 h-px"
                style={{ background: "oklch(0.63 0.26 290)" }}
              />
              About Me
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold font-display">
              Building with{" "}
              <span className="gradient-text">purpose &amp; craft</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              B.Tech AI &amp; ML student at Lovely Professional University with
              expertise in Python, Java, JavaScript, and C++. Currently serving
              as{" "}
              <span className="text-foreground font-medium">
                Marketing Lead at EventViewz
              </span>
              , combining technical skills with strategic thinking.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Passionate about building intelligent solutions, solving complex
              problems, and creating real-world impact through machine learning
              and AI-driven technologies.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {STAT_LIST.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center p-6 rounded-2xl border card-hover text-center"
                style={{
                  background: "oklch(0.12 0.03 265)",
                  borderColor: "oklch(0.25 0.06 265)",
                }}
              >
                <div className="mb-3 text-purple-light">{stat.icon}</div>
                <div className="text-3xl font-bold font-display gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── Work / Projects ──────────────────────────────────────────────────────────

function Work() {
  return (
    <Section id="work" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="Featured Projects" title="Work" />

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              className="group rounded-2xl border overflow-hidden card-hover flex flex-col"
              style={{
                background: "oklch(0.12 0.03 265)",
                borderColor: "oklch(0.25 0.06 265)",
              }}
              data-ocid={`work.item.${i + 1}`}
            >
              <div className="p-6 flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: "oklch(0.14 0.04 265)" }}
                  >
                    {project.icon}
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">
                    {project.period}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-display mb-3 text-foreground group-hover:text-purple-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs font-medium border"
                      style={{
                        background: "oklch(0.14 0.04 265)",
                        borderColor: "oklch(0.25 0.06 265)",
                        color: "oklch(0.72 0.03 265)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between px-6 py-4 border-t group/link hover:bg-purple/5 transition-colors"
                style={{ borderColor: "oklch(0.25 0.06 265)" }}
                data-ocid={`work.link.${i + 1}`}
              >
                <span className="flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover/link:text-purple-light transition-colors">
                  <SiGithub size={16} />
                  View on GitHub
                </span>
                <ExternalLink
                  size={14}
                  className="text-muted-foreground group-hover/link:text-purple-light transition-colors"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── Certifications ───────────────────────────────────────────────────────────

function Certifications() {
  return (
    <Section id="certifications" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="Credentials" title="Certifications" />

        <div className="grid gap-4 mt-12">
          {CERTIFICATIONS.map((cert, i) => (
            <div
              key={cert.title}
              className="group flex flex-col sm:flex-row gap-4 p-6 rounded-2xl border card-hover"
              style={{
                background: "oklch(0.12 0.03 265)",
                borderColor: "oklch(0.25 0.06 265)",
              }}
              data-ocid={`certifications.item.${i + 1}`}
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "oklch(0.49 0.26 285 / 0.15)" }}
              >
                <Award size={18} className="text-purple-light" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="font-semibold text-foreground group-hover:text-purple-light transition-colors text-sm leading-snug pr-4">
                    {cert.title}
                  </h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {cert.date}
                  </span>
                </div>
                <p className="text-xs font-medium text-purple-light mb-2">
                  {cert.issuer}
                </p>
                <p className="text-sm text-muted-foreground">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── Training ─────────────────────────────────────────────────────────────────

function Training() {
  return (
    <Section id="training" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="Learning" title="Training" />

        <div className="mt-12 max-w-3xl">
          <div
            className="flex gap-6 p-8 rounded-2xl border card-hover"
            style={{
              background: "oklch(0.12 0.03 265)",
              borderColor: "oklch(0.25 0.06 265)",
            }}
            data-ocid="training.item.1"
          >
            <div
              className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: "oklch(0.60 0.19 240 / 0.15)" }}
            >
              <BookOpen size={24} style={{ color: "oklch(0.78 0.15 240)" }} />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-lg font-bold font-display text-foreground">
                  Logic Building, Programming and Data Structures
                </h3>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{
                    background: "oklch(0.60 0.19 240 / 0.15)",
                    color: "oklch(0.78 0.15 240)",
                  }}
                >
                  Jun – Jul 2025
                </span>
              </div>
              <p
                className="text-sm font-medium mb-3"
                style={{ color: "oklch(0.78 0.15 240)" }}
              >
                LPU Centre for Professional Enhancement
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Completed intensive skill development training focused on
                logical thinking, programming fundamentals, and data structures
                for effective problem-solving and algorithm design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── Achievements ─────────────────────────────────────────────────────────────

function Achievements() {
  return (
    <Section id="achievements" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="Recognition" title="Achievements" />

        <div className="mt-12 max-w-3xl">
          <div
            className="p-8 rounded-2xl border card-hover relative overflow-hidden"
            style={{
              background: "oklch(0.12 0.03 265)",
              borderColor: "oklch(0.25 0.06 265)",
            }}
            data-ocid="achievements.item.1"
          >
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: "oklch(0.49 0.26 285)" }}
            />
            <div className="flex items-start gap-5 relative">
              <div
                className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: "oklch(0.49 0.26 285 / 0.15)" }}
              >
                <Trophy size={24} className="text-yellow-400" />
              </div>
              <div>
                <div
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3"
                  style={{
                    background: "oklch(0.49 0.26 285 / 0.15)",
                    color: "oklch(0.80 0.20 290)",
                  }}
                >
                  🏆 1st Position
                </div>
                <h3 className="text-xl font-bold font-display text-foreground mb-1">
                  LPU Freshmen League 2023
                </h3>
                <p className="text-sm font-medium text-purple-light mb-3">
                  Reel-Making Competition · Lovely Professional University
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Secured 1st position in the university-level reel-making
                  competition by demonstrating exceptional creativity,
                  compelling storytelling, and impactful content creation.
                  Showcases strong communication skills and ability to engage
                  audiences effectively through multimedia content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── Skills ───────────────────────────────────────────────────────────────────

const SKILL_COLORS: Record<
  string,
  { bg: string; border: string; text: string }
> = {
  Python: {
    bg: "oklch(0.60 0.19 240 / 0.12)",
    border: "oklch(0.60 0.19 240 / 0.4)",
    text: "oklch(0.78 0.15 240)",
  },
  JavaScript: {
    bg: "oklch(0.78 0.14 205 / 0.12)",
    border: "oklch(0.78 0.14 205 / 0.4)",
    text: "oklch(0.85 0.12 205)",
  },
  Java: {
    bg: "oklch(0.49 0.26 285 / 0.12)",
    border: "oklch(0.49 0.26 285 / 0.4)",
    text: "oklch(0.75 0.22 285)",
  },
  "C++": {
    bg: "oklch(0.63 0.26 290 / 0.12)",
    border: "oklch(0.63 0.26 290 / 0.4)",
    text: "oklch(0.78 0.22 290)",
  },
};

const DEFAULT_SKILL_COLOR = {
  bg: "oklch(0.25 0.06 265 / 0.4)",
  border: "oklch(0.35 0.06 265)",
  text: "oklch(0.72 0.03 265)",
};

function SkillBadge({ skill }: { skill: string }) {
  const color = SKILL_COLORS[skill] ?? DEFAULT_SKILL_COLOR;
  return (
    <span
      className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 hover:scale-105 cursor-default"
      style={{
        background: color.bg,
        borderColor: color.border,
        color: color.text,
      }}
    >
      {skill}
    </span>
  );
}

function Skills() {
  return (
    <Section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="Technical" title="Skills" />

        <div className="mt-12 space-y-10">
          {Object.entries(SKILLS).map(([category, skills], i) => (
            <div key={category} data-ocid={`skills.item.${i + 1}`}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

const CONTACT_LINKS = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "abhishek7783patel@gmail.com",
    href: "mailto:abhishek7783patel@gmail.com",
    color: "oklch(0.78 0.14 205)",
  },
  {
    icon: <SiGithub size={20} />,
    label: "GitHub",
    value: "AbhishekPatel9305",
    href: "https://github.com/AbhishekPatel9305",
    color: "oklch(0.72 0.03 265)",
  },
  {
    icon: <SiLinkedin size={20} />,
    label: "LinkedIn",
    value: "abhishekkumar9305",
    href: "https://www.linkedin.com/in/abhishekkumar9305/",
    color: "oklch(0.60 0.19 240)",
  },
];

function Contact() {
  return (
    <Section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="Say Hello" title="Let's work together" />

        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Interested in collaborating or discussing tech? Feel free to reach
              out via email or LinkedIn. I&apos;m always open to new
              opportunities and conversations.
            </p>

            <div className="space-y-3 mt-8">
              {CONTACT_LINKS.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border group transition-all duration-200 hover:scale-[1.02]"
                  style={{
                    background: "oklch(0.12 0.03 265)",
                    borderColor: "oklch(0.25 0.06 265)",
                  }}
                  data-ocid={`contact.link.${i + 1}`}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{
                      background: link.color
                        .replace(")", " / 0.15)")
                        .replace("oklch(", "oklch("),
                    }}
                  >
                    <span style={{ color: link.color }}>{link.icon}</span>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">
                      {link.label}
                    </div>
                    <div className="text-sm font-medium text-foreground group-hover:text-purple-light transition-colors">
                      {link.value}
                    </div>
                  </div>
                  <ExternalLink
                    size={14}
                    className="ml-auto text-muted-foreground group-hover:text-purple-light transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right decorative */}
          <div className="hidden lg:flex items-center justify-center">
            <div
              className="w-72 h-72 rounded-full border-2 flex items-center justify-center relative"
              style={{ borderColor: "oklch(0.25 0.06 265)" }}
            >
              <div
                className="absolute inset-0 rounded-full animate-spin-slow pointer-events-none"
                style={{
                  background:
                    "conic-gradient(from 0deg, oklch(0.49 0.26 285 / 0), oklch(0.49 0.26 285 / 0.4), oklch(0.60 0.19 240 / 0.4), oklch(0.78 0.14 205 / 0.2), oklch(0.49 0.26 285 / 0))",
                }}
              />
              <div
                className="w-56 h-56 rounded-full border flex items-center justify-center"
                style={{
                  background: "oklch(0.10 0.025 265)",
                  borderColor: "oklch(0.25 0.06 265)",
                }}
              >
                <div className="text-center">
                  <div className="text-5xl font-bold font-display gradient-text mb-1">
                    AK
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Open to work
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      className="border-t py-10"
      style={{
        borderColor: "oklch(0.25 0.06 265)",
        background: "oklch(0.085 0.022 265)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple to-port-blue flex items-center justify-center text-xs font-bold text-white">
              AK
            </div>
            <span className="font-display font-bold text-foreground">
              Abhishek Kumar
            </span>
          </div>

          <div className="flex items-center gap-6">
            {NAV_LINKS.slice(0, 4).map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => {
                  const el = document.querySelector(link.href);
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/AbhishekPatel9305"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <SiGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishekkumar9305/"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <SiLinkedin size={16} />
            </a>
            <a
              href="mailto:abhishek7783patel@gmail.com"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div
          className="mt-8 pt-6 border-t text-center text-xs text-muted-foreground"
          style={{ borderColor: "oklch(0.20 0.04 265)" }}
        >
          © {year}. Built with{" "}
          <Heart size={10} className="inline text-red-400 mx-0.5" /> using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── Back to Top ──────────────────────────────────────────────────────────────

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full border shadow-lg transition-all duration-200 hover:scale-110"
      style={{
        background: "oklch(0.12 0.03 265)",
        borderColor: "oklch(0.49 0.26 285 / 0.5)",
        color: "oklch(0.63 0.26 290)",
      }}
      aria-label="Back to top"
      data-ocid="nav.button"
    >
      <ChevronUp size={18} />
    </button>
  );
}

// ─── Section Header Helper ────────────────────────────────────────────────────

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="space-y-3">
      <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-purple-light">
        <span
          className="w-8 h-px"
          style={{ background: "oklch(0.63 0.26 290)" }}
        />
        {label}
      </div>
      <h2 className="text-4xl sm:text-5xl font-bold font-display">
        {title.includes(" ") ? (
          <>
            {title.split(" ")[0]}{" "}
            <span className="gradient-text">
              {title.split(" ").slice(1).join(" ")}
            </span>
          </>
        ) : (
          <span className="gradient-text">{title}</span>
        )}
      </h2>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const metaRef = useRef(false);
  useEffect(() => {
    if (metaRef.current) return;
    metaRef.current = true;
    document.title = "Abhishek Kumar — Creative Developer & Designer";
    const desc = document.querySelector("meta[name='description']");
    if (desc)
      desc.setAttribute(
        "content",
        "B.Tech AI & ML student at LPU | Marketing Lead at EventViewz | Building intelligent solutions through code & strategy",
      );
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{ background: "oklch(0.085 0.022 265)" }}
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Certifications />
        <Training />
        <Achievements />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
