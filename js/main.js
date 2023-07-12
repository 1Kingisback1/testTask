// let date = new Date(),
//     day = date.getDay(),
//     month = date.getMonth(),
//     year = date.getFullYear(),
//     dateBlockHTML = document.querySelector('.header__date');
    

// if (day <= 9) {
//     day = '0' + day;
// }
// if (month <= 9) {
//     month = '0' + month;
// }

// let nowDate = day +'.' + month + '.' + year;

// dateBlockHTML.innerHTML = nowDate;


let btnPro = document.querySelector('.pro'),
    btnTeam = document.querySelector('.team');

btnPro.addEventListener('click', (ev) => {
    ev.preventDefault();
});
btnTeam.addEventListener('click', (ev) => {
    ev.preventDefault();
});