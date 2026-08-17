'use strict';

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const coarsePointer = window.matchMedia('(pointer: coarse)').matches;

const experience = [
  {
    period: 'August 2024 — Present',
    role: 'Research & Assistant Consultant / Data Analyst',
    company: 'Enreal Limited',
    summary: 'Work across data analytics, business intelligence, business and market research, strategic analysis, performance monitoring, reporting, presentations and visual communication. The role connects quantitative work with the business context decision-makers need around the numbers.',
    highlights: ['Power BI & KPI reporting', 'Business & market research', 'Strategic analysis', 'Performance monitoring', 'Business reporting', 'Visual communication'],
    note: 'Progressed from Data Analyst Intern into a broader analytics, research and consulting role.'
  },
  {
    period: 'February 2024 — August 2024',
    role: 'Data Analyst Intern',
    company: 'Enreal Limited',
    summary: 'Built practical foundations in data preparation, analysis, business information, research, reporting and consulting support while learning how analytical work fits into broader client and business questions.',
    highlights: ['Data preparation', 'Business information', 'Research support', 'Reporting', 'Analytical problem-solving'],
    note: 'The internship led directly into the Research & Assistant Consultant / Data Analyst position.'
  },
  {
    period: 'Earlier Experience',
    role: 'Data Entry Officer & Life Skills Trainer',
    company: 'AVSI–AESA',
    summary: 'Worked with structured information, data accuracy, documentation, verification, training, facilitation and participant support — an early foundation in reliable data collection and information quality.',
    highlights: ['Data quality', 'Information management', 'Data verification', 'Documentation', 'Training & facilitation'],
    note: 'Strengthened accuracy, communication and the practical understanding that good analysis starts with reliable information.'
  },
  {
    period: 'June 2023 — February 2024',
    role: 'Cyber Attendant',
    company: 'Digital Services & Client Support',
    summary: 'Supported clients with digital services, document processing, data handling, scanning, printing and practical technology troubleshooting while managing multiple information requests accurately.',
    highlights: ['Digital services', 'Data handling', 'Document processing', 'Client communication', 'Digital literacy'],
    note: 'Built practical confidence working with digital information, structured documents and fast-turnaround service requests.'
  }
];

const skillSets = {
  data: {
    title: 'Data Analytics & Business Intelligence',
    description: 'Practical tools and analytical methods for transforming operational information into structured reporting, KPIs, dashboards and interpretable business signals.',
    items: ['Power BI', 'Microsoft Excel', 'Power Query', 'DAX', 'Google Sheets', 'Dashboard Development', 'KPI Analysis', 'Performance Monitoring', 'Data Visualization', 'Data Cleaning', 'Data Validation', 'Trend Analysis', 'Comparative Analysis']
  },
  research: {
    title: 'Research & Market Analysis',
    description: 'Structured investigation of companies, sectors, markets and opportunities — moving beyond information gathering to interpretation and business relevance.',
    items: ['Market Research', 'Business Research', 'Industry Research', 'Company Research', 'Competitor Research', 'Sector Research', 'Strategic Research', 'Market Analysis', 'Agribusiness Research', 'Investment Research']
  },
  strategy: {
    title: 'Strategic Analysis',
    description: 'Connecting research and analytical findings to options, scenarios, implications, opportunity assessment and the decisions stakeholders need to make.',
    items: ['Scenario Analysis', 'Opportunity Analysis', 'Strategic Options', 'Decision Support', 'Business Performance', 'Strategic Recommendations', 'Market Opportunity Analysis', 'Performance Monitoring']
  },
  communication: {
    title: 'Communication & Data Storytelling',
    description: 'Turning complex information into clear reports, presentations and visual narratives designed for professional and executive audiences.',
    items: ['Data Storytelling', 'Report Writing', 'Executive Presentations', 'Research Communication', 'Presentation Design', 'Visual Communication', 'Professional Writing', 'Graphic Design', 'Infographic Development']
  },
  workflow: {
    title: 'Data Workflows & Information Management',
    description: 'Transferable workflow skills that strengthen analytics: collecting information consistently, maintaining clean records, organizing evidence and moving data from source systems into usable reporting structures.',
    items: ['Information Management', 'Data Collection Workflows', 'Google Workspace', 'JotForm', 'Google Forms', 'Structured Documentation', 'Record Organization', 'Data Quality Control', 'Research Briefing', 'Stakeholder Communication', 'Operational Data Handling']
  },
  developing: {
    title: 'Developing Technical Capabilities',
    description: 'Tools I am actively strengthening alongside my professional analytics toolkit. They are presented here deliberately without overstating proficiency.',
    items: ['Python', 'Statistical Programming', 'SPSS', 'JotForm', 'Google Forms', 'Quantitative Modelling Concepts']
  }
};

