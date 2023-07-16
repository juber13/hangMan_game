const letters = document.querySelectorAll('.letter');
const lettersContainer = document.querySelector('.letters');
const btns = document.querySelectorAll('.btn');
const keyboardContainer = document.querySelector('.keyboard');
const gusses = document.querySelector('.gusses');
const image = document.querySelector('.hangman-image');
const clueText = document.querySelector('.clue-text');
const wordToDisplay = document.querySelector('.word-to-display');



const words = [
    { word: "pineapple", clue: "This fruit has a prickly exterior and sweet, juicy interior." },
    { word: "watermelon", clue: "This fruit is typically eaten in the summer and has a green rind and pink flesh." },
    { word: "kiwi", clue: "This fruit is small, brown, and fuzzy on the outside with green flesh on the inside." },
    { word: "basketball", clue: "This sport involves shooting a ball through a hoop and is played on a court." },
    { word: "soccer", clue: "This sport is played with a ball and involves kicking it into a goal." },
    { word: "tennis", clue: "This sport is played with rackets and involves hitting a ball over a net." }
  ]

  let currentWrord;
  let WrongGusesscounter = 0;
  let selectedWord= [];
  let maximumCounter = 6;
  
  const getRandomeWord = () => {
      const {word , clue}  = words[Math.floor(Math.random() * words.length)];
      currentWrord = word;
      console.log(word)
      wordToDisplay.innerHTML = word.split("").map(() => `<li class="letter"></li>`).join("");
      clueText.innerHTML = clue;
  }


  const startGame = (element , letter) => {
      // check if the word container letter
      if(currentWrord.includes(letter)){
        [...currentWrord].forEach((text , index) => {
            if(text === letter){
                selectedWord.push(letter);
                wordToDisplay.querySelectorAll('li')[index].innerText = text;
                wordToDisplay.querySelectorAll('li')[index].classList.add('gussed');
            }
        })
      }else{
        WrongGusesscounter =  selectedWord.length;
        image.src = `images/hangman-${WrongGusesscounter}.svg`;

    }
       element.disabled = true;
       console.log(currentWrord.length , selectedWord.length);
       gusses.innerHTML= `${WrongGusesscounter} / ${maximumCounter}`;
       if(WrongGusesscounter === maximumCounter) return gameOver(true);
       if(selectedWord.length === currentWrord.length) return gameOver(false);
  }


  function gameOver(isOver){
    if(isOver){
        currentWrord = '';
        counter = 0;
        alert('game over')
        window.location.reload();
    }else{
        alert('congratulations bro!!!')
    }
  }

for(let i = 97; i <= 122; i++){
    const button = document.createElement('button');
    button.textContent  = String.fromCharCode(i).toLocaleUpperCase();
    keyboardContainer.appendChild(button);
    button.addEventListener('click' , (e) => startGame(e.target , String.fromCharCode(i)))
}


getRandomeWord();


