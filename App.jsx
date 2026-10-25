import React, { useEffect, useMemo, useState } from 'react';
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown, Code2, Copy, ExternalLink, Github, Globe2, Layers3, Mail, Menu, MessageCircle, MousePointer2, Rocket, Send, Smartphone, Sparkles, X, Zap } from 'lucide-react';
import { projects } from './data/projects';
import { skillGroups } from './data/skills';
import { services } from './data/services';

const EMAIL = 'siddheshdhundare1@gmail.com';
const PHONE = '8421223108';
const WA = 'https://wa.me/918421223108';
const navItems = ['About', 'Skills', 'Services', 'Projects', 'Startup', 'Contact'];

function Logo() { return <a className="brand" href="#home" aria-label="Siddhesh Dhundare home"><span className="brand-mark">S<span>D</span></span><span className="brand-name">Siddhesh<span>Dhundare</span></span></a>; }
function SectionLabel({ children, number }) { return <div className="section-label"><span>{number}</span><i />{children}</div>; }
function SectionTitle({ eyebrow, title, accent, copy }) { return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title} <span className="gradient-text">{accent}</span></h2></div>{copy && <p className="section-copy">{copy}</p>}</div>; }
function IconTile({ children, className = '' }) { return <span className={`icon-tile ${className}`}>{children}</span>; }

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
    <div className="nav-inner container"><Logo />
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        <a href="#home" onClick={() => setOpen(false)}>Home</a>
        {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}</a>)}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let's talk <ArrowUpRight size={15} /></a>
      </nav>
    </div>
  </header>;
}

function Hero() {
  return <section className="hero section-shell" id="home">
    <div className="hero-grid container">
      <div className="hero-copy">
        <div className="availability"><span className="pulse-dot" /> DIGITAL CREATOR / FOUNDER</div>
        <p className="hero-greeting">Hello, I'm <span>Siddhesh Dhundare</span></p>
        <h1>Building digital<br />experiences that<br /><span className="gradient-text">make an impact.</span></h1>
        <p className="hero-description">Developer and entrepreneur turning ideas into modern websites, mobile apps, custom software, and AI-powered digital experiences through <strong>Shravani NexTech.</strong></p>
        <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a><a className="button button-secondary" href="#contact">Let's work together <ArrowRight size={17} /></a></div>
        <div className="hero-tech"><span>WORKING WITH</span>{['React', 'Flutter', 'Kotlin', 'Firebase', 'AI'].map((t, i) => <b key={t}><i>{['◈', '◉', '▣', '✳', '✦'][i]}</i>{t}</b>)}</div>
      </div>
      <div className="hero-art" aria-label="Abstract 3D digital orb illustration">
        <div className="art-grid" />
        <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
        <div className="orb"><div className="orb-core" /><div className="orb-shine" /></div>
        <div className="orbit-node node-a"><Code2 size={19} /><span>BUILD</span></div>
        <div className="orbit-node node-b"><Sparkles size={18} /><span>IMAGINE</span></div>
        <div className="orbit-node node-c"><Layers3 size={18} /><span>CREATE</span></div>
        <div className="floating-card card-code"><span className="card-dot" /> <span>digital.solutions()</span><small>Ideas → Impact</small></div>
        <div className="floating-card card-stack"><span className="stack-icon">✳</span><div><b>Full-stack</b><small>Web · Mobile · AI</small></div></div>
        <div className="art-caption"><span>FIG. 001</span><span>IDEAS IN MOTION</span></div>
      </div>
    </div>
    <div className="hero-bottom container"><span>SCROLL TO EXPLORE</span><a href="#about" aria-label="Scroll to about section"><ArrowDown size={16} /></a><span className="hero-index">01 — 08</span></div>
  </section>;
}