const projectData = {
  'livestock-intelligence': {
    number: '01', category: 'Data & BI', title: 'Livestock Transaction Intelligence',
    subtitle: 'Turning live livestock transaction information into a structured analytical workflow for performance monitoring and decision support.',
    tools: ['Power BI', 'Excel', 'Google Sheets', 'Power Query', 'DAX'],
    context: 'The work involved operational livestock transaction information across goats and sheep, with analytical dimensions including purchase quantities, prices, weight, age, companies, registration dates and transaction activity.',
    challenge: 'Live operational data can be valuable but difficult to interpret when it arrives in continuously updated spreadsheets and is not organized around management questions. The challenge was to preserve the source while creating a clean analytical layer for repeatable reporting.',
    approach: ['Separated source data from the transformation and analytical layer.', 'Applied Power Query concepts for cleaning, filtering and structuring the data.', 'Developed KPI and measure logic to support comparative and performance analysis.', 'Organized dashboard thinking around business questions instead of simply visualizing every available field.', 'Considered how a repeatable workflow could accommodate continuously updated information.'],
    value: ['A clearer view of transaction patterns and livestock characteristics.', 'A foundation for KPI monitoring and management reporting.', 'A reusable source → transformation → analysis → visualization workflow.', 'A practical example of connecting operational data to business intelligence.']
  },
  'kajiado-research': {
    number: '02', category: 'Research', title: 'Kajiado Livestock Value Chain Research',
    subtitle: 'Researching innovations in Kajiado’s livestock sector and their implications for sustainable agriculture and market-led transformation.',
    tools: ['Research', 'Market Analysis', 'Agribusiness', 'Strategy'],
    context: 'The research sits at the intersection of pastoralism, livestock value chains, goat production, farmer services, off-taker models, productivity, markets and sustainable agriculture.',
    challenge: 'Livestock systems are influenced by more than production alone. The research needed to connect commercial models, market access, farmer services, productivity and sustainability into a coherent view of how sector transformation can happen.',
    approach: ['Investigated pastoralism, goat value chains, livestock markets and off-taker-led models.', 'Mapped relationships between farmer services, market access and productivity.', 'Synthesized sector and business information into structured analytical themes.', 'Connected findings to broader strategic questions around agricultural transformation and sustainability.'],
    value: ['A structured view of how market-led innovation can shape livestock value chains.', 'Clearer links between commercial models, producer outcomes and market development.', 'A strong example of combining research, sector knowledge, markets and strategic interpretation.']
  },
  'strategic-business-research': {
    number: '03', category: 'Strategy', title: 'Strategic Business Research',
    subtitle: 'Moving from market information and company research to strategic options, scenarios and decision-oriented recommendations.',
    tools: ['Business Research', 'Market Analysis', 'Scenario Planning', 'Strategy'],
    context: 'Professional research assignments have covered business opportunities, companies, industries, market conditions, business models, strategic options, investment considerations and sector trends.',
    challenge: 'The risk in research is producing a large collection of facts without helping the reader decide what matters. The analytical task is to filter evidence through the specific question the organization is trying to answer.',
    approach: ['Defined the business question before beginning the research.', 'Compared market conditions, companies, industries and competitive information.', 'Combined quantitative and qualitative evidence into structured findings.', 'Developed implications, scenarios and strategic options from the evidence.', 'Presented findings in concise professional formats for discussion and decision support.'],
    value: ['Research that is organized around decisions rather than information volume.', 'Clearer strategic context for business conversations and presentation development.', 'A repeatable path from question → research → interpretation → recommendation.']
  },
  'executive-presentations': {
    number: '04', category: 'Communication', title: 'Executive Business Presentations',
    subtitle: 'Research, strategy and visual storytelling designed for senior management and professional audiences.',
    tools: ['Research', 'Strategy', 'PowerPoint', 'Data Storytelling'],
    context: 'Presentation work has included strategic options for doing business in Africa, innovation leadership, strategy, quality assurance and organizational performance for audiences including senior management, multinational executives and university professionals.',
    challenge: 'Executive audiences need substance quickly. Complex research and strategic ideas must be simplified without becoming simplistic, and every slide needs a clear role in the narrative.',
    approach: ['Synthesized research into clear executive-level narratives.', 'Built presentation structures around key questions, implications and takeaways.', 'Applied hierarchy, layout and visual storytelling to improve comprehension.', 'Focused on decision relevance rather than information density.'],
    value: ['Decision-ready narratives for professional and senior audiences.', 'A stronger connection between research content, strategic messaging and visual communication.', 'Demonstrated ability to turn complex subject matter into a structured learning or decision experience.']
  },
  'visual-communication': {
    number: '05', category: 'Communication', title: 'Visual Communication & Graphic Design',
    subtitle: 'Using visual hierarchy and design to make business information easier to understand, navigate and remember.',
    tools: ['Graphic Design', 'Presentation Design', 'Visual Storytelling'],
    context: 'Alongside analytics and consulting work at Enreal Limited, I contribute to professional visual communication, including presentation assets, corporate graphics, visual reports and business communication materials.',
    challenge: 'Good information can lose impact when layout, hierarchy or visual consistency makes it difficult to scan. The design task is to improve understanding without allowing decoration to compete with the message.',
    approach: ['Applied visual hierarchy to research, business and presentation content.', 'Created professional graphics and communication materials.', 'Connected analytical content with visual storytelling principles.', 'Designed for clarity, audience and business context.'],
    value: ['More coherent communication across analytical and non-analytical materials.', 'A practical bridge between information, visualization and audience understanding.', 'A differentiator that strengthens presentation and data storytelling work.']
  },
  'writing-storytelling': {
    number: '06', category: 'Writing', title: 'Writing & Storytelling',
    subtitle: 'A sustained creative practice that strengthens narrative judgment, clarity and the ability to communicate complex ideas.',
    tools: ['Writing', 'Storytelling', 'Communication'],
    context: 'Since 2020, I have maintained an active writing practice under Andanje Jamie Poet, publishing more than 100 pieces across poetry, short stories, creative narratives, memoir-style writing and psychological fiction.',
    challenge: 'Professional communication is not only about being technically correct. Structure, pacing, language and audience determine whether an idea is understood and remembered.',
    approach: ['Built a consistent long-term writing practice across multiple forms.', 'Developed narrative structure, clarity and sensitivity to audience.', 'Applied storytelling instincts to reports, presentations and analytical communication.'],
    value: ['A distinctive communication strength alongside quantitative analysis.', 'Greater attention to narrative, audience and clarity in professional work.', 'A natural foundation for data storytelling and executive communication.']
  },
  'information-workflow': {
    number: '07', category: 'Digital Workflow', title: 'Information Management Workflow',
    subtitle: 'Connecting digital data capture, structured storage, transformation and reporting into a practical information flow.',
    tools: ['JotForm', 'Google Workspace', 'Information Management', 'Reporting'],
    context: 'Professional work has included designing and supporting digital information flows using online forms, cloud storage, structured records, data processing and reporting so information can move more reliably from collection to use.',
    challenge: 'Information is often collected in one tool, stored in another and reported somewhere else. Without a deliberate workflow, teams can lose consistency, traceability and time when moving information between those stages.',
    approach: ['Structured the flow from digital data capture to storage and downstream use.', 'Considered source integrity and the separation between raw information and transformed analytical data.', 'Organized files and records for easier retrieval and reporting.', 'Connected forms, Google Workspace and data-processing steps into a clearer operating workflow.'],
    value: ['A practical example of thinking across the full data lifecycle.', 'Better organization and accessibility of operational information.', 'Transferable workflow thinking across analytics, research and business-information environments.']
  }
};

