window.addEventListener("keydown", Intro);
const loader =  document.getElementById("loader")
contadorPorLinea = 0
contadorGlobal = 0
let i = 0
let j=0


function hide () {
   loader.style.visibility= "hidden";
}
setTimeout("hide()", 2000);

//No entiendo por qué me marca event como depreciated, se puede usar

function Intro() {
    let NodeList = document.querySelectorAll(".letra");
    const newArray = Array.from(NodeList);
    const listSize = 5;
    const listMain = [];
  
    for (i < newArray.length; i += listSize;) {
      const listSlice = newArray.slice(i, i + listSize);
      Display(listSlice)
      listMain.push(listSlice);
    }
  }

function Display(list) {
    letra = esLetra()
    command = event.key
    console.log(command)
    console.log(list)
    if (contadorPorLinea<5 && letra != "" ) {
        for (j<contadorPorLinea;j++;);contadorPorLinea++; {
            console.log(letra)
            document.querySelectorAll(".letra")[j].innerHTML = letra
        }
    }
    else if (contadorPorLinea == 5 && letra != "") {
        console.log(contadorPorLinea)
        document.querySelectorAll(".letra")[j].innerHTML = letra
    }
    else if (command == "Enter") {
        EnterValidar(contadorPorLinea, )
    }
    else if (command == "Backspace") {
        BorrarLetra()
    }
}

function CrearListas(list) {

    
}

function esLetra() {
    const keyCodes = window.event.keyCode
    if (keyCodes>64 && keyCodes<91) {
        return event.key
    }
    else {
        return ""
    }
}

function EnterValidar(number) {
    i++

}

function BorrarLetra() {
    document.querySelectorAll(".letra")[j].innerHTML = ""
    contadorPorLinea--
    j--
    console.log(contadorPorLinea)

}