function About() {
  return <section className="section-shell section-pad" id="about"><div className="container">
    <SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel>
    <SectionTitle eyebrow="BEHIND THE BUILD" title="More than code." accent="I build solutions." copy="I combine technology, creativity, and problem-solving to turn early ideas into useful digital experiences." />
    <div className="about-grid">
      <div className="about-visual">
        <div className="about-frame"><div className="about-orbit a1"/><div className="about-orbit a2"/><div className="about-monogram">S<span>D</span></div><div className="about-cross cross-one"/><div className="about-cross cross-two"/><span className="frame-corner top-left"/><span className="frame-corner bottom-right"/></div>
        <div className="visual-note"><span className="note-line"/> <span>CURIOUS BY NATURE<br/><b>BUILDER BY CHOICE</b></span></div>
      </div>
      <div className="about-content"><h3>Making technology feel <span className="gradient-text">human.</span></h3>
        <p>I'm Siddhesh Dhundare, a passionate developer, technology enthusiast, and entrepreneur. I enjoy transforming ideas into practical digital products through modern web technologies, mobile applications, software development, and AI-powered solutions.</p>
        <p>As the founder of <strong>Shravani NexTech</strong>, I focus on developing innovative digital experiences that help businesses and individuals establish and strengthen their digital presence.</p>
        <p>My interests include frontend development, backend integration, mobile application development, database management, cloud technologies, UI/UX design, and digital marketing.</p>
        <div className="trait-grid"><div><Code2/><b>Developer</b><span>Thoughtful, maintainable builds</span></div><div><Zap/><b>Problem solver</b><span>Ideas shaped into solutions</span></div><div><Rocket/><b>Entrepreneur</b><span>Building with a bigger picture</span></div></div>
        <a className="text-link" href="#contact">Have a project in mind? <ArrowUpRight size={16}/></a>
      </div>
    </div>
  </div></section>;
}

function Skills() {
  return <section className="section-shell section-pad section-tint" id="skills"><div className="container">
    <SectionLabel number="02">TOOLS OF THE TRADE</SectionLabel>
    <SectionTitle eyebrow="MY TECH STACK" title="The right tools for" accent="the right idea." copy="A growing toolkit across web, mobile, backend systems, and emerging digital experiences." />
    <div className="skills-grid">{skillGroups.map((group, idx) => <article className="skill-card" key={group.title}><div className="skill-card-top"><IconTile>{group.icon}</IconTile><span className="micro-index">0{idx + 1}</span></div><h3>{group.title}</h3><div className="skill-pills">{group.items.map(item => <span key={item}>{item}</span>)}</div><div className="skill-card-foot"><span>CAPABILITY AREA</span><ArrowUpRight size={15}/></div></article>)}</div>
  </div></section>;
}

function Services() {
  return <section className="section-shell section-pad" id="services"><div className="container">
    <SectionLabel number="03">WHAT I CAN BUILD</SectionLabel>
    <SectionTitle eyebrow="SHRAVANI NEXTECH" title="Digital services," accent="built around you." copy="From the first concept to a thoughtful digital product, each project starts with understanding what you need." />
    <div className="services-grid">{services.map((s, i) => <article className="service-card" key={s.title}><div className="service-top"><IconTile>{s.icon}</IconTile><span>0{i + 1}</span></div><h3>{s.title}</h3><p>{s.text}</p><ul>{s.items.map(it => <li key={it}><Check size={14}/>{it}</li>)}</ul><a href="#contact" aria-label={`Discuss ${s.title}`} className="service-link">Discuss your project <ArrowUpRight size={16}/></a></article>)}</div>
  </div></section>;
}

function ProjectVisual({ project }) {
  return <div className={`project-visual visual-${project.tone}`}><div className="visual-topbar"><span/><span/><span/><small>PROJECT / {project.mark}</small></div><div className="visual-content"><div className="visual-label">CONCEPT / INTERFACE</div><div className="visual-big-mark">{project.mark}</div><div className="mock-window"><div className="mock-line long"/><div className="mock-line medium"/><div className="mock-cards"><span/><span/><span/></div><div className="mock-line short"/></div></div><span className="visual-watermark">{project.category.toUpperCase()}</span></div>;
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const handle = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handle);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', handle); document.body.style.overflow = ''; };
  }, [project, onClose]);
  if (!project) return null;
  return <div className="modal-backdrop" role="presentation" onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}><section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" onClick={onClose} aria-label="Close project details"><X/></button><ProjectVisual project={project}/><div className="modal-body"><p className="eyebrow">PROJECT / {project.mark} · {project.category.toUpperCase()}</p><h2 id="modal-title">{project.title}</h2><p>{project.description}</p><div className="modal-detail-grid"><div><h3>Problem space</h3><p>{project.problem}</p></div><div><h3>Solution direction</h3><p>{project.solution}</p></div></div><h3 className="feature-heading">Concept focus</h3><ul className="feature-list">{project.features.map(f => <li key={f}><Check size={15}/>{f}</li>)}</ul><p className="modal-note">Project descriptions are editable portfolio drafts. Add verified screenshots, technologies, demo URLs, and repository links when available.</p><button className="button button-primary" onClick={onClose}>Back to projects <ArrowRight size={16}/></button></div></section></div>;
}

