export default class Score {
  init() {
    this.wins = 0;
    const cont = document.querySelector('.conteiner');
    cont.addEventListener('click', (e) => {
      if (e.target.classList.contains('goblin')) {
        this.win();
        e.target.remove();
      }
    });
  }

  win() {
    this.wins += 1;
    document.querySelector('.count_win').textContent = this.wins;
  }
}
