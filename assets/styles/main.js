 document.getElementById('prev2').addEventListener('click', function() {
    document.getElementById('Formulaire-2').style.display = 'none';
    document.getElementById('Formulaire-1').style.display = 'block';
  });

document.getElementById('prev3').addEventListener('click', function () {
    document.getElementById('Formulaire-3').style.display = 'none';
    document.getElementById('Formulaire-2').style.display = 'block';
});

// validation des champs
const validForm1 = document.getElementById('next1');
    const nomInput = document.getElementById('nom');
    const prenomInput = document.getElementById('prenom');
    const ageInput = document.getElementById('age');
    const errur1 = document.getElementById('errur1');
    const errur2 = document.getElementById('errur2');
    const errur3 = document.getElementById('errur3');

validForm1.addEventListener('click', function_valid);
function function_valid(e) {
    // validation input nom
    if (nomInput.value.trim() == "") {
        e.preventDefault();
        errur1.textContent = "ce champ est obligatoire";
        errur1.style.color = 'red';
        errur1.style.fontSize = '12px'
    }
    else{
        errur1.textContent = "";
    }
    if (nomInput.value.trim() != "") {
        document.getElementById('Formulaire-1').style.display = 'none';
        document.getElementById('Formulaire-2').style.display = 'block';

    } else {
        document.getElementById('Formulaire-1').style.display = 'block';
        document.getElementById('Formulaire-2').style.display = 'none';
    }
    // validation input prenom
    if (prenomInput.value.trim() == "") {
        e.preventDefault();
        errur2.textContent = "ce champ est obligatoire";
        errur2.style.color = 'red';
        errur2.style.fontSize = '12px';
    }
    else{
        errur2.textContent = "";
    }
    if (prenomInput.value.trim() != "") {
        document.getElementById('Formulaire-1').style.display = 'none';
        document.getElementById('Formulaire-2').style.display = 'block';

    } else {
        document.getElementById('Formulaire-1').style.display = 'block';
        document.getElementById('Formulaire-2').style.display = 'none';
    }
    // validation input age
    if (ageInput.value.trim() == "") {
        e.preventDefault();
        errur3.textContent = "ce champ est obligatoire";
        errur3.style.color = 'red';
        errur3.style.fontSize = '12px';
    }
    else{
        errur3.textContent = "";
    }
    if (ageInput.value.trim() != "") {
        document.getElementById('Formulaire-1').style.display = 'none';
        document.getElementById('Formulaire-2').style.display = 'block';

    } else {
        document.getElementById('Formulaire-1').style.display = 'block';
        document.getElementById('Formulaire-2').style.display = 'none';
    }
}
const validForm2 = document.getElementById('next2');
    const emailInput = document.getElementById('email');
    const telInput = document.getElementById('tel');
    const emailErrur = document.getElementById('email-errur');
    const telErrur = document.getElementById('tel-errur')
validForm2.addEventListener('click', function_valid2);
function function_valid2(event) {
    

    // validation input email
    if (emailInput.value.trim() == "") {
        event.preventDefault();
        emailErrur.textContent = "ce champ est obligatoire";
        emailErrur.style.color = 'red';
        emailErrur.style.fontSize = '12px';
        
    }
    else{
       emailErrur.textContent = "";
    }
    if (emailInput.value.trim() != "") {
        document.getElementById('Formulaire-2').style.display = 'none';
        document.getElementById('Formulaire-3').style.display = 'block';

    } else {
        document.getElementById('Formulaire-2').style.display = 'block';
        document.getElementById('Formulaire-3').style.display = 'none';
    }
    // validation input tel
    if (telInput.value.trim() == "") {
        event.preventDefault();
        telErrur.textContent = "ce champ est obligatoire";
        telErrur.style.color = 'red';
        telErrur.style.fontSize = '12px';

    }
    else{
        tel_errur.textContent = "";
    }
    if (telInput.value.trim() != "") {
        document.getElementById('Formulaire-2').style.display = 'none';
        document.getElementById('Formulaire-3').style.display = 'block';

    } else {
        document.getElementById('Formulaire-2').style.display = 'block';
        document.getElementById('Formulaire-3').style.display = 'none';
    }
}
const validMessage = document.getElementById('submit');
    const messageInput = document.getElementById('floatingTextarea2');
    const errurTextArea = document.getElementById('messageErrur');
validMessage.addEventListener('click', function_validMsg);
function function_validMsg(event) {
    // validation TextArea
    if(messageInput.value.trim() == "") {
        event.preventDefault();
        errurTextArea.textContent = "ce champ est obligatoire";
        errurTextArea.style.color = 'red';
        errurTextArea.style.fontSize = '12px';
    }
    else {
        alert("Thank you for your submission!!");
    }
}

