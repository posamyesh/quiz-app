console.log("hii bro ");

const quizData = [
    {
        question : "who invented web development?",
        atext: "virat kohli",
        btext: "Tim cook",
        ctext: "brad nicholas",
        dtext: "Tim Berners Lee",
        correct: "d"
    },{
        question: "which programming language is mostly using world wide 2022?",
        atext: "java",
        btext: "pyton",
        ctext: "java script",
        dtext: "c++",
        correct: "c"
    },{
        question: "what is the currency of united states?",
        atext: "ruby",
        btext: "dollar",
        ctext: "euros",
        dtext: "rupee",
        correct: "b"
    }
]
let currentQuestion = 0;
let score = 0;
const query = document.getElementById("question");
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const element = document.querySelectorAll(".answer");

// just adding event listner without using function so we no need to call this to in an inner function in start.
    for(var i =0; i<element.length;i++){
        element[i].addEventListener("click", function(){
            
            const answer = this.id;
            // console.log(answer);
            const right = quizData[currentQuestion].correct;
            console.log(right);
            document.getElementById("next").classList.remove("hide");
            if(answer==right){
                this.classList.add("correct");
                score++;
                console.log(score);
            }
            else{
                this.classList.add("wrong");
                document.getElementById(right).classList.add("correct");
                
            }
            disableButt();
        })
    }
    


function start(){
    // getSelected();
    document.getElementById("options").classList.remove("hide");
    document.getElementById("start").classList.add("hide");
    query.innerText = quizData[currentQuestion].question;
    a.innerText = quizData[currentQuestion].atext;
    b.innerText = quizData[currentQuestion].btext;
    c.innerText = quizData[currentQuestion].ctext;
    d.innerText = quizData[currentQuestion].dtext;
    
    
}


    function nextQuestion(){
        enableButt();
        currentQuestion++;
        if(currentQuestion>quizData.length-1){
            document.getElementById("answer-container").innerHTML = "<h1>your score is "+score +" out of "+quizData.length+"</h1>";
        }
        else{

            start();
            document.getElementById("next").classList.add("hide");
            const butt = document.querySelectorAll(".answer");
            for(var i=0;i<butt.length;i++){
            butt[i].classList.remove("correct");
            butt[i].classList.remove("wrong");
            }
        }
       

    }
    function disableButt(){
        for(var i=0;i<element.length;i++){
            element[i].disabled=true;
        }
    }
    function enableButt(){
        for(var i=0;i<element.length;i++){
            element[i].disabled=false;
        }
    }
