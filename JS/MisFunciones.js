

function completarUser(){
    $id('email').value="User";
    $id('pass').value="1234";
}
function completarAdmin(){
    $id('email').value="Admin";
    $id('pass').value="4321";
}


function elUsuarioExiste(){

    var funcionAjax=$.ajax({
    url:"http://localhost:8080/TP/nexo.php",
    type:"post",
    data:{"queHacer":"verificarExistencia","email":$id('email').value,"pass" :$id('pass').value}
    }).then(function(retorno){
        alert(retorno.response);
    }).catch(function(retorno){	
        console.log("retorno failed");
        console.log(retorno);
    });	
}

function $id(id)
{
    return document.getElementById(id);

}