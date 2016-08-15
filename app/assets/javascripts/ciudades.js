/**
 * Created by williamd on 8/08/16.
 */
function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', "http://"+window.location.host +'/colombia.json', true); // Reemplaza colombia-json.json con el nombre que le hayas puesto
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function init(obj_select) {
    loadJSON(function(response) {
        // Parse JSON string into object
        var JSONFinal = JSON.parse(response);
        $.each(JSONFinal,function(index, value){
            $(obj_select).append('<option>'+value.departamento+'</option>');
        });
    });
}

function updateCities(){
    var departamento = $("#event_departamento option:selected").text();
    Json(departamento);
}
// accion del evento al presionar los departamentos
$(document).ready(function () {
    $("#event_departamento").one('mousedown',function () {
        console.log("presiono 1");
        init(this);
    });
    $("#event_departamento").change(function () {
        updateCities();
    });
});
//

function updateCities2(ciudades){
    $("#event_lugar").html('');
    $.each(ciudades,function(index, value){
        $("#event_lugar").append('<option>'+value+'</option>')
    });
}

// accion del evento al presionar las ciudades en la vista edit
    $( "#event_lugar" ).one('mousedown',function() {
        var aux_depar= $("#event_departamento").val();
        console.log(aux_depar);
        if (aux_depar == null) {

        }else{
            Json(aux_depar);            
            
        }



    });

function Json(aux_departamento) {
    loadJSON(function(response) {
        // Parse JSON string into object
        var ciudades = [];
        var JSONFinal = JSON.parse(response);
        $.each(JSONFinal,function(index, value){
            if(value.departamento == aux_departamento){
                ciudades = value.ciudades;
                return;
            }
        });
        console.log(ciudades);
        updateCities2(ciudades);
    });
}