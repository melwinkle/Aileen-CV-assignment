import './maincs.css';




function onSubmit(event) {
    event.preventDefault(); 
    //const fname= form.elements["first"].value;
    //const mname = form.elements["middle"].value;
    //const lname = form.elements["last"].value;
   // const gender = form.elements["gender"].value;
   // const email = form.elements["email"].value;
    //const number = form.elements["phone"].value;
   // const address = form.elements["address"].value;
   
   const f_name= document.getElementById("fname").value;
   const m_name= document.getElementById("mname").value;
   const l_name= document.getElementById("lname").value;
   const gender= document.getElementById("gender").value;
   const mail= document.getElementById("email").value;
   const phone= document.getElementById("number").value;
   const postal= document.getElementById("address").value;



   localStorage.setItem("First",f_name);
   localStorage.setItem("Middle",m_name);
   localStorage.setItem("Last",l_name);
   localStorage.setItem("Gender",gender);
   localStorage.setItem("Email",mail);
   localStorage.setItem("Number",phone);
   localStorage.setItem("Address",postal);
   return ;

}

    let fullname=localStorage.getItem("First")+ " "+ localStorage.getItem("Middle") + " " +localStorage.getItem("Last");

   document.getElementById("first-res").innerHTML=fullname;
   document.getElementById("gender-res").innerHTML=localStorage.getItem("Gender");
   document.getElementById("address-res").innerHTML=localStorage.getItem("Address");
   document.getElementById("number-res").innerHTML=localStorage.getItem("Number");
   document.getElementById("mail-res").innerHTML=localStorage.getItem("Email");

   

   

  
    
}


