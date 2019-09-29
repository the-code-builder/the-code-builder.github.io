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
        var templateParams = {
            name: name,
            message_html: msg,
            from_name:name,
            reply_email: mail
        };
        document.getElementById("btn").innerHTML = "Sending....";
        document.getElementById("btn").disabled = true;
        emailjs.send('default_service', 'template_pD9JGafD' , templateParams)
        .then(function(response){
            console.log('Success', response.status,response.text);
            document.getElementById("btn").disabled = false;
            document.getElementById("btn").innerHTML = "Send";
            window.alert("Message sent...! We will get back to you")
        }, function(error){
            console.log('FAILED...', error);
            document.getElementById("btn").disabled = false;
            document.getElementById("btn").innerHTML = "Send";
        }
        );
    
        document.getElementById("name").value='';
        document.getElementById("mail").value='';
        document.getElementById("msg").value='';

    }

    

}