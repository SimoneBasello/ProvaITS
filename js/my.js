$(document).ready(() =>{
    $("#btn").click(myfun)
})

function myfun(){
    testo = $("#test").val()
    numero = $("#number").val()

    alert(testo + "-----" + numero)
}