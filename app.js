//Round 1

function submitQuiz1() {
    const correctAnswers = {
        q1: 'answer_c',
        q2:'answer_d',
        q3: 'answer_d',
        q4:'answer_a',
        q5: 'answer_b',
        q6:'answer_a',
        q7: 'answer_c',
        q8:'answer_d',
        q9: 'answer_e',
        q10:'answer_d',
        
    };

    let score = 0;

    for (let i = 1; i <= 10; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);

        if (selectedAnswer) {
            const userAnswer = selectedAnswer.value;

            if (userAnswer === correctAnswers[`q${i}`]) {
                score += 1;
            }
        }
    }

    document.getElementById('score').innerHTML = `Your score: ${score} out of 10`;
}







//Round 2

function submitQuiz2() {
    const correctAnswers = {
        q1: 'answer_c',
        q2:'answer_d',
        q3: 'answer_d',
        q4:'answer_a',
        q5: 'answer_b',
        q6:'answer_a',
        q7: 'answer_c',
        q8:'answer_d',
        q9: 'answer_e',
        q10:'answer_d',
        
    };

    let score = 0;

    for (let i = 1; i <= 10; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);

        if (selectedAnswer) {
            const userAnswer = selectedAnswer.value;

            if (userAnswer === correctAnswers[`q${i}`]) {
                score += 1;
            }
        }
    }

    document.getElementById('score').innerHTML = `Your score: ${score} out of 10`;
}


//Round 3

function submitQuiz3() {
    const correctAnswers = {
        q1: 'answer_c',
        q2:'answer_d',
        q3: 'answer_d',
        q4:'answer_a',
        q5: 'answer_b',
        q6:'answer_a',
        q7: 'answer_c',
        q8:'answer_d',
        q9: 'answer_e',
        q10:'answer_d',
        
    };

    let score = 0;

    for (let i = 1; i <= 10; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);

        if (selectedAnswer) {
            const userAnswer = selectedAnswer.value;

            if (userAnswer === correctAnswers[`q${i}`]) {
                score += 1;
            }
        }
    }

    document.getElementById('score').innerHTML = `Your score: ${score} out of 10`;
}