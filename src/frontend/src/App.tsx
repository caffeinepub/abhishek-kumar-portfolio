import {
  Award,
  BookOpen,
  Brain,
  Briefcase,
  ChevronUp,
  Code2,
  Download,
  ExternalLink,
  Globe,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Sparkles,
  Sun,
  Trophy,
  Wrench,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { useScrollReveal } from "./hooks/useScrollReveal";

// ─── Theme ───────────────────────────────────────────────────────────────────

function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme") as
      | "dark"
      | "light"
      | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  const toggle = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("portfolio-theme", next);
      document.documentElement.setAttribute("data-theme", next);
      return next;
    });
  };

  return { theme, toggle };
}

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Training", href: "#current-learning" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "#resume" },
];

const PROJECTS = [
  {
    title: "Fake Profile Detection System",
    period: "Nov – Dec 2025",
    description:
      "Designed and trained a Random Forest classifier using scikit-learn and pandas on a dataset of social media profiles, achieving ~94% accuracy. Performed feature engineering including null-ratio analysis, profile completeness scoring, and activity pattern extraction. Evaluated model performance using ROC-AUC score of 0.94 and 5-fold cross-validation.",
    tags: [
      "Python",
      "scikit-learn",
      "pandas",
      "Random Forest",
      "Machine Learning",
    ],
    github:
      "https://github.com/AbhishekPatel9305/Fake-Profile-Detection-Using-ML",
    icon: "🤖",
  },
  {
    title: "Law Guide India",
    period: "Oct – Nov 2025",
    description:
      "Developed a fully responsive legal awareness website to simplify access to Indian laws for the general public. Designed structured navigation covering 10+ legal categories including property, criminal, and consumer law, with a clean content hierarchy for non-legal audiences.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
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

const EDUCATION = [
  {
    degree: "Bachelor of Technology - Computer Science and Engineering",
    institution: "Lovely Professional University",
    location: "Jalandhar, Punjab",
    period: "Aug 2023 – Present",
    detail: "CGPA: 6.73",
    icon: "🎓",
    current: true,
  },
  {
    degree: "Intermediate",
    institution: "LJP SVM Inter College",
    location: "Muzaffarnagar, Uttar Pradesh",
    period: "Apr 2022 – Mar 2023",
    detail: "Percentage: 82%",
    icon: "📚",
    current: false,
  },
  {
    degree: "Matriculation",
    institution: "LJP SVM Inter College",
    location: "Muzaffarnagar, Uttar Pradesh",
    period: "Apr 2020 – Mar 2021",
    detail: "Percentage: 80%",
    icon: "🏫",
    current: false,
  },
];

const SKILLS = {
  "Programming Languages": ["Python", "C", "C++", "JavaScript"],
  "AI / ML": [
    "Scikit-learn",
    "Random Forest",
    "Machine Learning",
    "pandas",
    "Data Analysis",
    "ROC-AUC",
  ],
  Tools: ["Git", "GitHub", "VS Code", "Excel", "Power BI"],
  "Web & Frameworks": ["HTML", "CSS", "Responsive Design"],
};

const CONTACT_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/AbhishekPatel9305",
    icon: <SiGithub size={20} />,
    color: "oklch(0.85 0.01 270)",
    sub: "github.com/AbhishekPatel9305",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abhishekkumar9305/",
    icon: <SiLinkedin size={20} />,
    color: "oklch(0.65 0.2 240)",
    sub: "linkedin.com/in/abhishekkumar9305",
  },
  {
    label: "Email",
    href: "mailto:abhishek7783patel@gmail.com",
    icon: <Mail size={20} />,
    color: "oklch(0.75 0.22 200)",
    sub: "abhishek7783patel@gmail.com",
  },
  {
    label: "Phone",
    href: "tel:+919286222377",
    icon: <Phone size={20} />,
    color: "oklch(0.75 0.22 150)",
    sub: "+91-9286222377",
  },
];

const ROLES = ["AI & ML Student", "Developer"];

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

