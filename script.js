const elements = [' am a  Developer','love to Design'];
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


function sendMail(){
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var msg = document.getElementById("msg").value;
    if(name=='' || mail=='' || msg==''){
        
        if(name==''){
            $("#name").attr('placeholder',"please enter your name..!")
        }

        if( mail=='' ){
            $("#mail").attr('placeholder',"please enter your mail ID..!")
        }

        if(msg==''){
            $("#msg").attr('placeholder',"please enter message..!")
        }
        
    }
    else{
        ument.getElementById("btn").innerHTML = "Sending....";
        document.getElementById("btn").disabled = true;
        
        document.getElementById("name").value='';
        document.getElementById("mail").value='';
        document.getElementById("msg").value='';

    }

    

}