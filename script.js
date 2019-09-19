const elements = [' am a  Developer',' Design'];
let i = 0 ;
let count = 0;
let currentword = '';
let letter = '';

$(document).ready(function(){
    typewrite();
});

function typewrite() {
    if(count === elements.length){
        count = 0;
    }
    currentword = elements[count];
    if(i<currentword.length ){
        document.getElementById("typewrite").innerHTML += currentword.charAt(i);
        i++;
        setTimeout(typewrite,250);
    }
    else{
        count++;
        i=0;
        document.getElementById("typewrite").innerHTML = '';
        setTimeout(typewrite,500);
    }
    
}

function change(x){
    x.classList.toggle("change")
    $(".nav-menu").toggleClass("change")
}

function hide(){
    $(".nav-menu").toggleClass("change");
    $(".menu").toggleClass("change");
}

function projects(){
    
    var  v =  document.getElementById("myse");
    v.scrollIntoView();
}


