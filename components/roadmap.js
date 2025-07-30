export default function Roadmap() {
  const section = document.createElement("section");
  section.id = "roadmap";
section.className = `
  w-full 
  px-4 py-16 
  bg-gradient-to-b from-black via-gray-900 to-black 
  text-white 
  pl-[52px] md:pl-0
`;

  const container = document.createElement("div");
  container.className = "max-w-6xl mx-auto";

  const heading = document.createElement("h2");
  heading.className = "text-2xl md:text-4xl font-extrabold text-yellow-400 mb-10 text-center";
  heading.textContent = "Where It’s Headed";

  const phases = [
    {
      title: "Phase 1 – Genesis",
      status: "✅",
      color: "bg-green-400",
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
      color: "bg-yellow-400",
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
      color: "bg-gray-400",
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

  // === DESKTOP HORIZONTAL ROADMAP ===
  const desktop = document.createElement("div");
  desktop.className = "hidden md:block";

  const lineWrapper = document.createElement("div");
  lineWrapper.className = "relative flex justify-between items-start mb-14";

  const line = document.createElement("div");
  line.className = "absolute top-2 left-0 w-full h-1 bg-yellow-500";
  lineWrapper.appendChild(line);

  phases.forEach(p => {
    const dotGroup = document.createElement("div");
    dotGroup.className = "flex flex-col items-center flex-1 text-center";

    const dot = document.createElement("div");
    dot.className = `w-4 h-4 rounded-full border border-black z-10 ${p.color}`;

    const lineDown = document.createElement("div");
    lineDown.className = "w-px h-8 bg-yellow-500 my-1";

    const box = document.createElement("div");
    box.className = "bg-gray-800 border border-yellow-500 rounded-xl p-4 w-full max-w-xs min-h-[280px] shadow-md text-sm text-gray-300 text-left";

    const title = document.createElement("h4");
    title.className = "font-bold text-yellow-300 mb-2 text-left w-full";
    title.textContent = `${p.status} ${p.title}`;
    box.appendChild(title);


    const ul = document.createElement("ul");
    ul.className = "space-y-1";
    p.checklist.forEach(item => {
      const li = document.createElement("li");
      li.textContent = "• " + item;
      ul.appendChild(li);
    });
    box.appendChild(ul);

    dotGroup.append(dot, lineDown, box);
    lineWrapper.appendChild(dotGroup);
  });

  desktop.appendChild(lineWrapper);

  // === MOBILE VERTICAL ROADMAP ===
  const mobile = document.createElement("div");
  mobile.className = "md:hidden space-y-8 border-l border-yellow-500 pl-4";

  phases.forEach(p => {
    const item = document.createElement("div");
    item.className = "relative pl-2";

    const dot = document.createElement("div");
    dot.className = "absolute left-[-10px] top-2 w-2 h-2 bg-yellow-400 rounded-full border border-black";

    const title = document.createElement("h4");
    title.className = `text-base font-bold mb-1 text-yellow-300`;
    title.textContent = `${p.status} ${p.title}`;

    const list = document.createElement("ul");
    list.className = "text-sm text-gray-300 space-y-1";

    p.checklist.forEach(d => {
      const li = document.createElement("li");
      li.textContent = "• " + d;
      list.appendChild(li);
    });

    item.append(dot, title, list);
    mobile.appendChild(item);
  });

  container.append(heading, desktop, mobile);
  section.appendChild(container);
  return section;
}
