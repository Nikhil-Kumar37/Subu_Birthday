document.getElementById('secretBtn').onclick = () => {
  alert("You found the secret! 😘\n\nThis button may be small, but the love I feel for you is endless.\n\nNow that you've clicked it… you officially owe me one forehead kiss, one tight hug, and one 'I love you' — right now. 💋\n\nI love you, Subu. Forever and ever.");
};

const music = document.getElementById('bgMusic');
document.getElementById('playMusic').onclick = () => {
  music.paused ? music.play() : music.pause();
};
