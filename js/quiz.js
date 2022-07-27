function Questions (title , answers , correct) {
    this.title = title;
    this.answers = answers;
    this.correct = correct;
}

let quest1 = new Questions ("HTML ID's can only be used once ?" , ["true" , "false"] , 1)
let quest2 = new Questions ("What is not an HTML5 element ?" , ["section" , "header" , "blink" , "main"] , 3)
let quest3 = new Questions ("the ul tag create an ordered list with numbers." , ["true" , "false"] , 2)
let quest4 = new Questions ("The # symbol specifies that the selector is ?" , ["id" , "class"] , 1)
let quest5 = new Questions ("What property is used to change the text color of an element ?" , ["fontcolor" , "textcolor" , "color"] , 3)
let quest6 = new Questions ("Are CSS property names case-sensitive ?" , ["true" , "false"] , 2)
let quest7 = new Questions ("JavaScript is the same as Java." , ["true" , "false"] , 2)
let quest8 = new Questions ("What keyword is used to create a JavaScript variable" , ["variable" , "varies" , "string" , "var"] , 4)
let quest9 = new Questions ("How can you print information to the console ?" , ["console(info)" , "console(log)" , "console.log(info)"] , 3)
let quest10 = new Questions ("How do you call the function 'myFunction'?" , ["myFunction" , "myFunction()"] , 2)

function quiz () {
    this.Questions = [];

    this.nbrCorrect = 0;

    this.addQst = function (question) {
        this.Questions.push(question)
    }
}

let StartBtn = document.getElementById("welc-scrn-btn")

StartBtn.addEventListener("click" , () => {
     let qst1 = document.getElementById("quest-screen")
     let welc = document.getElementById("welc-screen")
     qst1.style.display = "block"
     welc.style.display = "none"
})

