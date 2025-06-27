


let form = document.querySelector('form')//Seleciona o form
let alunos = [];//armazena do formdata num array



form.onsubmit = function(event){ //Quando for enviado
  event.preventDefault() // quando vier default (nulo)

   

  const formdata = new FormData(form) //usa uma função do js que pega toda informação do form. 
  const datatosave = { // aqui e para pegar cada elemento na query.
    nome: formdata.get('nome') ,
    idade: formdata.get('idade'),
    curso: formdata.get('curso')
         }   
         alunos.push(datatosave)//adiciona no array o objeto datatosave
         list()//executa.
        
         console.log(alunos)
}


function list() {
   const ulpai = document.getElementById("lista-alunos")
   ulpai.innerHTML = '' // Limpa a lista antes de recriar

   alunos.forEach((aluno, index) => { // foreach passando duas funcoes dele mesmo. valor atual(aluno), indice(index)
      const criarLi = document.createElement('li')
      ulpai.appendChild(criarLi)//depos de criado a li, e definida que ul e a progenitora de li portanto ela vai dentro

      criarLi.textContent += `Aluno ${index + 1}: Nome: ${aluno.nome}, Idade: ${aluno.idade}, Curso: ${aluno.curso}`

      const criarSelect = document.createElement('input')
      criarSelect.type = 'checkbox'

      criarLi.appendChild(criarSelect) // mesma coisa do ulpai.
   

      let btn_del = document.createElement('button')
      criarLi.appendChild(btn_del)

      btn_del.textContent = 'Deletar'
      btn_del.onclick = function() { // uma funcao que funciona ao clicar
         if(criarSelect.checked){//checa se o check box esta marcado
            console.log(`Marcado${index}`)
            alunos.splice(index, 1)//remove do array
            ulpai.removeChild(criarLi) // remove da tela.
            
         } else {
            console.log('desmarcado')
         }
      }
       
   })

   

}


 
