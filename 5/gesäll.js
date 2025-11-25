const checkLista = document.getElementById("listFunktioner");
const laggTillK = document.getElementById("laggTill");

laggTillK.addEventListener("click", () => laggTill());
//checklistan skapar jag en div för varje rad, kopplar sedan kopplade jag listraden till min css klass för stillsättning, sedan använde jag appenchild för dynamik, lägga till/ta bort.
function laggTill (value = "") {
	const rad = document.createElement("div");
	rad.classList.add("listRad")
	const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    rad.appendChild(checkbox);


const input = document.createElement("input");
	input.type = "text";
	input.value = value;
	rad.appendChild(input);

	const taBort = document.createElement("button");
	taBort.textContent = "Ta Bort";
	taBort.addEventListener("click", () =>{
		rad.remove();

	});
	rad.appendChild(taBort)
    
    checkLista.appendChild(rad);

}

const motKnapp = document.getElementById("motivationK");
const snallaOrd = ["Lite kvar!","Plugget är hårt men du är hårdare ","Pluggers starkaste soldat","Tänk dig känslan efter tentan","Bara lite kvar på timern (tror jag)", "Du är bäst", "Samhällets framtid", "KÖÖÖÖÖÖÖÖR", "Du kommer definitivt få A", "PLUGGA HÅÅÅÅRDARE", "Har jag sagt att du är bäst", "Wow vilket odjur", "Varför frågar du mig om motivation, jag har några frågor"];
const ordVisas = document.getElementById("ordYta");
//motivationsknappen slumpar en motivation från snallaordarayen genom anrop av math.random mot längden av arrayen. därefter användes det deklarerade begreppet ordvisas bundet till html paragrafen/ordytan med textcontent, vilket var något nytt jag lärde mig.
motKnapp.addEventListener("click", () => {
	const randomOrd = snallaOrd[Math.floor(Math.random() * snallaOrd.length)];
	ordVisas.textContent = randomOrd;

});

const visadTimer = document.getElementById("timer");
const start = document.getElementById("startKnapp");
const lage = document.getElementById("lagePlugg");
const paus = document.getElementById("pausa");

let plugga = 0;
let vila = 0;
let timer;
let tidKvar = 0;
let pluggar = true;
let tid = 0;
let maxTid = 0;
let pausad = 0;
//hämtar selecten från hmtl och deklarerar antelet minuter från intervallen till variablerna
document.getElementById("intervall").addEventListener("change", function(){

const val = this.value;

if(val === "enkel"){
	plugga = 40;
	vila = 20;
}else if (val === "medium"){
	plugga = 45;
	vila = 15;
}else if (val ==="svar"){
	plugga = 50;
	vila = 10;
}

lage.textContent = " Är du redo? Klicka start!";
start.style.display ="inline-block";


});


//startknappen, först ser vi till att pausknappen blir synlig, efter använder vi setinterval för timern där vi ser till att den stannar på 60 min, och att 15/20/10 vilominuterna blir gröna och ändrar textcontent i olika stadierna. Jag använde padstart på timerns textcontent för alltid få en 0a framför.
start.addEventListener("click", function(){
	
	paus.style.display = "inline-block"
	lage.textContent = "Plugga på!"
	const maxTid = 60 * 60;
	pluggTid = plugga * 60;
	tid = 0;
 
clearInterval(timer);

timer = setInterval(function(){
	visadTimer.style.color = "#6E5849";
	  if(tid >= pluggTid){
            visadTimer.style.color ="green";
            lage.textContent = "Vila!";
        }

	if (pausad) return;
	if(tid >= maxTid){
		visadTimer.textContent = `${tid} : 00`
		lage.textContent ="Bra Jobbat, kör igen om du är redo, med samma eller annat intervall!"
		return;
	}

	tid++;
	const minutes = Math.floor(tid / 60);
    const seconds = tid % 60;

    visadTimer.textContent = `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;

   

},1000);




});
//pausknappen som först kollar boolean, därefter ändrar textcontent till paus eller fortsätt.
paus.addEventListener("click",function (){

pausad = !pausad;

if(pausad){
	paus.textContent ="Fortsätt";
}else{
	paus.textContent ="Pausa"
}


});





