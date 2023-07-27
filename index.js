function confirmar_vel() {
    var limite = Number(document.querySelector('input#limite').value)

    var velocidade = document.querySelector('input#velocidade')
    var txtvel = document.querySelector('div#txtvel')
    
    var velregist = Number(velocidade.value)
    if (velregist > 1.01 * limite && velregist <= 1.20 * limite ) {
        txtvel.innerHTML = `<h2>Multado</h2>`
        var res = (velregist*100)/limite
        txtvel.innerHTML += `<p>Você foi multado em <strong>R$130,16</strong> por ultrapassar ${(res-100).toFixed(2)}% do limite. `
        }
    else if (velregist > 1.20 * limite && velregist <= 1.50 * limite ){
        txtvel.innerHTML = `<h1>Multado</h1>`
        var res = (velregist*100)/limite
        txtvel.innerHTML += `<p>Você foi multado em <strong>R$195,23</strong> por ultrapassar ${(res-100).toFixed(2)}% do limite. `
    }   
    else if (velregist > 1.5 * limite) {
        txtvel.innerHTML = `<h1>Multado</h1>`
        var res = (velregist*100)/limite
        txtvel.innerHTML += `<p>Você foi multado em <strong>R$880,41</strong> por ultrapassar ${(res-100).toFixed(2)}% do limite. `
    }
    else {
        txtvel.innerHTML = `<h2>Nenhuma multa registrada!<h2/>`
    }
}
function entrarbotao() {
    botaoconfirmar.style.background='rgb(124, 177, 122)'
}
function sairbotao(){
    botaoconfirmar.style.background='green'
}
function clicandobotao(){
    botaoconfirmar.style.background='rgb(42, 102, 40)'
}
function soltandobotao(){
    botaoconfirmar.style.background='rgb(124, 177, 122)'
}