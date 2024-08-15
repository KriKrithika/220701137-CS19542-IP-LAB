document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('MyForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            displaySuccessMessage()
        }
    });
});

function validateForm() {
    let flag = true;
    const alpha = /^[A-Za-z]+$/;
    const num = /^[0-9]+$/;
    const alphanum = /^[A-Za-z0-9\s,.-]+$/;
    const emailformat= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    const nam = document.getElementById('name').value;
    const rollno = document.getElementById('rollno').value;
    const dept = document.getElementById('dept').value;
    const emailid=document.getElementById('email').value;
    const mobileno = document.getElementById('mobileno').value;
    const address = document.getElementById('address').value;
    const city=document.getElementById('city').value;
    const pincode = document.getElementById('pincode').value;

    const nameError = document.getElementById('nameerror');
    const rollNoError = document.getElementById('rollnoerror');
    const deptError = document.getElementById('depterror');
    const emailError=document.getElementById('emailerror');
    const mobileNoError = document.getElementById('mobilenoerror');
    const addressError=document.getElementById('addresserror');
    const cityError=document.getElementById('cityerror');
    const pincodeError=document.getElementById('pincodeerror');

    nameError.textContent = '';
    rollNoError.textContent = '';
    deptError.textContent = '';
    mobileNoError.textContent = '';
    addressError.textContent='';
    pincodeError.textContent='';
    cityError.textContent='';
    emailError.textContent='';

    if (!alpha.test(nam)) {
        nameError.textContent = "Name should contain only alphabets.";
        flag = false;
    }

    if (!num.test(rollno)) {
        rollNoError.textContent = "Roll No should contain only numbers.";
        flag = false;
    }

    if (!alpha.test(dept)) {
        deptError.textContent = "Department should contain only alphabets.";
        flag = false;
    }

    if (!num.test(mobileno)) {
        mobileNoError.textContent = "Mobile No should contain only numbers.";
        flag = false;
    }

    if (!alphanum.test(address)) {
        addressError.textContent = "Address can contain only letters, numbers, and basic symbols.";
        flag = false;
    }

    if(!alpha.test(city)){
        cityError.textContent="City can only contain alphabets";
        flag=false;
    }

    if (!num.test(pincode)) {
        pincodeError.textContent = "Pincode should contain only numbers.";
        flag = false;
    }

    if(!emailformat.test(emailid)){
        emailError.textContent="Email ID should be in correct format";
        flag=false;

    }
    return flag;
}


function displaySuccessMessage() {
    const messageContainer = document.getElementById('messageContainer');
    messageContainer.innerHTML = `<p>Form submitted successfully!</p>
    <button onclick="location.reload();">Reload</button>`;
}
