// for (let i = 0; i < 32; i++) {
//     document.querySelector('.container').innerHTML += `<div class="card"></div>`;
// }



let cards = document.querySelectorAll('.card');
let arr = [
    '500px.svg',
    '500px.svg',
    'adobe-flash-player.svg',
    'adobe-flash-player.svg',
    'android.svg',
    'android.svg',
    'apple.svg',
    'apple.svg',
    'chrome.svg',
    'chrome.svg',
    'firefox.svg',
    'firefox.svg',
    'linux.svg',
    'linux.svg',
    'windows.svg',
    'windows.svg',
    'whatsapp.svg',
    'whatsapp.svg',
    'safari.svg',
    'safari.svg',
    'spotify.svg',
    'spotify.svg',
    'java.svg',
    'java.svg',
    'drive.svg',
    'drive.svg',
    'creative-commons.svg',
    'creative-commons.svg',
    'itunes.svg',
    'itunes.svg',
    'adobe-fireworks.svg',
    'adobe-fireworks.svg',
]

let first = [],
    second = [];

//Fisher-Yates shuffle
const shuffle = (array) => {
    let counter = array.length;
    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

console.log(shuffle(arr))

//The game itself
cards.forEach((card, index) => {
    card.style.backgroundImage = `url("img/svg/${arr[index]}"`;
    card.addEventListener('click', () => {
        if (first.length === 0 || second.length === 0 && !card.classList.contains('clear')) {
            card.classList.add('clear');
            if (first.length === 0) {
                first = [card.style.backgroundImage, index];
            } else {
                second = [card.style.backgroundImage, index];
                if (first[0] !== second[0]) {
                    setTimeout(() => {
                        cards[first[1]].classList.remove('clear');
                        cards[second[1]].classList.remove('clear');
                        first = [];
                        second = [];
                    }, 1500)
                } else if (first[0] === second[0]) {
                    console.log('There we go!');
                    if(cards.every(card=>card.classList.contains('clear'))) 
                    first = [];
                    second = [];
                }
            }
        }
        console.log(first, second);
        console.log(card.style.backgroundImage);
    })
})

//New game
document.querySelector('button').addEventListener('click', () => {
    shuffle(arr);
    cards.forEach((card,index) => {
        card.classList.remove('clear');
        card.style.backgroundImage = `url("img/svg/${arr[index]}"`;
    })
})