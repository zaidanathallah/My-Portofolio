

function hamburg() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(0px)";
}
function cancel() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(-500px)";
}

// Animasi Menulis

const texts = [
  "Data Science",
  "Full stack developer ",
  "UI/UX Designer",
  "content creator",
];

let speed = 100;

const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
  if (charcterIndex < texts[textIndex].length) {
    textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
    charcterIndex++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  if (textElements.innerHTML.length > 0) {
    textElements.innerHTML = textElements.innerHTML.slice(0, -1);
    setTimeout(eraseText, 50);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    charcterIndex = 0;
    setTimeout(typeWriter, 500);
  }
}

window.onload = typeWriter;

// Add CV download functionality
document.addEventListener("DOMContentLoaded", function () {
  const downloadBtn = document.getElementById("downloadCV");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", function () {
      const cvPath = "img/MY CV.pdf";
      const tempLink = document.createElement("a");
      tempLink.href = cvPath;
      tempLink.setAttribute("download", "my CV.pdf");
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
    });
  }
});
