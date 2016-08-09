/**
 * Created by williamd on 8/08/16.
 */
function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'colombia-json.json', true); // Reemplaza colombia-json.json con el nombre que le hayas puesto
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function init() {
    loadJSON(function(response) {
        // Parse JSON string into object
        var JSONFinal = JSON.parse(response);
        
    });
}