function Projects() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const filters = ['All', 'Web', 'Mobile', 'Software'];
  const visible = useMemo(() => projects.filter(p => filter === 'All' || p.category === filter), [filter]);
  return <section className="section-shell section-pad section-tint" id="projects"><div className="container">
    <SectionLabel number="04">SELECTED CONCEPTS</SectionLabel>
    <SectionTitle eyebrow="THE WORK" title="Projects that turn ideas" accent="into reality." copy="A selection of project concepts and digital products. Details can be expanded as verified demos and project assets become available." />
    <div className="project-toolbar"><span className="project-count"><b>{String(visible.length).padStart(2, '0')}</b> PROJECTS SHOWN</span><div className="filter-list" role="group" aria-label="Filter projects">{filters.map(f => <button key={f} className={filter === f ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter(f)}>{f}</button>)}</div></div>
    <div className="projects-grid">{visible.map(p => <article className="project-card" key={p.id}><button className="project-image-button" onClick={() => setSelected(p)} aria-label={`View details for ${p.title}`}><ProjectVisual project={p}/><span className="project-open"><ArrowUpRight size={18}/></span></button><div className="project-info"><div className="project-meta"><span>{p.category}</span><span>{p.type}</span></div><h3>{p.title}</h3><p>{p.description}</p><div className="project-card-bottom"><div className="tag-list">{p.tags.map(t => <span key={t}>{t}</span>)}</div><button className="details-link" onClick={() => setSelected(p)}>View details <ArrowUpRight size={15}/></button></div></div></article>)}</div>
    <div className="project-disclaimer"><Sparkles size={17}/><p>Visuals are illustrative interface concepts, not screenshots of deployed products. No live demos or repositories are linked until real URLs are added.</p></div>
  </div><ProjectModal project={selected} onClose={() => setSelected(null)}/></section>;
}

function Startup() {
  return <section className="section-shell section-pad" id="startup"><div className="container">
    <div className="startup-panel"><div className="startup-glow"/><div className="startup-content"><SectionLabel number="05">THE BIGGER PICTURE</SectionLabel><p className="eyebrow">MEET THE STUDIO</p><h2>Good ideas deserve<br/> <span className="gradient-text">great technology.</span></h2><p className="startup-description"><strong>Shravani NexTech</strong> delivers modern digital solutions that help businesses innovate, grow, and succeed in an increasingly connected world.</p><p className="startup-mission"><span>OUR MISSION</span>To transform ideas into meaningful digital solutions through innovation, thoughtful design, and reliable technology.</p><div className="startup-actions"><a href="#services" className="button button-primary">Explore services <ArrowUpRight size={16}/></a><a href="#contact" className="button button-secondary">Contact Shravani NexTech <ArrowRight size={16}/></a></div></div><div className="startup-art"><div className="startup-ring ring-a"/><div className="startup-ring ring-b"/><div className="startup-ring ring-c"/><div className="startup-cube"><span/><span/><span/></div><div className="startup-chip chip-a"><Globe2 size={16}/> DIGITAL</div><div className="startup-chip chip-b"><Zap size={16}/> INNOVATION</div><div className="startup-art-label">S / N<br/><span>TECH WITH PURPOSE</span></div></div></div>
  </div></section>;
}

function Process() {
  const steps = [{n:'01',title:'Discover',text:"Understand your needs, goals, and the challenge we're solving."},{n:'02',title:'Plan',text:'Define scope, features, design direction, and technical approach.'},{n:'03',title:'Develop',text:'Build, test, and refine the solution with care.'},{n:'04',title:'Deliver',text:'Prepare the product for handoff or deployment with documentation where applicable.'}];
  return <section className="section-shell section-pad section-tint" id="process"><div className="container"><SectionLabel number="06">FROM IDEA TO LAUNCH</SectionLabel><SectionTitle eyebrow="HOW I WORK" title="A clear path from" accent="concept to creation."/><div className="process-grid">{steps.map((s,i)=><article className="process-step" key={s.n}><div className="process-num">{s.n}<span>{i===0?<MousePointer2/>:i===1?<Layers3/>:i===2?<Code2/>:<Rocket/>}</span></div><h3>{s.title}</h3><p>{s.text}</p>{i<3&&<ArrowRight className="process-arrow" size={18}/>}</article>)}</div></div></section>;
}

