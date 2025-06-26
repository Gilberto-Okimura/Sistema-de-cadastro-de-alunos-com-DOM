


let form = document.querySelector('form')
let alunos = [];



form.onsubmit = function(event){ //Quando for enviado
  event.preventDefault() // quando vier default (nulo)

   

  const formdata = new FormData(form) //usa uma função do js que pega toda informação do form. 
  const datatosave = { // aqui e para pegar cada elemento na query.
    nome: formdata.get('nome') ,
    idade: formdata.get('idade'),
    curso: formdata.get('curso')
         }   
         alunos.push(datatosave)
         list()
        
         console.log(alunos)
}


function list() {
   const ulpai = document.getElementById("lista-alunos")
   ulpai.innerHTML = '' // Limpa a lista antes de recriar

   alunos.forEach((aluno, index) => {
      const criarLi = document.createElement('li')
      ulpai.appendChild(criarLi)
      const criarSelect = document.createElement('input')
      criarSelect.type = 'checkbox'
      criarSelect.dataset.index = index

      ulpai.addEventListener('',(e)=>{
      
      })
    
      

      criarLi.textContent += `Aluno ${index + 1}: Nome: ${aluno.nome}, Idade: ${aluno.idade}, Curso: ${aluno.curso}`
   })
}


 

