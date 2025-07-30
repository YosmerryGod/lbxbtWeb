export default function Features() {
  const section = document.createElement("section");
  section.id = "features";
  section.className = `
  w-full min-h-screen 
  px-6 py-20 
  bg-gradient-to-b from-gray-900 via-black to-gray-900 
  text-white 
  flex items-center justify-center 
  pl-[52px] md:pl-0
`;

  const container = document.createElement("div");
  container.className = "max-w-5xl mx-auto text-center";

  const heading = document.createElement("h2");
  heading.className = "text-3xl md:text-5xl font-extrabold text-yellow-400 mb-12";
  heading.textContent = "What It Can Flex";

  const grid = document.createElement("div");
  grid.className = "grid grid-cols-1 md:grid-cols-3 gap-8";

  const features = [
    {
      title: "AI Token Scanner",
      desc: "Detects honeypots, rug risks, and suspicious contracts using machine learning.",
      icon: "🧠"
    },
    {
      title: "Real-Time Tracking",
      desc: "Tracks token movements, holder activity, volume spikes, and market signals in real-time.",
      icon: "📊"
    },
    {
      title: "Smart Alerts",
      desc: "Notifies you of emerging tokens or dangerous patterns before the crowd reacts.",
      icon: "⚡"
    }
  ];

  features.forEach(f => {
    const card = document.createElement("div");
    card.className = "bg-gray-800 rounded-xl border border-yellow-500 p-6 hover:scale-105 transition duration-300 flex flex-col items-center text-center";

    const icon = document.createElement("div");
    icon.className = "text-4xl mb-4";
    icon.textContent = f.icon;

    const title = document.createElement("h3");
    title.className = "text-xl font-bold text-yellow-400 mb-2";
    title.textContent = f.title;

    const desc = document.createElement("p");
    desc.className = "text-gray-300 text-sm";
    desc.textContent = f.desc;

    card.append(icon, title, desc);
    grid.appendChild(card);
  });

  container.append(heading, grid);
  section.appendChild(container);
  return section;
}
