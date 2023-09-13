var id = (id)=> document.getElementById(id);
var query = (query)=> document.querySelectorAll(query);

var quiz = id("quiz");
var ques = id("heading");
var a = id("a-text");
var b = id("b-text");
var c = id("c-text");
var d = id("d-text");
var btn = id("Next");
var answer = query(".answer");

const quizapp= [
    {
        question:"What is prayer time of Fajar?",
        a: "5:30 Am",
        b: "6:00 Am",
        c: "4:00 Am",
        d: "4:30 Am",
        correct: "d"

    },
    {
        question:"What is prayer time of Zuhar?",
        a: "2:30 Pm",
        b: "3:00 Pm",
        c: "4:00 Am",
        d: "1:30 Pm",
        correct: "d"
    },
    {
    question:"What is prayer time of Asar?",
    a: "4:30 Pm",
    b: "3:00 Pm",
    c: "5:30 Pm",
    d: "1:30 Pm",
    correct: "c"
},
{
    question:"What is prayer time of Magrib?",
    a: "7:30 Pm",
    b: "6:00 Pm",
    c: "5:30 Pm",
    d: "8:30 Pm",
    correct: "a"
},
{
    question:"What is prayer time of Isha?",
    a: "7:30 Pm",
    b: "9:00 Pm",
    c: "5:30 Pm",
    d: "8:30 Pm",
    correct: "b"
}
];
var clear = () => {
    for (let i = 0; i < answer.length; i++) {
        answer[i].checked = false;
    }
};
var checked = () => {
    var ans;
    for (let i = 0; i < answer.length; i++)
    {
        if(answer[i].checked)
        {
            ans = answer[i].id;
        }
    }
    return ans;
};
var initialscore = 0;
var initialquiz = 0;
var loadquiz = () =>{
    clear ();
    var quizdata = quizapp[initialquiz];
    ques.innerText=quizdata.question;
    a.innerText = quizdata.a;
    b.innerText = quizdata.b;
    c.innerText = quizdata.c;
    d.innerText = quizdata.d;
};
loadquiz();
btn.addEventListener("click",(e) =>{
    
    const s = checked();
    if(s){
        if(s=== quizapp[initialquiz].correct)
        initialscore++;
        initialquiz++;
        if(initialquiz<quizapp.length)
        {
            loadquiz();
        }
        else{
            quiz.innerHTML=`<h2 style="color:blueviolet;font-size:20px;">Your Answer Score is ${initialscore}/${answer.length}</h2>
            <button style="background-color:blueviolet;color:white;padding: 10px 55px; border:none; cursor:pointer; margin-top:20px; border-radius:30px;" onclick="history.go(0)">Play Again</button>
            `;
        }
    }
    else{
        alert("invalid")
    }
});