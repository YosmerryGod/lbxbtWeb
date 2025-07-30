export default function Tokenomics() {
  const section = document.createElement("section");
  section.id = "tokenomics";
section.className = `
  w-full min-h-screen 
  px-6 py-20 
  bg-gradient-to-b from-gray-900 via-black to-gray-900 
  text-white 
  flex items-center justify-center 
  pl-[52px] md:pl-0
`;

  const container = document.createElement("div");
  container.className =
    "max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center";

  // === LEFT: Pie Chart Image with hover effect
  const chartImg = document.createElement("img");
  chartImg.src = "./assets/pie-chart.webp"; // <- Update path if needed
  chartImg.alt = "LBXBT Tokenomics Chart";
  chartImg.className =
    "w-full max-w-sm mx-auto transition-transform duration-300 ease-in-out hover:scale-105 hover:drop-shadow-[0_0_20px_#facc15]";

  // === RIGHT: Tokenomics Text Content
  const content = document.createElement("div");
  content.className = "text-left space-y-6";

  const heading = document.createElement("h2");
  heading.className = "text-3xl md:text-5xl font-extrabold text-yellow-400";
  heading.textContent = "Token Fuel";

  const supply = document.createElement("p");
  supply.className = "text-gray-300 text-base md:text-lg";
  supply.innerHTML = "<strong>Total Supply:</strong> 1,000,000,000 $LBXBT";

  // === Card 1: Distribution
  const distCard = document.createElement("div");
  distCard.className =
    "bg-[#1f2937] border border-yellow-500 rounded-xl p-5 transition duration-300 hover:scale-[1.03] hover:border-yellow-400 hover:shadow-md";

  const distTitle = document.createElement("h3");
  distTitle.className = "text-yellow-400 font-semibold text-lg mb-2";
  distTitle.textContent = "Distribution";

  const distList = document.createElement("ul");
  distList.className = "text-gray-300 space-y-1 text-sm";
  ["95% Community", "5% Dev & Team"].forEach((item) => {
    const li = document.createElement("li");
    li.textContent = "• " + item;
    distList.appendChild(li);
  });

  distCard.append(distTitle, distList);

  // === Card 2: Security
  const secCard = document.createElement("div");
  secCard.className =
    "bg-[#1f2937] border border-yellow-500 rounded-xl p-5 transition duration-300 hover:scale-[1.03] hover:border-yellow-400 hover:shadow-md";

  const secTitle = document.createElement("h3");
  secTitle.className = "text-yellow-400 font-semibold text-lg mb-2";
  secTitle.textContent = "Security";

  const secList = document.createElement("ul");
  secList.className = "text-gray-300 space-y-1 text-sm";
  ["Liquidity Pool Burned 🔥", "Owner Renounced"].forEach((item) => {
    const li = document.createElement("li");
    li.textContent = "• " + item;
    secList.appendChild(li);
  });

  secCard.append(secTitle, secList);

  // Assemble
  content.append(heading, supply, distCard, secCard);
  container.append(chartImg, content);
  section.appendChild(container);

  return section;
}
