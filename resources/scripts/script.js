function exposeDetail ({ target }) {
    if (target.nextElementSibling.style.display !== 'block') {
        target.nextElementSibling.style.display = 'block';
        target.style.transform = 'rotate(180deg)'
    } else {
        target.nextElementSibling.style.display = 'none';
        target.style.transform = ''
    }
}

let project1 = document.getElementById('1-title');
let project2 = document.getElementById('2-title');
let project3 = document.getElementById('3-title');
let project4 = document.getElementById('4-title');
let project5 = document.getElementById('5-title');

[project1,project2,project3,project4,project5].forEach(x => x.addEventListener('click', exposeDetail));
