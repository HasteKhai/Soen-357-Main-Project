let currentQuestion = 1;
let score = 0;
let num1, num2, answer;
let selectedOperator;
// Function to generate a math question
function generateQuestion() {
    const operators = ['+', '-', '*', '/'];
    selectedOperator = operators[Math.floor(Math.random() * operators.length)];
     // Generate numbers and answer based on the selected operator
    switch (selectedOperator) {
        case '+':
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * 10) + 1;
            answer = num1 + num2;
            break;
        case '-':
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * num1) + 1;
            answer = num1 - num2;
            break;
        case '*':
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * num1%5) + 1;
            answer = num1 * num2;
            break;
        case '/':
            num2 = Math.floor(Math.random() * 10) + 1;
            num1 = num2 * (Math.floor(Math.random() * num2%5) + 1);
            answer = num1 / num2;
            break;
    }
  // Return the question, options, and answer
    return {
        question: `Question ${currentQuestion}
What is ${num1} ${selectedOperator} ${num2}?`,
        options: generateOptions(answer),
        answer: answer.toString()
    };
}
// Function to generate options for the question
function generateOptions(answer) {
    const options = [answer.toString()];
    // Keep adding random options until there are 4 options
    while (options.length < 4) {
        const randomOption = Math.floor(Math.random() * 40) + 1;

        if (!options.includes(randomOption.toString())) {
            options.push(randomOption.toString());
        }
    }
    // Shuffle the options
    return shuffle(options);
}
// Function to shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
// Function to load a new question
function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const currentQ = generateQuestion();
    const starBox = document.getElementById("starbox");

    questionElement.textContent = currentQ.question;
    optionsElement.innerHTML = "";
    starBox.textContent = '';
    starBox.style.height = "10px";
    // Display the question and options
    currentQ.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = function() {
            checkAnswer(option, currentQ.answer);
        };
        optionsElement.appendChild(button);
    });
}
// Function to check the answer selected by the user
function checkAnswer(selectedOption, correctAnswer) {
    const options = document.getElementById("options").querySelectorAll("button");
    options.forEach(option => {
        if (option.textContent === correctAnswer) {
            option.classList.add("correct");
        } else if (option.textContent === selectedOption) {
            option.classList.add("wrong");
        }
        option.disabled = true;
    });

    if (selectedOption === correctAnswer) {
        score++;
        document.getElementById("score").textContent = score;
    }
    drawStars();
    document.getElementById("nextBtn").disabled = false;

}
// Function to load the next question
function nextQuestion() {
    const options = document.getElementById("options").querySelectorAll("button");
    options.forEach(option => {
        option.classList.remove("correct", "wrong");
        option.disabled = false;
    });

    currentQuestion++;
     // If there are more questions, load the next one; otherwise, end the game
    if (currentQuestion <= 10) {
        document.getElementById("nextBtn").disabled = true;
        loadQuestion();
    } else {
        alert("Game Over! Your score is: " + score);
        currentQuestion = 1;
        score = 0;
        document.getElementById("score").textContent = score;
        loadQuestion();
    }
}
// Function to restart the game
function restartGame() {
    currentQuestion = 1;
    score = 0;
    document.getElementById("score").textContent = score;
    loadQuestion();
    document.getElementById("nextBtn").disabled = true;
}

function drawStars() {
    let container = document.getElementById("starbox");
    //Need different function for each operation
    //Addition - two rows of yellow stars
    //subtraction - one row of yellow stars, one row of black stars, then the third row of remaining yellow stars
    //Multiplication - x rows of y yellow stars
    //division - multiple rows
    let Offset = container.getBoundingClientRect().top - 60;

    //Addition
    if(selectedOperator == '+'){
        let count = 0;
        for (let i = 0; i < num1; i++) {
            let newI = document.createElement("img");
            newI.classList.add("star");
            newI.src = "Images/star.png"
            newI.style.left = 30*count + "px";
            newI.style.top = Offset + "px";

            container.appendChild(newI);
    
            count += 1;
        }
        count = 0.5
        for (let i = 0; i < num2; i++){
            let newI = document.createElement("img");
            newI.classList.add("star");
            newI.src = "Images/star.png"
            newI.style.left = 30*count + "px";
            newI.style.top = 50 + Offset + "px";
    
            container.appendChild(newI);
    
            count += 1;
        }
        container.style.height = "110px";
    }

    //Subtraction
    else if(selectedOperator == '-'){
        let count = 0;
        for (let i = 0; i < num1; i++) {
            let newI = document.createElement("img");
            newI.classList.add("star");
            newI.src = "Images/star.png"
            newI.style.left = 30*count + "px";
            newI.style.top = Offset + "px";
            container.appendChild(newI);
    
            count += 1;
        }
        count = 0;
        for (let i = 0; i < num2; i++){
            let newI = document.createElement("img");
            newI.classList.add("star");
            newI.src = "Images/blackstar.png"
            newI.style.left = 30*count + "px";
            newI.style.top = 50 + Offset + "px";
    
            container.appendChild(newI);
    
            count += 1;
        }

        count = 0;
        let hr = document.createElement("hr");
        hr.style.top = "315px";
        let hrwidth = 35*num1;
        hr.style.width = 10 + hrwidth + "px";
        hr.style.position = "absolute";
        container.appendChild(hr);

        for (let i = 0; i < answer; i++){
            let newI = document.createElement("img");
            newI.classList.add("star");
            newI.src = "Images/star.png"
            newI.style.left = 30*num2 + 30*count + "px";
            newI.style.top = 110 + Offset + "px";
    
            container.appendChild(newI);
    
            count += 1;
        }
        container.style.height = "160px";
    }

    //multiplication
    else if(selectedOperator == '*'){
        if(num1 > num2){
            let temp = num2;
            num2 = num1;
            num1 = temp;
        }
        for (let i = 0; i < num1; i++){
            let count = 0 + i*0.5;
            for (let j = 0; j < num2; j++){
                let newI = document.createElement("img");
                newI.classList.add("star");
                newI.src = "Images/star.png"
                newI.style.left = 30*count + "px";
                newI.style.top = Offset + 50*i + "px";
                container.appendChild(newI);
                count += 1;
            }
        }
        container.style.height = num1*50 + 10 + "px";
    }

    //division
    else if(selectedOperator == '/'){
        //num2 is the number of rows this time
        //If 6 / 2, then two rows of three, one of which is black stars
        //If 6 / 3, then three rows of two, two of which are black stars
        //First row of stars are yellow
        for (let i = 0; i < num2; i++){
            let count = 0 + i*0.5;
            if(i == 0){
                for (let j = 0; j < answer; j++){
                    let newI = document.createElement("img");
                    newI.classList.add("star");
                    newI.src = "Images/star.png"
                    newI.style.left = 30*count + "px";
                    newI.style.top = Offset + "px";
                    container.appendChild(newI);
                    count += 1;
                }
            } else {
                for (let j = 0; j < answer; j++){
                    let newI = document.createElement("img");
                    newI.classList.add("star");
                    newI.src = "Images/blackstar.png"
                    newI.style.left = 30*count + "px";
                    newI.style.top = Offset + 50*i + "px";
                    container.appendChild(newI);
                    count += 1;
                }
            }
        }
        container.style.height = num2*50 + 10 + "px";
    }
}
// Load the first question when the page loads
loadQuestion();
