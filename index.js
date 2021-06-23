const quiz = [
    {
        question: '新潟県の花はなに？',
        answers: [
            'チューリップ',
            'ぼたん',
            'ひまわり',
            'らん'
        ],
        correct: 'チューリップ'
    }, {
        question: '山田の特技は？',
        answers: [
            'バク転',
            'すべらない話',
            'ギター',
            '大食い'
        ],
        correct: 'ギター'
    }, {
        question: '山田のバイト先は？',
        answers: [
            'カラオケマイム',
            'ステーキ宮',
            'チャレンジャー',
            '家庭教師'
        ],
        correct: 'ステーキ宮'
    }
];

const quizLength =quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setUpQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

setUpQuiz ();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent ){
        window.alert('正解');
        score++;
    } else {
        window.alert('不正解');
    }

    quizIndex++;

    if(quizIndex < quizLength){
        setUpQuiz();
    } else {
        window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です！');
    }
};

let handlerIndex = 0;

while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler (e);
    });
    handlerIndex++;
}
