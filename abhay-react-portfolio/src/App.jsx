import React, { useState } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, Database, Server, Layers, ExternalLink, Download, MapPin, Sparkles } from 'lucide-react';

const projects = [
  {
    number: '01', name: 'HelpDesk Pro', type: 'Full-stack · .NET',
    description: 'A ticket management platform for organizing support requests, tracking status, and managing help-desk workflows.',
    stack: ['ASP.NET Core Web API', 'C#', 'SQL Server', 'EF Core', 'Vue.js'],
    link: 'https://github.com/abhay-devs'
  },
  {
    number: '02', name: 'SmartRoute', type: 'Full-stack · Route optimisation',
    description: 'A multi-stop route optimiser that visualizes delivery stops and improves route order using Nearest Neighbor and 2-Opt.',
    stack: ['React', 'Vite', 'Node.js', 'Express'],
    link: 'https://github.com/abhay-devs'
  },
  {
    number: '03', name: 'B-Care', type: 'Full-stack · MERN',
    description: 'A blood-bank management application concept connecting donors and recipients through a centralized workflow.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://github.com/abhay-devs'
  },
  {
    number: '04', name: 'Movie Explorer', type: 'Backend · Django REST',
    description: 'A movie discovery application using a REST API to retrieve and present movie information.',
    stack: ['Python', 'Django', 'DRF', 'REST API'],
    link: 'https://github.com/abhay-devs'
  }
];

const skills = [
  { icon: Code2, title: 'Languages', items: 'Java · C# · Python · JavaScript' },
  { icon: Layers, title: 'Frontend', items: 'React · Vue.js · HTML · CSS · Bootstrap' },
  { icon: Server, title: 'Backend', items: 'ASP.NET Core · Django · Node.js · Express' },
  { icon: Database, title: 'Database & tools', items: 'SQL Server · MySQL · MongoDB · Git' }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#home" onClick={closeMenu}>abhay<span>.</span></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={22}/> : <Menu size={22}/>}
          </button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {['About', 'Skills', 'Projects', 'Contact'].map(item =>
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
            )}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot"/> AVAILABLE FOR OPPORTUNITIES</div>
            <h1>Building digital<br/>products with <em>purpose.</em></h1>
            <p className="hero-lead">Hey, I'm <strong>Abhay</strong> — a developer who enjoys turning ideas into useful, thoughtful web experiences.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button button-quiet" href="#contact">Get in touch <Mail size={16}/></a>
            </div>
            <div className="hero-meta"><span><MapPin size={15}/> Mathura, India</span><span className="meta-divider"/> <span>Currently pursuing MCA · 2025–2027</span></div>
          </div>
          <div className="hero-art" aria-label="Decorative developer illustration">
            <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
            <div className="code-card">
              <div className="window-dots"><i/><i/><i/><span>developer.js</span></div>
              <div className="code-lines">
                <p><b>const</b> developer = {'{'}</p>
                <p className="indent"><span>name</span>: <strong>'Abhay'</strong>,</p>
                <p className="indent"><span>focus</span>: <strong>'Full-stack'</strong>,</p>
                <p className="indent"><span>build</span>: [</p>
                <p className="indent2"><strong>'Ideas'</strong>, <strong>'Products'</strong></p>
                <p className="indent">]</p><p>{'}'};</p>
                <p className="code-comment">// always learning, always building</p>
              </div>
              <div className="code-footer"><span><span className="status-dot"/> Open to collaborate</span><Sparkles size={16}/></div>
            </div>
            <div className="floating-chip chip-top">{"<"} code / {">"}</div>
            <div className="floating-chip chip-bottom">✳ Curious by nature</div>
          </div>
          <a className="scroll-cue" href="#about"><span/> SCROLL TO EXPLORE</a>
        </section>

        <section className="section container about-section" id="about">
          <div className="section-kicker">01 / ABOUT ME</div>
          <div className="about-grid">
            <h2>Curiosity drives<br/>the <em>craft.</em></h2>
            <div className="about-text">
              <p>I'm an MCA student and aspiring software developer focused on building reliable, user-friendly applications. I enjoy working across the stack — from shaping a clean interface to designing APIs and working with databases.</p>
              <p>I value learning by building, solving problems step by step, and writing software that makes everyday tasks simpler.</p>
              <div className="education-line"><span className="education-mark">M</span><div><strong>Master of Computer Applications</strong><small>GLA University · 2025 – 2027</small></div></div>
            </div>
          </div>
        </section>

        <section className="section container" id="skills">
          <div className="section-kicker">02 / WHAT I WORK WITH</div>
          <div className="section-heading"><h2>Tools of the <em>trade.</em></h2><p>A growing toolkit for solving problems and bringing products to life.</p></div>
          <div className="skills-grid">
            {skills.map(({icon: Icon, title, items}, i) => <article className="skill-card" key={title}>
              <div className="skill-top"><span>0{i+1}</span><Icon size={21}/></div>
              <h3>{title}</h3><p>{items}</p>
            </article>)}
          </div>
        </section>

        <section className="section container projects-section" id="projects">
          <div className="section-kicker">03 / SELECTED WORK</div>
          <div className="section-heading projects-heading"><h2>Things I've <em>built.</em></h2><p>A selection of projects where I've explored, learned, and shipped ideas.</p></div>
          <div className="project-list">
            {projects.map(project => <article className="project-row" key={project.number}>
              <span className="project-number">{project.number}</span>
              <div className="project-main"><div className="project-type">{project.type}</div><h3>{project.name}</h3><p>{project.description}</p>
                <div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
              <a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}><ArrowUpRight size={21}/></a>
            </article>)}
          </div>
          <a className="text-link" href="https://github.com/abhay-devs" target="_blank" rel="noreferrer">More on GitHub <ExternalLink size={15}/></a>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <div className="section-kicker">04 / WHAT'S NEXT?</div>
            <h2>Have an idea?<br/><em>Let's build it.</em></h2>
            <p>I'm open to entry-level developer roles, internships, and meaningful collaborations. Have something in mind? I'd love to hear about it.</p>
            <a className="button button-primary contact-button" href="mailto:YOUR_EMAIL@example.com">Say hello <ArrowUpRight size={17}/></a>
            <div className="contact-bottom"><span>© {new Date().getFullYear()} Abhay. Built with React.</span><div className="socials">
              <a href="https://github.com/abhay-devs" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a>
              <a href="mailto:YOUR_EMAIL@example.com" aria-label="Email"><Mail size={18}/></a>
            </div></div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
