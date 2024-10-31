// document.getElementById('next1').addEventListener('click', function() {
//   });

//   document.getElementById('prev2').addEventListener('click', function() {
//     document.getElementById('Formulaire-2').style.display = 'none';
//     document.getElementById('Formulaire-1').style.display = 'block';
//   });

// document.getElementById('next2').addEventListener('click', function () {
//     document.getElementById('Formulaire-2').style.display = 'none';
//     document.getElementById('Formulaire-3').style.display = 'block';
// });

// document.getElementById('prev3').addEventListener('click', function () {
//     document.getElementById('Formulaire-3').style.display = 'none';
//     document.getElementById('Formulaire-2').style.display = 'block';
// });
// document.getElementById("submit").addEventListener("click", function () {
//     alert("Thank you for your submission!!");
// });
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
        errur1.textContent = "nom manquant";
        errur1.style.color = 'red';
        errur1.style.fontSize = '12px'
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
        errur2.textContent = "prenom manquant";
        errur2.style.color = 'red';
        errur2.style.fontSize = '12px';
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
        errur3.textContent = "Age manquant";
        errur3.style.color = 'red';
        errur3.style.fontSize = '12px';
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
const emailErrur = document.getElementById('email_errur');
const tel_errur = document.getElementById('tel_errur')
validForm2.addEventListener('click', function_valid2);
function function_valid2(event) {
    // validation input email
    if (emailInput.value.trim() == "") {
        event.preventDefault();
        emailErrur.textContent = "email manquant";
        emailErrur.style.color = 'red';
        emailErrur.style.fontSize = '12px';
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
        tel_errur.textContent = "tel manquant";
        tel_errur.style.color = 'red';
        tel_errur.style.fontSize = '12px';

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
        errurTextArea.textContent = "ce champ est obligatoir";
        errurTextArea.style.color = 'red';
        errurTextArea.style.fontSize = '12px';
    }
    else {
        alert("Thank you for your submission!!");
    }
}