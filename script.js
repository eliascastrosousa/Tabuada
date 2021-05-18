function confirmar() {
    var n = document.getElementById('num')
    var num = Number(n.value)
    var msg = document.getElementById('msg')
    var a = 1
    msg.innerHTML = `<h1> A tabuada de ${num} é: </h1>`
    while (a <= 10){
      msg.innerHTML += (`<h2> ${num} X ${a} = ${num*a} </h2>`)
      a++
    } msg.innerHTML += (`Fim da tabuada.` )
  
}