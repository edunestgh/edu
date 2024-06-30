const questions = [
    {
        "question": "Who is the current President of Ghana as of 2024?",
        "answers": ["John Dramani Mahama", "Nana Akufo-Addo", "Kwesi Amissah-Arthur", "Mahamudu Bawumia"],
        "correctAnswer": "Nana Akufo-Addo"
    },
    {
        "question": "What is the capital city of Ghana?",
        "answers": ["Kumasi", "Accra", "Tamale", "Cape Coast"],
        "correctAnswer": "Accra"
    },
    {
        "question": "Which Ghanaian city recently hosted the African Continental Free Trade Area (AfCFTA) secretariat?",
        "answers": ["Accra", "Kumasi", "Sekondi-Takoradi", "Tamale"],
        "correctAnswer": "Accra"
    },
    {
        "question": "In which year did Ghana gain independence?",
        "answers": ["1957", "1960", "1963", "1966"],
        "correctAnswer": "1957"
    },
    {
        "question": "Who is the current Vice President of Ghana?",
        "answers": ["John Dramani Mahama", "Nana Akufo-Addo", "Kwesi Amissah-Arthur", "Mahamudu Bawumia"],
        "correctAnswer": "Mahamudu Bawumia"
    },
    {
        "question": "What is the official currency of Ghana?",
        "answers": ["Naira", "Cedi", "Dollar", "Pound"],
        "correctAnswer": "Cedi"
    },
    {
        "question": "Which of the following is the largest ethnic group in Ghana?",
        "answers": ["Akan", "Ewe", "Ga-Adangbe", "Dagomba"],
        "correctAnswer": "Akan"
    },
    {
        "question": "Which Ghanaian footballer recently signed with a major European club?",
        "answers": ["Asamoah Gyan", "Thomas Partey", "Jordan Ayew", "Andre Ayew"],
        "correctAnswer": "Thomas Partey"
    },
    {
        "question": "What is the primary language of instruction in Ghanaian schools?",
        "answers": ["Ewe", "Twi", "Ga", "English"],
        "correctAnswer": "English"
    },
    {
        "question": "Which festival is celebrated by the Ga people of Ghana?",
        "answers": ["Hogbetsotso", "Homowo", "Aboakyir", "Kundum"],
        "correctAnswer": "Homowo"
    },
    {
        "question": "Who is the current Minister of Education in Ghana?",
        "answers": ["Dr. Matthew Opoku Prempeh", "Dr. Yaw Osei Adutwum", "Prof. Jane Naana Opoku-Agyemang", "Hon. Albert Kan-Dapaah"],
        "correctAnswer": "Dr. Yaw Osei Adutwum"
    },
    {
        "question": "Which Ghanaian city is known as the 'Garden City'?",
        "answers": ["Accra", "Kumasi", "Tamale", "Takoradi"],
        "correctAnswer": "Kumasi"
    },
    {
        "question": "What is the main export product of Ghana?",
        "answers": ["Gold", "Cocoa", "Timber", "Oil"],
        "correctAnswer": "Cocoa"
    },
    {
        "question": "Which body is responsible for conducting elections in Ghana?",
        "answers": ["Electoral Commission", "National Electoral Board", "Election Commission of Ghana", "Ghana Voting Authority"],
        "correctAnswer": "Electoral Commission"
    },
    {
        "question": "Which Ghanaian musician won the 2024 VGMA Artiste of the Year?",
        "answers": ["Sarkodie", "Shatta Wale", "Stonebwoy", "KiDi"],
        "correctAnswer": "Stonebwoy"
    },
    {
        "question": "What is the name of Ghana's national airline?",
        "answers": ["Ghana Airways", "Goldstar Airlines", "Africa World Airlines", "Starbow Airlines"],
        "correctAnswer": "Ghana Airways"
    },
    {
        "question": "Which region in Ghana is known for its rich gold deposits?",
        "answers": ["Eastern Region", "Ashanti Region", "Western Region", "Northern Region"],
        "correctAnswer": "Ashanti Region"
    },
    {
        "question": "Who is the current Speaker of Parliament in Ghana?",
        "answers": ["Prof. Mike Oquaye", "Alban Bagbin", "Joseph Osei-Owusu", "Kwame Anyimadu-Antwi"],
        "correctAnswer": "Alban Bagbin"
    },
    {
        "question": "What is the highest mountain in Ghana?",
        "answers": ["Mount Afadjato", "Mount Atiwiredu", "Mount Adaklu", "Mount Gemi"],
        "correctAnswer": "Mount Afadjato"
    },
    {
        "question": "Which body regulates the banking sector in Ghana?",
        "answers": ["Ghana Stock Exchange", "Ministry of Finance", "Bank of Ghana", "Ghana Commercial Bank"],
        "correctAnswer": "Bank of Ghana"
    }
];

let currentQuestionIndex = 0;
let selectedAnswerIndex = null;
let correctAnswersCount = 0;

function loadQuestion(index) {
    const question = questions[index];
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('question-count').textContent = `Question ${index + 1} of ${questions.length}`;
    document.querySelectorAll('.qna').forEach((button, i) => {
        button.textContent = question.answers[i];
        button.style.backgroundColor = '#70BC4F'; // Reset button color
    });
    selectedAnswerIndex = null;
    document.getElementById('next-btn').disabled = true;
}

function selectAnswer(index) {
    selectedAnswerIndex = index;
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    if (selectedAnswerIndex === null) return;

    // Check if the selected answer is correct
    const question = questions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.qna');

    if (question.answers[selectedAnswerIndex] === question.correctAnswer) {
        buttons[selectedAnswerIndex].style.backgroundColor = 'green';
        correctAnswersCount++;
    } else {
        buttons[selectedAnswerIndex].style.backgroundColor = 'red';
    }

    // Highlight the correct answer
    const correctIndex = question.answers.indexOf(question.correctAnswer);
    buttons[correctIndex].style.backgroundColor = 'green';

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion(currentQuestionIndex);
        } else {
            showResult();
        }
    }, 1000); // Wait 1 second before moving to the next question
}

function showResult() {
    const scorePercentage = (correctAnswersCount / questions.length) * 100;
    alert(`Quiz Completed! Your score: ${scorePercentage}%`);
}

window.onload = function () {
    loadQuestion(currentQuestionIndex);
};
