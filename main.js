function newImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("assets/2_i.png")) {
        image.src = "assets/1_i.png";
    } else {
        image.src = "assets/2_i.png";
    }
}
function redirect()
{

window.location.href="quiz_gac101.html";
}
function back()
{

window.location.href="index.html";
}

const Questions = [{
        id: 0,
        q: "What information should go on the footer of your GAC document?",
        a: [{ text: "ID, date", isCorrect: false },
            { text: "Name, title", isCorrect: false },
            { text: "Date, page #", isCorrect: true },
            { text: "Name, ID", isCorrect: false }
        ]

    },
    {
        id: 1,
        q: "What word automatic table of contents must be used in a GAC document?",
        a: [{ text: "Table 1", isCorrect: false, isSelected: false },
            { text: "Table 4", isCorrect: false },
            { text: "Table 3", isCorrect: false },
            { text: "Table 2", isCorrect: true }
        ]

    },
    {
        id: 2,
        q: "What is the reference format?",
        a: [{ text: "Harvard", isCorrect: false },
            { text: "APA", isCorrect: false },
            { text: "GAC", isCorrect: true },
            { text: "Oxford", isCorrect: false }
        ]

      },
      {
          id: 3,
          q: "What type of internline must be used when writting a GAC document?",
          a: [{ text: "1", isCorrect: false },
              { text: "1,15", isCorrect: false },
              { text: "2", isCorrect: true },
              { text: "2,15", isCorrect: false }
          ]

        },
        {
            id: 4,
            q: "What type of font must be used for the body of a GAC document?",
            a: [{ text: "Calibri L.", isCorrect: false },
                { text: "Arial", isCorrect: false },
                { text: "Times N.R.", isCorrect: true },
                { text: "Cambria M.", isCorrect: false }
            ]
        },

]

// Set start
var start = true;

// Iterate
function iterate(id) {

    // Getting the result display section
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";

    // Getting the question
    const question = document.getElementById("question");


    // Setting the question text
    question.innerText = Questions[id].q;
    question.style.fontFamily="Cambria Math"; question.style.backgroundColor = "#F7A6BB"; question.style.color="white"; question.style.fontSize="20pt"; question.style.textAlign="center";

    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');

    // Providing option text
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;

    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;

    var selected = "";

  // Show selection for op1
  op1.addEventListener("click", () => {
      op1.style.backgroundColor = "#FA86A2"; op1.style.fontFamily="Cambria Math"; op1.style.color="white";
      op2.style.backgroundColor = "#FAC2D1"; op2.style.fontFamily="Cambria Math"; op2.style.color="white";
      op3.style.backgroundColor = "#FAC2D1"; op3.style.fontFamily="Cambria Math"; op3.style.color="white";
      op4.style.backgroundColor = "#FAC2D1"; op4.style.fontFamily="Cambria Math"; op4.style.color="white";
      selected = op1.value;
  })

  // Show selection for op2
  op2.addEventListener("click", () => {
      op1.style.backgroundColor = "#FAC2D1"; op1.style.fontFamily="Cambria Math"; op1.style.color="white";
      op2.style.backgroundColor = "#FA86A2"; op2.style.fontFamily="Cambria Math"; op2.style.color="white";
      op3.style.backgroundColor = "#FAC2D1"; op3.style.fontFamily="Cambria Math"; op3.style.color="white";
      op4.style.backgroundColor = "#FAC2D1"; op4.style.fontFamily="Cambria Math"; op4.style.color="white";
      selected = op2.value;
  })

  // Show selection for op3
  op3.addEventListener("click", () => {
      op1.style.backgroundColor = "#FAC2D1"; op1.style.fontFamily="Cambria Math"; op1.style.color="white";
      op2.style.backgroundColor = "#FAC2D1"; op2.style.fontFamily="Cambria Math"; op2.style.color="white";
      op3.style.backgroundColor = "#FA86A2"; op3.style.fontFamily="Cambria Math"; op3.style.color="white";
      op4.style.backgroundColor = "#FAC2D1"; op4.style.fontFamily="Cambria Math"; op4.style.color="white";
      selected = op3.value;
  })

  // Show selection for op4
  op4.addEventListener("click", () => {
      op1.style.backgroundColor = "#FAC2D1"; op1.style.fontFamily="Cambria Math"; op1.style.color="white";
      op2.style.backgroundColor = "#FAC2D1"; op2.style.fontFamily="Cambria Math"; op2.style.color="white";
      op3.style.backgroundColor = "#FAC2D1"; op3.style.fontFamily="Cambria Math"; op3.style.color="white";
      op4.style.backgroundColor = "#FA86A2"; op4.style.fontFamily="Cambria Math"; op4.style.color="white";
      selected = op4.value;
  })

  // Grabbing the evaluate button
  const evaluate = document.getElementsByClassName("evaluate");

  // Evaluate method
  evaluate[0].addEventListener("click", () => {
      if (selected == "true") {
          result[0].innerHTML = "True";
          result[0].style.color = "#90A6FF";
      } else {
          result[0].innerHTML = "False";
          result[0].style.color = "#E85280";
      }
  })
}

if (start) {
  iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
  start = false;
  if (id < 5) {
      id++;
      iterate(id);
      console.log(id);
  }

})
