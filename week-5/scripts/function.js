
const list = document.getElementById("list")
const input = document.getElementById("favchap");
const button = document.querySelector('button');


button.addEventListener('click', () => {
    
    if (input.value.length === 0) {
        alert('(Error Found! ❌) Please enter a book and chapter')
    } 
    else {
    const myFavChapt = input.value;
    input.value = '';

    const listChapter = document.createElement('li');
    const listText = document.createElement('div');
    const listBtn = document.createElement('button');

    listChapter.appendChild(listText);
    listText.textContent = myFavChapt;
    listChapter.appendChild(listBtn);
    listBtn.textContent = "❌";
    list.appendChild(listChapter);

    listBtn.addEventListener('click', () => {
        list.removeChild(listChapter);
    });
    }
    input.focus();
});

let del = document.querySelector('button');
del.ariaLabel = "Delete button";
