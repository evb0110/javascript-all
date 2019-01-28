let greeting = S.data("Hello"),
    name = S.data("world");

S(() => document.querySelector('.contents').textContent = `${greeting()}, ${name()}!`);

const button = document.querySelector('.button');
button.addEventListener('click', () => name('John'));