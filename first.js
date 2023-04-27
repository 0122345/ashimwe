// localStorage.setItem("name","domestic"); akako karakora
function validate(){
         
  var name = document.getElementById("name")
 var email = document.getElementById("email")
 var subject = document.getElementById("subject")
 var msgbox = document.getElementById("msgbox")
  

var x=document.myform.email.value;  
  var atposition=x.indexOf("@");  
  var dotposition=x.lastIndexOf(".");   


  if( name.value.trim()==""){
   alert("please enter your name")
    name.style.border = "solid 3px red";
    return false;
  }


  else if(email.value.trim()== ""){
   alert("please enter your email")
    email.style.border = "solid 3px red";
     return false;
  }

 

  else   if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
    alert("Please enter a valid e-mail address ! ");  
    return false;  
    }
    
 else if(subject.value.trim()== ""){
  subject.style.border = "solid 3px red";
     return false;
  }

 
  else if(msgbox.value.trim()== ""){
    msgbox.style.border = "solid 3px red";
     return false;
  }
  else if(msgbox.value.trim().length<20){
    alert("please enter atleast 20 characters")
     return false;
  }


 else if( email.value.trim()!=""){
    email.style.border = "solid 3px green";
    email.style.transitionDelay( 25);
    return true;
  }

 else if( subject.value.trim()!=""){
    subject.style.border = "solid 3px green";
    subject.style.transitionDelay( 25);
    return true;
  }
    else if( name.value.trim()!=""){
    name.style.border = "solid 3px green";
    name.style.transitionDelay( 25);
    return true;
  }

else{
 alert("your post was received is unsuccessful received!")
//  name.style.border = "solid 3px green";
//  email.style.border = "solid 3px green";
//  subject.style.border = "solid 3px green";
//  msgbox.style.border = "solid 3px green";
  return false;
}
  }
  function con() { 

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const subject = document.getElementById("subject").value;
const msgbox = document.getElementById("msgbox").value;

localStorage.setItem("name",name);
localStorage.setItem("email",email);
localStorage.setItem("subject",subject);
localStorage.setItem("msgbox",msgbox);
 

};





  
let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("navi a button");

window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(" navi a button[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();


 
