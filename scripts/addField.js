//Procurar o botao
document.querySelector("#add-time")
.addEventListener('click', cloneField)
//Quando clicar no botao

//Executar uma ação
function cloneField() {
    //Duplicar os campos. Que campos?
    document.querySelector('.schedule-items').cloneNode(true)
    //Colocar na página: onde??
    document.querySelector('#schedule.items').appendChild(fields)
}
   