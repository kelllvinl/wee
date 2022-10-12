const questions = [
    {
        question: "Who is Queen Elizabeth II married to?",
        optionA: "King Kong",
        optionB: "Prince Frog",
        optionC: "Emperor Xi",
        optionD: "Prince Philip", 
        correctOption: "optionD"
    },
  
    {
        question: "Which British film actors have recently won Oscars?",
        optionA: "Tilda Swinton",
        optionB: "Alex Lau",
        optionC: "Jason Li",
        optionD: "Gordon Lau", 
        correctOption: "optionA"
    },
  
    {
        question: "How often do the ministers meet to discuss important issues?",
        optionA: "Daily",
        optionB: "Weekly",
        optionC: "Century",
        optionD: "Monthly", 
        correctOption: "optionD"
    },
  
    {
        question: "Roast beef is a traditional food of which country?",
        optionA: "Northern Ireland",
        optionB: "England",
        optionC: "Wales",
        optionD: "Scotland", 
        correctOption: "optionB"
    },
  
    {
        question: "Who was the first Briton to win the Olympic gold medal in the 10,000 meters?",
        optionA: "Leo Lui",
        optionB: "Simon Li",
        optionC: "Mo Farah",
        optionD: "Micheal Jackson",
        correctOption: "optionC"
    },
  
    {
        question: "Which flower is associated with England?",
        optionA: "Rose",
        optionB: "Bauhinia",
        optionC: "Cannabis",
        optionD: "Daffodil",
        correctOption: "optionA"
    },
  
    {
        question: "When is St.David 's day?",
        optionA: "21st of July",
        optionB: "1st of March",
        optionC: "31th of August",
        optionD: "1st of October", 
        correctOption: "optionB"
    },
  
    {
        question: "Which of these UK landmarks is in Wales?",
        optionA: "Snowdonia",
        optionB: "Loch Lomond",
        optionC: "The Lake District",
        optionD: "The Giant's Causeway", 
        correctOption: "optionA"
    },
  
    {
        question: "What is the capital of England?",
        optionA: "London",
        optionB: "Cardiff",
        optionC: "Victoria City",
        optionD: "Beijing",
        correctOption: "optionA"
    },
  
    {
        question: "When did many Scottish people leave for North America?",
        optionA: "1888",
        optionB: "1989",
        optionC: "1969",
        optionD: "Never", 
        correctOption: "optionC"
    },
  
    {
        question: "When were women given the right to vote at the age of 18?",
        optionA: "Slave Trade",
        optionB: "Education",
        optionC: "Immigration",
        optionD: "Savings Accounts", 
        correctOption: "optionC"
    },
  
    {
        question: "The longest river in the United Kingdom is ?",
        optionA: "River Severn",
        optionB: "River Mersey",
        optionC: "River Trent",
        optionD: "River Tweed",
        correctOption: "optionA"
    },
  
    {
        question: "What was encouraged to develop the UK economy in 1950?",
        optionA: "Slave Trade", 
        optionB: "Education", 
        optionC: "Immigration",  
        optionD: "Savings Accounts",
        correctOption: "optionB"
    },
  
    {
        question: "Which national team won the football World cup in 2018 ?",
        optionA: "England",
        optionB: "Brazil",
        optionC: "Germany",
        optionD: "France",
        correctOption: "optionD"
    },
  
    {
        question: "Which of these was a British plane in WWII?",
        optionA: "Mig-21",
        optionB: "PAK-22",
        optionC: "F-23",
        optionD: "Hurricane", 
        correctOption: "optionD"
    },
  
    {
        question: "What percentage of the total population lives in Scotland?",
        optionA: "10%",
        optionB: "9%",
        optionC: "8%",
        optionD: "3%", 
        correctOption: "optionC"
    },
  
    {
        question: "The United Kingdom (UK) is made up of...",
        optionA: "England, Scotland, Wales and Eastern Ireland",
        optionB: "England, Scotland, Wales and Southern Ireland",
        optionC: "England, Scotland, Wales and Western Ireland",
        optionD: "England, Scotland, Wales and Northern Ireland",
        correctOption: "optionD"
    },
  
    {
        question: "When is the Bonfire Night celebrated?",
        optionA: "28 November",
        optionB: "5 November",
        optionC: "31 October",
        optionD: "14 November",
        correctOption: "optionA"
    },
  
    {
        question: "Who became the first Briton to win the Tour de France?",
        optionA: "Bradley Wiggins",
        optionB: "Jason Li",
        optionC: "Andy Murray",
        optionD: "Mo Farah", 
        correctOption: "optionD"
    },
  
    {
        question: "When did the UK join the EU?",
        optionA: "Never",
        optionB: "1989",
        optionC: "1958",
        optionD: "1973", 
        correctOption: "optionD"
    },
  
    {
        question: "When did the UK left the EU?",
        optionA: "2020",
        optionB: "2019",
        optionC: "2018",
        optionD: "What the hell is EU?",
        correctOption: "optionA"
    },
  
    {
        question: "Which flower is associated with Northern Ireland?",
        optionA: "A level",
        optionB: "A thistle",
        optionC: "A thistle",
        optionD: "A shamrock",
        correctOption: "optionD"
    },
  
    {
        question: "What yearly event happens between Oxford and Cambridge Universities?",
        optionA: "Hunting",
        optionB: "A Rowing Race",
        optionC: "A Game of Football",
        optionD: "A Game of Baseball",
        correctOption: "optionB"
    },
  
    {
        question: "Where does the UK government sit?",
        optionA: "Westminster",
        optionB: "Tsuen Wan",
        optionC: "Central",
        optionD: "Hollywood", 
        correctOption: "optionA"
    },
  
    {
      question: "The formal name since 1927 of United Kingdom (UK) or Britain is...",
      optionA: "United Kingdom of Great Britain and Northern Ireland",
      optionB: "United Kingdom of Great Britain and Ireland",
      optionC: "Great Britain Empire",
      optionD: "United Kingdom of Great Britain", 
      correctOption: "optionA"
    },
  
    {
        question: "What did the Romans introduce to Britain?",
        optionA: "Programming",
        optionB: "New plants and animals",
        optionC: "New food and cloth",
        optionD: "New machinery", 
        correctOption: "optionB"
    }
  
  ]
  
  
  let shuffledQuestions = [] //empty array to hold shuffled selected questions
  
  function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
  }
  
  
  let questionNumber = 1
  let playerScore = 0  
  let wrongAttempt = 0 
  let indexNumber = 0
  
  // function for displaying next question in the array to dom
  function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
  }
  
  function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null
  
    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }
  
    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
  
        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
  }
  
  
  
  //called when the next button is called
  function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
  }
  
  //sets options background back to null after display the right/wrong colors
  function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
  }
  
  // unchecking all radio buttons for next question(can be done with map or foreach loop also)
  function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
  }
  
  // <!-- 😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂 -->
  let playerGrade = 0;
  // function for when all questions being answered
  async function handleEndGame() {
    let remark = null
    let remarkColor = null
  
    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
     playerGrade = (playerScore / 10) * 100
  
    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
  
    ///////	<!-- 😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂 -->！！！成功喇喇！！！！！！
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"
   
    const data = {}
          data["quizScores"] = playerGrade
          console.log(data["quizScores"])
          // method: POST, Path: "/memo", Request Body
          const resp = await fetch('/quiz', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
                  // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify(data)//formData),
          })
      ///////	<!-- 😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂 -->！！！成功喇喇！！！！！！
  }
  
  
  //closes score modal and resets game
  function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
  }
  
  //function to close warning modal
  function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
  }
  
  
  
  