const processData = [
  { label: '01 / Business Question', title: 'Start with the decision, not the dashboard.', text: 'I define the business question first so the analysis is designed around the information someone actually needs to understand or act upon.' },
  { label: '02 / Data + Research', title: 'Build the evidence base.', text: 'I identify the relevant data, research and contextual information, then assess quality, gaps and the transformations required before analysis.' },
  { label: '03 / Analysis', title: 'Look for patterns that answer the question.', text: 'I clean, structure, compare and analyze the evidence using appropriate metrics, trends and visual exploration rather than treating analysis as a checklist of techniques.' },
  { label: '04 / Insight', title: 'Explain what the pattern means.', text: 'The result is not just a number or chart. I connect the pattern to its likely drivers, business relevance, risks, opportunities and areas that deserve attention.' },
  { label: '05 / Decision Support', title: 'Make the next conversation clearer.', text: 'I package the work into dashboards, reports, recommendations or presentations that help stakeholders understand the situation and consider the next action.' }
];

function renderExperience(index = 0) {
  const item = experience[index];
  const target = $('#experienceDetail');
  target.innerHTML = `
    <span class="exp-period">${item.period}</span>
    <h3>${item.role}</h3>
    <h4>${item.company}</h4>
    <p>${item.summary}</p>
    <div class="exp-highlights">${item.highlights.map(h => `<span>${h}</span>`).join('')}</div>
    <div class="exp-note"><i></i>${item.note}</div>`;
}

