
const Sequelize = require('sequelize');
const sequelize = new Sequelize("sqlite:quizzes.sqlite", {logging: false});


sequelize.define('quiz', {
    question: {
        type: Sequelize.STRING,
        unique: {msg: "Ya existe"},
        validate: {notEmpty: {msg: ""}}
    },
    answer: {
        type: Sequelize.STRING,
        validate: {notEmpty: {msg: ""}}
    }
});
sequelize.sync()
    .then(() => sequelize.models.quiz.count())
    .then(count =>{
        if(!count) {
            return sequelize.models.quiz.bulkCreate([
                { question: "Capital de Italia",  answer: "Roma" },
                { question: "Captial de Francia", answer: "París" },
                { question: "Capital de España",  answer:   "Madrid" },
                { question: "capital de Portugal",answer: "Lisboa" }
            ]);
        }
    })
    .catch(error =>{
        console.log(error);
    });







module.exports = sequelize;