function SectionHeader({
  label,
  title,
  subtitle,
  num,
}: {
  label: string;
  title: string;
  subtitle?: string;
  num?: string;
}) {
  const words = title.split(" ");
  const first = words.slice(0, -1).join(" ");
  const last = words[words.length - 1];

  return (
    <div className="relative space-y-3 pb-2">
      {num && (
        <span
          className="section-num absolute -top-6 left-0 select-none pointer-events-none z-0 leading-none"
          aria-hidden="true"
        >
          {num}
        </span>
      )}

      <div className="relative z-10 space-y-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2">
          <span
            className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border"
            style={{
              borderColor: "oklch(0.65 0.28 300 / 0.4)",
              background: "oklch(0.65 0.28 300 / 0.08)",
              color: "oklch(0.75 0.22 300)",
            }}
          >
            {label}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-bold font-display">
          {first ? (
            <>
              <span className="text-foreground">{first} </span>
              <span className="gradient-text">{last}</span>
            </>
          ) : (
            <span className="gradient-text">{last}</span>
          )}
        </h2>

        {/* Underline */}
        <div
          className="w-20 h-1 rounded-full"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.65 0.28 300), oklch(0.75 0.22 200), transparent)",
          }}
        />

        {/* Subtitle */}
        {subtitle && (
          <p className="text-muted-foreground text-base max-w-xl">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar({
  theme,
  toggleTheme,
}: { theme: "dark" | "light"; toggleTheme: () => void }) {
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

  const navBg =
    theme === "dark"
      ? "oklch(0.09 0.025 270 / 0.88)"
      : "oklch(0.97 0.005 260 / 0.92)";
  const navBorder =
    theme === "dark"
      ? "oklch(0.22 0.05 275 / 0.5)"
      : "oklch(0.85 0.02 270 / 0.8)";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl border-b shadow-lg" : "bg-transparent"
      }`}
      style={scrolled ? { background: navBg, borderColor: navBorder } : {}}
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
            className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold text-white glow-purple group-hover:scale-105 transition-transform"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.65 0.28 300), oklch(0.75 0.22 200))",
            }}
          >
            &lt;/&gt;
          </div>
          <span
            className="font-display font-bold text-sm hidden sm:block"
            style={{ color: "oklch(var(--foreground))" }}
          >
            <span className="text-foreground">Abhishek</span>{" "}
            <span className="gradient-text">Kumar</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => scrollTo(link.href)}
                className={`nav-link text-xs font-medium ${
                  active === link.href ? "active" : ""
                }`}
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <a
            href="/assets/uploads/abhishek_kumar_resume-019d4f86-0cf4-71b9-a8d5-68526953f37f.pdf"
            download
            className="flex items-center gap-1.5 px-5 py-2 text-sm font-semibold btn-outline"
            data-ocid="nav.secondary_button"
          >
            <Download size={15} />
            Resume
          </a>
          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle theme"
            data-ocid="nav.toggle"
          >
            {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle theme"
            data-ocid="nav.toggle"
          >
            {theme === "dark" ? <Moon size={15} /> : <Sun size={15} />}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-muted-foreground hover:text-foreground"
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="md:hidden border-b backdrop-blur-xl"
          style={{
            background: navBg,
            borderColor: navBorder,
          }}
        >
          <ul className="px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => scrollTo(link.href)}
                  className={`w-full text-left text-sm font-medium py-2.5 px-3 rounded-lg transition-colors ${
                    active === link.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  style={
                    active === link.href
                      ? { background: "oklch(0.65 0.28 300 / 0.12)" }
                      : {}
                  }
                  data-ocid="nav.link"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="/assets/uploads/abhishek_kumar_resume-019d4f86-0cf4-71b9-a8d5-68526953f37f.pdf"
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

const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${8 + ((i * 37) % 85)}%`,
  size: 2 + (i % 3),
  delay: `${(i * 1.7) % 10}s`,
  duration: `${8 + (i % 6)}s`,
  color:
    i % 2 === 0 ? "oklch(0.65 0.28 300 / 0.6)" : "oklch(0.75 0.22 200 / 0.5)",
}));

function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIdx((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className="hero-particle"
          style={{
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            animationDelay: p.delay,
            animationDuration: p.duration,
            bottom: "-10px",
          }}
        />
      ))}

      <div
        className="absolute top-1/4 -left-20 w-96 h-96 rounded-full opacity-20 blur-3xl animate-drift pointer-events-none"
        style={{ background: "oklch(0.65 0.28 300)" }}
      />
      <div
        className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full opacity-15 blur-3xl animate-drift pointer-events-none"
        style={{ background: "oklch(0.75 0.22 200)", animationDelay: "-6s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          {/* Available badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold animate-fade-in-up"
            style={{
              borderColor: "oklch(0.55 0.22 150 / 0.5)",
              background: "oklch(0.55 0.22 150 / 0.08)",
              color: "oklch(0.72 0.18 150)",
              animationDelay: "0.05s",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "oklch(0.72 0.18 150)" }}
            />
            <Sparkles size={11} />
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <div
            className="space-y-2 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <p
              className="text-lg font-medium"
              style={{ color: "oklch(0.62 0.04 270)" }}
            >
              Hi, I&apos;m 👋
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black font-display leading-tight">
              <span className="text-foreground">Abhishek</span>
              <br />
              <span className="gradient-text">Kumar</span>
            </h1>
          </div>

          {/* Cycling role */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold"
              style={{
                borderColor: "oklch(0.75 0.22 200 / 0.4)",
                background: "oklch(0.75 0.22 200 / 0.08)",
                color: "oklch(0.75 0.22 200)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "oklch(0.75 0.22 200)" }}
              />
              <span
                key={roleIdx}
                className="cursor-blink"
                style={{ minWidth: "160px" }}
              >
                {ROLES[roleIdx]}
              </span>
            </div>
          </div>

          <p
            className="text-base text-muted-foreground max-w-lg leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            B.Tech student specializing in Artificial Intelligence &amp; Machine
            Learning at LPU · Passionate about building intelligent systems,
            exploring deep learning, and turning data into real-world solutions
          </p>

          {/* Social circles */}
          <div
            className="flex items-center gap-3 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="https://www.linkedin.com/in/abhishekkumar9305/"
              target="_blank"
              rel="noreferrer"
              className="social-circle-btn"
              style={{
                background: "oklch(0.65 0.2 240 / 0.1)",
                borderColor: "oklch(0.65 0.2 240 / 0.4)",
              }}
              aria-label="LinkedIn"
            >
              <SiLinkedin size={18} style={{ color: "oklch(0.65 0.2 240)" }} />
            </a>
            <a
              href="https://github.com/AbhishekPatel9305"
              target="_blank"
              rel="noreferrer"
              className="social-circle-btn"
              style={{
                background: "oklch(0.85 0.01 270 / 0.08)",
                borderColor: "oklch(0.85 0.01 270 / 0.3)",
              }}
              aria-label="GitHub"
            >
              <SiGithub size={18} style={{ color: "oklch(0.85 0.01 270)" }} />
            </a>
            <a
              href="mailto:abhishek7783patel@gmail.com"
              className="social-circle-btn"
              style={{
                background: "oklch(0.75 0.22 200 / 0.1)",
                borderColor: "oklch(0.75 0.22 200 / 0.4)",
              }}
              aria-label="Email"
            >
              <Mail size={18} style={{ color: "oklch(0.75 0.22 200)" }} />
            </a>
            <a
              href="tel:+919286222377"
              className="social-circle-btn"
              style={{
                background: "oklch(0.75 0.22 150 / 0.1)",
                borderColor: "oklch(0.75 0.22 150 / 0.4)",
              }}
              aria-label="Call"
            >
              <Phone size={18} style={{ color: "oklch(0.75 0.22 150)" }} />
            </a>
          </div>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <button
              type="button"
              onClick={() => scrollTo("#projects")}
              className="px-8 py-3.5 text-sm font-semibold btn-primary"
              data-ocid="hero.primary_button"
            >
              View Projects ↓
            </button>
            <button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="px-8 py-3.5 text-sm font-semibold btn-outline"
              data-ocid="hero.secondary_button"
            >
              Contact Me
            </button>
          </div>

          {/* Stat strip — social proof for recruiters */}
          <div
            className="flex items-center gap-6 pt-2 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            {[
              { value: "2+", label: "Projects Built" },
              { value: "6+", label: "Certifications" },
              { value: "B.Tech", label: "AI & ML · LPU" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-4">
                {i > 0 && (
                  <div
                    className="w-px h-8 hidden sm:block"
                    style={{ background: "oklch(0.28 0.06 275)" }}
                  />
                )}
                <div>
                  <div
                    className="font-black font-display text-xl leading-none"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.75 0.22 300), oklch(0.75 0.22 200))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5 whitespace-nowrap">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — photo with ring */}
        <div
          className="flex justify-center lg:justify-end animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <div
              className="absolute inset-0 rounded-full animate-spin-slow pointer-events-none"
              style={{
                background:
                  "conic-gradient(from 0deg, oklch(0.65 0.28 300), oklch(0.75 0.22 200), transparent, oklch(0.65 0.28 300))",
                padding: "3px",
              }}
            />
            <div
              className="absolute inset-4 rounded-full blur-2xl opacity-40 animate-pulse-glow pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.65 0.28 300), oklch(0.75 0.22 200 / 0.5))",
              }}
            />
            <div
              className="absolute inset-[5px] rounded-full overflow-hidden"
              style={{
                boxShadow:
                  "0 0 40px oklch(0.65 0.28 300 / 0.3), 0 0 80px oklch(0.65 0.28 300 / 0.1)",
              }}
            >
              <img
                src="/assets/uploads/abhi_picc-019d2b4a-e837-736e-ad80-19c9f7f76097-1.jpeg"
                alt="Abhishek Kumar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badges */}
            <div
              className="absolute -top-2 right-2 px-3 py-1.5 rounded-full text-xs font-semibold border animate-float pointer-events-none z-20"
              style={{
                background: "oklch(0.65 0.28 300 / 0.15)",
                borderColor: "oklch(0.65 0.28 300 / 0.6)",
                color: "oklch(0.85 0.2 300)",
                boxShadow: "0 4px 16px oklch(0.65 0.28 300 / 0.25)",
              }}
            >
              AI &amp; ML
            </div>
            <div
              className="absolute bottom-6 -right-4 px-3 py-1.5 rounded-full text-xs font-semibold border animate-float pointer-events-none z-20"
              style={{
                background: "oklch(0.12 0.03 270 / 0.9)",
                borderColor: "oklch(0.28 0.06 275)",
                color: "oklch(0.72 0.04 270)",
                animationDelay: "-1.5s",
              }}
            >
              LPU
            </div>
            <div
              className="absolute bottom-1/3 -left-6 px-3 py-1.5 rounded-full text-xs font-semibold border animate-float pointer-events-none z-20"
              style={{
                background: "oklch(0.75 0.22 200 / 0.12)",
                borderColor: "oklch(0.75 0.22 200 / 0.5)",
                color: "oklch(0.75 0.22 200)",
                animationDelay: "-3s",
              }}
            >
              Programming Languages
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span
          className="text-xs font-medium tracking-widest uppercase"
          style={{ color: "oklch(0.62 0.04 270 / 0.7)" }}
        >
          Scroll
        </span>
        <div className="scroll-mouse" />
      </div>
    </section>
  );
}

// ─── Skills ───────────────────────────────────────────────────────────────────

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Programming Languages": <Code2 size={22} />,
  "AI / ML": <Brain size={22} />,
  Tools: <Wrench size={22} />,
  "Web & Frameworks": <Globe size={22} />,
};

const CATEGORY_COLORS = [
  {
    icon: "oklch(0.65 0.28 300)",
    border: "oklch(0.65 0.28 300 / 0.25)",
    tag: {
      bg: "oklch(0.65 0.28 300 / 0.1)",
      border: "oklch(0.65 0.28 300 / 0.3)",
      text: "oklch(0.8 0.2 300)",
    },
  },
  {
    icon: "oklch(0.75 0.22 60)",
    border: "oklch(0.75 0.22 60 / 0.25)",
    tag: {
      bg: "oklch(0.75 0.22 60 / 0.1)",
      border: "oklch(0.75 0.22 60 / 0.3)",
      text: "oklch(0.78 0.18 60)",
    },
  },
  {
    icon: "oklch(0.75 0.22 200)",
    border: "oklch(0.75 0.22 200 / 0.25)",
    tag: {
      bg: "oklch(0.75 0.22 200 / 0.1)",
      border: "oklch(0.75 0.22 200 / 0.3)",
      text: "oklch(0.75 0.22 200)",
    },
  },
  {
    icon: "oklch(0.72 0.22 150)",
    border: "oklch(0.72 0.22 150 / 0.25)",
    tag: {
      bg: "oklch(0.72 0.22 150 / 0.1)",
      border: "oklch(0.72 0.22 150 / 0.3)",
      text: "oklch(0.72 0.22 150)",
    },
  },
];

function Skills() {
  return (
    <Section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="TECHNICAL EXPERTISE"
          title="Skills & Technologies"
          subtitle="My technical toolkit — programming languages, frameworks, and AI/ML expertise."
          num="01"
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(SKILLS).map(([category, skills], i) => {
            const catColor = CATEGORY_COLORS[i % CATEGORY_COLORS.length];
            const icon = CATEGORY_ICONS[category];
            return (
              <div
                key={category}
                className="glass-card card-hover rounded-2xl p-6 relative overflow-hidden"
                data-ocid={`skills.item.${i + 1}`}
              >
                {/* Gradient header banner */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background: `linear-gradient(90deg, ${catColor.icon}, transparent)`,
                  }}
                />
                <div
                  className="flex items-center justify-between mb-5 -mx-6 -mt-6 px-5 py-4 rounded-t-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${catColor.icon.replace(")", " / 0.12)")}, transparent)`,
                    borderBottom: `1px solid ${catColor.border}`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${catColor.icon.replace(")", " / 0.2)")}`,
                        border: `1px solid ${catColor.border}`,
                        boxShadow: `0 0 12px ${catColor.icon.replace(")", " / 0.2)")}`,
                      }}
                    >
                      <span style={{ color: catColor.icon }}>{icon}</span>
                    </div>
                    <h3
                      className="font-bold font-display text-xs uppercase tracking-widest leading-tight"
                      style={{ color: catColor.icon }}
                    >
                      {category}
                    </h3>
                  </div>
                  <span
                    className="text-xs font-bold tabular-nums"
                    style={{
                      color: `${catColor.icon.replace(")", " / 0.5)")}`,
                    }}
                  >
                    {skills.length}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 hover:scale-105 cursor-default"
                      style={{
                        background: catColor.tag.bg,
                        borderColor: catColor.tag.border,
                        color: catColor.tag.text,
                        letterSpacing: "0.01em",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

// ─── Training ─────────────────────────────────────────────────────────────────

function CurrentLearning() {
  return (
    <Section id="current-learning" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="LEARNING & GROWTH"
          title="My Training"
          subtitle="Continuous learning and skill development programs."
          num="02"
        />

        <div className="mt-16 max-w-3xl">
          {TRAINING.map((item, i) => (
            <div
              key={item.title}
              className="glass-card card-hover flex gap-6 p-8 rounded-2xl relative overflow-hidden"
              data-ocid={`training.item.${i + 1}`}
            >
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.75 0.22 200), oklch(0.65 0.28 300))",
                }}
              />
              <div
                className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: "oklch(0.75 0.22 200 / 0.15)" }}
              >
                <BookOpen size={24} style={{ color: "oklch(0.75 0.22 200)" }} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="font-bold font-display text-foreground text-lg">
                    {item.title}
                  </h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {item.period}
                  </span>
                </div>
                <p
                  className="text-sm font-semibold mb-3"
                  style={{ color: "oklch(0.75 0.22 200)" }}
                >
                  {item.org}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
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

// ─── Projects ────────────────────────────────────────────────────────────────

function Projects() {
  return (
    <Section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="FEATURED WORK"
          title="My Projects"
          subtitle="A selection of projects I've built — from tools to web apps."
          num="03"
        />

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              className="group glass-card card-hover rounded-2xl overflow-hidden flex flex-col relative"
              data-ocid={`projects.item.${i + 1}`}
            >
              {/* Rich project banner */}
              <div
                className="w-full h-32 flex items-center justify-between px-6 relative overflow-hidden flex-shrink-0"
                style={{
                  background:
                    i % 2 === 0
                      ? "linear-gradient(135deg, oklch(0.12 0.04 285), oklch(0.17 0.06 300))"
                      : "linear-gradient(135deg, oklch(0.11 0.04 200), oklch(0.16 0.06 220))",
                }}
              >
                {/* diagonal stripe texture */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(55deg, transparent, transparent 12px, oklch(1 0 0 / 0.03) 12px, oklch(1 0 0 / 0.03) 24px)",
                  }}
                />
                {/* glow orb */}
                <div
                  className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full blur-2xl opacity-40"
                  style={{
                    background:
                      i % 2 === 0
                        ? "oklch(0.65 0.28 300)"
                        : "oklch(0.75 0.22 200)",
                  }}
                />
                <div className="relative z-10 flex flex-col gap-1">
                  <span
                    className="text-4xl leading-none"
                    style={{
                      filter:
                        "drop-shadow(0 2px 8px oklch(0.65 0.28 300 / 0.4))",
                    }}
                  >
                    {project.icon}
                  </span>
                  <span
                    className="text-xs font-bold uppercase tracking-widest mt-2"
                    style={{
                      color:
                        i % 2 === 0
                          ? "oklch(0.75 0.22 300 / 0.7)"
                          : "oklch(0.75 0.22 200 / 0.7)",
                    }}
                  >
                    Project {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <span
                  className="relative z-10 text-xs font-semibold px-3 py-1.5 rounded-full border"
                  style={{
                    background:
                      i % 2 === 0
                        ? "oklch(0.65 0.28 300 / 0.12)"
                        : "oklch(0.75 0.22 200 / 0.12)",
                    borderColor:
                      i % 2 === 0
                        ? "oklch(0.65 0.28 300 / 0.4)"
                        : "oklch(0.75 0.22 200 / 0.4)",
                    color:
                      i % 2 === 0
                        ? "oklch(0.8 0.18 300)"
                        : "oklch(0.8 0.18 200)",
                  }}
                >
                  {project.period}
                </span>
              </div>

              <div className="p-6 flex-1">
                <div className="mb-4">
                  <h3 className="text-xl font-bold font-display mb-3 text-foreground">
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
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between px-6 py-3.5 border-t group/link transition-all duration-200"
                style={{
                  borderColor: "oklch(0.22 0.05 275 / 0.8)",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    i % 2 === 0
                      ? "oklch(0.65 0.28 300 / 0.07)"
                      : "oklch(0.75 0.22 200 / 0.07)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "transparent";
                }}
                data-ocid={`projects.link.${i + 1}`}
              >
                <span
                  className="flex items-center gap-2 text-sm font-semibold transition-colors"
                  style={{
                    color:
                      i % 2 === 0
                        ? "oklch(0.75 0.22 300)"
                        : "oklch(0.75 0.22 200)",
                  }}
                >
                  <SiGithub size={16} />
                  View on GitHub
                </span>
                <ExternalLink
                  size={14}
                  style={{
                    color:
                      i % 2 === 0
                        ? "oklch(0.75 0.22 300 / 0.6)"
                        : "oklch(0.75 0.22 200 / 0.6)",
                  }}
                  className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
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
        <SectionHeader
          label="CREDENTIALS"
          title="My Certifications"
          subtitle="Professional certificates from leading platforms and institutions."
          num="04"
        />

        <div className="grid sm:grid-cols-2 gap-5 mt-16">
          {CERTIFICATIONS.map((cert, i) => (
            <div
              key={cert.title}
              className="group glass-card card-hover rounded-2xl overflow-hidden flex flex-col relative"
              data-ocid={`certifications.item.${i + 1}`}
            >
              {/* Certificate preview banner */}
              <div
                className="w-full h-28 flex items-center justify-center relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg,
                    oklch(${0.12 + (i % 3) * 0.02} ${0.04 + (i % 2) * 0.02} ${270 + i * 15}),
                    oklch(${0.18 + (i % 2) * 0.02} ${0.06 + (i % 3) * 0.02} ${290 + i * 10})
                  )`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background:
                      "repeating-linear-gradient(45deg, transparent, transparent 10px, oklch(1 0 0 / 0.02) 10px, oklch(1 0 0 / 0.02) 20px)",
                  }}
                />
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <Award
                    size={36}
                    style={{ color: "oklch(0.75 0.22 300 / 0.9)" }}
                  />
                  <span
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: "oklch(0.75 0.22 300 / 0.7)" }}
                  >
                    Certificate
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-start gap-3 mb-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-sm leading-snug">
                      {cert.title}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <p
                    className="text-xs font-semibold"
                    style={{ color: "oklch(0.75 0.22 300)" }}
                  >
                    {cert.issuer}
                  </p>
                  <span className="text-xs text-muted-foreground">
                    {cert.date}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {cert.description}
                </p>
                {cert.downloadUrl && (
                  <a
                    href={cert.downloadUrl}
                    download
                    className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold px-4 py-1.5 btn-outline self-start"
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

// ─── Achievements ─────────────────────────────────────────────────────────────

function Achievements() {
  return (
    <Section id="achievements" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="RECOGNITION"
          title="My Achievements"
          subtitle="Awards and recognition for creative and technical excellence."
          num="05"
        />

        <div className="mt-16 max-w-3xl">
          <div
            className="glass-card card-hover glow-border-primary p-8 rounded-2xl relative overflow-hidden"
            data-ocid="achievements.item.1"
          >
            <div
              className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: "oklch(0.65 0.28 300)" }}
            />
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.65 0.28 300), oklch(0.75 0.22 200))",
              }}
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
                  className="text-sm font-semibold mb-3"
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

