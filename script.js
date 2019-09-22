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

function hide(i){
    $(".nav-menu").toggleClass("change");
    $(".menu").toggleClass("change");
    switch(i){
        case 'projects': 
                        console.log(i)
                        var  p =  document.getElementById("proj");
                        p.scrollIntoView();
                        console.log(p)
                        break;
        case 'contacts': 
                        console.log(i)
                        var  c =  document.getElementById("contact");
                        c.scrollIntoView();
                        console.log(c)
                        break;

    }
}

function myself(){
    
    var  v =  document.getElementById("myse");
    v.scrollIntoView();
    console.log(v)
}


