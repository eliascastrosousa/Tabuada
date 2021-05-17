function confirmar() {
    var n = document.getElementById('num')
    var num = Number(n.value)
    var msg = document.getElementById('msg')
    msg.innerHTML = `<h2>A tabuada de ${num} é:</h2>`
    msg.innerHTML += `<h2>${num}x 1 = ${num * 1}</h2>`
    msg.innerHTML += `<h2>${num}x 2 = ${num * 2}</h2>`
    msg.innerHTML += `<h2>${num}x 3 = ${num * 3}</h2>`
    msg.innerHTML += `<h2>${num}x 4 = ${num * 4}</h2>`
    msg.innerHTML += `<h2>${num}x 5 = ${num * 5}</h2>`
    msg.innerHTML += `<h2>${num}x 6 = ${num * 6}</h2>`
    msg.innerHTML += `<h2>${num}x 7 = ${num * 7}</h2>`
    msg.innerHTML += `<h2>${num}x 8 = ${num * 8}</h2>`
    msg.innerHTML += `<h2>${num}x 9 = ${num * 9}</h2>`
    msg.innerHTML += `<h2>${num}x 10 = ${num * 10}</h2>`
  }