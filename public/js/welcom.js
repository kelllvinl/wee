let x = Math.ceil(Math.random()*10)
var el = document.querySelector('B');
el.textContent = 'i';
document.querySelector('B'); {
    if (x <= 3) {
        el.textContent = "撐住"
    } else if (x >= 6) {
        el.textContent = "加油"
    } else { 
        el.textContent = "精神"
    }
};