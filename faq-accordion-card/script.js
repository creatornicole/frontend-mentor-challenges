
const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');

answers.forEach(answer => {
  answer.style.display = "none";
});

questions.forEach(question => {

  question.addEventListener('click', (e) => {
    let questionId = question.id;
    let answerId;
    let arrId;

    if(questionId == "qst1") {
      answerId = "ans1";
      arrId = "arr1";
    } else if(questionId == "qst2") {
      answerId = "ans2";
      arrId = "arr2";
    } else if(questionId == "qst3") {
      answerId = "ans3";
      arrId = "arr3";
    } else if(questionId == "qst4") {
      answerId = "ans4";
      arrId = "arr4";
    } else if(questionId == "qst5") {
      answerId = "ans5";
      arrId = "arr5";
    }

    let questionElement = document.getElementById(questionId);
    let answerElement = document.getElementById(answerId);
    let arrowElement = document.getElementById(arrId);

    if(answerElement.style.display !== "none") {
      answerElement.style.display = "none";
      questionElement.style.fontWeight = "400";
      questionElement.style.color = "var(--dark-grayish-blue)";
      arrowElement.style.transform = "rotate(0deg)";
    } else {
      answerElement.style.display = "block";
      questionElement.style.fontWeight = "700";
      questionElement.style.color = "var(--very-dark-desaturated-blue)";
      arrowElement.style.transform = "rotate(180deg)";
    }
  });
});