// ─── Education ────────────────────────────────────────────────────────────────

function Education() {
  return (
    <Section id="education" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="ACADEMIC BACKGROUND"
          title="My Education"
          subtitle="My academic journey from school to university."
          num="06"
        />

        <div className="mt-16 max-w-3xl space-y-0 relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-7 top-8 bottom-8 w-0.5 hidden sm:block"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.65 0.28 300), oklch(0.75 0.22 200), oklch(0.65 0.28 300 / 0.2))",
            }}
          />

          {EDUCATION.map((edu, i) => (
            <div
              key={`${edu.institution}-${edu.degree}`}
              className="relative flex gap-6 pb-8 last:pb-0"
              data-ocid={`education.item.${i + 1}`}
            >
              {/* Timeline dot */}
              <div className="flex-shrink-0 flex flex-col items-center z-10">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border-2 flex-shrink-0"
                  style={{
                    background: edu.current
                      ? "oklch(0.65 0.28 300 / 0.15)"
                      : "oklch(0.75 0.22 200 / 0.1)",
                    borderColor: edu.current
                      ? "oklch(0.65 0.28 300 / 0.5)"
                      : "oklch(0.75 0.22 200 / 0.3)",
                    boxShadow: edu.current
                      ? "0 0 20px oklch(0.65 0.28 300 / 0.25)"
                      : "none",
                  }}
                >
                  {edu.icon}
                </div>
              </div>

              {/* Content card */}
              <div className="flex-1 glass-card card-hover rounded-2xl p-6 relative overflow-hidden">
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{
                    background: edu.current
                      ? "linear-gradient(90deg, oklch(0.65 0.28 300), oklch(0.75 0.22 200))"
                      : "linear-gradient(90deg, oklch(0.75 0.22 200), oklch(0.65 0.28 300 / 0.4))",
                  }}
                />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div className="flex-1">
                    <h3 className="font-bold font-display text-foreground text-base leading-snug">
                      {edu.degree}
                    </h3>
                    <p
                      className="text-sm font-semibold mt-0.5"
                      style={{
                        color: edu.current
                          ? "oklch(0.75 0.22 300)"
                          : "oklch(0.65 0.2 240)",
                      }}
                    >
                      {edu.institution}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    <span
                      className="text-xs font-medium px-3 py-1 rounded-full border whitespace-nowrap"
                      style={{
                        background: edu.current
                          ? "oklch(0.65 0.28 300 / 0.1)"
                          : "oklch(0.16 0.04 275 / 0.5)",
                        borderColor: edu.current
                          ? "oklch(0.65 0.28 300 / 0.4)"
                          : "oklch(0.28 0.06 275)",
                        color: edu.current
                          ? "oklch(0.75 0.22 300)"
                          : "oklch(0.72 0.04 270)",
                      }}
                    >
                      {edu.period}
                    </span>
                    {edu.current && (
                      <span
                        className="text-xs font-bold px-2.5 py-0.5 rounded-full"
                        style={{
                          background: "oklch(0.55 0.22 150 / 0.15)",
                          color: "oklch(0.72 0.18 150)",
                        }}
                      >
                        ● Present
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                  <MapPin size={11} />
                  {edu.location}
                </div>

                <div
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: "oklch(0.65 0.28 300 / 0.08)",
                    borderColor: "oklch(0.65 0.28 300 / 0.3)",
                    color: "oklch(0.75 0.22 300)",
                    border: "1px solid",
                  }}
                >
                  {edu.detail}
                </div>
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
        <SectionHeader
          label="GET IN TOUCH"
          title="Let's Connect"
          subtitle="Open to opportunities, collaborations, and meaningful conversations."
          num="07"
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: social cards */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-display text-foreground">
              Let&apos;s <span className="gradient-text">connect</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Interested in collaborating or discussing tech? Feel free to reach
              out via email or LinkedIn. I&apos;m always open to new
              opportunities and conversations.
            </p>

            <div className="space-y-3 mt-6">
              {CONTACT_LINKS.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={
                    link.href.startsWith("mailto") ||
                    link.href.startsWith("tel")
                      ? undefined
                      : "_blank"
                  }
                  rel="noreferrer"
                  className="glass-card card-hover flex items-center gap-4 p-4 rounded-xl group transition-all duration-200 hover:scale-[1.02]"
                  data-ocid={`contact.link.${i + 1}`}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{
                      background: link.color.replace(")", " / 0.12)"),
                    }}
                  >
                    <span style={{ color: link.color }}>{link.icon}</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      {link.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {link.sub}
                    </div>
                  </div>
                  <ExternalLink
                    size={14}
                    className="ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right: contact form card */}
          <div className="glass-card glow-border-primary rounded-2xl p-8 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.65 0.28 300), oklch(0.75 0.22 200))",
              }}
            />
            <div
              className="absolute bottom-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-15 pointer-events-none"
              style={{ background: "oklch(0.65 0.28 300)" }}
            />
            <h3 className="text-2xl font-bold font-display mb-2">
              Send a <span className="gradient-text">Message</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Fill in the form below and I&apos;ll get back to you as soon as
              possible.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide"
                >
                  Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 transition-all"
                  style={
                    {
                      background: "oklch(0.11 0.03 275 / 0.6)",
                      border: "1px solid oklch(0.28 0.06 275 / 0.7)",
                      focusRingColor: "oklch(0.65 0.28 300)",
                    } as React.CSSProperties
                  }
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 transition-all"
                  style={{
                    background: "oklch(0.11 0.03 275 / 0.6)",
                    border: "1px solid oklch(0.28 0.06 275 / 0.7)",
                  }}
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 transition-all resize-none"
                  style={{
                    background: "oklch(0.11 0.03 275 / 0.6)",
                    border: "1px solid oklch(0.28 0.06 275 / 0.7)",
                  }}
                  data-ocid="contact.textarea"
                />
              </div>
              <a
                href="mailto:abhishek7783patel@gmail.com"
                className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-semibold btn-primary"
                data-ocid="contact.submit_button"
              >
                <Mail size={16} />
                Send Message
              </a>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── Resume Section ───────────────────────────────────────────────────────────

// ─── Experience ──────────────────────────────────────────────────────────────

function Experience() {
  return (
    <Section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="WORK EXPERIENCE"
          title="My Experience"
          subtitle="Professional roles and responsibilities I have undertaken."
          num="09"
        />

        <div className="mt-16 max-w-3xl">
          <div
            className="glass-card card-hover glow-border-primary p-8 rounded-2xl relative overflow-hidden"
            data-ocid="experience.item.1"
          >
            <div
              className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: "oklch(0.65 0.28 300)" }}
            />
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.65 0.28 300), oklch(0.75 0.22 200))",
              }}
            />
            <div className="flex items-start gap-5 relative">
              <div
                className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: "oklch(0.65 0.28 300 / 0.15)" }}
              >
                <Briefcase
                  size={24}
                  style={{ color: "oklch(0.75 0.22 300)" }}
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="text-xl font-bold font-display text-foreground">
                    Marketing Lead
                  </h3>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: "oklch(0.65 0.28 300 / 0.15)",
                      color: "oklch(0.75 0.22 300)",
                    }}
                  >
                    Aug 2025 – Present
                  </span>
                </div>
                <p
                  className="text-sm font-semibold mb-4"
                  style={{ color: "oklch(0.75 0.22 300)" }}
                >
                  EventViewz · Training &amp; Development Sector · LPU
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed list-none">
                  <li className="flex items-start gap-2">
                    <span
                      style={{ color: "oklch(0.65 0.28 300)" }}
                      className="mt-1 flex-shrink-0"
                    >
                      ▸
                    </span>
                    Led end-to-end marketing strategy for EventViewz at LPU,
                    driving measurable increases in student engagement, event
                    registrations, and brand visibility across campus.
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      style={{ color: "oklch(0.65 0.28 300)" }}
                      className="mt-1 flex-shrink-0"
                    >
                      ▸
                    </span>
                    Designed and executed promotional campaigns across social
                    media and offline channels, collaborating with department
                    heads to expand audience reach.
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      style={{ color: "oklch(0.65 0.28 300)" }}
                      className="mt-1 flex-shrink-0"
                    >
                      ▸
                    </span>
                    Coordinated with event planning teams to build optimized
                    marketing funnels, monitor participation metrics, and
                    continuously improve outreach effectiveness.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ResumeSection() {
  return (
    <Section id="resume" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="DOWNLOAD"
          title="My Resume"
          subtitle="A complete overview of my skills, education, and projects."
          num="10"
        />

        <div className="mt-16 flex flex-col items-center text-center max-w-2xl mx-auto">
          <div
            className="w-20 h-20 rounded-3xl flex items-center justify-center mb-6"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.65 0.28 300 / 0.2), oklch(0.75 0.22 200 / 0.2))",
              border: "1px solid oklch(0.65 0.28 300 / 0.3)",
              boxShadow: "0 0 30px oklch(0.65 0.28 300 / 0.15)",
            }}
          >
            <Download size={32} style={{ color: "oklch(0.75 0.22 300)" }} />
          </div>

          <h3 className="text-2xl font-bold font-display text-foreground mb-4">
            Get a copy of my <span className="gradient-text">full resume</span>
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-8">
            My resume covers my academic background, technical skills,
            certifications, projects, and achievements. Download it to learn
            more about my qualifications and experience.
          </p>

          <a
            href="/assets/uploads/abhishek_kumar_resume-019d4f86-0cf4-71b9-a8d5-68526953f37f.pdf"
            download
            className="inline-flex items-center gap-3 px-10 py-4 text-base font-semibold btn-primary"
            data-ocid="resume.primary_button"
          >
            <Download size={18} />
            Download Resume
          </a>

          <div className="mt-8 grid grid-cols-3 gap-4 w-full">
            {[
              { label: "B.Tech CSE", sub: "Lovely Professional University" },
              { label: "6+ Certs", sub: "Online & Professional" },
              { label: "2+ Projects", sub: "Open Source" },
            ].map((item) => (
              <div
                key={item.label}
                className="glass-card rounded-xl p-4 text-center"
              >
                <div className="font-bold font-display gradient-text text-lg">
                  {item.label}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {item.sub}
                </div>
              </div>
            ))}
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
      className="border-t py-12"
      style={{ borderColor: "oklch(0.18 0.04 275)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.65 0.28 300), oklch(0.75 0.22 200))",
              }}
            >
              &lt;/&gt;
            </div>
            <span className="font-display font-bold text-foreground">
              Abhishek Kumar
            </span>
          </div>

          <div className="flex items-center gap-4">
            {NAV_LINKS.slice(0, 5).map((link) => (
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
  const { theme, toggle } = useTheme();

  const metaRef = useRef(false);
  useEffect(() => {
    if (metaRef.current) return;
    metaRef.current = true;
    document.title = "Abhishek Kumar — AI & ML Developer";
    const desc = document.querySelector("meta[name='description']");
    if (desc)
      desc.setAttribute(
        "content",
        "B.Tech student specializing in Artificial Intelligence & Machine Learning at LPU | Passionate about deep learning, data science, and building intelligent real-world solutions",
      );
  }, []);

  return (
    <div className="min-h-screen relative">
      <div className="global-grid-layer" />
      <div className="relative z-10">
        <Navbar theme={theme} toggleTheme={toggle} />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <CurrentLearning />
          <Certifications />
          <Achievements />
          <Education />
          <Contact />
          <ResumeSection />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}
