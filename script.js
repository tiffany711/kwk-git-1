const messages = ["Hey there, I'm Tiffany!", "Welcome to my site", ];
let i = 0;
let char = 0;

function type() {
  if (char < messages[i].length) {
    document.getElementById("typed").textContent += messages[i].charAt(char);
    char++;
    setTimeout(type, 100);
  } else {
    setTimeout(() => {
      document.getElementById("typed").textContent = '';
      char = 0;
      i = (i + 1) % messages.length;
      type();
    }, 2000);
  }
}

type();
