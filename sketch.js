let radio;
let feedbackP;
let nextButton;
let correctCount = 0;
let incorrectCount = 0;
let scoreP;
let nameP;
let currentQuestionIndex = 0;

const questions = [
  {
    question: "1+2=?",
    options: ['1', '3', '5', '7'],
    correctOption: 'B'
  },
  {
    question: "10-3=?",
    options: ['1', '3', '5', '7'],
    correctOption: 'D'
  },
  {
    question: "20+5-24=?",
    options: ['1', '3', '5', '7'],
    correctOption: 'A'
  },
  {
    question: "50-5+5+40-85=?",
    options: ['1', '3', '5', '7'],
    correctOption: 'C'
  }
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  createRadioButtons();
  createSubmitButton();
  feedbackP = createP('');
  feedbackP.position(width / 2 - 60, height / 2 + 150); // 調整位置，使回饋訊息在按鈕下方
  scoreP = createP(`答對題數：${correctCount} 答錯題數：${incorrectCount}`);
  scoreP.position(width - 200, 50); // 調整位置，使文字框在右邊
  nameP = createP('410730765廖又蓁');
  nameP.position(50, 50); // 調整位置，使文字框在左邊
}

function draw() {
  resizeCanvas(windowWidth, windowHeight); // 使背景隨視窗大小更改
  background('#e0b1cb');
  drawLeftColumn();
  drawRightColumn();
  displayQuestion();
}

function drawLeftColumn() {
  fill('#ffe5d9');
  rect(0, 0, width / 3, height);
}

function drawRightColumn() {
  fill('#f4acb7');
  rect((2 * width) / 3, 0, width / 3, height);
}

function createRadioButtons() {
  radio = createRadio();
  radio.option('A', questions[currentQuestionIndex].options[0]);
  radio.option('B', questions[currentQuestionIndex].options[1]);
  radio.option('C', questions[currentQuestionIndex].options[2]);
  radio.option('D', questions[currentQuestionIndex].options[3]);
  radio.position(width / 2 - 30, 200); // 調整位置，使選項在題目下方
  radio.style('width', '60px');
  radio.style('display', 'block'); // 使選項垂直排列
}

function createSubmitButton() {
  let submitButton = createButton('送出');
  submitButton.position(width / 2 - 30, height / 2 + 100); // 調整位置，使按鈕在選項下方
  submitButton.mousePressed(submitAnswer);
}

function createNextButton() {
  nextButton = createButton('下一題');
  nextButton.position(width / 2 - 30, height / 2 + 200); // 調整位置，使按鈕在回饋訊息下方
  nextButton.mousePressed(nextQuestion);
}

function displayQuestion() {
  fill(0);
  textSize(32);
  textAlign(CENTER, CENTER); // 垂直和水平置中
  text(questions[currentQuestionIndex].question, width / 2, 150); // 題目在選項上方
}

function submitAnswer() {
  let selected = radio.value();
  if (selected === questions[currentQuestionIndex].correctOption) {
    feedbackP.html('太棒了~答對了~');
    correctCount++;
    createNextButton();
  } else {
    feedbackP.html('答錯囉~再想想');
    incorrectCount++;
  }
  scoreP.html(`答對題數：${correctCount} 答錯題數：${incorrectCount}`);
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    feedbackP.html('');
    radio.value('');
    createRadioButtons();
    nextButton.remove();
  } else {
    feedbackP.html('答題結束');
    nextButton.remove();
  }
}


