const adviceNumber = document.querySelector(".advice-number");
const adviceText = document.querySelector(".advice-text");
const adviceButton = document.querySelector(".show-advice");

// Shows a random advice when the page is loaded

const showFirstAdvice = () => randomAdvice();

const randomAdvice = async () => {
  try {
    await fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        adviceNumber.innerText = data.slip.id;
        adviceText.innerText = data.slip.advice;
      });
  } catch (error) {
    console.log("Something went wrong:", error);
  }
};

adviceButton.addEventListener("click", randomAdvice);
