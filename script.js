// 題目資料：公隆新手村新人測驗
const questions = [
  {
    question: "1. 請問公隆集團在哪一年正式成立，開始其企業旅程？",
    answers: [
      { text: "1955 年", correct: false },
      { text: "1965 年", correct: true },
      { text: "1975 年", correct: false },
      { text: "1985 年", correct: false },
    ],
  },
  {
    question: "2. 公隆集團的全球員工人數大約是多少？",
    answers: [
      { text: "約 200 人", correct: false },
      { text: "約 500 人", correct: true },
      { text: "約 800 人", correct: false },
      { text: "約 1,000 人", correct: false },
    ],
  },
  {
    question: "3. 公隆集團的總部坐落於台北市的哪一條路上？",
    answers: [
      { text: "忠孝東路", correct: false },
      { text: "基隆路", correct: true },
      { text: "南京東路", correct: false },
      { text: "信義路", correct: false },
    ],
  },
  {
    question: "4. 公隆集團強調的企業文化「HIS」，其中的「I」代表的是哪一種核心精神？",
    answers: [
      { text: "Integrity（誠信）", correct: false },
      { text: "Innovation（創新）", correct: true },
      { text: "Improvement（改善）", correct: false },
      { text: "Inspiration（啟發）", correct: false },
    ],
  },
  {
    question:
      "5. 公隆集團的使命（MISSION）是成為不斷順勢前進的「3S 公司」，請問這三個 S 指的是哪三個核心服務面向？",
    answers: [
      { text: "Service、Saving、Support", correct: false },
      { text: "Solution、Service、Saving", correct: true },
      { text: "System、Service、Saving", correct: false },
      { text: "Solution、Support、Safety", correct: false },
    ],
  },
  {
    question:
      "6. 在績效管理中，公司除了評估「做什麼 (What)」的結果外，還會要求員工展現哪一項基於核心價值的行為？",
    answers: [
      { text: "工作年資", correct: false },
      { text: "DNA 行為指標 (How)", correct: true },
      { text: "加班時數", correct: false },
      { text: "專案數量", correct: false },
    ],
  },
  {
    question:
      "7. 公司實行彈性上班制度，請問週一至週四的下班彈性時段為何？",
    answers: [
      { text: "16:00 – 17:00", correct: false },
      { text: "17:00 – 18:00", correct: true },
      { text: "17:30 – 18:30", correct: false },
      { text: "18:00 – 19:00", correct: false },
    ],
  },
  {
    question: "8. 公司採用「秘密薪制度」，以下何者為正確保密原則？",
    answers: [
      { text: "可以互相討論薪資，只要不寫下來即可", correct: false },
      {
        text: "嚴禁向他人洩露自己的薪酬與職等，亦不得打聽他人的薪酬與職等",
        correct: true,
      },
      { text: "不在公司場合講就可以了", correct: false },
      { text: "只要對方願意說就能問", correct: false },
    ],
  },
  {
    question:
      "9. 新進人員的試用期工作訓練計畫是由誰制定？為期多久？",
    answers: [
      { text: "由人資制定，1 個月", correct: false },
      { text: "由直屬主管制定，3 個月", correct: true },
      { text: "由同事討論，6 個月", correct: false },
      { text: "由個人規劃，2 週", correct: false },
    ],
  },
  {
    question:
      "10. 員工需服務滿多久才能領取中秋與端午的「佳節禮金」？",
    answers: [
      { text: "到職當月即可領取", correct: false },
      { text: "年資滿三個月以上", correct: true },
      { text: "年資滿一年以上", correct: false },
      { text: "年資滿兩年以上", correct: false },
    ],
  },
];

// 取得畫面元素
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const endScreen = document.getElementById("end-screen");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const nextBtn = document.getElementById("next-btn");

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const questionNumberElement = document.getElementById("question-number");
const scoreElement = document.getElementById("score");
const finalScoreElement = document.getElementById("final-score");

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

// 綁定事件
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  showQuestion();
});

// 開始遊戲
function startGame() {
  currentQuestionIndex = 0;
  score = 0;
  scoreElement.textContent = "分數：0";

  startScreen.classList.add("hidden");
  endScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  showQuestion();
}

// 顯示題目
function showQuestion() {
  resetState();

  if (currentQuestionIndex >= questions.length) {
    return endGame();
  }

  const questionData = questions[currentQuestionIndex];
  questionElement.textContent = questionData.question;
  questionNumberElement.textContent = `第 ${
    currentQuestionIndex + 1
  } 題 / 共 ${questions.length} 題`;

  questionData.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");
    if (answer.correct) {
      button.dataset.correct = "true";
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

// 重置狀態
function resetState() {
  answered = false;
  nextBtn.classList.add("hidden");

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// 選擇答案
function selectAnswer(e) {
  if (answered) return;
  answered = true;

  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === "true";

  if (correct) {
    selectedButton.classList.add("correct");
    score++;
    scoreElement.textContent = `分數：${score}`;
  } else {
    selectedButton.classList.add("wrong");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextBtn.classList.remove("hidden");
}

// 結束畫面
function endGame() {
  quizScreen.classList.add("hidden");
  endScreen.classList.remove("hidden");
  finalScoreElement.textContent = `你的分數是：${score} / ${questions.length}`;
}