function renderSkills(key = 'data') {
  const item = skillSets[key];
  $('#skillsContent').innerHTML = `<h3>${item.title}</h3><p>${item.description}</p><div class="skill-cloud">${item.items.map(skill => `<span>${skill}</span>`).join('')}</div>`;
}

function updateProcess(index) {
  const item = processData[index];
  const detail = $('#processDetail');
  detail.animate?.([{opacity:.3, transform:'translateY(4px)'},{opacity:1, transform:'translateY(0)'}], {duration:280, easing:'ease-out'});
  detail.innerHTML = `<span>${item.label}</span><h3>${item.title}</h3><p>${item.text}</p>`;
}

function openProject(id) {
  const item = projectData[id];
  if (!item) return;
  const drawer = $('#projectDrawer');
  const content = $('#drawerContent');
  $('#drawerEyebrow').textContent = `${item.number} / ${item.category} case study`;
  content.innerHTML = `
    <span class="eyebrow">Selected work</span>
    <h2 id="drawerTitle">${item.title}</h2>
    <p class="drawer-subtitle">${item.subtitle}</p>
    <div class="drawer-tags">${item.tools.map(t => `<span>${t}</span>`).join('')}</div>
    <section class="drawer-section"><span>Context</span><h3>What the work covers</h3><p>${item.context}</p></section>
    <section class="drawer-section"><span>Challenge</span><h3>The analytical question</h3><p>${item.challenge}</p></section>
    <section class="drawer-section"><span>Approach</span><h3>How I approached it</h3><ul class="drawer-list">${item.approach.map(x => `<li>${x}</li>`).join('')}</ul></section>
    <section class="drawer-section"><span>Business value</span><h3>What the work demonstrates</h3><ul class="drawer-list">${item.value.map(x => `<li>${x}</li>`).join('')}</ul></section>
    <div class="drawer-note">Portfolio note: project descriptions are representative and intentionally exclude confidential client information, proprietary data and sensitive commercial details.</div>`;
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('drawer-open');
  $('#drawerClose').focus();
}

