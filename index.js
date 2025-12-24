const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const declineBtn = document.getElementById('decline-btn')
const modalChoiceBtns = document.getElementById('modal-choice-btns')

setTimeout( () => {
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function () {
    modal.style.display = 'none'
})

declineBtn.addEventListener('mouseenter', function () {
    modalChoiceBtns.classList.toggle('modal-btns-reverse')
})

consentForm.addEventListener('submit', function (e) {
    e.preventDefault()

    const consentFormData = new FormData(consentForm)
    const fullName = consentFormData.get('fullName')

    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading"> => 
        <p id="upload-text">Storing your data in a malicious way...</p>
    </div>`

    setTimeout(function () {
        document.getElementById('upload-text').innerText = `
        Selling your data...`
    }, 1500)


    setTimeout(() => {
        document.getElementById('modal-inner').innerHTML = `
        <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
        <p>We just sold the rights to your soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
    `
        modalCloseBtn.disabled = false
    }, 3000)

}) 
