// Neon particles
const p = document.getElementById("particles");
for(let i=0;i<55;i++){
  const div=document.createElement("div");
  div.className="particle";
  div.style.left=Math.random()*100+"vw";
  div.style.animationDelay=Math.random()*5+"s";
  p.appendChild(div);
}

// Projects from GitHub
const projects = [
  { name:"apple-site", url:"https://github.com/zasmastro/apple-site" },
  { name:"casinox", url:"https://github.com/zasmastro/casinox" },
  { name:"cortex", url:"https://github.com/zasmastro/cortex" },
  { name:"ctXchat", url:"https://github.com/zasmastro/ctXchat" },
  { name:"Nuking-Discord-Server-Bot-Nuke-Bot", url:"https://github.com/zasmastro/Nuking-Discord-Server-Bot-Nuke-Bot" },
  { name:"Tchiso-212", url:"https://github.com/zasmastro/Tchiso-212" },
  { name:"Trust-Wallet-site", url:"https://github.com/zasmastro/Trust-Wallet-site" }
];
const projectsContainer = document.getElementById("projects-container");
projects.forEach(p=>{
  projectsContainer.innerHTML += `
    <div class="card">
      <h3>${p.name}</h3>
      <a class="btn" href="${p.url}" target="_blank">Open</a>
    </div>
  `;
});

// Skills with details
const skills = {
  "Programming": "💻 I handle full development: frontend, backend, automation, cybersecurity projects, and more. I can create, manage, and optimize almost anything in tech.",
  "Cybersecurity & Ethical Hacking": "💡 I analyze vulnerabilities, do penetration testing, protect systems ethically, and explore OSINT.",
  "Design & Montage": "🎨 I create UI/UX designs, video montages, and visual projects with creativity.",
  "Social Engineering": "🧠 I study human behavior to understand and ethically manipulate it for security testing and ethical projects.",
  "Scam & Phishing Awareness": "🕵️‍♂️ I research scam techniques, educate about phishing, and simulate security challenges safely.",
  "GHH": "🔒 Advanced knowledge in security protocols, hacking methods, and ethical hacking strategies."
};
const skillsContainer = document.getElementById("skills-container");
const skillDetail = document.getElementById("skill-detail");

Object.keys(skills).forEach(skill=>{
  const div = document.createElement("div");
  div.className="card";
  div.textContent = skill;
  div.addEventListener("click", ()=>{
    skillDetail.style.display="block";
    skillDetail.innerHTML=`<h3>${skill}</h3><p>${skills[skill]}</p>`;
  });
  skillsContainer.appendChild(div);
});

// Section Navigation
const sections = document.querySelectorAll('section');
const sidebarLinks = document.querySelectorAll('.sidebar a');
function showSection(targetId){
  sections.forEach(sec => sec.style.display = (sec.id === targetId) ? 'grid' : 'none');
}
showSection('home');
sidebarLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('href').substring(1);
    showSection(target);
  });
});
