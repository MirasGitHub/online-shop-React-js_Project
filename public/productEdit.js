
document.forms[0].productName.value = "Sample Product Name";
document.getElementById("productPrice").value = 55;

//document.querySelector("#color").value
//document.forms[0].color.value;

function productNameChanged(inputField) {
    console.log(inputField.value);
}


function onFormSubmit(e) {
    console.log("submit event");
}

document.getElementById("productEditForm").onsubmit = onFormSubmit;

document.getElementById("productPrice").onchange = e => {
    console.log(e.target.value);
    console.log(document.forms[0].price.value);
    console.log(document.getElementById("productPrice").value);
};
