const collectAnswers = require("./collectAnswersServer");

const questions = [
    "What is your name?",
    "Where do you live?",
    "What do you think on node js?"
];


const answerEvents = collectAnswers(questions);

answerEvents.on("answer", answer => console.log(`question answered: ${answer} \n`));

answerEvents.on("completed", answers => {
    console.log("Thank you for your answers:");
    console.log(answers);
});

answerEvents.on("completed", () => process.exit());