function closeProject() {
  const drawer = $('#projectDrawer');
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('drawer-open');
}

function setupReveal() {
  const items = $$('.reveal');
  items.forEach(el => el.style.setProperty('--delay', `${Number(el.dataset.delay || 0)}ms`));
  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: .14, rootMargin: '0px 0px -30px 0px'});
  items.forEach(el => observer.observe(el));
}

function setupCounters() {
  const counters = $$('[data-count]');
  const animate = el => {
    if (el.dataset.counted) return;
    el.dataset.counted = 'true';
    const end = Number(el.dataset.count);
    const decimals = Number(el.dataset.decimals || 0);
    const suffix = el.dataset.suffix || '';
    if (reduceMotion) { el.textContent = end.toFixed(decimals) + suffix; return; }
    const duration = 1100;
    const start = performance.now();
    const tick = now => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (end * eased).toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && (animate(e.target), observer.unobserve(e.target))), {threshold:.5});
  counters.forEach(el => observer.observe(el));
}

function setupNavigation() {
  const header = $('#siteHeader');
  const progress = $('#scrollProgress');
  let lastY = window.scrollY;
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 24);
    if (y > 420 && y > lastY + 8) header.classList.add('hidden');
    if (y < lastY - 8) header.classList.remove('hidden');
    lastY = y;
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
  };
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  const sections = $$('[data-section]');
  const navLinks = $$('.desktop-nav a');
  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`));
    });
  }, {rootMargin:'-35% 0px -55% 0px', threshold:0});
  sections.forEach(section => spy.observe(section));
}

function setupMobileMenu() {
  const toggle = $('#menuToggle');
  const menu = $('#mobileMenu');
  const close = () => {
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded','false');
    toggle.setAttribute('aria-label','Open menu');
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden','true');
    document.body.classList.remove('menu-open');
  };
  toggle.addEventListener('click', () => {
    const open = !menu.classList.contains('open');
    toggle.classList.toggle('active', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.classList.toggle('open', open);
    menu.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('menu-open', open);
  });
  $$('#mobileMenu a').forEach(a => a.addEventListener('click', close));
  window.addEventListener('resize', () => innerWidth > 1050 && close());
}

function setupProjects() {
  const cards = $$('.project-card');
  const count = $('#projectCount');
  $$('.filter-button').forEach(button => button.addEventListener('click', () => {
    $$('.filter-button').forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    let visible = 0;
    cards.forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('filtered-out', !show);
      if (show) visible++;
    });
    count.textContent = `${visible} project${visible === 1 ? '' : 's'}`;
  }));
  cards.forEach(card => {
    card.addEventListener('click', () => openProject(card.dataset.project));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProject(card.dataset.project); }
    });
  });
  $('#drawerClose').addEventListener('click', closeProject);
  $('[data-close-drawer]').addEventListener('click', closeProject);
}

function setupTabs() {
  renderExperience();
  $$('.experience-tab').forEach(tab => tab.addEventListener('click', () => {
    $$('.experience-tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
    tab.classList.add('active'); tab.setAttribute('aria-selected','true'); renderExperience(Number(tab.dataset.exp));
  }));
  renderSkills();
  $$('.skill-tab').forEach(tab => tab.addEventListener('click', () => {
    $$('.skill-tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
    tab.classList.add('active'); tab.setAttribute('aria-selected','true'); renderSkills(tab.dataset.skill);
  }));
  $$('.process-step').forEach(step => step.addEventListener('click', () => {
    $$('.process-step').forEach(s => s.classList.remove('active'));
    step.classList.add('active'); updateProcess(Number(step.dataset.process));
  }));
}

function setupInteractivePolish() {
  if (!coarsePointer && !reduceMotion) {
    const glow = $('#cursorGlow');
    window.addEventListener('pointermove', e => {
      glow.style.left = `${e.clientX}px`; glow.style.top = `${e.clientY}px`; glow.style.opacity = '1';
    }, {passive:true});
    window.addEventListener('mouseout', () => glow.style.opacity = '0');

    $$('.tilt-card, #analyticsPanel').forEach(card => {
      card.addEventListener('pointermove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5;
        const y = (e.clientY - r.top) / r.height - .5;
        card.style.transform = `perspective(900px) rotateX(${y * -4}deg) rotateY(${x * 5}deg) translateZ(0)`;
      });
      card.addEventListener('pointerleave', () => card.style.transform = '');
    });

    $$('.magnetic').forEach(button => {
      button.addEventListener('pointermove', e => {
        const r = button.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        button.style.transform = `translate(${x * .06}px, ${y * .10}px)`;
      });
      button.addEventListener('pointerleave', () => button.style.transform = '');
    });
  }

  const analytics = $('#analyticsPanel');
  const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && analytics.classList.add('in-view')), {threshold:.35});
  observer.observe(analytics);
}

function setupUtilities() {
  $('#printProfile').addEventListener('click', () => window.print());
  $('#copyEmail').addEventListener('click', async e => {
    const email = e.currentTarget.dataset.copy;
    try {
      await navigator.clipboard.writeText(email);
      showToast('Email copied to clipboard');
    } catch {
      window.location.href = `mailto:${email}`;
    }
  });
  $('#currentYear').textContent = new Date().getFullYear();
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeProject();
      if ($('#mobileMenu').classList.contains('open')) $('#menuToggle').click();
    }
  });
}


function setupContactForm() {
  const form = $('#contactForm');
  if (!form) return;

  const submitButton = $('.form-submit', form);
  const submitLabel = $('span', submitButton);
  const feedback = $('#formFeedback');
  const defaultLabel = submitLabel.textContent;
  const configuredEndpoint = String(window.PORTFOLIO_CONTACT?.googleAppsScriptUrl || '').trim();
  const hasGoogleEndpoint = /^https:\/\/script\.google\.com\/macros\/s\/.+\/exec(?:\?.*)?$/.test(configuredEndpoint);

  const setFeedback = (type, message) => {
    feedback.className = `form-feedback is-visible is-${type}`;
    feedback.textContent = message;
  };

  const encodeForm = formData => new URLSearchParams([...formData.entries()]).toString();

  form.addEventListener('submit', async event => {
    event.preventDefault();

    feedback.className = 'form-feedback';
    feedback.textContent = '';

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    submitButton.disabled = true;
    submitLabel.textContent = 'Sending…';

    try {
      const formData = new FormData(form);
      formData.set('form-name', form.getAttribute('name'));

      if (hasGoogleEndpoint) {
        // Apps Script web apps are cross-origin. no-cors keeps the static portfolio
        // deployment simple while Google stores the row and sends the email alert.
        await fetch(configuredEndpoint, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encodeForm(formData)
        });
      } else {
        // Safe fallback while the Google endpoint has not yet been pasted into
        // contact-config.js. Netlify Forms can still receive the submission.
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encodeForm(formData)
        });
        if (!response.ok) throw new Error(`Submission failed with status ${response.status}`);
      }

      form.reset();
      const successMessage = hasGoogleEndpoint
        ? 'Message sent successfully. Your enquiry has been recorded and I have been notified by email.'
        : 'Message sent successfully. Google Sheets is not connected yet, so this submission used the Netlify backup.';
      setFeedback('success', successMessage);
      showToast('Message sent successfully');
    } catch (error) {
      console.error('Portfolio form submission error:', error);
      setFeedback('error', 'The message could not be sent right now. Please email me directly at okelloandanje@gmail.com.');
    } finally {
      submitButton.disabled = false;
      submitLabel.textContent = defaultLabel;
    }
  });
}

let toastTimer;
function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

setupReveal();
setupCounters();
setupNavigation();
setupMobileMenu();
setupProjects();
setupTabs();
setupInteractivePolish();
setupUtilities();
setupContactForm();