function Contact() {
  const [form, setForm] = useState({name:'', email:'', subject:'', message:''});
  const [notice, setNotice] = useState('');
  const [noticeType, setNoticeType] = useState('success');
  const [copied, setCopied] = useState('');
  const update = e => setForm({...form, [e.target.name]:e.target.value});
  const copyValue = async (value, label) => {
    try { await navigator.clipboard.writeText(value); setCopied(label); setTimeout(() => setCopied(''), 1800); }
    catch { setNoticeType('error'); setNotice(`Clipboard access was blocked. Please copy ${label.toLowerCase()} manually.`); }
  };
  const submit = e => {
    e.preventDefault();
    if (!form.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || !form.subject.trim() || form.message.trim().length < 10) {
      setNoticeType('error'); setNotice('Please complete every field and enter a valid email. Message should be at least 10 characters.'); return;
    }
    const body = `Hi Siddhesh,\n\n${form.message}\n\nFrom: ${form.name}\nReply email: ${form.email}`;
    setNoticeType('success'); setNotice('Your email draft is ready. Review it in your mail app and send when ready.');
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
  };
  return <section className="section-shell section-pad contact-section" id="contact"><div className="container"><SectionLabel number="07">LET'S CONNECT</SectionLabel><SectionTitle eyebrow="START A CONVERSATION" title="Have an idea?" accent="Let's build it together." copy="Tell me about your project, business, or idea. Let's explore how technology can help bring it to life."/>
    <div className="contact-grid"><div className="contact-info"><h3>Let's make something<br/><span className="gradient-text">meaningful.</span></h3><p>Whether you're planning a website, mobile app, custom software, or an AI-powered experience, I'd love to hear what you're thinking about.</p>
      <a className="contact-method" href={`mailto:${EMAIL}`}><IconTile><Mail/></IconTile><span><small>EMAIL ME</small><b>{EMAIL}</b></span><ArrowUpRight/></a>
      <a className="contact-method" href={`tel:+91${PHONE}`}><IconTile><Smartphone/></IconTile><span><small>CALL ME</small><b>+91 {PHONE}</b></span><ArrowUpRight/></a>
      <a className="contact-method" href={WA} target="_blank" rel="noreferrer"><IconTile><MessageCircle/></IconTile><span><small>WHATSAPP</small><b>Start a conversation</b></span><ArrowUpRight/></a>
      <div className="copy-actions"><button onClick={() => copyValue(EMAIL, 'Email')}><Copy size={14}/>{copied === 'Email' ? 'Email copied' : 'Copy email'}</button><button onClick={() => copyValue(PHONE, 'Phone')}><Copy size={14}/>{copied === 'Phone' ? 'Phone copied' : 'Copy phone'}</button></div>
    </div>
    <form className="contact-form" onSubmit={submit} noValidate><div className="form-heading"><span>PROJECT INQUIRY</span><span className="form-status"><i/> OPEN TO IDEAS</span></div><h3>Tell me what you're imagining.</h3><div className="form-row"><label>Your name<input name="name" value={form.name} onChange={update} placeholder="Jane Smith" autoComplete="name" required/></label><label>Your email<input name="email" value={form.email} onChange={update} type="email" placeholder="jane@company.com" autoComplete="email" required/></label></div><label>Subject<input name="subject" value={form.subject} onChange={update} placeholder="What can we build?" required/></label><label>Project details<textarea name="message" value={form.message} onChange={update} placeholder="A little about your idea, goals, and timeline..." rows="5" required/></label><button className="button button-primary submit-button" type="submit">Prepare email <Send size={16}/></button>{notice && <p className={`form-notice ${noticeType}`} role="status">{notice}</p>}<p className="form-footnote">This form opens your email app. It does not send or store messages on this website.</p></form>
    </div>
  </div></section>;
}

function Footer() {
  const [year] = useState(new Date().getFullYear());
  return <footer className="footer"><div className="container"><div className="footer-top"><div><Logo/><p>Turning ideas into innovative digital solutions.</p></div><a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={15}/></a></div><div className="footer-bottom"><span>© {year} Siddhesh Dhundare · Founder of Shravani NexTech</span><span>Designed with creativity. Built with technology.</span><span className="footer-status"><i/> BUILT FOR WHAT'S NEXT</span></div></div></footer>;
}

export default function App() {
  useEffect(() => {
    const reveal = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); reveal.unobserve(entry.target); } }), { threshold: 0.12 });
    document.querySelectorAll('.section-label, .section-heading, .about-grid, .skill-card, .service-card, .project-card, .process-step, .startup-panel, .contact-grid').forEach(el => { el.classList.add('reveal'); reveal.observe(el); });
    return () => reveal.disconnect();
  }, []);
  return <><Navbar/><main><Hero/><About/><Skills/><Services/><Projects/><Startup/><Process/><Contact/></main><Footer/></>;
}
