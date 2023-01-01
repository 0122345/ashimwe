 const form = document.getElementById('form');
 const name = document.getElementById('name');
 const email = document.getElementById('email');
 const subject = document.getElementById('subject');
 const msgbox = document.getElementById('msgbox');

 form.addEventListener('submit',(e) =>{
    e.preventDefault();

    checkInputs();
 });
  
 function  send(){
  // get values from input fields
 const nameValue = name.value.trim(); 
const  emailValue = email.value.trim();
const subjectValue = subject.value.trim();
const msgboxValue = msgbox.value.trim();
   

if(nameValue == ''){

  setErrorFor(name,'please your name is important');
  
}
else{

  setErrorFor(name,'you can continue');
}
 
if(subjectValue == ''){

  setErrorFor(subject,'please can you specify a subject');
  
}
else{

  setErrorFor(subject,'you can continue');
}

if(msgboxValue == ''){

  setErrorFor(msgbox,'can you leave us a comment please!?');
  
}
else{

  setErrorFor(msgbox,'you can continue');
}

 if(emailValue ==''){
 setErrorFor(email,'please your email is essential');
 }else if(!isEmail(emailValue)){
  setErrorFor(email,'please enter valid email');
 }else{
  setErrorFor(email,'you can now continue!');
 }

 function setErrorFor(input, message){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  small.innerText = message;

  formControl.className = 'form-control error';
 }
 function setSuccessFor(input){
 const formControl = inpt.parentElement;
 formControl.className = 'form-control success';
 }

function isEmail(email){
  return   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
// if (validation()) // Calling validation function
// {
// document.getElementById("form_id").submit(); //form submission
// alert(" Name : " + name + " n Email : " + email + " n Form Id : " + document.getElementById("form_id").getAttribute("id") + "nn Form Submitted Successfully......");
// }
// }


}

