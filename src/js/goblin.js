/* eslint-disable no-plusplus */
import goblin from '../img/goblin.png';
// eslint-disable-next-line
import { first } from './app';

export default class Goblin {
  init2() {
    this.loses = 0;
    this.func = setInterval(() => {
      const arr = Array.from(document.querySelectorAll('.row_cell'));
      for (let i = 0; i <= arr.length; i++) {
        document.querySelectorAll('.goblin').forEach((elem) => elem.remove());
        if (!document.querySelector('.goblin')) {
          const dem = document.createElement('img');
          dem.src = goblin;
          dem.classList = 'goblin';
          const x = Math.floor(Math.random() * arr.length);
          arr[x].insertAdjacentElement('beforeend', dem);
          this.lose();
          return;
          // const c = arr.find((el) => el.querySelector('.goblin'));
        }
      }
    }, first.inter());
  }

  lose() {
    this.loses++;
    if (this.loses === 5) {
      // eslint-disable-next-line
      alert('Вы проиграли!');
      clearInterval(this.func);
    }
    document.querySelector('.count_lose').textContent = this.loses;
    document.querySelector('.button').addEventListener('click', (e) => {
      e.preventDefault();
      window.location.reload();
    });
  }
}
