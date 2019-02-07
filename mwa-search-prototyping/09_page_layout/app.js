function handleShowContextClick() {
  handleShow();
  handleScroll();
}

const searchButton = document.querySelector('#search');
const showButton = document.querySelector('#show');

searchButton.addEventListener('click', handleSearch )

function handleSearch(event) {
  event.preventDefault();
  console.log('Search button clicked');
}

showButton.addEventListener('click', handleShow )

function handleShow(event) {
  event.preventDefault();
  console.log('Show button clicked');
}

const card = document.querySelector('#card');

const aCard = `<div id="card" class="inner card">
<div class="card-header">
  <div class="volume">
    4. Maalula
  </div>
  <div class="inline-separator">
    |
  </div>
  <div class="text-name">
    001. M_ḤF Wie der kluge Richter den Zauberer überlistete
  </div>
</div>
<div class="textus">
  003. čūle illa saḥril nefše w ṯḳelle šekla ču mixčlaf m-ʕa šekəl
  lanna
  <span class="redbold">ġabrōna</span> mett, w zalle hanna sōḥra ʕa
  payṯil ġabrōna w amelle: «nfōḳ mn-ōxa, hōš šunīṯa hī ičəṯ!»
</div>
<div class="versio">
  003. Da blieb ihm nichts anderes übrig, als sich selbst zu
  verzaubern, und seine Gestalt wurde so, daß sie sich überhaupt nicht
  von der Gestalt dieses Mannes unterschied, und der Zauberer ging zum
  Haus des Mannes und sagte zu ihm: »Verschwinde (wörtl.: geh hinaus)
  von hier, die Frau ist jetzt meine Ehefrau!«
</div>
</div>`

let tenCards = '';
for (let i = 0; i < 10; i++) {
  tenCards += aCard;
}

const container1 = document.querySelector('.container1');
container1.innerHTML = tenCards;
const container2 = document.querySelector('.container2');
container2.innerHTML = tenCards;