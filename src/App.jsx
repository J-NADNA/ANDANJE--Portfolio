import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import {
  profile,
  pillars,
  projects,
  experience,
  skills,
  education,
  stats,
} from './data/portfolio.js'

const navItems = [
  ['home', 'Home'],
  ['about', 'About'],
  ['work', 'Work'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['writing', 'Writing'],
  ['contact', 'Contact'],
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

function SectionIntro({ eyebrow, title, text }) {
  return (
    <motion.div
      className="section-intro"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <div className="section-intro-grid">
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
    </motion.div>
  )
}

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>
}

function MenuIcon({ open }) {
  return (
    <span className={`menu-icon ${open ? 'is-open' : ''}`} aria-hidden="true">
      <span />
      <span />
    </span>
  )
}

function DataVisual() {
  return (
    <div className="data-visual" aria-hidden="true">
      <div className="visual-topline">
        <span>Business signal</span>
        <span>LIVE VIEW</span>
      </div>
      <div className="visual-kpi-row">
        <div>
          <span className="visual-label">Insight score</span>
          <strong>84.6</strong>
          <small>+12.4%</small>
        </div>
        <div className="mini-ring"><span>BI</span></div>
      </div>
      <div className="chart-area">
        {[32, 44, 39, 58, 52, 68, 73, 64, 81, 88, 84, 96].map((h, index) => (
          <motion.span
            key={index}
            initial={{ height: 8, opacity: 0.3 }}
            animate={{ height: `${h}%`, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.04 * index }}
          />
        ))}
      </div>
      <div className="visual-foot">
        <span><i /> Data</span>
        <span><i /> Research</span>
        <span><i /> Strategy</span>
      </div>
    </div>
  )
}

function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const close = () => setMenuOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="James Andanje home">
        <span className="brand-mark">JA</span>
        <span className="brand-name">James Andanje</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={activeSection === id ? 'active' : ''}>
            {label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href={`mailto:${profile.email}`}>Let’s talk <ArrowIcon /></a>

      <button
        className="menu-button"
        onClick={() => setMenuOpen((value) => !value)}
        aria-expanded={menuOpen}
        aria-label="Toggle navigation"
      >
        <MenuIcon open={menuOpen} />
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            aria-label="Mobile navigation"
          >
            {navItems.map(([id, label], index) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                <span>0{index + 1}</span>{label}
              </a>
            ))}
            <a href={`mailto:${profile.email}`} onClick={() => setMenuOpen(false)}>Email me <ArrowIcon /></a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

function Hero() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="hero" id="home">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="container hero-inner">
        <motion.div
          className="hero-copy"
          initial={reducedMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <div className="hero-kicker">
            <span className="status-dot" /> Available for analytics, BI & research opportunities
          </div>
          <p className="hero-role">{profile.role} <span>/</span> {profile.descriptor}</p>
          <h1>
            From Data to Insight.<br />
            <span>From Insight to Action.</span>
          </h1>
          <p className="hero-lede">
            I combine data analytics, business intelligence and research to turn complex information into clear business insight — and communicate what decision-makers should pay attention to next.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowIcon /></a>
            <a className="button button-secondary" href="#about">About me</a>
          </div>
          <div className="hero-meta">
            <span>{profile.location}</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer">WhatsApp <ArrowIcon /></a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual-wrap"
          initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.18 }}
        >
          <div className="visual-caption"><span>01</span> Analytical thinking, made visible</div>
          <DataVisual />
          <div className="floating-note note-one">Research → Context</div>
          <div className="floating-note note-two">Insight → Decision</div>
        </motion.div>
      </div>
      <div className="hero-marquee" aria-label="Core capabilities">
        <div>
          <span>DATA ANALYTICS</span><i>◆</i><span>BUSINESS INTELLIGENCE</span><i>◆</i><span>MARKET RESEARCH</span><i>◆</i><span>STRATEGIC INSIGHT</span><i>◆</i><span>DATA STORYTELLING</span>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <SectionIntro
          eyebrow="About"
          title="An analyst who understands the question behind the numbers."
          text="My work sits at the intersection of quantitative analysis, business research and communication. I’m interested in what happened, what is changing, why it matters and what action could follow."
        />

        <div className="about-grid">
          <motion.div
            className="about-statement"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="quote-mark">“</span>
            <blockquote>Data has value when it leads to understanding, and understanding has value when it supports better decisions.</blockquote>
            <p>My approach connects the complete analytical process — from business question and data preparation to analysis, visualization, insight and recommendation.</p>
          </motion.div>

          <div className="about-stats">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="pillars-grid">
          {pillars.map((pillar, index) => (
            <motion.article
              className="pillar-card"
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <div className="pillar-head"><span>{pillar.number}</span><span>↘</span></div>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
              <div className="tag-row">{pillar.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section work-section" id="work">
      <div className="container">
        <SectionIntro
          eyebrow="Experience"
          title="Growing through analytics, research and consulting."
          text="My progression at Enreal Limited reflects the direction of my career: deeper analytical responsibility, broader business context and stronger communication of insight."
        />
        <div className="timeline">
          {experience.map((item, index) => (
            <motion.article
              className="timeline-row"
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="timeline-period">{item.period}</div>
              <div className="timeline-main">
                <span className="timeline-company">{item.company}</span>
                <h3>{item.role}</h3>
                <p>{item.summary}</p>
              </div>
              <div className="timeline-tags">
                {item.highlights.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectVisual({ type }) {
  if (type === 'research') {
    return (
      <div className="project-art research-art" aria-hidden="true">
        <span className="map-dot d1" /><span className="map-dot d2" /><span className="map-dot d3" />
        <span className="route r1" /><span className="route r2" />
        <div className="research-label">VALUE CHAIN</div>
        <div className="research-metric"><strong>5</strong><span>connected lenses</span></div>
      </div>
    )
  }

  if (type === 'strategy') {
    return (
      <div className="project-art strategy-art" aria-hidden="true">
        <div className="matrix-line h" /><div className="matrix-line v" />
        <span className="matrix-label ml1">Market</span><span className="matrix-label ml2">Opportunity</span><span className="matrix-label ml3">Risk</span><span className="matrix-label ml4">Action</span>
        <div className="strategy-dot" />
      </div>
    )
  }

  if (type === 'presentation') {
    return <div className="project-art presentation-art" aria-hidden="true"><div className="slide-shape s1"/><div className="slide-shape s2"/><div className="slide-shape s3"/><span>EXECUTIVE<br/>STORYLINE</span></div>
  }

  if (type === 'visual') {
    return <div className="project-art visual-art" aria-hidden="true"><div className="visual-circle"/><div className="visual-block vb1"/><div className="visual-block vb2"/><span>FORM +<br/>MEANING</span></div>
  }

  if (type === 'writing') {
    return <div className="project-art writing-art" aria-hidden="true"><span className="line l1"/><span className="line l2"/><span className="line l3"/><span className="line l4"/><strong>100+</strong><small>published pieces</small></div>
  }

  return (
    <div className="project-art data-art" aria-hidden="true">
      <div className="project-kpi"><span>Transactions</span><strong>↑ 18.4%</strong></div>
      <div className="project-bars">{[38, 54, 46, 67, 72, 61, 84].map((height, index) => <span style={{ height: `${height}%` }} key={index} />)}</div>
      <div className="project-axis"><span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span></div>
    </div>
  )
}

function Projects() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)
  const filters = ['All', ...new Set(projects.map((project) => project.category))]
  const visibleProjects = useMemo(() => filter === 'All' ? projects : projects.filter((project) => project.category === filter), [filter])

  useEffect(() => {
    if (!selected) return
    const handler = (event) => {
      if (event.key === 'Escape') setSelected(null)
    }
    document.body.classList.add('modal-open')
    window.addEventListener('keydown', handler)
    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', handler)
    }
  }, [selected])

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <SectionIntro
          eyebrow="Selected work"
          title="Projects built around real business questions."
          text="The strongest portfolio work shows more than tools. Each project is structured around the problem, process, insight and business value."
        />

        <div className="project-toolbar">
          <div className="filter-row" role="group" aria-label="Filter projects">
            {filters.map((item) => (
              <button key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>{item}</button>
            ))}
          </div>
          <span>{visibleProjects.length.toString().padStart(2, '0')} projects</span>
        </div>

        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.article
                layout
                className={`project-card ${project.featured ? 'featured' : ''}`}
                key={project.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <button className="project-card-button" onClick={() => setSelected(project)} aria-label={`Open ${project.title} case study`}>
                  <div className="project-card-top">
                    <span>{project.number} / {project.category}</span>
                    <span className="project-open">↗</span>
                  </div>
                  <ProjectVisual type={project.accent} />
                  <div className="project-card-copy">
                    <h3>{project.title}</h3>
                    <p>{project.subtitle}</p>
                    <div className="tag-row">{project.tools.slice(0, 4).map((tool) => <span key={tool}>{tool}</span>)}</div>
                  </div>
                </button>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}>
      <motion.div
        className="project-modal"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.98 }}
        transition={{ duration: 0.3 }}
        onMouseDown={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <div className="modal-header">
          <div><span className="eyebrow">Case study / {project.number}</span><h2 id="project-modal-title">{project.title}</h2></div>
          <button className="modal-close" onClick={onClose} aria-label="Close case study">×</button>
        </div>
        <ProjectVisual type={project.accent} />
        <div className="modal-tools">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
        <div className="modal-content-grid">
          <div>
            <span className="modal-label">Overview</span>
            <p>{project.overview}</p>
          </div>
          <div>
            <span className="modal-label">The challenge</span>
            <p>{project.challenge}</p>
          </div>
          <div>
            <span className="modal-label">Approach</span>
            <ol>{project.approach.map((item) => <li key={item}>{item}</li>)}</ol>
          </div>
          <div>
            <span className="modal-label">Value / outcomes</span>
            <ol>{project.outcomes.map((item) => <li key={item}>{item}</li>)}</ol>
          </div>
        </div>
        <div className="modal-note">Project screenshots and confidential work samples can be added here as they become available.</div>
      </motion.div>
    </motion.div>
  )
}

function Skills() {
  const categories = Object.keys(skills)
  const [active, setActive] = useState(categories[0])

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <SectionIntro
          eyebrow="Capabilities"
          title="Tools are useful. The thinking behind them matters more."
          text="My toolkit combines analytical software with research, strategic thinking and communication — the capabilities needed to move from raw information to decision support."
        />

        <div className="skills-shell">
          <div className="skill-tabs" role="tablist" aria-label="Skill categories">
            {categories.map((category, index) => (
              <button
                key={category}
                className={active === category ? 'active' : ''}
                onClick={() => setActive(category)}
                role="tab"
                aria-selected={active === category}
              >
                <span>0{index + 1}</span>{category}
              </button>
            ))}
          </div>
          <div className="skills-panel">
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <span className="eyebrow">{active}</span>
                <div className="skill-cloud">{skills[active].map((skill) => <span key={skill}>{skill}</span>)}</div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="education-card">
          <div><span className="eyebrow">Education</span><h3>{education.degree}</h3><p>{education.institution} · {education.period}</p></div>
          <p>{education.description}</p>
        </div>
      </div>
    </section>
  )
}

function Writing() {
  return (
    <section className="section writing-section" id="writing">
      <div className="container writing-grid">
        <motion.div
          className="writing-copy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="eyebrow light">Beyond the numbers</span>
          <h2>Analysis gives me the evidence. Writing helps me tell the story.</h2>
          <p>Since 2020, I have maintained an active creative writing practice under <strong>Andanje Jamie Poet</strong>, publishing more than 100 pieces across poetry, short stories and narrative work.</p>
          <p>I keep this part of my portfolio intentionally separate from my analytics work, but the connection is important: good data storytelling also depends on structure, clarity, audience and narrative.</p>
          <a className="text-link light-link" href="#contact">Ask about my writing <ArrowIcon /></a>
        </motion.div>
        <motion.div
          className="writing-visual"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="writing-number">100+</span>
          <span className="writing-caption">creative works<br/>published since 2020</span>
          <div className="writing-lines" aria-hidden="true"><span/><span/><span/><span/><span/></div>
          <p>Poetry · Short stories · Creative narratives · Memoir-style writing</p>
        </motion.div>
      </div>
    </section>
  )
}

function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('sending')
    const form = event.currentTarget
    const body = new URLSearchParams(new FormData(form)).toString()
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
      if (!response.ok) throw new Error('Submission failed')
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <SectionIntro
          eyebrow="Contact"
          title="Let’s work with data, research and ideas."
          text="I’m open to conversations about data analytics, business intelligence, research, market analysis and opportunities where analytical thinking can support better decisions."
        />
        <div className="contact-grid">
          <div className="contact-direct">
            <a href={`mailto:${profile.email}`}><span>Email</span><strong>{profile.email}</strong><ArrowIcon /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>Connect professionally</strong><ArrowIcon /></a>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>{profile.phone}</strong><ArrowIcon /></a>
            <div className="location-card"><span>Based in</span><strong>{profile.location}</strong><small>Open to local and remote opportunities</small></div>
          </div>

          <form className="contact-form" name="portfolio-contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="portfolio-contact" />
            <p className="hidden-field"><label>Don’t fill this out: <input name="bot-field" /></label></p>
            <div className="form-row">
              <label>Name<input name="name" type="text" placeholder="Your name" required /></label>
              <label>Email<input name="email" type="email" placeholder="you@company.com" required /></label>
            </div>
            <label>Subject<input name="subject" type="text" placeholder="Opportunity, project or conversation" /></label>
            <label>Message<textarea name="message" rows="5" placeholder="Tell me a little about what you have in mind…" required /></label>
            <button className="button button-primary form-button" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message sent ✓' : 'Send message ↗'}
            </button>
            {status === 'error' && <p className="form-status">The form could not send right now. You can email me directly at {profile.email}.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div><span className="brand-mark footer-mark">JA</span><p>Turning data and research into business insight.</p></div>
        <div><span>Portfolio</span><strong>James Andanje</strong><small>Data Analyst · BI · Research</small></div>
        <div><span>Location</span><strong>Nairobi, Kenya</strong><small>© {new Date().getFullYear()} James Andanje</small></div>
        <a href="#home" className="back-top">Back to top ↑</a>
      </div>
    </footer>
  )
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = navItems.map(([id]) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0.05, 0.2, 0.5] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
