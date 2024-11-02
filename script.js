let btn1 = document.getElementById("button_1");
let btnNext = document.getElementById("buttonNext");
let obraz = document.getElementById("obraz");
let pyt = document.getElementById("pytanie");
let koniec = document.getElementById("koniec");

let cub0 = document.getElementById("checkCub0");
let cub1 = document.getElementById("checkCub1");
let cub2 = document.getElementById("checkCub2");
let cub3 = document.getElementById("checkCub3");
let cub4 = document.getElementById("checkCub4");
cubs = [cub0, cub1, cub2, cub3, cub4];

btn1.onclick = function open(){
    let counter = 0;
    let name = document.getElementById("name").value;
    let cartoon = document.getElementById("cartoon").value;
    let animal = document.getElementById("animal").value;
    let brother = document.getElementById("brother").value;
    let birth = document.getElementById("birth").value;

    inKeys = [name, cartoon, animal, brother, birth];
    keys = ["Кузенко Олена", "Скубі-Ду", "Кіт", "Ярослав", "15",];

    for (let i = 0; i<keys.length; i++){
        if (keys[i] === inKeys[i]){
            cubs[i].style.background = "green";
            counter++;
        }
        else {
            cubs[i].style.background = "red";
        }
    }

    if (counter===keys.length){
        obraz.style.display = "block";
        pyt.style.display = "none";
        btn1.style.display = "none";
    }  
}

btnNext.onclick = function(){
    let click = false;
    let num1 = document.getElementById("number_1").value;
    let num2 = document.getElementById("number_2").value;

    if ((num1==="3" & num2==="0")|(num1==="0" & num2==="3")){
        click = true;
    }

    if (click){
        obraz.style.display = "none";
        koniec.style.display = "block";
    }
}