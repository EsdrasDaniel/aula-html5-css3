var nome = document.getElementById("txtn")
var idade = document.getElementById("txti")
var curso = document.getElementById("txtc")
var res = document.getElementById("res")
var dat = document.getElementById("txtd")
var dur = document.getElementById("txtt")
function verificar() {
    var n = nome.value
    var i = idade.value
    var c = curso.value
    var d = dat.value
    var du = dur.value
    if (n.length == 0 || i.length == 0 || c.length == 0 || d.length == 0 || du.length == 0){
        alert("[ERROR] Dados inválidos")
    } else {
        
        window.alert("Deseja confirmar estes dados?")
       res.innerHTML = `Seus Dados foram salvos e encaminhados para a instituição de ensino. <br>`
       res.innerHTML += `Segue abaixo as informações que estarão contidas no seu CERTIFICADO. <br>`
       res.innerHTML += `Nome <strong> ${n}</strong>, idade <strong> ${i}</strong> anos, o nome do curso concluído <strong> ${c} </strong>, data de conclusão <strong> ${d} </strong> e também a duração do curso <strong> ${du}</strong> anos.`

    
    
    }  
    
}