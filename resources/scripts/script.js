function exposeDetail (event) {
    if (event.target.nextElementSibling.style.display !== 'block') {
        event.target.nextElementSibling.style.display = 'block';
        event.target.style.transform = 'rotate(180deg)'
    } else {
        event.target.nextElementSibling.style.display = 'none';
        event.target.style.transform = ''
    }
}

let project1 = document.getElementById('1-title');
let project2 = document.getElementById('2-title');
let project3 = document.getElementById('3-title');
let project4 = document.getElementById('4-title');

[project1,project2,project3,project4].forEach(x => x.addEventListener('click', exposeDetail));