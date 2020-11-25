// load
window.addEventListener("load", ()=>{
  alert ("Hello There");
  var div =  document.getElementById('div')
  div.style.position = "fixed";
  div.style.left = `${(window.innerWidth-div.clientWidth)/2}px`;
  div.style.top = `${(window.innerHeight-div.clientHeight)/2}px`;
});

// click
document.getElementById("button").addEventListener('click',()=>{
  document.getElementById('text').innerHTML = document.getElementById('inputText').value
})

// resize
window.addEventListener("resize", ()=>{
 var div =  document.getElementById('div')
 div.style.position = "fixed";
 div.style.left = `${(window.innerWidth-div.clientWidth)/2}px`;
 div.style.top = `${(window.innerHeight-div.clientHeight)/2}px`;
});

// mouseover
document.getElementById('div').addEventListener("mouseover",()=>{
  document.getElementsByClassName('text-justify')[0].innerHTML ="Moused over"
})

// mouseout
document.getElementById('div').addEventListener("mouseout",()=>{
  document.getElementsByClassName('text-justify')[0].innerHTML ="Moused out"
})

// funkcja mouseMoveFunction
function mouseMoveFunction(){
  var div =  document.getElementById('div')
  document.getElementsByClassName('text-justify')[0].innerHTML = `Moused over <br /> X: ${event.clientX} <br /> Y: ${event.clientY}`
}

// mousemove
document.getElementById('div').addEventListener("mousemove",mouseMoveFunction)

// remove mouseMoveFunction
document.getElementById("div").addEventListener("click",()=>{
  document.getElementById("div").removeEventListener("mousemove",mouseMoveFunction);
})

// focus
document.getElementById("inputText").addEventListener("focus",(e)=>{
  e.target.style.background = "yellow"
})

// blur
document.getElementById("inputText").addEventListener("blur",(e)=>{
  e.target.style.background = "white"
})

// copy
document.getElementById("inputText").addEventListener("copy",(e)=>{
  document.getElementById("text").innerHTML = `Skopiowano text: ${e.target.value}`
})

// wheel
document.getElementById("div").addEventListener("wheel",(e)=>{
  e.target.style.fontSize ="larger"
})

// Zad 1
function zad1(x){
  console.info(`Zad 1) Liczba liter: ${x.length}`)
}
zad1("asdasda")

// Zad 2
const arr = new Array(3,5,6,23,44,5);
function zad2(y){
  let sum = 0;
  for(var i = 0;i < arr.length; i++){
    sum += arr[i]
  }
  console.info(`Zad 2) ${sum}`)
}
zad2(arr)

// Zad 3
function zad3(z){
  var a = new Array()
  for(var i = 0; i < z.length; i++){
    if(i%2 == 0){
      a[i] = z.charAt(i).toUpperCase()
    }
    else{
      a[i] = z.charAt(i)
    }
  }
  a = a.join('')
  console.info(`Zad 3) ${a}`)
}
zad3("ala ma kota")

// Zad 4
function zad4(a,b){
  if(typeof(a) == 'number' && typeof(b) == 'number' ) return a*b
  else {
    return false
  }
}
console.info(`Zad 4) ${zad4(5,6)}`)

// Zad 5
function zad5(imie,miesiac){
  if(miesiac == 'grudzien' || miesiac == 'styczen' || miesiac == 'luty'){
    return `${imie} jezdzi na sankach`
  }else if (miesiac == 'marzec' || miesiac == 'kwiecien' || miesiac == 'maj') {
    return `${imie} chodzi po kaluzach`
  }else if (miesiac == 'czerwiec' || miesiac == 'lipiec' || miesiac == 'sierpien') {
    return `${imie} sie opala`
  }else{
    return `${imie} zbiera liscie`
  }
}
console.info(`Zad 5) ${zad5('Andrzej','lipiec')}`)

// Zad 6
function zad6(str,znak){
  var arr = str.split(znak)
  arr = arr.sort();
  return arr.join(znak)
}
const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";
console.info(`Zad 6) ${zad6(str,'|')}`)

// Zad 7.1
function zad7_1(arr){
  arr = arr.map((x)=>{return x.toUpperCase()});
  return arr;
}
console.info(`Zad 7.1) ${zad7_1(["Ania" , "Marcin" , "Bartek" , "Piotr"])}`)

// Zad 7.2
function zad7_2(arr){
  arr = arr.map((x)=>{
    var a = new Array()
    for(var i = 0; i < x.length; i++){
      if(i%2 == 0){
        a[i] = x[i].toUpperCase()
      }else{
        a[i] = x[i]
      }
    }
    return a.join('')
  })
  return arr
}
console.info(`Zad 7.2) ${zad7_2(["Ania" , "Marcin" , "Bartek" , "Piotr"])}`)

// Zad 8
function checkFemale(imie){
  if(imie.charAt(imie.length-1) == 'a'){
    return true;
  }else{
    return false
  }
}
console.info(`Zad 8) ${checkFemale("Ania")}`)

// Zad 9
const users = [
    "Ania Nowak",
    "Piotr Kowalski",
    "Bartek Kosecki",
    "Natalia Nowak",
    "Weronika Piotrowska",
    "Agata Beatczak",
    "Tomasz Nowak",
    "Mateusz Kowalski",
    "Marcin Kotecki",
    "Betata Lecka",
    "Katarzyna Melecka"
]
function countWomanInTable(users){
  var arr = users.map((x) =>{
    return x.split(" ")
  })
  let sum = 0;
  for(var kobieta in arr){
    if(arr[kobieta][0].charAt(arr[kobieta][0].length-1) == 'a'){
      sum++;
    }
  }
  return sum
}
console.info(`Zad 9) ${countWomanInTable(users)}`)
