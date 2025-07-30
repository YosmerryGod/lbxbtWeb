import Navbar from './components/navbar.js';
import Hero from './components/hero.js';
import About from './components/about.js';
import Features from './components/features.js';
import Roadmap from './components/roadmap.js';
import Tokenomics from './components/tokenomics.js';
import Vibes from './components/vibes.js';
import Community from './components/community.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  // === Sections ===
  const hero = Hero();
  hero.id = 'hero';

  const about = About();
  about.id = 'about';
  about.classList.add('hidden');

  const features = Features();
  features.id = 'features';
  features.classList.add('hidden');

  const roadmap = Roadmap();
  roadmap.id = 'roadmap';
  roadmap.classList.add('hidden');

  const tokenomics = Tokenomics();
  tokenomics.id = 'tokenomics';
  tokenomics.classList.add('hidden');

  const vibes = Vibes();
  vibes.id = 'vibes';
  vibes.classList.add('hidden');

  const community = Community();
  community.id = 'community';
  community.classList.add('hidden');

  const sections = [hero, about, features, roadmap, tokenomics, vibes, community];
  let currentSection = 0;

  // === Show Section with animation
  function showSection(targetId) {
    sections.forEach((section, index) => {
      if (section.id === targetId) {
        section.classList.remove('hidden');

        section.classList.remove('fade-in-pixel');
        void section.offsetWidth;
        section.classList.add('fade-in-pixel');

        currentSection = index;
        section.scrollTop = 0;
      } else {
        section.classList.add('hidden');
      }
    });
  }

  window.showSection = showSection;

  // === Layout
  const layout = document.createElement("div");
  layout.className = "flex flex-col md:flex-row min-h-screen";
  app.appendChild(layout);

  layout.appendChild(Navbar());

  const sectionWrapper = document.createElement("div");
  sectionWrapper.className = "flex-1 overflow-hidden";
  layout.appendChild(sectionWrapper);

  sections.forEach(section => sectionWrapper.appendChild(section));

  // === Scroll Navigation
  let isScrolling = false;
  window.addEventListener('wheel', (e) => {
    if (isScrolling) return;

    const section = sections[currentSection];
    const atTop = section.scrollTop === 0;
    const atBottom = section.scrollTop + section.clientHeight >= section.scrollHeight - 1;

    if (e.deltaY > 0 && atBottom && currentSection < sections.length - 1) {
      isScrolling = true;
      showSection(sections[currentSection + 1].id);
      setTimeout(() => (isScrolling = false), 800);
    } else if (e.deltaY < 0 && atTop && currentSection > 0) {
      isScrolling = true;
      showSection(sections[currentSection - 1].id);
      setTimeout(() => (isScrolling = false), 800);
    }
  });

  // === Mobile Menu Toggle
  const menuBtn = document.getElementById("mobileMenuBtn");
  const mobileNav = document.getElementById("mobileNav");
  const backdrop = document.getElementById("mobileBackdrop");

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("-translate-x-full");
    });
  }

  // === Menu Links Handler (Desktop & Mobile)
  document.querySelectorAll('[data-section]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-section');
      showSection(targetId);

      // Optional: close mobile menu
      if (mobileNav && backdrop) {
        mobileNav.classList.add("-translate-x-full");
        mobileNav.classList.remove("translate-x-0");
        backdrop.classList.add("hidden");
      }
    });
  });
});

export default function initSPA() {
  document.dispatchEvent(new Event('DOMContentLoaded'));
}
