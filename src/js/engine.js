/* eslint-disable no-plusplus */
// eslint-disable-next-line
import { first } from './app';

export default function engine(block) {
  const conteiner = document.querySelector('.conteiner');
  const el = document.createElement(block.block);
  let i = 0;
  while (i < first.rule()) {
    const element = document.createElement(block.content.block);
    element.classList.add(block.content.cls);
    el.insertAdjacentElement('beforeend', element);
    i++;
  }
  el.classList.add(block.cls);
  return conteiner.insertAdjacentElement('beforeend', el);
}
