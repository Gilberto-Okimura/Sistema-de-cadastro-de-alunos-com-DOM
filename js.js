

let name_f = document.getElementById('nome').value
let year_f = document.getElementById('idade').value
let course_f = document.getElementById('curso')
let form = document.querySelector('form')
   


form.onsubmit = function(event){ //Quando for enviado
  event.preventDefault() // quando vier default (nulo)

  const formdata = new FormData(form) //usa uma função do js que pega toda informação do form. 
  const datatosave = { // aqui e para pegar cada elemento na query.
    nome: formdata.get('nome') ,
    idade: formdata.get('idade'),
    curso: formdata.get('curso')
  }


  let alunos = [] 
  alunos.push(datatosave)//armazena em um array
  

  console.log(alunos);

 function list(){
  
    let criarLi = document.createElement('li')
    let ulpai = document.getElementById("lista-alunos")
      

    for(let i = 0; i < alunos.length; i++){
            
          let ulcriar = ulpai.appendChild(criarLi )
          ulcriar.innerText += `Aluno: nome:${datatosave.nome} idade:${datatosave.idade} curso: ${datatosave.curso}`
            
         let criarbotao_ofdel = document.createElement('button')
         let criarbotao_ofedit = document.createElement('button')
         criarbotao_ofdel.textContent = "Deletar Aluno"
         criarbotao_ofedit.textContent = "Editar informação"
         

         
         criarLi.appendChild(criarbotao_ofdel)
         criarLi.appendChild(criarbotao_ofedit)
      
         criarbotao_ofdel.onclick = function(){ criarLi.remove();
            
          }
    }

 }
   list()
   

  
}


 

