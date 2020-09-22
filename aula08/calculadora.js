function calcular(numero1, numero2, operacao){
    operacao(numero1, numero2)
    console.log("A operação foi realizada com sucesso")
  }
  
  function soma(numero1, numero2){
    console.log(numero1 + numero2)
  }
  
  function subtrai(numero1, numero2){
    console.log(numero1 - numero2)
  }
  
  function divide(numero1, numero2){
    console.log(numero1 / numero2)
  }
  
  function multiplica(numero1, numero2){
    console.log(numero1 * numero2)
  }

module.exports ={
    soma,
    subtrai,
    divide,
    multiplica
    
}