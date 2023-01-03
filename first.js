// localStorage.setItem("name","domestic"); akako karakora
  






  function con() { 

  const name = document.getElementById("name").value;
 const email = document.getElementById("email").value;
 const subject = document.getElementById("subject").value;
 const msgbox = document.getElementById("msgbox").value;
  

  
  localStorage.setItem("name",name);
  localStorage.setItem("email",email);
  localStorage.setItem("subject",subject);
  localStorage.setItem("msgbox",msgbox);
  window.location.reload();

 };

//  function  chenkInputs(){
//    get values from input fields
//  const nameValue = name.value.trim(); 
// const  emailValue = email.value.trim();
// const subjectValue = subject.value.trim();
// const msgboxValue = msgbox.value.trim();
   

// if(nameValue == ''){

//   setErrorFor(name,'please your name is important');
  
// }
// else{

//   setsuccessFor(name,'you can continue');
// }
 
// if(subjectValue == ''){

//   setErrorFor(subject,'please can you specify a subject');
  
// }
// else{

//   setErrorFor(subject,'you can continue');
// }

// if(msgboxValue == ''){

//   setErrorFor(msgbox,'can you leave us a comment please!?');
  
// }
// else{

//   setErrorFor(msgbox,'you can continue');
// }

//  if(emailValue ==''){
//  setErrorFor(email,'please your email is essential');
//  }else if(email(emailValue)){
//   setErrorFor(email,'please enter valid email');
//  }else{
//   setErrorFor(email,'you can now continue!');
//  }

//  function setErrorFor(input, message){
//   const formControl = input.parentElement;
//   const small = formControl.querySelector('small');

//   small.innerText = message;

//   formControl.className = 'form-control error';
//  }
//  function setSuccessFor(input){
//  const formControl = input.parentElement;
//  formControl.className = 'form-control success';
//  }

// function isEmail(email){
//   return   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }
// if (validation()) // Calling validation function
// {
// document.getElementById("form_id").submit(); //form submission
// alert(" Name : " + name + " n Email : " + email + " n Form Id : " + document.getElementById("form_id").getAttribute("id") + "nn Form Submitted Successfully......");
// }
// }


// }

