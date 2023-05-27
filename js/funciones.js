function calcular()
{
    var cantidad=document.getElementById("canti").value;
    var categoria=document.getElementById("cate").value;
    var result=0;

    result=cantidad*categoria
    
    document.getElementById("total").value="El total a pagar es: $ "+result;

}

function eliminar()
{
    document.getElementById("canti").value=0
    document.getElementById("cate").value=0
    document.getElementById("total").value=0
}