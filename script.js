document.getElementById('secretBtn').onclick = () => {
  alert("You found the secret! 😘\n\nThis button may be small, but the love I feel for you is endless.\n\nNow that you've clicked it… you officially owe me one forehead kiss, one tight hug, and one 'I love you' — right now. 💋\n\nI love you, Subu. Forever and ever.");
};

const music = document.getElementById('bgMusic');
document.getElementById('playMusic').onclick = () => {
  music.paused ? music.play() : music.pause();
};

function countdown() {
  const birthday = new Date("July 18, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const diff = birthday - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML =
      "🎂 It’s Subu’s Birthday! 🎉";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").innerHTML =
    `🎉 Only ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds left until Subu's Birthday! 🎂`;
}

setInterval(countdown, 1000);
