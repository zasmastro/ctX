// PROJECTS
const projects=[
  {name:"apple-site",url:"https://github.com/zasmastro/apple-site"},
  {name:"casinox",url:"https://github.com/zasmastro/casinox"},
  {name:"cortex",url:"https://github.com/zasmastro/cortex"},
  {name:"ctXchat",url:"https://github.com/zasmastro/ctXchat"},
  {name:"Nuking-Discord-Server-Bot-Nuke-Bot",url:"https://github.com/zasmastro/Nuking-Discord-Server-Bot-Nuke-Bot"},
  {name:"Tchiso-212",url:"https://github.com/zasmastro/Tchiso-212"},
  {name:"Trust-Wallet-site",url:"https://github.com/zasmastro/Trust-Wallet-site"}
];
const projectsContainer=document.getElementById("projects-container");
projects.forEach(p=>{
  const card=document.createElement("div"); card.className="card";
  const h3=document.createElement("h3"); h3.textContent=p.name;
  const btn=document.createElement("a"); btn.className="btn"; btn.href=p.url;
  btn.target="_blank"; btn.textContent="Open";
  card.appendChild(h3); card.appendChild(btn);
  projectsContainer.appendChild(card);
});

// SKILLS
const skills={
  "Programming":"💻 Full development: frontend, backend, automation, self-learning projects.",
  "Tech Mastery":"💡 Testing, hacking, coding, and exploring systems freely.",
  "Design & Montage":"🎨 Creative UI/UX and visual projects.",
  "Social Engineering":"🧠 Analyzing behavior and building strategies responsibly.",
  "Scam & Phishing Awareness":"🕵️‍♂️ Educating about phishing and scam techniques.",
  "GHH":"🔒 Advanced techniques in hacking, security protocols, and system mastery."
};
const skillsContainer=document.getElementById("skills-container");
const skillDetail=document.getElementById("skill-detail");
Object.keys(skills).forEach(skill=>{
  const card=document.createElement("div"); card.className="card";
  const h3=document.createElement("h3"); h3.textContent=skill;
  const btn=document.createElement("button"); btn.className="btn"; btn.textContent="More";
  btn.addEventListener("click",()=>{
    skillDetail.style.display="flex";
    skillDetail.innerHTML=`<h3>${skill}</h3><p>${skills[skill]}</p>`;
  });
  card.appendChild(h3); card.appendChild(btn);
  skillsContainer.appendChild(card);
});

// SOCIAL
const socials=[
  {name:"LinkedIn",url:"https://www.linkedin.com/in/abderrahim-cortex/",icon:"fab fa-linkedin"},
  {name:"Discord",url:"https://discord.com/users/Zasmastro",icon:"fab fa-discord"},
  {name:"Instagram",url:"https://www.instagram.com/ds_xyes_j6",icon:"fab fa-instagram"},
  {name:"Telegram",url:"https://t.me/SMARIX_001",icon:"fab fa-telegram"},
  {name:"GitHub",url:"https://github.com/zasmastro",icon:"fab fa-github"}
];
const socialContainer=document.getElementById("social-container");
socials.forEach(s=>{
  const a=document.createElement("a"); a.href=s.url; a.target="_blank";
  const card=document.createElement("div"); card.className="card";
  const i=document.createElement("i"); i.className=s.icon;
  const span=document.createElement("span"); span.textContent=s.name;
  card.appendChild(i); card.appendChild(span);
  a.appendChild(card); socialContainer.appendChild(a);
});

// NAVIGATION
const sections=document.querySelectorAll('section');
const sidebarLinks=document.querySelectorAll('.sidebar a');
function showSection(targetId){
  sections.forEach(sec=>sec.style.display=(sec.id===targetId)?"grid":"none");
}
showSection('home');
sidebarLinks.forEach(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault();
    const target=link.getAttribute('href').substring(1);
    showSection(target);
  });
});