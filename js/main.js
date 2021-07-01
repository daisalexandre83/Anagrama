var conta =0;
$("#btn_accion").click(function(){
    $("#lstDados").html('');
    conta =0;
    permuta('',$('#txt_anagram').val());
});

function permuta(cad_I,cad_D){
    if(cad_D.length == 1){
        $("#lstDados").append("<tr><th>"+
        (++conta) +"</th><td>" + cad_I + cad_D +
        "</td></tr>");
        return;
    }
    for (var i =0; i < cad_D.length ; i++){
        permuta (cad_I + cad_D.charAt(i),
        cad_D.replace(cad_D.charAt(i),""));
    }
    return;
}