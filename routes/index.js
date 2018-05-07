var express = require('express');
var router = express.Router();

const quizScrypt = require('../controllers/quiz');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

router.get('/credits', function(req, res, next) {
    res.render('credits', { title: 'Autor' });
});
router.get('/quizzes', (req, res, next) => {
    models.quiz.findAll()
    .then(quizzes => {
        res.render("quizzes", {quizzes})
    })
    .catch(error => next(error));
    }
    );


module.exports = router;