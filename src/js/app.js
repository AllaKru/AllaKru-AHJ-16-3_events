/* eslint-disable no-plusplus */

import gameTemplateRows from './app.template';
// eslint-disable-next-line
import engine from './engine';
// eslint-disable-next-line
import Goblin from './goblin';
import Score from './scoreGame';

export default class Game {
  constructor(number, interval) {
    this.number = number;
    this.interval = interval;
  }

  rule() {
    return this.number;
  }

  inter() {
    return this.interval;
  }

  play() {
    const cont = document.querySelector('.conteiner');
    cont.insertAdjacentHTML('afterbegin', `<span> УБИТО: </span><span class='count_win'>0</span><br></br>
   <span>  СПАСЛОСЬ: </span><span class='count_lose'>0</span><br></br>
   <button class = 'button'>  ПОПРОБУЙ ЕЩЁ РАЗ! </button>
   <br></br>
 `);
    let i = 0;
    while (i < this.number) {
      engine(gameTemplateRows());
      i++;
    }

    const score = new Score();
    score.init();
    const gobl = new Goblin();
    gobl.init2();
  }
}

export const first = new Game(4, 1000);
first.play();
