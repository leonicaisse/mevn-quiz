const routes = require('express').Router();
const Quiz = require('../../models/quiz');

routes.get('/', async (req, res) => {
    try {
        const quiz = await Quiz.find();
        res.json(quiz);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

routes.post('/', async (req, res) => {
    const quiz = new Quiz({
        "name": "Quiz",
        "questions": [
            {
                "name": "Question: ",
                "correct_answer": "C",
                "answers": [
                    {
                        "name": "A"
                    },
                    {
                        "name": "B"
                    },
                    {
                        "name": "C"
                    },
                    {
                        "name": "D"
                    }
                ]
            },
        ]
    });
    try {
        const newQuiz = await quiz.save();
        res.status(200).json(newQuiz);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = routes;