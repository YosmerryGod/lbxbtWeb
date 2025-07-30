export default function Vibes() {
  const section = document.createElement("section");
  section.id = "vibes";
 section.className = `
  w-full 
  px-4 py-10 
  bg-gradient-to-b from-black via-gray-900 to-black 
  text-white 
  flex items-center justify-center 
  pl-[52px] md:pl-0
`;

  const container = document.createElement("div");
  container.className = "max-w-4xl w-full";

  const heading = document.createElement("h2");
  heading.className =
    "text-2xl md:text-4xl font-extrabold text-yellow-400 mb-3 text-center";
  heading.textContent = "Proof of Vibes 💥";

  const desc = document.createElement("p");
  desc.className =
    "text-base md:text-lg text-gray-300 mb-6 text-center max-w-2xl mx-auto";
  desc.textContent =
    "This is where the vibes live. Memes powered by the community. Verified by pure energy.";

  const flexWrapper = document.createElement("div");
  flexWrapper.className =
    "flex flex-col md:flex-row items-center justify-between gap-6";

  // === VIDEO LEFT (smaller) ===
  const leftSide = document.createElement("div");
  leftSide.className = "w-full md:w-[48%] relative";

  const video = document.createElement("video");
  video.src = "assets/vibes.mp4";
  video.className = "w-full rounded-lg border border-yellow-400 cursor-pointer";
  video.autoplay = false;
  video.loop = true;
  video.muted = false;
  video.playsInline = true;
  video.controls = false;

  // Play on click
  video.addEventListener("click", () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  leftSide.appendChild(video);

  // === STACK IMAGE RIGHT ===
  const rightSide = document.createElement("div");
  rightSide.className = "w-full md:w-[48%]";

  const stackWrapper = document.createElement("div");
  stackWrapper.className =
    "relative w-full h-[250px] overflow-hidden rounded-lg border border-yellow-400";

  const memes = [
    "assets/g1.webp",
    "assets/g2.webp",
    "assets/g3.webp",
    "assets/g4.webp",
    "assets/g5.webp",
    "assets/g6.webp",
  ];

  memes.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `LBXBT Meme ${index + 1}`;
    img.className = `
      absolute inset-0 w-full h-full object-cover rounded-lg 
      opacity-0 animate-loopDown z-[${index + 1}]
      delay-${index}s
    `;
    stackWrapper.appendChild(img);
  });

  rightSide.appendChild(stackWrapper);
  flexWrapper.append(leftSide, rightSide);
  container.append(heading, desc, flexWrapper);
  section.appendChild(container);

  // === CSS Animation
  const style = document.createElement("style");
  style.textContent = `
    @keyframes loopDown {
      0%   { transform: translateY(-100%); opacity: 0; }
      20%  { transform: translateY(20%);  opacity: 1; }
      40%  { transform: translateY(0);    opacity: 1; }
      60%  { opacity: 1; }
      80%  { opacity: 0; }
      100% { transform: translateY(100%); opacity: 0; }
    }

    .animate-loopDown {
      animation: loopDown 6s ease-in-out infinite;
      position: absolute;
    }

    ${memes
      .map((_, i) => `.delay-${i}s { animation-delay: ${i}s; }`)
      .join("\n")}
  `;
  document.head.appendChild(style);

  return section;
}
