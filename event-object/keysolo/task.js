class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timerElement = container.querySelector('.status__timer');


    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    this.timerElement.textContent = 0;
    if (this.timerIntervalId) {
      clearInterval(this.timerIntervalId);
    }
    this.timerElement.textContent = 0;
  }

registerEvents() {
    document.addEventListener("keydown", (event) => {
      let typed = event.key.toLowerCase();
      if (this.currentSymbol.textContent === typed) {
        this.success();
      } else {
        this.fail();
      }
    });
}
  
  success() {
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      clearTimeout(this.timeoutId);
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

setNewWord() {
    const word = this.getWord();
  
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  
    if (this.timerIntervalId) {
      clearInterval(this.timerIntervalId);
    }

    this.renderWord(word);

    let timeRemaining = this.wordElement.textContent.length;
    this.timerElement.textContent = timeRemaining;

    this.timerIntervalId = setInterval(() => {
      timeRemaining--;
      this.timerElement.textContent = timeRemaining;
      
      if (timeRemaining === 0) {
        clearInterval(this.timerIntervalId);
      }
    }, 1000);

    this.timeoutId = setTimeout(() => {
      this.fail();
    }, timeRemaining * 1000);
}

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))
