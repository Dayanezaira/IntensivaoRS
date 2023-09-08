const buttonOne = document.querySelector("#btn-1")

buttonOne.addEventListener("click", function() {
    window.scroll({top: document.body.scrollHeight, behavior: "smooth"})
})

const buttonTwo = document.querySelector("#btn-2")

buttonTwo.addEventListener("click", function() {
    alert(`Formulário enviado com sucesso!`)
})