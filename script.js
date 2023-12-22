const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.onclick = () => {
  if (!mobileMenu.classList.contains("show-mobile-menu")) {
    mobileMenu.classList.add("show-mobile-menu");
    mobileMenu.classList.remove("hide-mobile-menu");
    hamburger.style.display = "none";
    closeBtn.style.display = "block";
  }
};

closeBtn.onclick = () => {
  if (!mobileMenu.classList.contains("hide-mobile-menu")) {
    mobileMenu.classList.add("hide-mobile-menu");
    mobileMenu.classList.remove("show-mobile-menu");
    hamburger.style.display = "block";
    closeBtn.style.display = "none";
  }
};

// RESPONSIVE DISPLAY
function windowResize() {
  if (document.documentElement.clientWidth > 700) {
    hamburger.style.display = "none";
    closeBtn.style.display = "none";
    mobileMenu.classList.remove("hide-mobile-menu");
    mobileMenu.classList.remove("show-mobile-menu");
  } else if (document.documentElement.clientWidth <= 700) {
    hamburger.style.display = "block";
    closeBtn.style.display = "none";
    mobileMenu.classList.remove("hide-mobile-menu");
    mobileMenu.classList.remove("show-mobile-menu");
  }
}

window.addEventListener("resize", windowResize);

// CHOICE
const choiceElements = document.querySelectorAll(".choice div");
const section2Image = document.querySelector(".choice-image");
const section2Title = document.querySelector(".choice-title");
const section2Content = document.querySelector(".choice-content");

const contentArray = [
  {
    image: "images/illustration-features-tab-1.svg",
    title: "Bookmark in one click",
    content:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    image: "images/illustration-features-tab-2.svg",
    title: "Intelligent search",
    content:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    image: "images/illustration-features-tab-3.svg",
    title: "Share your bookmarks",
    content:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];

choiceElements.forEach((element, index) => {
  element.addEventListener("click", () => {
    choiceElements.forEach((el) => el.classList.remove("active"));
    element.classList.add("active");

    const { image, title, content } = contentArray[index];
    section2Image.src = image;
    section2Title.textContent = title;
    section2Content.textContent = content;
  });
});

// FAQ
const faqContainers = document.querySelectorAll(".faq-container");

faqContainers.forEach((container) => {
  const questionContainer = container.querySelector(".question-container");
  const answer = container.querySelector(".answer");
  const svg = questionContainer.querySelector("svg");
  const path = questionContainer.querySelector('svg path');

  questionContainer.addEventListener("click", () => {
    answer.style.display = answer.style.display === "block" ? "none" : "block";
    container.classList.toggle("active");
    const rotateValue = container.classList.contains("active") ? "180deg" : "0";
    const strokeColor = container.classList.contains("active")
      ? "#fa5757"
      : "#5267DF";

    svg.style.transform = `rotate(${rotateValue})`;
    path.style.stroke = strokeColor;
  });
});

// EMAIL
const validateEmail = () => {
  const emailInput = document.getElementById('email-input');
  const errorIcon = document.querySelector('.error-icon');
  const errorMessage = document.querySelector('.error-message');
  const isValidEmail = /\S+@\S+\.\S+/.test(emailInput.value);

  if (!isValidEmail || emailInput.value === '') {
      emailInput.style.border = "2px solid #fa5757";
      errorIcon.style.display = "block"
      errorMessage.style.display = "block"
  } else {
      emailInput.style.border = "2px solid #ffffff";
      emailInput.value = "";
      errorIcon.style.display = "none"
      errorMessage.style.display = "none"
  }
};
