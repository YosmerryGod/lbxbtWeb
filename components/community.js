export default function Community() {
  const section = document.createElement("section");
  section.id = "community";
  section.className = `
    w-full px-4 py-20 text-white flex items-center justify-center
    bg-black relative
    pl-[52px] md:pl-0
  `;

  const container = document.createElement("div");
  container.className = "max-w-5xl mx-auto text-center";

  const heading = document.createElement("h2");
  heading.className =
    "text-3xl md:text-5xl font-extrabold text-[#FFD700] mb-6";
  heading.textContent = "Join the LBXBT Community";

  const desc = document.createElement("p");
  desc.className = "text-gray-300 mb-10 text-base md:text-lg";
  desc.textContent =
    "Stay connected, vibe with us, and help shape the future of LBXBT through our social channels.";

  const grid = document.createElement("div");
  grid.className = "flex flex-col md:flex-row justify-center gap-6";

  const links = [
    {
      title: "Telegram",
      url: "#", // Belum ada link resmi, bisa diganti nanti
      desc: "Join our main group chat and connect with fellow degens.",
      bgImage: "assets/tele-wp.webp",
    },
    {
      title: "Twitter",
      url: "https://x.com/lilbeanBSC",
      desc: "Get the latest news, threads, and memes from the LBXBT core.",
      bgImage: "assets/x-wp.webp",
    },
    {
      title: "Instagram",
      url: "https://instagram.com/lilbeanfun",
      desc: "Follow our visual journey and creative highlights here.",
      bgImage: "assets/ig-wp.webp",
    },
  ];

  links.forEach((link) => {
    const tile = document.createElement("a");
    tile.href = link.url;
    tile.target = "_blank";
    tile.rel = "noopener noreferrer";
    tile.className = `
      relative overflow-hidden
      border border-[#FFD700] text-white
      px-6 py-6 rounded-2xl w-full md:w-1/3
      hover:scale-105 hover:border-[#FACC15]
      transition-all duration-300 ease-in-out
      text-left shadow-lg flex flex-col gap-2
    `;

    // Background image
    tile.style.backgroundImage = `url('${link.bgImage}')`;
    tile.style.backgroundSize = "cover";
    tile.style.backgroundPosition = "center";
    tile.style.backgroundRepeat = "no-repeat";

    // Overlay
    const overlay = document.createElement("div");
    overlay.className = "absolute inset-0 bg-black/70 backdrop-blur-sm rounded-2xl z-0";

    // Text content
    const titleEl = document.createElement("div");
    titleEl.className = "text-xl font-bold text-[#FFD700] relative z-10";
    titleEl.textContent = link.title;

    const descEl = document.createElement("p");
    descEl.className = "text-sm text-gray-200 relative z-10";
    descEl.textContent = link.desc;

    tile.append(overlay, titleEl, descEl);
    grid.appendChild(tile);
  });

  container.append(heading, desc, grid);
  section.appendChild(container);

  return section;
}
