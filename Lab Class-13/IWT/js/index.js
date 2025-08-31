var a= prompt("Enter a number:");
if(a>10)
    document.writeln(a+" is greater than 10</br>");
else
    document.writeln(a+" is less than or equal to 10 </br>");

(a<10) ?
(a==12) ? document.writeln(a+" is equal to 12 </br>") :
    document.writeln(a+" is not equal to 12 </br>"):
    document.writeln(a+" is not less than or equal to 10 </br>");


    //Function

document.writeln("</br> <span style='color:green;'>"+square(a)+"</span>");
function square(a){
    return a*a;
}

function addStyle(){
    var paraId=document.querySelector('#paraId');
    paraId.style.color="red";
    paraId.style.fontSize="3re";
    paraId.style.fontWeight="bold";
    paraId.style.fontStyle="italic";
}

function removeStyle(){
    paraId.style=" ";
}



function addStyle(){
    paraId.classList.add("para-style");
}

function removeStyle(){
    paraId.classList=" ";
}

function next(){

    location.href="templates/next.html";
}
function back(){

    location.href="../index.html";
}


addEventListener
var paraId=document.querySelector('#addButton');
paraId.addEventListener("click",addStyle);

function addStyle(){
   var paraId= document.querySelector('#paraId');
    paraId.classList.toggle("para-style");
}


var paraId=document.querySelector('#addButton');
button.addEventListener("click",function(a,b){
var paraId=document.querySelector('#paraId');
paraId.innerHTML(a+b)}(1,3));


const names=['asd','fgd','dfge'];
// for of
for(let a of names)
    document.writeln(a + ',');


//for in loop

let person={

    id:1,
    name:"sakib"
}
 for (let x in person){
    document.writeln("<br/>" + x + " : " + person[x]);
 }

 //for each loop
 document.writeln("<br/> for each loop use : <br/>");
    var numbers=[1,21,31,42];
    numbers.forEach(function(x){
        document.write(x + "<br/>");
    });

    //arrow function

    const display=()=>{
        return "<br/> hello with return arrow function";

    }
    document.write(display());

    add=(a,b)=>document.writeln("Add :" + (a,b),
    " sub " + (a-b));
    add(1,2);

    //github a 9/10 porjonto slide js. bbotstrap+js exam. r ki ki topic jeno bad gise arrow function er por tulte