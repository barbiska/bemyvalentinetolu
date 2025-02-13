const quizData = [
    {
      question: "Are you ready for this quiz?",
      options: ["yes", "yes", "igen"],
      answer: "igen",
    },
    {
        question: "What was the reason why i went to your house the first time?",
        options: ["you invited me", "you were sick you needed Neocitran", "cleaning"],
        answer: "you were sick you needed Neocitran",
    },
    {
        question: "What was our first anime we watched together?",
        options: ["Jujutsu Kaisen", "One Piece", "Pokemon"],
        answer: "One Piece",
    },
    {
        question: "What was the first food i made for you?",
        options: ["gulash", "cookies", "i never cook for you", "pasta"],
        answer: "cookies",
    },
    {
        question: "What was the first exercise i tried to explain to you in the gym?",
        options: ["deadlift", "pullups", "lat pushdown", "benchpress"],
        answer: "lat pushdown",
    },
    {
        question: "What was the first food what you made for me?",
        options: ["asian tofu", "tortilla", "popcorn", "pasta"],
        answer: "asian tofu",
    },
    {
        question: "Which one is my favorite parfume, the same what you did wear the first time when we kissed?",
        options: ["Armani Si", "Givenchy L'Interdit", "Zara Sweet Caramel"],
        answer: "Givenchy L'Interdit",
    },
    {
        question: "What is my favorite cartoon?",
        options: ["Aladdin", "Mulan", "Shrek", "Tangled", "Frozen", "Ratatouille"],
        answer: "Mulan",
    },
    {
        question: "What do you think which is my favorite clothing what i stole from you?",
        options: ["Shein jeans", "green H&M sweatshirt", "black Naruto hoodie", "Attack on Titan shirt"],
        answer: "Attack on Titan shirt",
    },
    {
        question: "Who is my favorite The Office character?",
        options: ["Dwight", "Toby", "Angela", "Jan", "Michael"],
        answer: "Dwight",
    },
    {
        question: "Which one is my favortie of Dua Lipa's hair styles?",
        options: ["blonde", "red", "short black", "peekaboo", "long black"],
        answer: "short black",
    },
    {
        question: "What is my favorite color?",
        options: ["Red", "Black", "Pink", "Purple"],
        answer: "Black",
    },
    {
        question: "WILL YOU BE MY VALENTINE?",
        options: ["yes", "yes", "yes", "yes"],
        answer: "yes",
    },
      {
        question: "just in case again: WILL YOU BE MY VALENTINE🥹?",
        options: ["yes", "yes", "yes", "yes"],
        answer: "yes",
      },
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const quizContainer = document.getElementById("quiz");
  const nextButton = document.getElementById("next");
  const resultContainer = document.getElementById("result");
  
  function loadQuestion() {
    quizContainer.innerHTML = ""; // Clear the previous question
  
    if (currentQuestion < quizData.length) {
      const questionElement = document.createElement("h3");
      questionElement.textContent = quizData[currentQuestion].question;
      quizContainer.appendChild(questionElement);
  
      quizData[currentQuestion].options.forEach((option) => {
        const label = document.createElement("label");
        label.innerHTML = `
          <input type="radio" name="answer" value="${option}">
          ${option}
        `;
        quizContainer.appendChild(label);
      });
  
      nextButton.style.display = "block";
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quizContainer.style.display = "none";
    nextButton.style.display = "none";
  
    const scorePercentage = (score / quizData.length) * 100;
    let resultMessage = `You scored ${score} out of ${quizData.length}!`;
    let imageUrl = "";
  
    // Choose an image based on the score
    if (scorePercentage >= 100) {
      imageUrl = "https://c.tenor.com/FdrN9R_kgwoAAAAC/the-office-kevin-malone.gif"; // Good result GIF
      resultMessage += " You are AMAZING! ❤️";
  
      resultContainer.innerHTML = `
        <p>${resultMessage}</p>
        <img src="${imageUrl}" alt="Result Image" style="max-width: 100%; height: auto;">
        <br>
        <button onclick="window.open('https://www.youtube.com/watch?v=AiIBKcd4m5Q', '_blank')" 
                style="background-color:rgb(92, 44, 173); color: white; padding: 10px 20px; font-size: 14px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;">
          CLICK HERE to see a little gift! 😍
        </button>
      `;
    } else if (scorePercentage >= 50) {
      imageUrl = "https://i.pinimg.com/originals/cb/8d/14/cb8d149954810e68eec4663fbe463599.gif"; // Medium result GIF
      resultMessage += " Not bad keep going 🥹!";
    } else {
      imageUrl = "https://media4.giphy.com/media/5xtDarxOHIVfDcAoiqI/giphy.gif?cid=6c09b9529eme730nnf4mapn8wxmsl734ie6oui7bpkte5rli&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"; // Bad result GIF
      resultMessage += " JAJ FÚJ 🤨";
    }
  
    if (scorePercentage < 100) {
      resultContainer.innerHTML = `
        <p>${resultMessage}</p>
        <img src="${imageUrl}" alt="Result Image" style="max-width: 100%; height: auto;">
      `;
    }
  }

  function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = `-10px`;
    heart.style.fontSize = `${Math.random() * 30 + 10}px`;
    heart.style.animation = "fall 4s linear";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }
  
  setInterval(createHeart, 200);
  
  
  
  function handleNext() {
    const selected = document.querySelector(`input[name="answer"]:checked`);
    if (!selected) {
      alert("Please select an answer!");
      return;
    }
  
    if (selected.value === quizData[currentQuestion].answer) {
      score++;
    }
  
    currentQuestion++;
    loadQuestion();
  }
  
  nextButton.addEventListener("click", handleNext);
  
  loadQuestion();
