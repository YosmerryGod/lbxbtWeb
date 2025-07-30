export default function About() {
  const section = document.createElement("section");
section.className = `
  w-full min-h-screen flex items-center justify-center 
  px-4 md:px-6 py-16 md:py-20 
  bg-gradient-to-b from-black via-gray-900 to-black 
  text-white
  pl-[52px] md:pl-0
`;

  const container = document.createElement("div");
  container.className = "max-w-4xl mx-auto text-center space-y-6 md:space-y-8";

  const heading = document.createElement("h2");
  heading.className = "text-2xl md:text-5xl font-extrabold text-yellow-400";
  heading.textContent = "Who’s Behind the Bot?";

  const paragraph = document.createElement("p");
  paragraph.className = "text-gray-300 text-sm md:text-lg leading-relaxed";
  paragraph.textContent = `
    LBXBT is a smart AI Agent built for the Binance Smart Chain.
    It tracks tokens, detects patterns, and learns from market behavior.
    Our mission is to simplify crypto intelligence for everyone —
    fast, friendly, and freakishly insightful.
  `;

  const highlight = document.createElement("div");
  highlight.className = `
    mt-4 md:mt-6 
    bg-gray-800 border border-yellow-400 
    text-yellow-300 
    px-4 md:px-6 py-3 md:py-4 
    rounded-xl text-xs md:text-base
  `;
  highlight.textContent = "Built with ❤️ by SATOTCHI | Powered by real-time data | Constantly evolving.";

  container.append(heading, paragraph, highlight);
  section.appendChild(container);

  return section;
}
