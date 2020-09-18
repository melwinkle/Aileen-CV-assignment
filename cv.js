import './maincs.css';


const form = document.getElementById("addForm");
const appDiv = document.getElementById('full');
appDiv.innerHTML = `<p>Aileen Lisa Adzo Akpalu</p>`;
function onSubmit(event) {
    event.preventDefault(); 
    const fname= form.elements["first"].value;
    const mname = form.elements["middle"].value;
    const lname = form.elements["last"].value;
    const gender = form.elements["gender"].value;
    const email = form.elements["email"].value;
    const number = form.elements["phone"].value;
    const address = form.elements["address"].value;
    



  
    
}

