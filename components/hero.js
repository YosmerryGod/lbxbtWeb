import Whitepaper from "./whitepaper.js";

export default function Hero() {
  const section = document.createElement("section");
  section.className = `
  w-full min-h-screen flex items-center justify-center 
  px-4 md:px-6 py-12 md:py-16 
  bg-gradient-to-br from-gray-800 via-gray-900 to-black
  pl-[52px] md:pl-0
`;


  const container = document.createElement("div");
  container.className = `
    w-full max-w-[1000px] 
    flex flex-col-reverse md:flex-row 
    items-center text-center md:text-left 
    gap-6 md:gap-10 mx-auto md:ml-16 lg:ml-32
  `;

  const img = document.createElement("img");
  img.src = "assets/hero.webp";
  img.alt = "LBXBT Logo";
  img.className = "w-28 h-28 md:w-44 md:h-44 rounded-full shadow-lg";

  const content = document.createElement("div");
  content.className = "flex-1";

  const title = document.createElement("h1");
  title.textContent = "LBXBT";
  title.className = "text-3xl md:text-6xl font-extrabold mb-3";

  const desc = document.createElement("p");
  desc.textContent = "AI-Powered Token Intelligence on BSC";
  desc.className = "text-base md:text-2xl mb-6 text-gray-300";

  const btnGroup = document.createElement("div");
  btnGroup.className = `
    flex flex-col md:flex-row 
    justify-center md:justify-start 
    gap-3 md:gap-4
  `;

  const goBtn = document.createElement("a");
  goBtn.href = "#";
  goBtn.textContent = "Go AI Agent";
  goBtn.className = `
    bg-yellow-400/80 text-black 
    px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-semibold 
    text-sm md:text-base
    hover:bg-yellow-300 transition
  `;

  const docBtn = document.createElement("a");
  docBtn.href = "#";
  docBtn.textContent = "Read Docs";
  docBtn.className = `
    border border-yellow-400/80 
    px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-semibold 
    text-yellow-400 text-sm md:text-base
    hover:bg-yellow-400 hover:text-black transition
  `;

  // 👇 Event ke halaman whitepaper
docBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Ganti path URL
  window.history.pushState({}, '', '/whitepaper');

  // Render halaman whitepaper
  const app = document.getElementById("app");
  app.innerHTML = "";
  app.appendChild(Whitepaper());
});

  btnGroup.append(goBtn, docBtn);
  content.append(title, desc, btnGroup);
  container.append(img, content);
  section.append(container);

  return section;
}
