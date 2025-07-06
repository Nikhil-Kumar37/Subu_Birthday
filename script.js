// 🎁 Secret Button Action
document.getElementById('secretBtn').onclick = () => {
  alert("You found the secret! 😘\n\nThis button may be small, but the love I feel for you is endless.\n\nNow that you've clicked it… you officially owe me one forehead kiss, one tight hug, and one 'I love you' — right now. 💋\n\nI love you, Subu. Forever and ever.");
};

// 🎵 Music Toggle
const music = document.getElementById('bgMusic');
document.getElementById('playMusic').onclick = () => {
  music.paused ? music.play() : music.pause();
};

// 🌸 Romantic Emoji Rain
function dropFloatingEmoji() {
  const emojis = ["🌸", "🌷", "💐", "🌺", "❤️", "💞"];
  const emoji = document.createElement("div");
  emoji.classList.add("floating-emoji");
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  // Random horizontal position, speed & size
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.animationDuration = (3 + Math.random() * 4) + "s";
  emoji.style.fontSize = (1.2 + Math.random() * 2) + "rem";

  document.body.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 8000);
}

setInterval(dropFloatingEmoji, 250); // Starts emoji rain

// ⏳ Birthday Countdown
function countdown() {
  const birthday = new Date("July 18, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const diff = birthday - now;

  const el = document.getElementById("countdown");
  if (!el) return;

  if (diff <= 0) {
    el.innerHTML = "🎂 It’s Subu’s Birthday! 🎉";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  el.innerHTML = `🎉 Only ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds left until Subu's Birthday! 🎂`;
}

setInterval(countdown, 1000);
countdown(); // Run once at load
