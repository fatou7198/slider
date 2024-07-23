const quotes = [
  {
    text: "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.",
    author: "Tanya",
    role: " Front-End Developer",
    image: "image-tanya.jpg",
  },
  {
    text: "Learning to code has been a life-changing experience. The course was comprehensive and the instructors were fantastic. I'm now working as a software engineer at a great company.",
    author: "John",
    role: "Software Engineer",
    image: "image-john.jpg",
  },
  {
    text: "Learning to code has been a life-changing experience. The course was comprehensive and the instructors were fantastic. I'm now working as a software engineer at a great company.",
    author: "TATA",
    role: "Future-developer",
    image: "tima.jpg",
  },
  {
    text: " I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.. ",
    author: "nick",
    role: "Graphic-designer",
    image: "nick.jpeg",
  },
  {
    text: "Learning to code has been a life-changing experience. The course was comprehensive and the instructors were fantastic. I'm now working as a software engineer at a great company.",
    author: "Maria",
    role: "Web-developer",
    image: "maria.jpeg",
  },
];

let currentIndex = 0;

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const quoteRole = document.getElementById("quote-role");
const quoteImage = document.getElementById("quote-image");

document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % quotes.length;
  updateContent();
});

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
  updateContent();
});

function updateContent() {
  const { text, author, role, image } = quotes[currentIndex];
  quoteText.innerHTML = `"${text}"`;
  quoteAuthor.childNodes[0].nodeValue = author + " "; // Update text node before span
  quoteRole.innerHTML = role;
  quoteImage.src = image;
}

updateContent();
