import {
  Award,
  BookOpen,
  Briefcase,
  ChevronUp,
  Code2,
  Download,
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
    downloadUrl:
      "/assets/uploads/The-Bits-and-Bytes-of-Computer-Networking-certificate-3.pdf",
  },
  {
    title: "Computer Communications (Specialization)",
    issuer: "University of Colorado (Coursera)",
    date: "Nov 2024",
    description:
      "In-depth study of computer communications protocols, networking architecture, and data transmission.",
    downloadUrl: "/assets/uploads/Computer-Communications-certificate-2.pdf",
  },
  {
    title: "Master Generative AI & Generative AI Tools",
    issuer: "Infosys Springboard",
    date: "Aug 2025",
    description:
      "Comprehensive training in generative AI, machine learning models, and practical AI tool implementation.",
    downloadUrl:
      "/assets/uploads/Master-Generative-AI-Generative-AI-tools-2.pdf",
  },
  {
    title: "Build Generative AI Apps and Solutions with No-Code Tools",
    issuer: "Infosys Springboard",
    date: "Aug 2025",
    description:
      "Expertise in developing AI applications without coding using cutting-edge no-code platforms.",
    downloadUrl:
      "/assets/uploads/Build-Generative-AI-Apps-and-solutions-with-No-Code-Tools-1.pdf",
  },
  {
    title: "Computational Theory: Language Principle & Finite Automata",
    issuer: "Infosys Springboard",
    date: "Aug 2025",
    description:
      "Deep understanding of formal languages, computational theory, and automata fundamentals.",
    downloadUrl:
      "/assets/uploads/Computational-Theory-Language-Principle-Finite-Automata-Theory-1.pdf",
  },
];

const TRAINING = [
  {
    title: "Logic Building, Programming and Data Structures",
    period: "Jun – Jul 2025",
    org: "LPU Centre for Professional Enhancement",
    description:
      "Completed intensive skill development training focused on logical thinking, programming fundamentals, and data structures for effective problem-solving and algorithm design.",
    downloadUrl: "/assets/uploads/Summer-Training-Certificate-1.pdf",
  },
];

const SKILLS = {
  Development: ["Python", "JavaScript", "Java", "C++", "C", "SQL"],
  "Tools & Platforms": ["Git", "GitHub", "VS Code", "Power BI"],
  "Web & Design": ["HTML", "CSS", "Tailwind CSS", "Responsive Design"],
};

