export default function Whitepaper() {
  const section = document.createElement("section");
  section.id = "whitepaper";
  section.className = `
    w-full min-h-screen px-6 py-20 text-white flex items-center justify-center bg-transparent
  `;

  const container = document.createElement("div");
  container.className = "max-w-5xl mx-auto w-full text-left relative";

  // Utility: text-shadow helper
  const applyShadow = (el, weight = "1px") => {
    el.style.textShadow = `${weight} ${weight} 2px rgba(0,0,0,0.7)`;
  };

  // Back Button
  const backBtn = document.createElement("button");
  backBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
    <span class="align-middle">Back</span>
  `;
  backBtn.className = `
    absolute top-0 left-0 
    bg-transparent text-yellow-400 font-semibold
    hover:underline text-sm md:text-base px-2 py-1
  `;
  backBtn.addEventListener("click", () => {
    const app = document.getElementById("app");
    app.innerHTML = "";

    import('../script.js').then(({ default: initSPA }) => {
  initSPA(); // Menjalankan ulang script utama
});
  });

  // Header
  const heading = document.createElement("h1");
  heading.className = "text-4xl md:text-6xl font-extrabold text-yellow-400 mb-4 text-center";
  heading.textContent = "LBXBT Whitepaper";
  applyShadow(heading, "2px");

  const subheading = document.createElement("p");
  subheading.className = "text-gray-200 text-base md:text-lg mb-12 text-center max-w-2xl mx-auto";
  subheading.textContent =
    "Welcome to LBXBT: an AI-powered token analyzer and meme agent designed to decode the BSC landscape.";
  applyShadow(subheading);

  // Section Helper
  const createSection = (titleText, contentText) => {
    const wrapper = document.createElement("div");
    wrapper.className = "mb-10";

    const title = document.createElement("h2");
    title.className = "text-xl font-bold text-yellow-300 mb-2";
    title.textContent = titleText;
    applyShadow(title);

    const desc = document.createElement("p");
    desc.className = "text-gray-200 text-sm md:text-base";
    desc.textContent = contentText;
    applyShadow(desc, "1px");

    wrapper.append(title, desc);
    return wrapper;
  };

  // About, Vision
  const about = createSection("🔍 What is LBXBT?", "LBXBT is a utility-driven meme token built on Binance Smart Chain (BSC), featuring an AI Agent that continuously monitors token metrics, volume spikes, contract safety, and on-chain sentiment in real-time.");
  const vision = createSection("🚀 Vision", "To empower degens, holders, and memecoin enthusiasts with meaningful analytics, AI-based trend predictions, and tools that make DYOR (Do Your Own Research) effortless, fun, and decentralized.");

  // Use Cases
  const usecaseTitle = document.createElement("h2");
  usecaseTitle.textContent = "🧠 Use Cases";
  usecaseTitle.className = "text-xl font-bold text-yellow-300 mb-2";
  applyShadow(usecaseTitle);

  const usecaseList = document.createElement("ul");
  usecaseList.className = "list-disc ml-5 text-gray-200 text-sm md:text-base mb-12";
  [
    "Real-time token analyzer with anomaly detection",
    "Early detection of volume spikes, new contracts, and honeypots",
    "AI insights on memecoins before they trend",
    "Staking module with APY linked to ecosystem usage",
    "Telegram AI bot assistant for LBXBT community"
  ].forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    applyShadow(li);
    usecaseList.appendChild(li);
  });

  // Roadmap
  const roadmapTitle = document.createElement("h2");
  roadmapTitle.textContent = "📍 Roadmap";
  roadmapTitle.className = "text-xl font-bold text-yellow-300 mb-4";
  applyShadow(roadmapTitle);

  const phases = [
    {
      title: "Phase 1 – Genesis",
      status: "✅",
      checklist: [
        "Mascot finalized",
        "Community formed on X",
        "Website launched",
        "Launch $LBXBT Token on four.meme",
        "Deploy AI Agent v1.0"
      ]
    },
    {
      title: "Phase 2 – Expansion",
      status: "🚧",
      checklist: [
        "Launch $LBXBT Token",
        "Release AI Agent to public web",
        "Telegram Bot (LBXBT Scout)",
        "Trending Token Panel",
        "Meme Gallery Integration",
        "Portfolio Viewer",
        "Meme Contest Campaign"
      ]
    },
    {
      title: "Phase 3 – Ecosystem",
      status: "🔲",
      checklist: [
        "LBXBT DApp launch",
        "Staking module (APR / APY)",
        "Swap integration",
        "AI Token Analyzer 2.0",
        "Trending Scanner",
        "Mobile / PWA version",
        "CEX listing preparation",
        "1st CEX listing (TBD)"
      ]
    }
  ];

  const roadmap = document.createElement("div");
  roadmap.className = "space-y-10";
  phases.forEach((phase) => {
    const wrapper = document.createElement("div");
    wrapper.className = "pl-4 border-l-2 border-yellow-500 relative";

    const status = document.createElement("div");
    status.className = "absolute -left-4 top-1";
    status.innerHTML = `<span style="font-size: 1.2rem; text-shadow: 1px 1px 2px black;">${phase.status}</span>`;

    const title = document.createElement("h3");
    title.className = "text-lg font-bold text-yellow-300 mb-1";
    title.textContent = phase.title;
    applyShadow(title);

    const ul = document.createElement("ul");
    ul.className = "list-disc ml-5 text-sm text-gray-200";
    phase.checklist.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      applyShadow(li);
      ul.appendChild(li);
    });

    wrapper.append(status, title, ul);
    roadmap.appendChild(wrapper);
  });

  // CTA
  const cta = document.createElement("div");
  cta.className = "mt-14 text-center";

  const downloadBtn = document.createElement("a");
  downloadBtn.href = "#";
  downloadBtn.className = `
    inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-semibold 
    px-6 py-3 rounded-xl transition
  `;
  downloadBtn.textContent = "📄 Download Whitepaper (Coming Soon)";
  cta.appendChild(downloadBtn);

  // Append all content
  container.append(
    backBtn,
    heading,
    subheading,
    about,
    vision,
    usecaseTitle,
    usecaseList,
    roadmapTitle,
    roadmap,
    cta
  );

  section.appendChild(container);
  return section;
}
