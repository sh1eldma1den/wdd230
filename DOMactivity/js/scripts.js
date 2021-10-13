const favChap = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function () {
    let myScrptr = input.value;
    if (input.value == null) {
        return;
    } else input.value = ' ';
    

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listButn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myScrptr;
    listItem.appendChild(listButn);
    listButn.textContent = '&#10060';
    list.appendChild(listItem);

    button.addEventListener('click' , function(e) {
        list.removeChild(listItem);
    }
    )

    input.focus();
}
)