"use strict";

let btn = document.querySelector('.btn-main');
let quotes = document.querySelector('.quotes');
let person = document.querySelector('.given-by');

const quotesAll = [{
    quote : `"In a gentle way, you can shake the world."`,
    person : "Mahatama Gandhi"
}, {
    quote : `"If you want to shine like a sun, first burn like a sun."`,
    person : "APJ Abdul Kalam"
}, {
    quote : `"The greatest religion is to be true to your own nature. Have faith in yourselves."`,
    person : "Swami Vivekanand"
}, {
    quote : `"Be not Afraid of anything. You will do Marvelous work. it is Fearlessness that brings Heaven even in a moment."`,
    person : "Swami Vivekanand"
}, {
    quote : `"To succeed in your mission, you must have single-minded devotion to your goal."`,
    person : "APJ Abdul Kalam"
}, {
    quote : `"Man is made by his belief. As he believes, so he is."`,person : "Bhagwat Geeta"
}, {
    quote : `"One who sees inaction in action, and action in inaction, is intelligent among men."`,
    person : "Bhagwat Geeta"
}];

btn.addEventListener ("click", () => {

    let random = Math.floor(Math.random() * quotesAll.length);

    quotes.innerText = quotesAll[random].quote;
    person.innerText = quotesAll[random].person;
})
