/* Typewriter 1 */
const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const textArray = [
  "Web Development",
  "Logo Designing",
  "App Development",
  "Copywriting",
  "Google Marketing",
];

let textArrayIndex = 0;
let charIndex = 0;

const erase = () => {
  if (charIndex > 0) {
    cursor.classList.remove("blink");
    typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 80);
  } else {
    cursor.classList.add("blink");
    textArrayIndex++;
    if (textArrayIndex > textArray.length - 1) {
      textArrayIndex = 0;
    }
    setTimeout(type, 100);
  }
};

const type = () => {
  if (charIndex <= textArray[textArrayIndex].length - 1) {
    cursor.classList.remove("blink");
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 120);
  } else {
    cursor.classList.add("blink");
    setTimeout(erase, 1000);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  type();
});

/* Typewriter 2 */
const typedText2 = document.querySelector(".typed-text2");
const cursor2 = document.querySelector(".cursor2");

const textArray2 = [
  "Web Development",
  "Logo Designing",
  "App Development",
  "Copywriting",
  "Google Marketing",
];

let textArrayIndex2 = 0;
let charIndex2 = 0;

const erase2 = () => {
  if (charIndex2 > 0) {
    cursor2.classList.remove("blink2");
    typedText2.textContent = textArray2[textArrayIndex2].slice(
      0,
      charIndex2 - 1
    );
    charIndex2--;
    setTimeout(erase2, 80);
  } else {
    cursor2.classList.add("blink2");
    textArrayIndex2++;
    if (textArrayIndex2 > textArray2.length - 1) {
      textArrayIndex2 = 0;
    }
    setTimeout(type2, 100);
  }
};

const type2 = () => {
  if (charIndex2 <= textArray2[textArrayIndex2].length - 1) {
    cursor2.classList.remove("blink2");
    typedText2.textContent += textArray2[textArrayIndex2].charAt(charIndex2);
    charIndex2++;
    setTimeout(type2, 120);
  } else {
    cursor2.classList.add("blink2");
    setTimeout(erase2, 1000);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  type2();
});

/* Typewriter 3 */
const typedText3 = document.querySelector(".typed-text3");
const cursor3 = document.querySelector(".cursor3");

const textArray3 = [
  "Web Development",
  "Logo Designing",
  "App Development",
  "Copywriting",
  "Google Marketing",
];

let textArrayIndex3 = 0;
let charIndex3 = 0;

const erase3 = () => {
  if (charIndex3 > 0) {
    cursor3.classList.remove("blink3");
    typedText3.textContent = textArray3[textArrayIndex3].slice(
      0,
      charIndex3 - 1
    );
    charIndex3--;
    setTimeout(erase3, 80);
  } else {
    cursor3.classList.add("blink3");
    textArrayIndex3++;
    if (textArrayIndex3 > textArray3.length - 1) {
      textArrayIndex3 = 0;
    }
    setTimeout(type3, 100);
  }
};

const type3 = () => {
  if (charIndex3 <= textArray3[textArrayIndex3].length - 1) {
    cursor3.classList.remove("blink3");
    typedText3.textContent += textArray3[textArrayIndex3].charAt(charIndex3);
    charIndex3++;
    setTimeout(type3, 120);
  } else {
    cursor3.classList.add("blink3");
    setTimeout(erase3, 1000);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  type3();
});

// Navigation Menu

const burger = document.querySelector(".burger");
const burgerList = document.querySelector(".burger-list");
const cross = document.querySelector(".cross");

burger.addEventListener("click", () => {
  burgerList.style.transform = "translateX(0)";
});

cross.addEventListener("click", () => {
  burgerList.style.transform = "translateX(-150%)";
});
