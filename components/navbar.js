export default function Navbar() {
  const fragment = document.createDocumentFragment();

  const createSocialIcons = () => `
    <a href="#"><img src="assets/icon-tg.webp" alt="Telegram" class="w-6 h-6 object-contain filter brightness-0 invert" /></a>
    <a href="https://instagram.com/lilbeanfun" target="_blank" rel="noopener">
      <img src="assets/icon-ig.webp" alt="Instagram" class="w-6 h-6 object-contain filter brightness-0 invert" />
    </a>
    <a href="https://x.com/lilbeanBSC" target="_blank" rel="noopener">
      <img src="assets/icon-x.webp" alt="X" class="w-6 h-6 object-contain filter brightness-0 invert" />
    </a>
  `;

  const sectionItems = [
    { id: "about", label: "Who’s Behind the Bot?" },
    { id: "features", label: "What It Can Flex" },
    { id: "roadmap", label: "Where It’s Headed" },
    { id: "tokenomics", label: "Token Fuel" },
    { id: "vibes", label: "Proof of Vibes" },
    { id: "community", label: "Squad Central" },
  ];

  // === BACKDROP
  const backdrop = document.createElement("div");
  backdrop.id = "mobileBackdrop";
  backdrop.className = "hidden md:hidden fixed inset-0 z-30 bg-black bg-opacity-50";
  fragment.appendChild(backdrop);

  // === MOBILE VERTICAL NAV
  const mobileVerticalNav = document.createElement("div");
  mobileVerticalNav.className = `
    md:hidden fixed top-0 left-0 h-full w-13 bg-gray-900 z-30
    flex flex-col justify-between items-center py-6
  `;

  const topSection = document.createElement("div");
  topSection.className = "flex flex-col items-center gap-4";

  const mobileBtn = document.createElement("button");
  mobileBtn.id = "mobileMenuBtn";
  mobileBtn.className = "p-2 rounded focus:outline-none bg-transparent";
  mobileBtn.innerHTML = `
    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  `;

  const verticalLogo = document.createElement("div");
  verticalLogo.className = "text-white text-xs font-bold tracking-widest rotate-180 [writing-mode:vertical-lr] cursor-pointer";
  verticalLogo.textContent = "TBXBL$";
  verticalLogo.addEventListener("click", () => showSection("hero"));

  topSection.append(mobileBtn, verticalLogo);

  const mobileSocial = document.createElement("div");
  mobileSocial.className = "flex flex-col items-center gap-6";
  mobileSocial.innerHTML = createSocialIcons();
  mobileVerticalNav.append(topSection, mobileSocial);
  fragment.appendChild(mobileVerticalNav);

  // === MOBILE SIDEBAR
  const mobileNav = document.createElement("nav");
  mobileNav.id = "mobileNav";
  mobileNav.className = `
    md:hidden
    fixed top-0 left-0 h-full w-64 bg-gray-900 z-40 
    transform -translate-x-full transition-transform duration-300 
    flex flex-col justify-between py-6 px-4
  `;

  const mobileTop = document.createElement("div");
  mobileTop.className = "flex flex-col items-start gap-6";

  const mobileLogo = document.createElement("div");
  mobileLogo.className = "flex items-center gap-2 text-2xl font-bold text-white cursor-pointer";
  mobileLogo.innerHTML = `
    <img src="assets/hero.webp" alt="LBXBT Logo" class="w-8 h-8 rounded-full" />
    <span>LBXBT</span>
  `;
  mobileLogo.addEventListener("click", () => {
    showSection("hero");
    mobileNav.classList.add("-translate-x-full");
    backdrop.classList.add("hidden");
  });

  const mobileMenu = document.createElement("ul");
  mobileMenu.className = "flex flex-col space-y-4 text-sm text-white";
  sectionItems.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = item.label;
    a.dataset.section = item.id;
    li.appendChild(a);
    mobileMenu.appendChild(li);
  });

  mobileTop.append(mobileLogo, mobileMenu);

  const mobileSidebarSocial = document.createElement("div");
  mobileSidebarSocial.className = "flex gap-4 items-center";
  mobileSidebarSocial.innerHTML = createSocialIcons();
  mobileNav.append(mobileTop, mobileSidebarSocial);
  fragment.appendChild(mobileNav);

  // === DESKTOP NAV
  const desktopNav = document.createElement("nav");
  desktopNav.className = "hidden md:flex md:w-48 bg-gray-900 flex-col justify-between py-8 px-4 min-h-screen";

  const desktopTop = document.createElement("div");
  desktopTop.className = "flex flex-col items-center";

  const desktopLogo = document.createElement("div");
  desktopLogo.className = "flex items-center gap-2 text-2xl font-bold text-white mb-8 cursor-pointer";
  desktopLogo.innerHTML = `
    <img src="assets/hero.webp" alt="LBXBT Logo" class="w-8 h-8 rounded-full" />
    <span>LBXBT</span>
  `;
  desktopLogo.addEventListener("click", () => {
  showSection("hero");

  // Optional: close mobile nav if open
  if (mobileNav && backdrop) {
    mobileNav.classList.add("-translate-x-full");
    backdrop.classList.add("hidden");
  }
});


  const desktopMenu = document.createElement("ul");
  desktopMenu.className = "flex flex-col space-y-6 text-sm text-white";
  sectionItems.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = item.label;
    a.dataset.section = item.id;
    a.className = "hover:text-yellow-400";
    li.appendChild(a);
    desktopMenu.appendChild(li);
  });

  desktopTop.append(desktopLogo, desktopMenu);

  const desktopSocial = document.createElement("div");
  desktopSocial.className = "flex justify-center space-x-4 mt-6";
  desktopSocial.innerHTML = createSocialIcons();
  desktopNav.append(desktopTop, desktopSocial);
  fragment.appendChild(desktopNav);

  // === EVENTS
  mobileBtn.addEventListener("click", () => {
    mobileNav.classList.remove("-translate-x-full");
    mobileNav.classList.add("translate-x-0");
    backdrop.classList.remove("hidden");
  });

  backdrop.addEventListener("click", () => {
    mobileNav.classList.add("-translate-x-full");
    mobileNav.classList.remove("translate-x-0");
    backdrop.classList.add("hidden");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      mobileNav.classList.add("-translate-x-full");
      mobileNav.classList.remove("translate-x-0");
      backdrop.classList.add("hidden");
    }
  });

  const allMenuLinks = fragment.querySelectorAll('[data-section]');
  allMenuLinks.forEach(link => {
    link.addEventListener("click", () => {
      const id = link.dataset.section;
      showSection(id);
      allMenuLinks.forEach(l => l.classList.remove("active-link"));
      link.classList.add("active-link");

      mobileNav.classList.add("-translate-x-full");
      mobileNav.classList.remove("translate-x-0");
      backdrop.classList.add("hidden");
    });
  });

  
  return fragment;
}
