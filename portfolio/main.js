(function(){
  'use strict';
  const toggle=document.getElementById('language-toggle');
  const menu=document.getElementById('menu-toggle');
  const nav=document.getElementById('main-nav');
  const year=document.getElementById('year');
  if(year) year.textContent=String(new Date().getFullYear());
  if(menu&&nav){
    const close=()=>{menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label',lang==='es'?'Abrir menú':'Open menu');nav.classList.remove('is-open');document.body.classList.remove('menu-open');};
    menu.addEventListener('click',()=>{const isOpen=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!isOpen));menu.setAttribute('aria-label',isOpen?(lang==='es'?'Abrir menú':'Open menu'):(lang==='es'?'Cerrar menú':'Close menu'));nav.classList.toggle('is-open',!isOpen);document.body.classList.toggle('menu-open',!isOpen);});
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
    document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
  }
  const en={
    navAbout:'About',navProjects:'Projects',navExperience:'Experience',navSkills:'Stack',navContact:'Contact',navResume:'Résumé ↗',
    heroAvailability:'Open to opportunities and collaborations',heroRole:'Full-Stack Developer / Enterprise Technology',
    heroTitle:'I build software<br>with <em>purpose.</em>',
    heroDesc:'I’m Luis José Deluquez Sánchez. I design, build and integrate digital solutions that bridge real-world challenges and reliable, scalable technology.',
    viewProjects:'Explore projects',viewResume:'View résumé',basedIn:'BASED IN BARRANQUILLA, COLOMBIA',
    focusArea:'FOCUS',sectionAbout:'/ ABOUT ME',aboutTitle:'More than writing code:<br><em>solving problems.</em>',
    aboutLead:'I’m a full-stack developer with 2+ years of experience in enterprise applications, service integrations, and production system support.',
    aboutText:'At Expreso Brasilia, I work as a Technology Administrator, responsible for technology requirements across Cargo and Courier Services. I also contribute to electronic invoicing and payroll initiatives. I care about building systems that work today and can evolve tomorrow.',
    aboutText2:'I pair an engineering mindset with attention to detail: from interface design to data modeling, from a REST API to performance improvements in production.',
    factExperience:'Years of experience',factCareer:'Career started',factFocus:'End-to-end product thinking',
    sectionProjects:'/ SELECTED WORK',projectsTitle:'Ideas turned<br>into <em>products.</em>',
    projectsDesc:'A selection of personal projects and technical experiments. Each one is an opportunity to build, measure, and improve.',
    inDevelopment:'IN DEVELOPMENT',finDesc:'A personal finance platform to organize income, expenses, budgets, and financial goals. Ecosystem with a Java/Spring Boot backend, web frontend, and native iOS client built in Swift.',
    visitApp:'Open app',ipsDesc:'Technical exploration of intrusion detection and prevention approaches, focused on network visibility and security.',
    chatDesc:'A real-time communication experiment using JavaScript and Node.js to understand bidirectional connections.',
    viewCode:'View source',viewCode2:'View source',moreProjects:'Want to discover more experiments and repositories?',githubAll:'Explore my GitHub',
    sectionExperience:'/ EXPERIENCE',experienceTitle:'Engineering in the<br><em>real world.</em>',
    job1Date:'OCT 2024 — PRESENT',job1Title:'Technology Administrator · Full-Stack Development & Integrations',
    job1Desc:'Responsible for technology requirements and solutions for Cargo and Courier Services. Enterprise module development and maintenance, service integrations, Oracle PL/SQL, and production incident resolution. Also contributing to electronic invoicing and payroll.',
    job2Date:'JUL 2023 — JAN 2024',job2Title:'Software Developer',
    job2Desc:'Developed enterprise services and solutions with C#, .NET, and SQL Server. REST API integration, data visualization, and stored procedure improvements for projects in the energy sector.',
    sectionTools:'/ TOOLKIT',skillsTitle:'Technology in service<br>of the <em>solution.</em>',
    sectionEducation:'/ EDUCATION',educationTitle:'Curiosity that<br><em>never stops.</em>',present:'PRESENT',
    edu1:'Software Engineering (in progress)',edu2:'Information Systems Management Technology',edu3:'Professional Technician in Information Systems Maintenance',
    extraEducation:'Additional studies: cybersecurity fundamentals, data science, IoT, and networking.',
    sectionContact:'/ CONTACT',contactKicker:'HAVE A CHALLENGE IN MIND?',contactTitle:'Let’s build something<br><em>remarkable.</em>',
    contactText:'Happy to discuss software opportunities, collaborations, and digital products.',cvLink:'RÉSUMÉ ↗',
    footerLine:'BUILT WITH PRECISION AND PURPOSE.',backTop:'BACK TO TOP ↑'
  };
  let lang='es';
  function applyLanguage(next){
    lang=next;
    document.documentElement.lang=lang;
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key=el.getAttribute('data-i18n');
      if(lang==='en'&&en[key]!==undefined){
        if(key==='heroTitle'||key==='aboutTitle'||key==='projectsTitle'||key==='experienceTitle'||key==='skillsTitle'||key==='educationTitle'||key==='contactTitle')el.innerHTML=en[key];
        else el.textContent=en[key];
      }else if(el.dataset.esHtml!==undefined)el.innerHTML=el.dataset.esHtml;
      else if(el.dataset.esText!==undefined)el.textContent=el.dataset.esText;
    });
    if(toggle){toggle.innerHTML=(lang==='es'?'EN':'ES')+' <span aria-hidden="true">↗</span>';toggle.setAttribute('aria-label',lang==='es'?'Switch to English':'Cambiar a español');}
    document.title=lang==='es'?'Luis José Deluquez — Desarrollador Full-Stack':'Luis José Deluquez — Full-Stack Developer';
    try{localStorage.setItem('luis-portfolio-lang',lang)}catch(e){}
  }
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    if(el.querySelector('em')||el.querySelector('br'))el.dataset.esHtml=el.innerHTML;
    else el.dataset.esText=el.textContent;
  });
  if(toggle){toggle.addEventListener('click',()=>applyLanguage(lang==='es'?'en':'es'));}
  try{if(localStorage.getItem('luis-portfolio-lang')==='en')applyLanguage('en')}catch(e){}
})();