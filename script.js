const elements = ['Developer','Designer'];
let i = 0 ;
let count = 0;
let currentword = '';
let letter = '';



// $(document).ready(function(){
//     typewrite();
// });

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







var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};









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