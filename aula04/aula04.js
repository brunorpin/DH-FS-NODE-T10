//Desafio - verificar animais vacinados ou se precisa de vacina. Lembrando que esta funcao irá receber um parametro (podendo ser um único pet da lista, ou, caso queira fazer
//o Extra terá que trabalhar a lista por completo)
//Extra - se quiserem efetuar uma listagem de animais vacinados e nao vacinados
//exe: o pet yoshi está vacinado
//Dica - pode criar uma propriedade vacinado e atribuir valor boolean

const json = require("./json");

//let organizacao = "Petshop Node";
let pets = [
    {
        id: 1,
        nome: "bob",
        tipo: "cachorro",
        raca: "Akita inu",
        idade: 6,
        genero: "Masculino",
        vacinado: true,
        servicos: [],
      
    },
    {
        id: 2,
        nome: "tutu",
        tipo: "passaro",
        raca: "papagaio",
        idade: 18,
        genero: "Masculino",
        vacinado: false,
        servicos: [],
        
    }
   
];

//console.log(pets);
//Utilizamos o length para saber o tamanho da array de pets, e o for para executar varias vezes até pegar todas as informações solicitadas.
const listarPets = () => {

//    for (let i = 0; i < pets.length; i++) {
   
//     console.log("Nome: "+ pets[i].nome);
//     console.log("Tipo: "+ pets[i].tipo);

//    }


//forEach - utilizando no lugar do for
   pets.forEach(function(pet){
       console.log("Nome: " +pet.nome);
       console.log("Tipo: " +pet.tipo);
   })
}

//Validar os dados. OBS usamos o typeof validar tipo boolean
const validaDados = (novoPet) =>{
    return (
    //novoPet.id &&
    novoPet.nome  && 
    novoPet.tipo   && 
    novoPet.raca   && 
    novoPet.idade   && 
    novoPet.genero   && 
    typeof novoPet.vacinados  == "boolean")
}
//listarPets();

const cadastrarPet = (objetoPet) => {
    if(typeof objetoPet == "object"){
        if(validaDados(objetoPet)){
            objetoPet.id = pets.length + 1
        pets.push(objetoPet);
        console.log(pets);
        }else{
            console.log("O objeto nao tem todas propriedades necessarias");
        }
    }else{
        console.log("Insira um objeto válido");
    }
}

let ObjPet = {
    id: pets.length,
    nome: "CDesconhecido",
    tipo: "cachorro",
    raca: "vira-lata",
    idade: 6,
    genero: "Masculino", 
    vacinado: false
}

const vacinados = (pets) => {
    let petsVacinados = [];
    let petsNaoVacinados = [];
    let numPetVac = 0;
    var numPetNVac = 0;
    for(let i =0; i < pets.length; i++){
        

        if(pets[i].vacinado){
            petsVacinados.push(pets[i].nome);
            numPetVac = numPetVac + 1;


        }else{
            petsNaoVacinados.push(pets[i].nome)
                numPetNVac = numPetNVac + 1;
        }
    }
    console.log("Pets Vacinados: " + numPetVac);
    console.log("Lista de pets vacinados: " +petsVacinados);
    console.log("Pets Vacinados: " + numPetNVac);
    console.log("Lista de pets vacinados: " +petsNaoVacinados);
}
//cadastrarPet(ObjPet)


//vacinados(pets);



//utilizando callback para chamar a funcao servico
const servicos = (pet, servico) =>{
    servico(pet);
}

const darBanhoNoPet = (pet) =>{
    let dataDoServico = new Date()
    dataDoServico = dataDefinitiva = dataDoServico.getDate() + "/" + (dataDoServico.getMonth() +1) + "/" + dataDoServico.getFullYear()
       
    
    pet.servicos.push("Serviço de banho realizado em  " + dataDoServico);
    console.log("O pet " + pet.nome + " tomou banho");

}

console.log(pets)
const tosarPet = (pet) =>{
    let dataDoServico = new Date()
    dataDoServico = dataDefinitiva = dataDoServico.getDate() + "/" + (dataDoServico.getMonth() +1) + "/" + dataDoServico.getFullYear()
    pet.servicos.push("Serviço de tosa realizado em " + dataDoServico);
    console.log("O pet " + pet.nome + " foi tosado");
}


//servicos(pets[0], darBanhoNoPet);
//servicos(pets[0], tosarPet);

// function tipoServico(banho, tosa, execucao){
//     execucao(banho,tosa)
// }

// function servicoRealizado(banho, tosa){
//     for(let i = 0; i < pets.length; i++){
//     console.log(pets[i].nome + banho)
//     console.log(pets[i].nome +  tosa)
//     }
// }

// tipoServico("Esta tomando banho ", " Esta tosando", servicoRealizado);

//Desafio novo - Criar uma funcao que adicione todos os pets da lista contida json dentro da lista de pets que é a variavel pets
// (nao precisa ter validacao de dados, por qual motivo?) No json nao temos as propriedades vacinado, servico)
// 

// Com SpredOperator - OBS estudar mais
const cadastrarPetsJson = (lista, json) =>{
    let arrayPets = JSON.parse(json);
    lista.push(...arrayPets)
    return lista
}

//console.log(cadastrarPetsJson(pets, json))


//listarPets();

//Filtrar pet pelo nome
const filtraPetPorNome = (nome) => {
  let petsFiltrado =  pets.filter((pets) => {
      return pets.nome == nome
  })
  if(!petsFiltrado.length){
      return 'Nenhum pet foi encontrado com o nome ' + nome
  }else{
      return petsFiltrado
  }
  
}
//console.log(filtraPetPorNome('b'))
//CRUD - cREATE, READ, UPDATE, DELETE

//Desafio 1 - pesquisar/analisar uma forma melhor de solucionar o problema da propriedade ID
//Desafio 2 - excluir um pet atraves da propriedade id
//Desafio 3 - alterar um pet especifico também utilizando a propriedade id

//Desafio2 - 
const removerPet = (id) => {
    let pet =  pets.filter((pet) => {
        return pet.id == id
    })
    if(pet.length != 0){
        pets.splice(id -1, 1)
        console.log(pets)
    }else{
        console.log("Nenhum pet foi encontrado com o id: " + id)
    }
}

removerPet(10)