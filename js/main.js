let paragraf = document.querySelector('tekst');
let btn1 = document.getElementById('dodaj');
let btn2 = document.getElementById('usun');

btn1.onclick = function(){
    tekst.innerHTML = 'Uwielbiam JavaScript';
}

btn2.onclick = function(){
    tekst.innerHTML = ' ';
}