const CONTACT_LINKS = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "abhishek7783patel@gmail.com",
    href: "mailto:abhishek7783patel@gmail.com",
    color: "oklch(0.75 0.22 200)",
  },
  {
    icon: <SiGithub size={20} />,
    label: "GitHub",
    value: "AbhishekPatel9305",
    href: "https://github.com/AbhishekPatel9305",
    color: "oklch(0.75 0.22 300)",
  },
  {
    icon: <SiLinkedin size={20} />,
    label: "LinkedIn",
    value: "abhishekkumar9305",
    href: "https://www.linkedin.com/in/abhishekkumar9305/",
    color: "oklch(0.72 0.2 260)",
  },
];

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

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="space-y-3">
      <div
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"
        style={{ color: "oklch(0.75 0.22 300)" }}
      >
        <span
          className="w-8 h-px"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.65 0.28 300), oklch(0.75 0.22 200))",
          }}
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
        scrolled ? "backdrop-blur-xl border-b shadow-lg" : "bg-transparent"
      }`}
      style={
        scrolled
          ? {
              background: "oklch(0.09 0.025 270 / 0.85)",
              borderColor: "oklch(0.22 0.05 275 / 0.5)",
            }
          : {}
      }
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
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold text-white glow-purple group-hover:scale-105 transition-transform"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.65 0.28 300), oklch(0.75 0.22 200))",
            }}
          >
            AK
          </div>
          <span className="font-display font-bold text-sm gradient-text hidden sm:block">
            Abhishek Kumar
          </span>
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

        {/* Resume download */}
        <a
          href="/assets/uploads/resumeeeeeeeeeee-1.pdf"
          download
          className="hidden md:flex items-center gap-1.5 px-5 py-2 text-sm font-semibold btn-outline"
          data-ocid="nav.secondary_button"
        >
          <Download size={15} />
          Resume
        </a>

        {/* Hire Me pill */}
        <button
          type="button"
          onClick={() => scrollTo("#contact")}
          className="hidden md:flex items-center gap-1.5 px-5 py-2 text-sm font-semibold btn-primary"
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
        <div
          className="md:hidden border-b backdrop-blur-xl"
          style={{
            background: "oklch(0.09 0.025 270 / 0.95)",
            borderColor: "oklch(0.22 0.05 275)",
          }}
        >
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
            <li>
              <a
                href="/assets/uploads/resumeeeeeeeeeee-1.pdf"
                download
                className="flex items-center gap-2 text-sm font-semibold px-3 py-2 btn-outline w-full justify-center"
                data-ocid="nav.secondary_button"
              >
                <Download size={15} />
                Resume
              </a>
            </li>
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
      {/* Ambient blobs */}
      <div
        className="absolute top-1/4 -left-20 w-96 h-96 rounded-full opacity-20 blur-3xl animate-drift pointer-events-none"
        style={{ background: "oklch(0.65 0.28 300)" }}
      />
      <div
        className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full opacity-15 blur-3xl animate-drift pointer-events-none"
        style={{ background: "oklch(0.75 0.22 200)", animationDelay: "-6s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-medium animate-fade-in-up"
              style={{
                borderColor: "oklch(0.75 0.22 200 / 0.4)",
                background: "oklch(0.75 0.22 200 / 0.08)",
                color: "oklch(0.75 0.22 200)",
                animationDelay: "0.1s",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[oklch(0.75_0.22_200)] animate-pulse" />
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
              className="px-7 py-3 text-sm btn-primary"
              data-ocid="hero.primary_button"
            >
              View My Work
            </button>
            <button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="px-7 py-3 text-sm btn-outline"
              data-ocid="hero.secondary_button"
            >
              Get in Touch
            </button>
          </div>

          {/* Social links */}
          <div
            className="flex items-center gap-3 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="https://github.com/AbhishekPatel9305"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl border glass-card hover:glow-border-primary text-muted-foreground hover:text-foreground transition-all duration-200"
              aria-label="GitHub"
              data-ocid="hero.link"
            >
              <SiGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishekkumar9305/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl border glass-card hover:glow-border-cyan text-muted-foreground hover:text-foreground transition-all duration-200"
              aria-label="LinkedIn"
              data-ocid="hero.link"
            >
              <SiLinkedin size={18} />
            </a>
            <a
              href="mailto:abhishek7783patel@gmail.com"
              className="p-3 rounded-xl border glass-card hover:glow-border-primary text-muted-foreground hover:text-foreground transition-all duration-200"
              aria-label="Email"
              data-ocid="hero.link"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Right: Profile photo with spinning ring */}
        <div className="relative hidden lg:flex items-center justify-center">
          {/* Radial glow backdrop */}
          <div
            className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 50% 50%, oklch(0.65 0.28 300 / 0.25), transparent)",
            }}
          />

          {/* Spinning conic ring */}
          <div
            className="w-[300px] h-[300px] rounded-full animate-spin-slow absolute pointer-events-none"
            style={{
              background:
                "conic-gradient(from 0deg, oklch(0.65 0.28 300 / 0), oklch(0.65 0.28 300 / 0.8), oklch(0.75 0.22 200 / 0.8), oklch(0.65 0.28 300 / 0))",
              padding: "2px",
            }}
          />

          {/* Profile photo circle */}
          <div
            className="w-[280px] h-[280px] rounded-full overflow-hidden relative z-10"
            style={{
              border: "3px solid oklch(0.65 0.28 300 / 0.4)",
              boxShadow:
                "0 0 40px oklch(0.65 0.28 300 / 0.3), 0 0 80px oklch(0.65 0.28 300 / 0.1)",
            }}
          >
            <img
              src="/assets/uploads/porttt-1.jpeg"
              alt="Abhishek Kumar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating skill badges */}
          <div
            className="absolute top-0 right-4 px-3 py-1.5 rounded-full text-xs font-semibold border animate-float pointer-events-none z-20"
            style={{
              background: "oklch(0.75 0.22 200 / 0.12)",
              borderColor: "oklch(0.75 0.22 200 / 0.5)",
              color: "oklch(0.75 0.22 200)",
            }}
          >
            AI &amp; ML
          </div>
          <div
            className="absolute top-1/3 -left-4 px-3 py-1.5 rounded-full text-xs font-semibold border animate-float pointer-events-none z-20"
            style={{
              background: "oklch(0.65 0.28 300 / 0.12)",
              borderColor: "oklch(0.65 0.28 300 / 0.5)",
              color: "oklch(0.75 0.22 300)",
              animationDelay: "-2s",
            }}
          >
            Python
          </div>
          <div
            className="absolute bottom-1/3 right-2 px-3 py-1.5 rounded-full text-xs font-semibold border animate-float pointer-events-none z-20"
            style={{
              background: "oklch(0.75 0.22 200 / 0.12)",
              borderColor: "oklch(0.75 0.22 200 / 0.5)",
              color: "oklch(0.75 0.22 200)",
              animationDelay: "-4s",
            }}
          >
            JavaScript
          </div>
          <div
            className="absolute bottom-4 left-8 px-3 py-1.5 rounded-full text-xs font-semibold border animate-float pointer-events-none z-20"
            style={{
              background: "oklch(0.65 0.28 300 / 0.12)",
              borderColor: "oklch(0.65 0.28 300 / 0.5)",
              color: "oklch(0.75 0.22 300)",
              animationDelay: "-3s",
            }}
          >
            Java
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground z-10">
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
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "oklch(0.75 0.22 300)" }}
            >
              <span
                className="w-8 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.65 0.28 300), oklch(0.75 0.22 200))",
                }}
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
                className="glass-card card-hover glow-border-primary flex flex-col items-center justify-center p-6 rounded-2xl text-center"
              >
                <div className="mb-3" style={{ color: "oklch(0.75 0.22 300)" }}>
                  {stat.icon}
                </div>
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
              className="group glass-card card-hover rounded-2xl overflow-hidden flex flex-col"
              data-ocid={`work.item.${i + 1}`}
            >
              <div className="p-6 flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: "oklch(0.65 0.28 300 / 0.1)" }}
                  >
                    {project.icon}
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">
                    {project.period}
                  </span>
                </div>
                <h3
                  className="text-xl font-bold font-display mb-3 text-foreground group-hover:text-transparent group-hover:bg-clip-text transition-colors"
                  style={{
                    WebkitTextFillColor: undefined,
                  }}
                >
                  <span className="group-hover:gradient-text">
                    {project.title}
                  </span>
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
                        background: "oklch(0.65 0.28 300 / 0.07)",
                        borderColor: "oklch(0.65 0.28 300 / 0.25)",
                        color: "oklch(0.75 0.22 300)",
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
                className="flex items-center justify-between px-6 py-4 border-t group/link hover:bg-[oklch(0.65_0.28_300/0.05)] transition-colors"
                style={{ borderColor: "oklch(0.22 0.05 275 / 0.8)" }}
                data-ocid={`work.link.${i + 1}`}
              >
                <span
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors"
                  style={{}}
                >
                  <SiGithub size={16} />
                  View on GitHub
                </span>
                <ExternalLink
                  size={14}
                  className="text-muted-foreground transition-colors"
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
              className="group glass-card card-hover flex flex-col sm:flex-row gap-4 p-6 rounded-2xl"
              data-ocid={`certifications.item.${i + 1}`}
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "oklch(0.65 0.28 300 / 0.15)" }}
              >
                <Award size={18} style={{ color: "oklch(0.75 0.22 300)" }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3
                    className="font-semibold text-foreground text-sm leading-snug pr-4"
                    style={{ transition: "color 0.2s" }}
                  >
                    {cert.title}
                  </h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {cert.date}
                  </span>
                </div>
                <p
                  className="text-xs font-medium mb-2"
                  style={{ color: "oklch(0.75 0.22 300)" }}
                >
                  {cert.issuer}
                </p>
                <p className="text-sm text-muted-foreground">
                  {cert.description}
                </p>
                {cert.downloadUrl && (
                  <a
                    href={cert.downloadUrl}
                    download
                    className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold px-4 py-1.5 btn-outline"
                    data-ocid={`certifications.download.${i + 1}`}
                  >
                    <Download size={12} />
                    Download
                  </a>
                )}
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
          {TRAINING.map((item, i) => (
            <div
              key={item.title}
              className="glass-card card-hover flex gap-6 p-8 rounded-2xl"
              data-ocid={`training.item.${i + 1}`}
            >
              <div
                className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: "oklch(0.75 0.22 200 / 0.15)" }}
              >
                <BookOpen size={24} style={{ color: "oklch(0.75 0.22 200)" }} />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold font-display text-foreground">
                    {item.title}
                  </h3>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{
                      background: "oklch(0.75 0.22 200 / 0.12)",
                      color: "oklch(0.75 0.22 200)",
                    }}
                  >
                    {item.period}
                  </span>
                </div>
                <p
                  className="text-sm font-medium mb-3"
                  style={{ color: "oklch(0.75 0.22 200)" }}
                >
                  {item.org}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                {item.downloadUrl && (
                  <a
                    href={item.downloadUrl}
                    download
                    className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold px-4 py-2 btn-outline"
                    data-ocid={`training.download.${i + 1}`}
                  >
                    <Download size={12} />
                    Download Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
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
            className="glass-card card-hover glow-border-primary p-8 rounded-2xl relative overflow-hidden"
            data-ocid="achievements.item.1"
          >
            <div
              className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: "oklch(0.65 0.28 300)" }}
            />
            <div className="flex items-start gap-5 relative">
              <div
                className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: "oklch(0.65 0.28 300 / 0.15)" }}
              >
                <Trophy size={24} className="text-yellow-400" />
              </div>
              <div>
                <div
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3"
                  style={{
                    background: "oklch(0.65 0.28 300 / 0.15)",
                    color: "oklch(0.75 0.22 300)",
                  }}
                >
                  🏆 1st Position
                </div>
                <h3 className="text-xl font-bold font-display text-foreground mb-1">
                  LPU Freshmen League 2023
                </h3>
                <p
                  className="text-sm font-medium mb-3"
                  style={{ color: "oklch(0.75 0.22 300)" }}
                >
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
    bg: "oklch(0.75 0.22 200 / 0.1)",
    border: "oklch(0.75 0.22 200 / 0.4)",
    text: "oklch(0.75 0.22 200)",
  },
  JavaScript: {
    bg: "oklch(0.75 0.22 200 / 0.1)",
    border: "oklch(0.75 0.22 200 / 0.4)",
    text: "oklch(0.85 0.18 200)",
  },
  Java: {
    bg: "oklch(0.65 0.28 300 / 0.1)",
    border: "oklch(0.65 0.28 300 / 0.4)",
    text: "oklch(0.75 0.22 300)",
  },
  "C++": {
    bg: "oklch(0.65 0.28 300 / 0.1)",
    border: "oklch(0.65 0.28 300 / 0.4)",
    text: "oklch(0.75 0.22 300)",
  },
};

const DEFAULT_SKILL_COLOR = {
  bg: "oklch(0.16 0.04 275 / 0.6)",
  border: "oklch(0.28 0.06 275)",
  text: "oklch(0.72 0.04 270)",
};

function SkillBadge({ skill }: { skill: string }) {
  const color = SKILL_COLORS[skill] ?? DEFAULT_SKILL_COLOR;
  return (
    <span
      className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 hover:scale-105 cursor-default glow-border-primary"
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
                  className="glass-card card-hover flex items-center gap-4 p-4 rounded-xl group transition-all duration-200 hover:scale-[1.02]"
                  data-ocid={`contact.link.${i + 1}`}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: link.color.replace(")", " / 0.15)"),
                    }}
                  >
                    <span style={{ color: link.color }}>{link.icon}</span>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">
                      {link.label}
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      {link.value}
                    </div>
                  </div>
                  <ExternalLink
                    size={14}
                    className="ml-auto text-muted-foreground"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right decorative: spinning ring with profile photo */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-72 h-72 flex items-center justify-center">
              {/* Spinning conic ring */}
              <div
                className="absolute inset-0 rounded-full animate-spin-slow pointer-events-none"
                style={{
                  background:
                    "conic-gradient(from 0deg, oklch(0.65 0.28 300 / 0), oklch(0.65 0.28 300 / 0.6), oklch(0.75 0.22 200 / 0.6), oklch(0.75 0.22 200 / 0.2), oklch(0.65 0.28 300 / 0))",
                  padding: "2px",
                }}
              />
              {/* Inner circle with photo */}
              <div
                className="w-60 h-60 rounded-full overflow-hidden relative z-10"
                style={{
                  border: "2px solid oklch(0.22 0.05 275)",
                  boxShadow: "0 0 40px oklch(0.65 0.28 300 / 0.2)",
                }}
              >
                <img
                  src="/assets/uploads/porttt-1.jpeg"
                  alt="Abhishek Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Label below */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
                <span className="text-xs font-semibold gradient-text">
                  Open to work
                </span>
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
        borderColor: "oklch(0.22 0.05 275)",
        background: "oklch(0.09 0.025 270)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.65 0.28 300), oklch(0.75 0.22 200))",
              }}
            >
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
          style={{ borderColor: "oklch(0.18 0.04 275)" }}
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
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full border shadow-lg transition-all duration-200 hover:scale-110 glass-card glow-border-primary"
      aria-label="Back to top"
      data-ocid="nav.button"
    >
      <ChevronUp size={18} style={{ color: "oklch(0.75 0.22 300)" }} />
    </button>
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
    <div className="min-h-screen relative">
      {/* Global subtle grid layer */}
      <div className="global-grid-layer" />
      <div className="relative z-10">
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
    </div>
  );
}
