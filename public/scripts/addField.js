//Procurar o botao
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener('click', cloneField)
//Executar uma ação
function cloneField() {
    //Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // pegar os campos. Que campo?
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada campo limpar
    fields.forEach(function (fields){
        // pegar o fields do momento e limpa ele
        fields.value = ""
    })

    //Colocar na página: onde??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
   