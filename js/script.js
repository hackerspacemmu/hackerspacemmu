/**
 * Email Validation
 */ 

const targetPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const targetDomain = /mmu.edu.my/

const formBtn =
    document.getElementById('formButton')
        .addEventListener('click', emailValidation, false);

function emailValidation(event) {
    var emailInputElement = document.getElementById("validationMMUEmail")
    var domainString = emailInputElement.value.slice(emailInputElement.value.lastIndexOf('@') + 1)
    var domainLen = domainString.length
    var idx = domainString.search(targetDomain)
    
    console.log(emailInputElement.value)
    console.log(targetPattern)
    console.log(idx, domainLen)

    // Check if the input is empty
    if (emailInputElement.value == "") {
        emailInputElement.classList.remove("is-valid")
        emailInputElement.classList.remove("is-invalid")
        event.preventDefault()
        event.stopPropagation()
    }

    // Check if the input match email pattern && match domain pattern
    if (emailInputElement.value.match(targetPattern) && (idx + 10 == domainLen)){   
        console.log("is-invalid")
        emailInputElement.classList.remove("is-invalid")
        emailInputElement.classList.add("is-valid")
    }
    else {
        console.log("is-invalid")
        emailInputElement.classList.remove("is-valid")
        emailInputElement.classList.add("is-invalid")
        event.preventDefault()
        event.stopPropagation()
    }
}