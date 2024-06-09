import inquirer from 'inquirer';
const questions = [
    {
        question: "What is the output of the following code? enum Color {Red,Green, Blue}  console.log(Color.green)",
        choices: ["Green", "1", "Color_Green", "undefined"],
        answer: "1"
    },
    {
        question: "______ is return type for when nothing is returned'?",
        choices: ["void", "unknown", "any", "any[]"],
        answer: "void"
    },
    {
        question: "Numeric enum first value is defaulted to What",
        choices: ["0", "1", "10", "5"],
        answer: "0"
    },
    {
        question: "________ is an interface will have the same propertiesas that interface?",
        choices: ["duplication", "extending", "idolizing", "improving"],
        answer: "extending"
    }
];
const askQuestion = async (question) => {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'userAnswer',
            message: question.question,
            choices: question.choices
        }
    ]);
    return answers.userAnswer === question.answer;
};
const runQuiz = async () => {
    console.log("Welcome to the Quiz!");
    let score = 0;
    for (const question of questions) {
        const isCorrect = await askQuestion(question);
        if (isCorrect) {
            console.log("Correct!");
            score++;
        }
        else {
            console.log(`Wrong! The correct answer is ${question.answer}.`);
        }
    }
    console.log(`Quiz finished! Your score is ${score}/${questions.length}`);
};
runQuiz();
