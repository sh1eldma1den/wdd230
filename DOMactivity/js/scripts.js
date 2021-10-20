const favChap = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function () {
    let myScrptr = favChap.value;
    if (favChap.value == null) {
        return;
    } else if (favChap.value == '') return;
    

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listButn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myScrptr;
    listItem.appendChild(listButn);
    listButn.textContent = '❌';
    list.appendChild(listItem);

   listButn.addEventListener('click' , function(e) {
        list.removeChild(listItem);
    }
    )

    favChap.focus();
}
)