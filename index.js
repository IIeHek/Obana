"use strict";
let set = new Set();

field.addEventListener('keydown', function(event) {
    
    if (event.code == 'Enter' || event.code == 'NumpadEnter') {
        let inputText = document.querySelector('input');
        const value = inputText.value.trim();
        if (value != '') {
            set.add(value);
        };
        field.value = '';
        
        const preInput = document.querySelector('#preInput');
        let strlist = '';
        set.forEach((item) => {
            strlist = strlist+`<p>${item}</p>`;
        });
        preInput.lastElementChild.innerHTML = strlist;
        console.log(preInput);
    };
});

function setNext(set) {
    const newElem = document.querySelector('#preInput');
    let newInputSaved = document.createElement('div');
    newInputSaved.className = 'input__saved';
    preInput.appendChild(newInputSaved);
};