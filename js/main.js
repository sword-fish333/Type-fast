window.addEventListener('load',init);
const levels={
    easy:5,
    medium:4,
    hard:3
};

const currentLevel=levels.medium;
let time=currentLevel;
let score=0;
let isPlaying;

const seconds=document.querySelector('#seconds');
const wordInput=document.querySelector('#word-input');
const scoreDisplay=document.querySelector('#score');
const message=document.querySelector('#message');
const timeDisplay=document.querySelector('#time');
const currentWord=document.querySelector('#current-word');

const words=['acceptance',
'authentic',
'deliberate',
'hooligan',
'rum',
'master',
'slave',
'dictionary',
'events',
'flower',
'cucumber',
'courage',
'legend',
'zenith',
'discriminate',
'tenacious',
'serene',
'nostalgic',
'developer',
'fallout',
'viking',
'metall',
'core',
'karma',
'cowboy',
'nirvana',
'window',
'fight',
'magician',
'fiction',
'integrity',
'joke',
'esoteric',
'gentleman',
'knight',
'horseman',
'badass',
'bone',
'autodidact',
'meaningless',
'metanoia',
'epeolatry',
'solivagant',
'philocalist',
'uncanny',
'rambunctious',
'paradigm',
'misanthrope',
'lucid',
'lethargic',
'ken',
'gallivant',
'fortitude',
'cynical',
'capricious',
'benevolent',
'power',
'real',
'serendipity',
'reality',
'notorious',
'unknown',
'frankly',
'mission',
'odyssey',
'skyfall',
'venom',
'daredevil',
'impossible',
'investigate'
];



//start Game
function init(){
    
    //load word from array
    showWord(words);
    if(wordInput.value){
        message.className='';
        message.innerHTML='';
    }
    //countdown from initial time
    setInterval(countdown,1000);
    setInterval(checkStatus,50);

    //start matching on word input
    wordInput.addEventListener('input',startMatch);
 
}

function startMatch(){
    if(matchInput()){
          isPlaying=true;
          time=currentLevel+1;
          showWord(words);
          wordInput.value='';
          score++;
    }
    if(score===-1){
    scoreDisplay.innerHTML=0;

    }else{
    scoreDisplay.innerHTML=score;
}
}

function matchInput(){
    if(wordInput.value===currentWord.innerHTML){
 
        return true;
 0   }else{
     message.className='';
    message.innerHTML="";
    return false;
 }

}


//show random word
function showWord(words){
    const randIndex=Math.floor(Math.random()* words.length);

    currentWord.innerHTML=words[randIndex];
}

function countdown(){
    if(time>0){

        time--;
    }else if(time===0){
        isPlaying=false;
      
    }
    timeDisplay.innerHTML=time;

}


function checkStatus(){
    if(!isPlaying && time ===0){
        message.innerHTML="Game Over!!!";
        message.className="alert alert-danger mt-2 text-dark";
        score=-1;
    }
}