const darkSwitch = document.getElementById("darkSwitch");
const header = document.querySelector("header");
const section = document.querySelector("section");
const fade = document.getElementById("fade");
const fade2 = document.getElementById("fade2");
const foot = document.getElementById("foot");
const bold = document.querySelectorAll("b");
const txtScr = document.querySelectorAll(".script");
const h2 = document.querySelectorAll("h2");
const powrot = document.getElementById("powrot");
const zawartosc = document.querySelectorAll(".zawartosc");

if(darkSwitch){
darkSwitch.addEventListener("change", () => {  

    for(let i=0; i < bold.length; i++){
        bold[i].classList.toggle("shadowOff");
    }

    for(let i=0; i < txtScr.length; i++){
        txtScr[i].classList.toggle("scriptWhite")
    }
    h2.forEach(head2 => {head2.style.display = "none"})
    zawartosc.forEach(item => {item.style.overflowY = "scroll"})
    header.classList.toggle("darkmodeH");
    fade.classList.toggle("darkmodeF1");
    fade2.classList.toggle("darkmodeF2");
    foot.classList.toggle("darkmodeFoot")
    section.classList.toggle("darkmodeS");
    document.body.classList.toggle("darkmodeB");
    document.body.classList.toggle("biggerFont");
    
})
}

// DO ZMIAN
//Cała sekcja DARKMODE do wklejenia
//.foot zmienić na #foot w html i css
//wkleić skrypt

// .box1 .text i .linia usunąć text-shadow

//zmien white space pre-line

//dodac transition: all 0.3s ease;