import { colorify as divAndColorify } from './helpers.js';

const data = {
  title: "Lorem ipsum dolor sit amet.",
  textus: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, ipsam.",
  versio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, quae dignissimos.",
  regex: /dolo|ips/g,
}

const { title, textus, versio, regex } = data;


const elem1 = divAndColorify(title, undefined, 'magenta')
const elem2 = divAndColorify(textus, regex, 'red')
const elem3 = divAndColorify(versio, undefined, 'blue');

const card = document.createElement('div');
card.classList.add('card');
card.append(elem1);
card.append(elem2);
card.append(elem3);

const root = document.querySelector('.root');
root.appendChild(card);
