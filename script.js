// Personalize these two names before sharing the site.
const CONFIG = { herName: "Beautiful", yourName: "Someone who cares" };
document.title = `A Little Scrapbook for ${CONFIG.herName} ♡`;
["heroName","finalName"].forEach(id => { const el=document.getElementById(id); if(el) el.textContent=CONFIG.herName; });
["senderName","letterSender"].forEach(id => { const el=document.getElementById(id); if(el) el.textContent=CONFIG.yourName; });


// Automatically load a picture from the images folder for the home-page Polaroid.
// The browser cannot list a folder on its own, so try common filenames directly.
const heroPhoto = document.getElementById("heroPhoto");
if (heroPhoto) {
  const candidates = [
    "images/hero.jpg", "images/hero.jpeg", "images/hero.png", "images/hero.webp",
    "images/photo1.jpg", "images/photo1.jpeg", "images/photo1.png", "images/photo1.webp",
    "images/birthday.jpg", "images/birthday.png", "images/her.jpg", "images/her.png"
  ];
  const tryImage = (index) => {
    if (index >= candidates.length) return;
    const img = new Image();
    img.onload = () => { heroPhoto.replaceChildren(img); };
    img.onerror = () => tryImage(index + 1);
    img.src = candidates[index];
  };
  tryImage(0);
}

// Mobile navigation
const menuButton=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav");
if(menuButton && nav){menuButton.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(open));menuButton.textContent=open?"×":"☰";});}

// Flip message cards.
document.querySelectorAll(".reason-card").forEach(card=>card.addEventListener("click",()=>card.classList.toggle("flipped")));

// Letter reveal on its own page.
const envelope=document.getElementById("openLetter");
if(envelope)envelope.addEventListener("click",()=>{envelope.classList.add("open");const paper=document.getElementById("letterPaper");paper.hidden=false;paper.scrollIntoView({behavior:"smooth",block:"center"});});

// Floating hearts/confetti.
function burst(count){const layer=document.getElementById("confettiLayer");if(!layer)return;const symbols=["♥","♡","✿","✧","❀"];for(let i=0;i<count;i++){const p=document.createElement("span");p.className="confetti-piece";p.textContent=symbols[Math.floor(Math.random()*symbols.length)];p.style.left=Math.random()*100+"%";p.style.color=["#d9899b","#e9b7a9","#b77b89","#e4c6a7"][Math.floor(Math.random()*4)];p.style.fontSize=(12+Math.random()*18)+"px";p.style.setProperty("--drift",(Math.random()*180-90)+"px");p.style.animationDuration=(2.5+Math.random()*2.5)+"s";layer.appendChild(p);setTimeout(()=>p.remove(),5200);}}
const reveal=document.getElementById("revealSurprise");if(reveal)reveal.addEventListener("click",()=>{document.getElementById("surpriseMessage").hidden=false;burst(65);});

// Background audio requires a user tap; add images/our-song.mp3.
const music=document.getElementById("bgMusic"),toggle=document.getElementById("musicToggle");
if(music&&toggle){toggle.addEventListener("click",async()=>{const label=toggle.querySelector("span");if(music.paused){try{await music.play();toggle.classList.add("playing");if(label)label.textContent="Pause our song";}catch{if(label)label.textContent="Add your song file";}}else{music.pause();toggle.classList.remove("playing");if(label)label.textContent="Play our song";}});}
document.addEventListener("keydown",e=>{});
