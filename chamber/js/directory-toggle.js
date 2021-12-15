function toggle() {
    
    const grid = document.querySelector('#grid');
    const list = document.querySelector('#list');

    grid.addEventListener('click', () => {list.classList.toggle('responsive')}, false);
}
toggle();  